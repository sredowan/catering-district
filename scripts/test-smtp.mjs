import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

console.log('Testing SMTP connection for:', user);

async function testConfig(port, secure) {
    console.log(`\nTesting port ${port}, secure: ${secure}...`);
    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port,
        secure,
        auth: { user, pass },
        tls: {
            rejectUnauthorized: false
        }
    });

    try {
        await transporter.verify();
        console.log(`SUCCESS on port ${port}, secure: ${secure}!`);
        return true;
    } catch (err) {
        console.error(`FAILED on port ${port}:`, err.message);
        return false;
    }
}

async function run() {
    await testConfig(465, true);
    await testConfig(587, false);
}

run();
