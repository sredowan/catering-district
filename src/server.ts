// Must run before any module that reads process.env at import time
// (db/index.ts and lib/auth.ts both do).
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { auth } from './lib/auth.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Behind Hostinger/Passenger — needed for req.protocol to reflect the original scheme.
app.set('trust proxy', true);

app.use(cors({
    origin: ['http://localhost:3000', 'https://cateringdistrict.com.au'],
    credentials: true,
}));

const CANONICAL_HOST = 'cateringdistrict.com.au';

/**
 * Canonicalisation (SEO_EXECUTION_PLAN.md §30, §143-144):
 *   http  -> https
 *   www   -> apex
 *   /path/ -> /path   (no trailing slash, root excepted)
 * One 301 per request; skipped for /api and for local development.
 */
app.use((req, res, next) => {
    const host = (req.headers.host || '').toLowerCase().split(':')[0];
    const isLocal = host === 'localhost' || host === '127.0.0.1' || host.startsWith('192.168.');

    if (!isLocal && !req.path.startsWith('/api')) {
        const needsHttps = req.protocol !== 'https';
        const needsApex = host === `www.${CANONICAL_HOST}`;
        const needsTrimmedSlash = req.path.length > 1 && req.path.endsWith('/');

        if (needsHttps || needsApex || needsTrimmedSlash) {
            const cleanPath = needsTrimmedSlash ? req.path.replace(/\/+$/, '') : req.path;
            const query = req.originalUrl.slice(req.path.length); // preserve ?a=b#c
            return res.redirect(301, `https://${CANONICAL_HOST}${cleanPath}${query}`);
        }
    }

    next();
});

// Admin must never be indexed (SEO_EXECUTION_PLAN.md §146).
app.use('/admin', (_req, res, next) => {
    res.setHeader('X-Robots-Tag', 'noindex, nofollow');
    next();
});

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import { transactionRouter } from './api/routes/transactions.js';
import { categoryRouter } from './api/routes/categories.js';
import { bookingRouter } from './api/routes/bookings.js';

// Better Auth API routes handling
app.all("/api/auth/*", (req, res, next) => {
    // Forward to better-auth
    // @ts-ignore - Better auth Express adapter
    auth.handler(req, res, next);
});

// App API routes
app.use('/api/transactions', transactionRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/bookings', bookingRouter);

// Hello world endpoint for testing
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running via Proxy' });
});

// Serve the frontend static files.
// redirect:false keeps express.static from bouncing /about -> /about/, which would
// fight the trailing-slash redirect above and loop.
const staticPath = path.resolve(__dirname, '../dist');
app.use(express.static(staticPath, { redirect: false, index: false }));

/**
 * Serve prerendered per-route HTML, and return a real 404 for anything else
 * (SEO_EXECUTION_PLAN.md §29, §146). Previously every unknown URL returned the
 * homepage with HTTP 200, which lets search engines index infinite soft-404s.
 */
app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
        return res.status(404).json({ error: 'Not found' });
    }

    // Admin is a client-rendered SPA route, never prerendered.
    if (req.path.startsWith('/admin')) {
        return res.sendFile(path.resolve(staticPath, 'index.html'));
    }

    const relative = req.path === '/' ? 'index.html' : path.join(req.path, 'index.html');
    const candidate = path.resolve(staticPath, '.' + path.sep + relative);

    // Guard against path traversal before touching the filesystem.
    if (candidate.startsWith(staticPath) && fs.existsSync(candidate)) {
        return res.sendFile(candidate);
    }

    // Unknown page: real 404 status, SPA shell renders the NotFound route.
    res.status(404).sendFile(path.resolve(staticPath, 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Express Backend started on port ${PORT}`);
});
