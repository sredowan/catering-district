var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db/index.js";
import * as schema from "../db/schema.js";
var rawBaseUrl = process.env.BETTER_AUTH_URL || process.env.FRONTEND_URL || "https://cateringdistrict.com.au";
var validBaseUrl = rawBaseUrl.startsWith('http') ? rawBaseUrl : "https://".concat(rawBaseUrl);
export var auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "mysql",
        schema: __assign({}, schema)
    }),
    emailAndPassword: {
        enabled: true
    },
    baseURL: validBaseUrl,
    trustedOrigins: [process.env.FRONTEND_URL || "http://localhost:3000", "https://cateringdistrict.com.au"]
});
