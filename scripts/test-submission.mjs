// Test script to verify form submissions, lead dispatch, and customer auto-replies

const BASE_URL = 'http://localhost:3001';
const TEST_EMAIL = 'aarsayem002@gmail.com';

async function runTest() {
    console.log('--- 1. Testing General Enquiry (/api/enquiries) ---');
    try {
        const res = await fetch(`${BASE_URL}/api/enquiries`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Aar Sayem',
                email: TEST_EMAIL,
                phone: '0432 591 795',
                subject: 'Club Catering Partnership Inquiry (Verification Test)',
                message: 'Hello Catering District team, this is an automated test verifying lead dispatch to contact@cateringdistrict.com.au and customer auto-reply delivery.',
                type: 'General Contact / Enquiry'
            })
        });
        const data = await res.json();
        console.log('General Enquiry Response:', data);
    } catch (err) {
        console.error('General Enquiry Error:', err);
    }

    console.log('\n--- 2. Testing Formal Tender / EOI Brief (/api/enquiries) ---');
    try {
        const res = await fetch(`${BASE_URL}/api/enquiries`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                clubName: 'Parramatta Bowling Club',
                name: 'Aar Sayem',
                email: TEST_EMAIL,
                phone: '0432 591 795',
                tenderClosingDate: '2026-10-31',
                message: 'EOI for contract bistro operations, 250 seat venue, 7 days/week service. Requesting capability statement and confidential discussion.',
                type: 'Formal Tender / EOI Brief'
            })
        });
        const data = await res.json();
        console.log('Tender EOI Response:', data);
    } catch (err) {
        console.error('Tender EOI Error:', err);
    }

    console.log('\n--- 3. Testing Table / Event Reservation (/api/bookings) ---');
    try {
        const res = await fetch(`${BASE_URL}/api/bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Aar Sayem',
                email: TEST_EMAIL,
                phone: '0432 591 795',
                date: '2026-10-15',
                time: '18:30',
                guests: '8',
                type: 'dinner',
                specialReqs: {
                    highchair: false,
                    pram: false,
                    wheelchair: false,
                    business: true
                },
                agreedToUpdates: true,
                agreedToTerms: true
            })
        });
        const data = await res.json();
        console.log('Booking Response:', data);
    } catch (err) {
        console.error('Booking Error:', err);
    }
}

runTest();
