import express from 'express';
import { auth } from '../../lib/auth.js';

/**
 * Gate for endpoints that expose customer data.
 *
 * Booking and enquiry records hold names, email addresses and phone numbers,
 * so every read path must be behind an authenticated admin session. Public
 * submission (POST) stays open — that is the website form.
 */
export const requireAuth = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        // @ts-ignore - Better Auth expects web Headers
        const session = await auth.api.getSession({
            headers: new Headers(req.headers as any),
        });

        if (!session || !session.user) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        // @ts-ignore
        req.user = session.user;
        next();
    } catch {
        return res.status(401).json({ error: 'Unauthorized' });
    }
};
