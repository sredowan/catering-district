import express from 'express';
import { db } from '../../db/index.js';
import { bookings } from '../../db/schema.js';
import { eq, desc } from 'drizzle-orm';
import { sendEmail } from '../../lib/email.js';
import {
    createAdminLeadNotificationEmail,
    createBookingClientEmail,
    createAdminBookingManualReplyEmail,
} from '../../lib/emailTemplates.js';
import { randomUUID } from 'crypto';
import { requireAuth } from '../middleware/requireAuth.js';

export const bookingRouter = express.Router();

const TARGET_EMAIL = 'contact@cateringdistrict.com.au';

bookingRouter.post('/', async (req, res) => {
    try {
        const { name, email, phone, date, time, guests, type, specialReqs, agreedToUpdates, agreedToTerms } = req.body;

        const bookingId = randomUUID();

        await db.insert(bookings).values({
            id: bookingId,
            name,
            email,
            phone: phone || null,
            date,
            time,
            guests: guests.toString(),
            type,
            specialReqs: specialReqs ? JSON.stringify(specialReqs) : null,
            agreedToUpdates: agreedToUpdates ? 'true' : 'false',
            agreedToTerms: agreedToTerms ? 'true' : 'false',
            status: 'pending'
        });

        // Parse special reqs properly for email
        let specialReqsText = 'None';
        if (specialReqs) {
            const reqsObj = typeof specialReqs === 'string' ? JSON.parse(specialReqs) : specialReqs;
            const activeReqs = Object.keys(reqsObj).filter(k => reqsObj[k]);
            if (activeReqs.length > 0) {
                specialReqsText = activeReqs.join(', ');
            }
        }

        // 1. Send Branded Lead Notification to Admin (contact@cateringdistrict.com.au)
        const adminEmail = createAdminLeadNotificationEmail({
            sourceType: 'Table / Event Booking',
            name: name || 'Prospective Guest',
            email: email || 'No email provided',
            phone,
            date,
            time,
            guests,
            diningType: type,
            specialReqs: specialReqsText,
            message: `Agreed to marketing updates: ${agreedToUpdates ? 'Yes' : 'No'} | Agreed to terms: ${agreedToTerms ? 'Yes' : 'No'}`,
        });

        await sendEmail({
            to: TARGET_EMAIL,
            subject: adminEmail.subject,
            html: adminEmail.html,
            replyTo: email || TARGET_EMAIL,
        });

        // 2. Send Branded Auto-Reply to Client
        if (email && email.includes('@')) {
            try {
                const clientEmail = createBookingClientEmail({
                    name: name || 'Valued Guest',
                    email,
                    phone,
                    date,
                    time,
                    guests,
                    type,
                    specialReqs: specialReqsText,
                });

                await sendEmail({
                    to: email,
                    subject: clientEmail.subject,
                    html: clientEmail.html,
                    replyTo: TARGET_EMAIL,
                });
            } catch (autoReplyErr) {
                console.error('Failed to dispatch booking client auto-reply email:', autoReplyErr);
            }
        }

        res.status(201).json({ success: true, message: 'Booking submitted successfully' });
    } catch (error) {
        console.error('Error submitting booking:', error);
        res.status(500).json({ success: false, error: 'Failed to submit booking' });
    }
});

bookingRouter.get('/', requireAuth, async (req, res) => {
    try {
        const allBookings = await db.select().from(bookings).orderBy(desc(bookings.createdAt));
        res.json({ success: true, bookings: allBookings });
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch bookings' });
    }
});

bookingRouter.post('/:id/reply', requireAuth, async (req, res) => {
    try {
        const { id } = req.params;
        const { replyMessage } = req.body;

        const [booking] = await db.select().from(bookings).where(eq(bookings.id, id));

        if (!booking) {
            return res.status(404).json({ success: false, error: 'Booking not found' });
        }

        // Send branded reply email to user
        const brandedReply = createAdminBookingManualReplyEmail({
            clientName: booking.name,
            replyMessage,
        });

        await sendEmail({
            to: booking.email,
            subject: brandedReply.subject,
            html: brandedReply.html,
            replyTo: TARGET_EMAIL,
        });

        // Update booking status
        await db.update(bookings).set({ status: 'replied' }).where(eq(bookings.id, id));

        res.json({ success: true, message: 'Reply sent successfully' });
    } catch (error) {
        console.error('Error replying to booking:', error);
        res.status(500).json({ success: false, error: 'Failed to send reply' });
    }
});
