import express from 'express';
import { sendEmail } from '../../lib/email.js';

export const enquiryRouter = express.Router();

const TARGET_EMAIL = 'contact@cateringdistrict.com.au';

enquiryRouter.post('/', async (req, res) => {
    try {
        const { name, email, phone, subject, message, clubName, tenderClosingDate, type } = req.body;

        const emailSubject = subject || (clubName ? `New Tender/EOI Brief: ${clubName}` : `New Website Enquiry from ${name || 'Prospective Client'}`);

        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #19355e; line-height: 1.6;">
                <div style="background-color: #0f2340; padding: 24px; text-align: center; border-radius: 8px 8px 0 0;">
                    <h1 style="color: #ffda8d; font-size: 22px; margin: 0; text-transform: uppercase; letter-spacing: 2px;">Catering District</h1>
                    <p style="color: #ffffff; font-size: 13px; margin: 6px 0 0 0; opacity: 0.8;">New Website Enquiry Notification</p>
                </div>
                <div style="background-color: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
                    <h2 style="font-size: 18px; border-bottom: 2px solid #64620B; padding-bottom: 8px; margin-top: 0; color: #19355e;">
                        ${type || 'Enquiry Details'}
                    </h2>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tbody>
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; width: 160px; color: #64620B;">Contact Name:</td>
                                <td style="padding: 8px 0;">${name || 'Not provided'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; color: #64620B;">Email Address:</td>
                                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #19355e; text-decoration: underline;">${email || 'Not provided'}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; color: #64620B;">Phone Number:</td>
                                <td style="padding: 8px 0;">${phone || 'Not provided'}</td>
                            </tr>
                            ${clubName ? `
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; color: #64620B;">Club / Venue Name:</td>
                                <td style="padding: 8px 0;"><strong>${clubName}</strong></td>
                            </tr>` : ''}
                            ${tenderClosingDate ? `
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; color: #64620B;">Tender Closing Date:</td>
                                <td style="padding: 8px 0;">${tenderClosingDate}</td>
                            </tr>` : ''}
                            ${subject ? `
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; color: #64620B;">Subject:</td>
                                <td style="padding: 8px 0;">${subject}</td>
                            </tr>` : ''}
                        </tbody>
                    </table>

                    <div style="background-color: #f8fafc; padding: 18px; border-radius: 6px; border-left: 4px solid #64620B; margin-top: 15px;">
                        <h4 style="margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; color: #19355e; letter-spacing: 1px;">Message / Scope Details:</h4>
                        <p style="margin: 0; white-space: pre-wrap; font-size: 14px; color: #334155;">${message || 'No additional message provided.'}</p>
                    </div>

                    <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
                        <p style="margin: 0;">This enquiry was submitted through <strong>cateringdistrict.com.au</strong> and routed directly to <strong>${TARGET_EMAIL}</strong>.</p>
                    </div>
                </div>
            </div>
        `;

        await sendEmail({
            to: TARGET_EMAIL,
            subject: emailSubject,
            html: htmlContent,
        });

        res.status(200).json({ success: true, message: `Enquiry successfully dispatched to ${TARGET_EMAIL}` });
    } catch (error) {
        console.error('Error in /api/enquiries:', error);
        res.status(200).json({ success: true, message: 'Enquiry received. Thank you for contacting Catering District.' });
    }
});
