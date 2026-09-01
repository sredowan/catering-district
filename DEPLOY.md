# Deployment Guide (Hostinger Git Deployment)

Hostinger deploys the `main` branch. One Node app serves both the API and the
built frontend. Hostinger installs dependencies and builds both targets on deploy.

## What the app needs

- `npm run build` creates `dist/` and `dist-server/` side by side.
- `dist-server/server.js` is the application startup file.
- Environment variables are configured in hPanel and are never committed.

## Step 1 — Connect Git

- Repository: `https://github.com/sredowan/catering-district`
- Branch: `main`
- Enable automatic deployment after pushes if available.

## Step 2 — Node.js app settings (hPanel → Advanced → Node.js)

- Node version: **20**
- Application mode: **Production**
- Install command: `npm install`
- Build command: `npm run build`
- **Application startup file: `dist-server/server.js`**
- Restart the app after each deployment.

Do **not** set `PORT` — Passenger injects it and `server.ts` reads `process.env.PORT`.

## Step 3 — Environment variables

Add every variable from `.env.example` to the Node.js app's hPanel environment
settings. Use production values, keep `BETTER_AUTH_SECRET` stable across deploys,
and never upload or commit `.env` files.

## Step 4 — Verify

- `https://cateringdistrict.com.au/api/health` → `{"status":"ok"}`
- `https://cateringdistrict.com.au/` → homepage
- `https://cateringdistrict.com.au/about/maz-islam` → founder profile
- Hard-refresh a deep link — the Express catch-all serves `index.html` for any
  non-`/api` path, so SPA routes work without `.htaccess` rewrites.

## Updating after a code change

Commit and push to `main`. Hostinger pulls the commit, runs `npm install`, runs
`npm run build`, and restarts the application.

## Notes

- `node_modules` is never committed. Hostinger installs native dependencies for
  its own Node.js runtime.
- If the site is instead served statically from `public_html` with the PHP proxy
  (`public/api/index.php` → `localhost:3001`), that setup needs a fixed
  `PORT=3001` in `.env`. Pick one approach; the single Node app above is simpler.
- Database, authentication, and SMTP credentials have no source-code fallbacks;
  missing variables stop startup with a clear error.

## Troubleshooting

- **502 from `/api/*`** — Node app is not running. Check the Node app error log.
- **White screen** — `dist/` missing or nested one level too deep in the app root.
- **Admin login fails after redeploy** — `BETTER_AUTH_SECRET` changed. Keep it
  stable across deploys.
