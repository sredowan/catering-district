import express from 'express';
import { db } from '../../db/index.js';
import { bookings } from '../../db/schema.js';
import { eq, desc } from 'drizzle-orm';
import { sendEmail } from '../../lib/email.js';
import { randomUUID } from 'crypto';

export const bookingRouter = express.Router();

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

        // Send email to admin
        await sendEmail({
            to: process.env.SMTP_USER || 'contact@cateringdistrict.com.au',
            subject: `New Booking Request: ${name} - ${date}`,
            html: `
                <h2>New Booking Details</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
                <p><strong>Guests:</strong> ${guests}</p>
                <p><strong>Type:</strong> ${type}</p>
                <p><strong>Special Requirements:</strong> ${specialReqsText}</p>
                <p><strong>Agreed to Terms:</strong> ${agreedToTerms ? 'Yes' : 'No'}</p>
                <p><strong>Send Updates:</strong> ${agreedToUpdates ? 'Yes' : 'No'}</p>
            `,
        });

        res.status(201).json({ success: true, message: 'Booking submitted successfully' });
    } catch (error) {
        console.error('Error submitting booking:', error);
        res.status(500).json({ success: false, error: 'Failed to submit booking' });
    }
});

bookingRouter.get('/', async (req, res) => {
    try {
        const allBookings = await db.select().from(bookings).orderBy(desc(bookings.createdAt));
        res.json({ success: true, bookings: allBookings });
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch bookings' });
    }
});

bookingRouter.post('/:id/reply', async (req, res) => {
    try {
        const { id } = req.params;
        const { replyMessage } = req.body;

        const [booking] = await db.select().from(bookings).where(eq(bookings.id, id));

        if (!booking) {
            return res.status(404).json({ success: false, error: 'Booking not found' });
        }

        // Send reply email to user
        await sendEmail({
            to: booking.email,
            subject: 'Re: Your Booking Request with Catering District',
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <p style="font-size: 16px;">Hi ${booking.name},</p>
                    <div style="margin: 24px 0;">
                        <p style="font-size: 16px; line-height: 1.5;">${replyMessage.replace(/\n/g, '<br>')}</p>
                    </div>
                    <p style="font-size: 14px; color: #555;">
                        <br>
                        Best Regards,<br>
                        <strong>Catering District Team</strong><br>
                        <a href="https://cateringdistrict.com.au" style="color: #555;">cateringdistrict.com.au</a>
                    </p>
                </div>
            `
        });

        // Update booking status
        await db.update(bookings).set({ status: 'replied' }).where(eq(bookings.id, id));

        res.json({ success: true, message: 'Reply sent successfully' });
    } catch (error) {
        console.error('Error replying to booking:', error);
        res.status(500).json({ success: false, error: 'Failed to send reply' });
    }
});
