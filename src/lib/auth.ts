import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";
import * as schema from "../db/schema";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "mysql",
        schema: {
            ...schema
        }
    }),
    emailAndPassword: {
        enabled: true
    },
    trustedOrigins: [process.env.FRONTEND_URL || "http://localhost:3000", "https://cateringdistrict.com.au"]
});
