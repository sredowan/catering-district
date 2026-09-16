import express from 'express';
import { sendEmail } from '../../lib/email.js';
import {
    createAdminLeadNotificationEmail,
    createGeneralEnquiryClientEmail,
    createTenderEoiClientEmail,
} from '../../lib/emailTemplates.js';

export const enquiryRouter = express.Router();

const TARGET_EMAIL = 'contact@cateringdistrict.com.au';

enquiryRouter.post('/', async (req, res) => {
    try {
        const { name, email, phone, subject, message, clubName, tenderClosingDate, type } = req.body;

        const isTender = type === 'Formal Tender / EOI Brief' || !!clubName || !!tenderClosingDate;

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
