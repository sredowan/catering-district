import { sendEmail } from './src/lib/email.js';

async function test() {
    console.log("Testing SMTP Connection...");
    const result = await sendEmail({
        to: 'aarsayem002@gmail.com',
        subject: 'Catering District SMTP Test',
        html: '<p>This is a test email from the Catering District application.</p>'
    });
    
    if (result.success) {
        console.log("Email sent successfully! Message ID:", result.messageId);
    } else {
        console.error("Failed to send email. Error:", result.error);
    }
    process.exit(0);
}

test();
