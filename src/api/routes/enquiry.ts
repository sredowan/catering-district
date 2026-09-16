import express from 'express';
import { db } from '../../db/index.js';
import { enquiries } from '../../db/schema.js';
import { eq, desc } from 'drizzle-orm';
import { randomUUID } from 'crypto';
import { sendEmail } from '../../lib/email.js';
import { requireAuth } from '../middleware/requireAuth.js';
import {
    createAdminLeadNotificationEmail,
    createGeneralEnquiryClientEmail,
    createTenderEoiClientEmail,
} from '../../lib/emailTemplates.js';

export const enquiryRouter = express.Router();

const TARGET_EMAIL = 'contact@cateringdistrict.com.au';

enquiryRouter.post('/', async (req, res) => {
    try {
        const { name, email, phone, subject, message, clubName, tenderClosingDate, type, sourcePage } = req.body;

        const isTender = type === 'Formal Tender / EOI Brief' || !!clubName || !!tenderClosingDate;

        // Persist before sending. Email delivery is the unreliable step, so the
        // lead must be recorded first — a queued message that never lands must
        // not mean a lost enquiry.
        const enquiryId = randomUUID();
        let persisted = false;
        try {
            await db.insert(enquiries).values({
                id: enquiryId,
                type: isTender ? 'tender' : 'general',
                name: name || null,
                email: email || null,
                phone: phone || null,
                clubName: clubName || null,
                subject: subject || null,
                message: message || null,
                tenderClosingDate: tenderClosingDate || null,
                sourcePage: sourcePage || null,
                status: 'new',
                emailDelivered: 'false',
            });
            persisted = true;
        } catch (dbErr) {
            // Never fail the submission on a storage problem — still send the email.
            console.error('Failed to persist enquiry (continuing to email):', dbErr);
        }

        // 1. Generate Admin Lead Notification
        const adminEmail = createAdminLeadNotificationEmail({
            sourceType: isTender ? 'Formal Tender / EOI Brief' : 'General Website Enquiry',
            name: name || 'Prospective Client',
            email: email || 'No email provided',
            phone,
            clubName,
            tenderClosingDate,
            subject,
            message,
        });

        // 2. Dispatch Lead to contact@cateringdistrict.com.au
        await sendEmail({
            to: TARGET_EMAIL,
            subject: adminEmail.subject,
            html: adminEmail.html,
            replyTo: email || TARGET_EMAIL,
        });

        // 3. Dispatch Branded Auto-Reply to Client
        if (email && email.includes('@')) {
            try {
                const clientEmail = isTender
                    ? createTenderEoiClientEmail({
                          clubName,
                          name: name || 'Executive Committee',
                          email,
                          phone,
                          tenderClosingDate,
                          message,
                      })
                    : createGeneralEnquiryClientEmail({
                          name: name || 'Valued Client',
                          email,
                          phone,
                          subject,
                          message,
                      });

                await sendEmail({
                    to: email,
                    subject: clientEmail.subject,
                    html: clientEmail.html,
                    replyTo: TARGET_EMAIL,
                });
            } catch (autoReplyErr) {
                console.error('Failed to dispatch client auto-reply email:', autoReplyErr);
            }
        }

        if (persisted) {
            try {
                await db.update(enquiries).set({ emailDelivered: 'true' }).where(eq(enquiries.id, enquiryId));
            } catch (flagErr) {
                console.error('Failed to flag enquiry as emailed:', flagErr);
            }
        }

        res.status(200).json({
            success: true,
            message: `Enquiry successfully dispatched to ${TARGET_EMAIL}`,
        });
    } catch (error) {
        console.error('Error in /api/enquiries:', error);
        res.status(200).json({
            success: true,
            message: 'Enquiry received. Thank you for contacting Catering District.',
        });
    }
});

/** Admin: latest leads, newest first. Contains personal data — auth required. */
enquiryRouter.get('/', requireAuth, async (_req, res) => {
    try {
        const allEnquiries = await db.select().from(enquiries).orderBy(desc(enquiries.createdAt));
        res.json({ success: true, enquiries: allEnquiries });
    } catch (error) {
        console.error('Error fetching enquiries:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch enquiries' });
    }
});

/** Admin: mark a lead as read or replied. */
enquiryRouter.patch('/:id/status', requireAuth, async (req, res) => {
    try {
        const { status } = req.body;
        if (!['new', 'read', 'replied'].includes(status)) {
            return res.status(400).json({ success: false, error: 'Invalid status' });
        }
        await db.update(enquiries).set({ status }).where(eq(enquiries.id, req.params.id));
        res.json({ success: true });
    } catch (error) {
        console.error('Error updating enquiry status:', error);
        res.status(500).json({ success: false, error: 'Failed to update status' });
    }
});
