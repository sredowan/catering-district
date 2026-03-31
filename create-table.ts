import { db } from './src/db/index.js';
import { sql } from 'drizzle-orm';

async function main() {
  try {
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS booking (
        id VARCHAR(255) PRIMARY KEY,
        name TEXT NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone TEXT,
        date VARCHAR(255) NOT NULL,
        time TEXT NOT NULL,
        guests TEXT NOT NULL,
        type ENUM('lunch', 'dinner', 'other') NOT NULL,
        specialReqs TEXT,
        agreedToUpdates VARCHAR(10),
        agreedToTerms VARCHAR(10),
        status ENUM('pending', 'replied') DEFAULT 'pending' NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
      );
    `);
    console.log('Bookings table successfully created or already exists.');
  } catch (err) {
    console.error('Migration failed:', err);
  }
  process.exit(0);
}
main();
