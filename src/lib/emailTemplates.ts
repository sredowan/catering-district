/**
 * Catering District - Branded Email Template Generator
 * Produces elegant, responsive, cross-client HTML emails with official Catering District branding.
 */

const BRAND = {
    name: 'Catering District',
    tagline: 'NSW Club Catering & Contract Hospitality',
    primaryColor: '#0f2340',      // Midnight Navy
    secondaryColor: '#19355e',    // Royal Navy
    accentGold: '#ffda8d',        // Light Warm Gold
    deepGold: '#64620B',          // Antique Gold
    bgColor: '#f4f6f9',
    cardBg: '#ffffff',
    textColor: '#2d3748',
    phone: '0432 591 795',
    email: 'contact@cateringdistrict.com.au',
    address: '31 George Street, Clyde NSW 2142, Australia',
    website: 'https://cateringdistrict.com.au',
};

/**
 * Shared email wrapper with Catering District executive header and footer
 */
function emailWrapper({
    previewText,
    badgeText,
    contentHtml,
}: {
    previewText: string;
    badgeText?: string;
    contentHtml: string;
}): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${BRAND.name}</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style>
        body { margin: 0; padding: 0; background-color: ${BRAND.bgColor}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
        table { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { border: 0; outline: none; text-decoration: none; }
        a { color: ${BRAND.secondaryColor}; }
    </style>
</head>
<body style="margin: 0; padding: 20px 0; background-color: ${BRAND.bgColor};">
    <!-- Preview Text (Hidden in body, visible in inbox list) -->
    <div style="display: none; max-height: 0px; overflow: hidden; mso-hide: all;">
        ${previewText}
        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td align="center" style="padding: 10px 15px;">
                <table role="presentation" width="100%" style="max-width: 620px; background-color: ${BRAND.cardBg}; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(15, 35, 64, 0.08); border: 1px solid #e2e8f0;" cellpadding="0" cellspacing="0" border="0">

                    <!-- Header -->
                    <tr>
                        <td style="background-color: ${BRAND.primaryColor}; border-top: 4px solid ${BRAND.accentGold}; padding: 32px 30px; text-align: center;">
                            <h1 style="margin: 0; font-family: 'Georgia', serif; font-size: 26px; font-weight: 400; letter-spacing: 2px; text-transform: uppercase; color: #ffffff;">
                                ${BRAND.name}
                            </h1>
                            <p style="margin: 6px 0 0 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; color: ${BRAND.accentGold};">
                                ${BRAND.tagline}
                            </p>
                            ${badgeText ? `
                            <div style="margin-top: 14px;">
                                <span style="display: inline-block; padding: 4px 14px; background-color: rgba(255, 255, 255, 0.12); border: 1px solid rgba(255, 218, 141, 0.3); border-radius: 20px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #ffffff;">
                                    ${badgeText}
                                </span>
                            </div>` : ''}
                        </td>
                    </tr>

                    <!-- Body Content -->
                    <tr>
                        <td style="padding: 36px 32px 30px 32px; color: ${BRAND.textColor}; font-size: 15px; line-height: 1.65;">
                            ${contentHtml}
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #fafbfc; border-top: 1px solid #e2e8f0; padding: 26px 30px; text-align: center; color: #64748b; font-size: 12px; line-height: 1.6;">
                            <p style="margin: 0 0 8px 0; font-weight: 600; color: ${BRAND.secondaryColor}; font-size: 13px;">
                                ${BRAND.name} Pty Ltd
                            </p>
                            <p style="margin: 0 0 12px 0;">
                                31 George Street, Clyde NSW 2142, Australia<br>
                                Phone: <a href="tel:${BRAND.phone.replace(/\s+/g, '')}" style="color: ${BRAND.secondaryColor}; text-decoration: none; font-weight: 600;">${BRAND.phone}</a> &nbsp;|&nbsp;
                                Email: <a href="mailto:${BRAND.email}" style="color: ${BRAND.secondaryColor}; text-decoration: none; font-weight: 600;">${BRAND.email}</a>
                            </p>
                            <p style="margin: 0 0 14px 0; font-size: 11px; color: #94a3b8;">
                                19+ Years Experience &bull; Certified HACCP Food Safety Auditor &bull; Registered NSW Commercial Food Business
                            </p>
                            <div style="font-size: 11px; color: #94a3b8; border-top: 1px solid #edf2f7; padding-top: 12px;">
                                &copy; ${new Date().getFullYear()} ${BRAND.name} Pty Ltd. All rights reserved. &bull; <a href="${BRAND.website}" style="color: #64748b; text-decoration: underline;">cateringdistrict.com.au</a>
                            </div>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. CLIENT AUTO-REPLY: General Website Enquiry (from /contact)
// ─────────────────────────────────────────────────────────────────────────────
export function createGeneralEnquiryClientEmail(data: {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message?: string;
}): { subject: string; html: string } {
    const firstName = data.name ? data.name.split(' ')[0] : 'there';

    const contentHtml = `
        <p style="margin: 0 0 16px 0; font-size: 16px;">
            Dear <strong>${data.name || 'Valued Client'}</strong>,
        </p>

        <p style="margin: 0 0 16px 0;">
            Thank you for reaching out to <strong>Catering District</strong>. We have safely received your enquiry and our executive management team is reviewing your details.
        </p>

        <p style="margin: 0 0 20px 0;">
            Whether you are exploring club catering partnerships, bistro restaurant management, or bespoke event dining, we provide hands-on leadership backed by 19+ years of commercial kitchen excellence and strict regulatory compliance.
        </p>

        <!-- Summary Box -->
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid ${BRAND.deepGold}; border-radius: 6px; padding: 18px 20px; margin-bottom: 24px;">
            <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: ${BRAND.secondaryColor};">
                Summary of Your Enquiry
            </p>
            <table role="presentation" width="100%" style="font-size: 14px; line-height: 1.6;">
                <tr>
                    <td style="padding: 4px 0; width: 130px; color: #64748b; font-weight: 500;">Contact:</td>
                    <td style="padding: 4px 0; color: ${BRAND.secondaryColor}; font-weight: 600;">${data.name || 'Not specified'}</td>
                </tr>
                <tr>
                    <td style="padding: 4px 0; color: #64748b; font-weight: 500;">Email:</td>
                    <td style="padding: 4px 0; color: ${BRAND.secondaryColor};">${data.email}</td>
                </tr>
                ${data.phone ? `
                <tr>
                    <td style="padding: 4px 0; color: #64748b; font-weight: 500;">Phone:</td>
                    <td style="padding: 4px 0; color: ${BRAND.secondaryColor};">${data.phone}</td>
                </tr>` : ''}
                ${data.subject ? `
                <tr>
                    <td style="padding: 4px 0; color: #64748b; font-weight: 500;">Subject:</td>
                    <td style="padding: 4px 0; color: ${BRAND.secondaryColor};"><strong>${data.subject}</strong></td>
                </tr>` : ''}
                ${data.message ? `
                <tr>
                    <td style="padding: 6px 0 0 0; color: #64748b; font-weight: 500; vertical-align: top;">Message:</td>
                    <td style="padding: 6px 0 0 0; color: #334155; white-space: pre-wrap;">${data.message}</td>
                </tr>` : ''}
            </table>
        </div>

        <!-- Next Steps -->
        <h3 style="margin: 0 0 10px 0; font-size: 15px; color: ${BRAND.secondaryColor}; text-transform: uppercase; letter-spacing: 1px;">
            What Happens Next
        </h3>
        <ul style="margin: 0 0 24px 0; padding-left: 20px; color: #334155;">
            <li style="margin-bottom: 8px;">
                <strong>Prompt Review:</strong> Maz Islam, JP and our senior operations directors will review your scope of requirements.
            </li>
            <li style="margin-bottom: 8px;">
                <strong>Personal Response within 24 Hours:</strong> We will be in touch via phone or email to discuss how we can best support your venue.
            </li>
            <li>
                <strong>No-Obligation Consultation:</strong> We are always happy to schedule an in-person venue walkthrough or executive board briefing.
            </li>
        </ul>

        <!-- Direct Line Callout -->
        <div style="background-color: #fff9e6; border: 1px solid #ffe8b3; border-radius: 8px; padding: 16px 20px; margin-bottom: 26px; text-align: center;">
            <p style="margin: 0; font-size: 14px; color: #78350f;">
                <strong>Urgent enquiry?</strong> You can contact Maz Islam directly on
                <a href="tel:${BRAND.phone.replace(/\s+/g, '')}" style="color: ${BRAND.secondaryColor}; font-weight: 700; text-decoration: underline;">
                    ${BRAND.phone}
                </a> or reply directly to this email.
            </p>
        </div>

        <p style="margin: 0 0 4px 0; color: #64748b; font-size: 14px;">Warm regards,</p>
        <p style="margin: 0; font-size: 16px; font-weight: 700; color: ${BRAND.secondaryColor};">
            Maz Islam, JP
        </p>
        <p style="margin: 2px 0 0 0; font-size: 13px; color: #64748b;">
            Founder &amp; Managing Director &bull; Certified HACCP Food Safety Auditor<br>
            <strong>Catering District Pty Ltd</strong>
        </p>
    `;

    return {
        subject: `Thank you for contacting Catering District | Enquiry Confirmation`,
        html: emailWrapper({
            previewText: `Thank you ${firstName}, we have received your enquiry and will respond within 24 hours.`,
            badgeText: 'Enquiry Received',
            contentHtml,
        }),
    };
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. CLIENT AUTO-REPLY: Formal Tender & EOI Brief (from /tenders-eoi)
// ─────────────────────────────────────────────────────────────────────────────
export function createTenderEoiClientEmail(data: {
    clubName?: string;
    name: string;
    email: string;
    phone?: string;
    tenderClosingDate?: string;
    message?: string;
}): { subject: string; html: string } {
    const club = data.clubName || 'your registered club / venue';

    const contentHtml = `
        <p style="margin: 0 0 16px 0; font-size: 16px;">
            Dear <strong>${data.name || 'Executive Committee'}</strong>,
        </p>

        <p style="margin: 0 0 16px 0;">
            Thank you for including <strong>Catering District</strong> in your procurement process for <strong>${club}</strong>. We confirm safe receipt of your tender / Expression of Interest (EOI) documentation.
        </p>

        <p style="margin: 0 0 20px 0;">
            Our Managing Director, <strong>Maz Islam, JP</strong> (Certified HACCP Food Safety Auditor, 19+ years club catering executive), personally oversees all commercial feasibility modeling, board presentations, and tender submissions.
        </p>

        <!-- Summary Box -->
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid ${BRAND.deepGold}; border-radius: 6px; padding: 18px 20px; margin-bottom: 24px;">
            <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: ${BRAND.secondaryColor};">
                Procurement Desk Submission Record
            </p>
            <table role="presentation" width="100%" style="font-size: 14px; line-height: 1.6;">
                <tr>
                    <td style="padding: 4px 0; width: 160px; color: #64748b; font-weight: 500;">Club / Venue:</td>
                    <td style="padding: 4px 0; color: ${BRAND.secondaryColor}; font-weight: 700;">${club}</td>
                </tr>
                <tr>
                    <td style="padding: 4px 0; color: #64748b; font-weight: 500;">Procurement Contact:</td>
                    <td style="padding: 4px 0; color: ${BRAND.secondaryColor}; font-weight: 600;">${data.name}</td>
                </tr>
                <tr>
                    <td style="padding: 4px 0; color: #64748b; font-weight: 500;">Official Email:</td>
                    <td style="padding: 4px 0; color: ${BRAND.secondaryColor};">${data.email}</td>
                </tr>
                ${data.phone ? `
                <tr>
                    <td style="padding: 4px 0; color: #64748b; font-weight: 500;">Contact Phone:</td>
                    <td style="padding: 4px 0; color: ${BRAND.secondaryColor};">${data.phone}</td>
                </tr>` : ''}
                ${data.tenderClosingDate ? `
                <tr>
                    <td style="padding: 4px 0; color: #64748b; font-weight: 500;">Tender Closing Date:</td>
                    <td style="padding: 4px 0; color: #b45309; font-weight: 600;">${data.tenderClosingDate}</td>
                </tr>` : ''}
                ${data.message ? `
                <tr>
                    <td style="padding: 6px 0 0 0; color: #64748b; font-weight: 500; vertical-align: top;">Brief Notes:</td>
                    <td style="padding: 6px 0 0 0; color: #334155; white-space: pre-wrap;">${data.message}</td>
                </tr>` : ''}
            </table>
        </div>

        <!-- Executive Commitments -->
        <h3 style="margin: 0 0 10px 0; font-size: 15px; color: ${BRAND.secondaryColor}; text-transform: uppercase; letter-spacing: 1px;">
            Executive Procurement Commitments
        </h3>
        <ul style="margin: 0 0 24px 0; padding-left: 20px; color: #334155;">
            <li style="margin-bottom: 8px;">
                <strong>Strict Confidentiality:</strong> All tender briefs, trading figures, and patron demographics are handled under strict non-disclosure. We are ready to countersign your Board's NDA immediately upon request.
            </li>
            <li style="margin-bottom: 8px;">
                <strong>Direct Contact Within 24 Hours:</strong> Maz Islam will reach out to confirm receipt and discuss scope specifications or site inspection arrangements.
            </li>
            <li style="margin-bottom: 8px;">
                <strong>Board-Ready Presentations:</strong> We provide full 3-year P&amp;L forecasting, Award MA000058 compliant rostering models, and certified HACCP food safety audit systems.
            </li>
            <li>
                <strong>Fast-Track Turnaround:</strong> For tight tender deadlines, our executive team can deliver comprehensive, board-ready submissions within <strong>72 hours</strong>.
            </li>
        </ul>

        <!-- Direct Line Callout -->
        <div style="background-color: #fff9e6; border: 1px solid #ffe8b3; border-radius: 8px; padding: 16px 20px; margin-bottom: 26px; text-align: center;">
            <p style="margin: 0; font-size: 14px; color: #78350f;">
                <strong>Direct Executive Desk:</strong> You may contact Maz Islam, JP directly on
                <a href="tel:${BRAND.phone.replace(/\s+/g, '')}" style="color: ${BRAND.secondaryColor}; font-weight: 700; text-decoration: underline;">
                    ${BRAND.phone}
                </a> or email <a href="mailto:${BRAND.email}" style="color: ${BRAND.secondaryColor}; font-weight: 700; text-decoration: underline;">${BRAND.email}</a>.
            </p>
        </div>

        <p style="margin: 0 0 4px 0; color: #64748b; font-size: 14px;">Sincerely,</p>
        <p style="margin: 0; font-size: 16px; font-weight: 700; color: ${BRAND.secondaryColor};">
            Maz Islam, JP
        </p>
        <p style="margin: 2px 0 0 0; font-size: 13px; color: #64748b;">
            Founder &amp; Managing Director &bull; Certified HACCP Food Safety Auditor<br>
            <strong>Catering District Pty Ltd &mdash; Executive Procurement Desk</strong>
        </p>
    `;

    return {
        subject: `Tender Brief Received: ${club} — Catering District Executive Procurement Desk`,
        html: emailWrapper({
            previewText: `Thank you, Catering District has received the tender brief for ${club}. Maz Islam will review within 24 hours.`,
            badgeText: 'Tender Brief Logged',
            contentHtml,
        }),
    };
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. CLIENT AUTO-REPLY: Reservation & Booking Request (from BookingModal)
// ─────────────────────────────────────────────────────────────────────────────
export function createBookingClientEmail(data: {
    name: string;
    email: string;
    phone?: string;
    date: string;
    time?: string;
    guests: string | number;
    type?: string;
    specialReqs?: string;
}): { subject: string; html: string } {
    const firstName = data.name ? data.name.split(' ')[0] : 'there';

    const contentHtml = `
        <p style="margin: 0 0 16px 0; font-size: 16px;">
            Dear <strong>${data.name || 'Valued Guest'}</strong>,
        </p>

        <p style="margin: 0 0 16px 0;">
            Thank you for choosing <strong>Catering District</strong> for your hospitality and catering requirements. We have received your booking request and our events team is reviewing availability.
        </p>

        <!-- Booking Details Card -->
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid ${BRAND.deepGold}; border-radius: 6px; padding: 18px 20px; margin-bottom: 24px;">
            <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: ${BRAND.secondaryColor};">
                Your Booking Request Details
            </p>
            <table role="presentation" width="100%" style="font-size: 14px; line-height: 1.6;">
                <tr>
                    <td style="padding: 4px 0; width: 140px; color: #64748b; font-weight: 500;">Guest Name:</td>
                    <td style="padding: 4px 0; color: ${BRAND.secondaryColor}; font-weight: 600;">${data.name}</td>
                </tr>
                <tr>
                    <td style="padding: 4px 0; color: #64748b; font-weight: 500;">Preferred Date:</td>
                    <td style="padding: 4px 0; color: ${BRAND.secondaryColor}; font-weight: 600;">${data.date}</td>
                </tr>
                ${data.time ? `
                <tr>
                    <td style="padding: 4px 0; color: #64748b; font-weight: 500;">Preferred Time:</td>
                    <td style="padding: 4px 0; color: ${BRAND.secondaryColor};">${data.time}</td>
                </tr>` : ''}
                <tr>
                    <td style="padding: 4px 0; color: #64748b; font-weight: 500;">Number of Guests:</td>
                    <td style="padding: 4px 0; color: ${BRAND.secondaryColor}; font-weight: 600;">${data.guests}</td>
                </tr>
                ${data.type ? `
                <tr>
                    <td style="padding: 4px 0; color: #64748b; font-weight: 500;">Dining / Event Type:</td>
                    <td style="padding: 4px 0; color: ${BRAND.secondaryColor}; text-transform: capitalize;">${data.type}</td>
                </tr>` : ''}
                ${data.phone ? `
                <tr>
                    <td style="padding: 4px 0; color: #64748b; font-weight: 500;">Contact Phone:</td>
                    <td style="padding: 4px 0; color: ${BRAND.secondaryColor};">${data.phone}</td>
                </tr>` : ''}
                ${data.specialReqs && data.specialReqs !== 'None' ? `
                <tr>
                    <td style="padding: 6px 0 0 0; color: #64748b; font-weight: 500; vertical-align: top;">Special Requests:</td>
                    <td style="padding: 6px 0 0 0; color: #334155;">${data.specialReqs}</td>
                </tr>` : ''}
            </table>
        </div>

        <!-- Next Steps -->
        <h3 style="margin: 0 0 10px 0; font-size: 15px; color: ${BRAND.secondaryColor}; text-transform: uppercase; letter-spacing: 1px;">
            Next Steps
        </h3>
        <p style="margin: 0 0 16px 0; color: #334155;">
            Our hospitality team will review kitchen capacity and venue scheduling for your requested date (<strong>${data.date}</strong>). We will get in touch with you within <strong>24 hours</strong> to confirm your booking and coordinate any special dietary requirements or bespoke menu preferences.
        </p>

        <!-- Direct Line Callout -->
        <div style="background-color: #fff9e6; border: 1px solid #ffe8b3; border-radius: 8px; padding: 16px 20px; margin-bottom: 26px; text-align: center;">
            <p style="margin: 0; font-size: 14px; color: #78350f;">
                <strong>Need to modify or make an urgent change?</strong> Contact our reservations desk on
                <a href="tel:${BRAND.phone.replace(/\s+/g, '')}" style="color: ${BRAND.secondaryColor}; font-weight: 700; text-decoration: underline;">
                    ${BRAND.phone}
                </a> or reply directly to this email.
            </p>
        </div>

        <p style="margin: 0 0 4px 0; color: #64748b; font-size: 14px;">Warm regards,</p>
        <p style="margin: 0; font-size: 16px; font-weight: 700; color: ${BRAND.secondaryColor};">
            The Catering District Hospitality Team
        </p>
        <p style="margin: 2px 0 0 0; font-size: 13px; color: #64748b;">
            Catering District Pty Ltd &bull; Sydney &amp; Regional NSW
        </p>
    `;

    return {
        subject: `Your Booking Request: ${data.date} | Catering District`,
        html: emailWrapper({
            previewText: `Thank you ${firstName}, we have received your booking request for ${data.date} (${data.guests} guests).`,
            badgeText: 'Booking Request Received',
            contentHtml,
        }),
    };
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. ADMIN NOTIFICATION: Dispatched to contact@cateringdistrict.com.au
// ─────────────────────────────────────────────────────────────────────────────
export function createAdminLeadNotificationEmail(data: {
    sourceType: 'General Website Enquiry' | 'Formal Tender / EOI Brief' | 'Table / Event Booking';
    name: string;
    email: string;
    phone?: string;
    clubName?: string;
    tenderClosingDate?: string;
    subject?: string;
    message?: string;
    date?: string;
    time?: string;
    guests?: string | number;
    diningType?: string;
    specialReqs?: string;
}): { subject: string; html: string } {
    let emailSubject = '';
    let badgeLabel: string = data.sourceType;

    if (data.sourceType === 'Formal Tender / EOI Brief') {
        emailSubject = `📋 [NEW TENDER / EOI] ${data.clubName || 'Club Venue'} - ${data.name}`;
    } else if (data.sourceType === 'Table / Event Booking') {
        emailSubject = `📅 [NEW BOOKING REQUEST] ${data.name} - ${data.date || 'Upcoming'} (${data.guests || 'N/A'} Guests)`;
    } else {
        emailSubject = `💬 [NEW WEBSITE ENQUIRY] ${data.name}${data.subject ? ` - ${data.subject}` : ''}`;
    }

    const contentHtml = `
        <div style="background-color: #f1f5f9; border-radius: 8px; padding: 12px 16px; margin-bottom: 22px;">
            <table role="presentation" width="100%">
                <tr>
                    <td style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: ${BRAND.secondaryColor};">
                        Lead Source: ${badgeLabel}
                    </td>
                    <td align="right" style="font-size: 11px; color: #64748b;">
                        ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })} AEDT
                    </td>
                </tr>
            </table>
        </div>

        <h2 style="margin: 0 0 16px 0; font-size: 18px; color: ${BRAND.secondaryColor}; font-family: 'Georgia', serif;">
            Lead Contact Information
        </h2>

        <table role="presentation" width="100%" style="font-size: 14px; line-height: 1.6; margin-bottom: 24px;">
            <tr>
                <td style="padding: 6px 0; width: 160px; color: #64748b; font-weight: 600;">Contact Name:</td>
                <td style="padding: 6px 0; color: ${BRAND.secondaryColor}; font-weight: 700; font-size: 15px;">${data.name || 'Not provided'}</td>
            </tr>
            <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Email Address:</td>
                <td style="padding: 6px 0;">
                    <a href="mailto:${data.email}" style="color: #2563eb; font-weight: 600; text-decoration: underline;">
                        ${data.email}
                    </a>
                </td>
            </tr>
            <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Phone Number:</td>
                <td style="padding: 6px 0;">
                    ${data.phone ? `<a href="tel:${data.phone.replace(/\s+/g, '')}" style="color: ${BRAND.secondaryColor}; font-weight: 600; text-decoration: none;">${data.phone}</a>` : '<span style="color: #94a3b8;">Not provided</span>'}
                </td>
            </tr>

            ${data.clubName ? `
            <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Club / Venue:</td>
                <td style="padding: 6px 0; color: ${BRAND.secondaryColor}; font-weight: 700; font-size: 15px;">${data.clubName}</td>
            </tr>` : ''}

            ${data.tenderClosingDate ? `
            <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Tender Closing Date:</td>
                <td style="padding: 6px 0; color: #b45309; font-weight: 700;">${data.tenderClosingDate}</td>
            </tr>` : ''}

            ${data.subject ? `
            <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Subject:</td>
                <td style="padding: 6px 0; color: ${BRAND.secondaryColor}; font-weight: 600;">${data.subject}</td>
            </tr>` : ''}

            ${data.date ? `
            <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Booking Date:</td>
                <td style="padding: 6px 0; color: ${BRAND.secondaryColor}; font-weight: 700;">${data.date}</td>
            </tr>` : ''}

            ${data.time ? `
            <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Preferred Time:</td>
                <td style="padding: 6px 0; color: ${BRAND.secondaryColor};">${data.time}</td>
            </tr>` : ''}

            ${data.guests ? `
            <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Guest Count:</td>
                <td style="padding: 6px 0; color: ${BRAND.secondaryColor}; font-weight: 600;">${data.guests}</td>
            </tr>` : ''}

            ${data.diningType ? `
            <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Event / Dining Type:</td>
                <td style="padding: 6px 0; color: ${BRAND.secondaryColor}; text-transform: capitalize;">${data.diningType}</td>
            </tr>` : ''}

            ${data.specialReqs ? `
            <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Special Requests:</td>
                <td style="padding: 6px 0; color: ${BRAND.secondaryColor};">${data.specialReqs}</td>
            </tr>` : ''}
        </table>

        ${data.message ? `
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid ${BRAND.deepGold}; border-radius: 6px; padding: 18px 20px; margin-bottom: 24px;">
            <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: ${BRAND.secondaryColor};">
                Message / Brief Notes:
            </p>
            <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
        </div>` : ''}

        <!-- Quick Reply Action -->
        <div style="text-align: center; margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <a href="mailto:${data.email}?subject=Re:%20${encodeURIComponent(emailSubject)}" style="display: inline-block; background-color: ${BRAND.secondaryColor}; color: #ffffff; padding: 12px 28px; border-radius: 6px; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; text-decoration: none;">
                Reply Directly to ${data.name || 'Lead'}
            </a>
            <p style="margin: 10px 0 0 0; font-size: 12px; color: #94a3b8;">
                Hitting "Reply" to this notification in your email client will address the message directly to <strong>${data.email}</strong>.
            </p>
        </div>
    `;

    return {
        subject: emailSubject,
        html: emailWrapper({
            previewText: `New lead from ${data.name} (${data.email}) - ${data.sourceType}`,
            badgeText: badgeLabel,
            contentHtml,
        }),
    };
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. ADMIN DASHBOARD: Manual Reply to Booking
// ─────────────────────────────────────────────────────────────────────────────
export function createAdminBookingManualReplyEmail(data: {
    clientName: string;
    replyMessage: string;
}): { subject: string; html: string } {
    const contentHtml = `
        <p style="margin: 0 0 16px 0; font-size: 16px;">
            Dear <strong>${data.clientName}</strong>,
        </p>

        <div style="margin: 20px 0; line-height: 1.7; font-size: 15px; color: #334155;">
            ${data.replyMessage.replace(/\n/g, '<br>')}
        </div>

        <div style="background-color: #fff9e6; border: 1px solid #ffe8b3; border-radius: 8px; padding: 14px 18px; margin: 24px 0; text-align: center;">
            <p style="margin: 0; font-size: 13px; color: #78350f;">
                Need further assistance? Reply directly to this email or call Maz Islam on
                <a href="tel:${BRAND.phone.replace(/\s+/g, '')}" style="color: ${BRAND.secondaryColor}; font-weight: 700; text-decoration: underline;">
                    ${BRAND.phone}
                </a>.
            </p>
        </div>

        <p style="margin: 0 0 4px 0; color: #64748b; font-size: 14px;">Warm regards,</p>
        <p style="margin: 0; font-size: 16px; font-weight: 700; color: ${BRAND.secondaryColor};">
            Maz Islam, JP
        </p>
        <p style="margin: 2px 0 0 0; font-size: 13px; color: #64748b;">
            Founder &amp; Managing Director<br>
            <strong>Catering District Pty Ltd</strong>
        </p>
    `;

    return {
        subject: 'Re: Your Booking Request with Catering District',
        html: emailWrapper({
            previewText: `Message from Catering District regarding your booking request`,
            badgeText: 'Booking Update',
            contentHtml,
        }),
    };
}
