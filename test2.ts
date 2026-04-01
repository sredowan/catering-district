import nodemailer from 'nodemailer';

async function test() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
            user: 'contact@cateringdistrict.com.au',
            pass: 'inf05172@CD',
        },
    });

    try {
        console.log("Testing Hostinger SMTP port 465...");
        const result = await transporter.sendMail({
            from: 'contact@cateringdistrict.com.au',
            to: 'aarsayem002@gmail.com',
            subject: 'Test',
            html: '<p>Test</p>'
        });
        console.log("Success on 465:", result);
    } catch(e) {
        console.error("Fail on 465:", e.message);
    }
}
test();
