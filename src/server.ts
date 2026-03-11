import express from 'express';
import cors from 'cors';
import { auth } from './lib/auth';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'https://cateringdistrict.com.au'],
    credentials: true,
}));

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import { transactionRouter } from './api/routes/transactions';
import { categoryRouter } from './api/routes/categories';

// Better Auth API routes handling
app.all("/api/auth/*", (req, res, next) => {
    // Forward to better-auth
    // @ts-ignore - Better auth Express adapter
    auth.handler(req, res, next);
});

// App API routes
app.use('/api/transactions', transactionRouter);
app.use('/api/categories', categoryRouter);

// Hello world endpoint for testing
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running via Proxy' });
});

// Serve the frontend static files
const staticPath = path.resolve(__dirname, '../dist');
app.use(express.static(staticPath));

// Catch-all route to serve the React app for non-API requests
app.get('*', (req, res) => {
    if (!req.path.startsWith('/api')) {
        res.sendFile(path.resolve(staticPath, 'index.html'));
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Express Backend started on port ${PORT}`);
});
