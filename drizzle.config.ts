import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
    schema: './src/db/schema.ts',
    out: './drizzle',
    dialect: 'mysql',
    dbCredentials: {
        host: process.env.DB_HOST || 'srv2045.hstgr.io',
        user: process.env.DB_USER || 'u632925822_cduser',
        password: process.env.DB_PASSWORD || 'Redowan173123@',
        database: process.env.DB_NAME || 'u632925822_cddb',
    },
});
