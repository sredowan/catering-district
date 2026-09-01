import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db/index.js";
import * as schema from "../db/schema.js";

function requiredEnv(name: string) {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
}

const rawBaseUrl = process.env.BETTER_AUTH_URL || process.env.FRONTEND_URL || "https://cateringdistrict.com.au";
const validBaseUrl = rawBaseUrl.startsWith('http') ? rawBaseUrl : `https://${rawBaseUrl}`;

export const auth = betterAuth({
    secret: requiredEnv('BETTER_AUTH_SECRET'),
    database: drizzleAdapter(db, {
        provider: "mysql",
        schema: {
            ...schema
        }
    }),
    emailAndPassword: {
        enabled: true
    },
    baseURL: validBaseUrl,
    trustedOrigins: [process.env.FRONTEND_URL || "http://localhost:3000", "https://cateringdistrict.com.au"]
});
