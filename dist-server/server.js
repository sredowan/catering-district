import express from 'express';
import cors from 'cors';
import { auth } from './lib/auth';
import path from 'path';
import { fileURLToPath } from 'url';
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = express();
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
app.all("/api/auth/*", function (req, res, next) {
    // Forward to better-auth
    // @ts-ignore - Better auth Express adapter
    auth.handler(req, res, next);
});
// App API routes
app.use('/api/transactions', transactionRouter);
app.use('/api/categories', categoryRouter);
// Hello world endpoint for testing
app.get('/api/health', function (req, res) {
    res.json({ status: 'ok', message: 'Backend is running via Proxy' });
});
// Serve the frontend static files
var staticPath = path.resolve(__dirname, '../dist');
app.use(express.static(staticPath));
// Catch-all route to serve the React app for non-API requests
app.get('*', function (req, res) {
    if (!req.path.startsWith('/api')) {
        res.sendFile(path.resolve(staticPath, 'index.html'));
    }
});
var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
    console.log("Express Backend started on port ".concat(PORT));
});
