# Deployment Guide (Hostinger Node.js App)

Same pattern as Intech Properties and Seventh Sky: one Node app serves both the
API and the built frontend. `dist/` is committed, so **no build runs on the server**.

## What the app needs

- `dist-server/server.js` — startup file (compiled from `src/server.ts`)
- `dist/` — built frontend. `server.js` serves it from `../dist`, so `dist/` and
  `dist-server/` must sit **side by side** in the app root.
- `package.json` + `package-lock.json` — for `npm install` on the server
- `.env` — DB, SMTP, and auth config (never committed)

## Step 1 — Build locally

```bash
npm run build        # build:ui -> dist/ , build:api -> dist-server/
```

If `build:api` fails on the server with `tsc: command not found`, that is expected:
`typescript` is a devDependency. Build locally instead — `dist-server/` is committed.

## Step 2 — Upload

Upload `deployment.zip` through hPanel → Files → File Manager and extract it into
the Node app's **Application Root** (currently `nodejs/`). Files must land directly
in that folder, not in a nested subfolder:

```
nodejs/
├── .env
├── dist/              ← frontend (index.html, assets, images)
├── dist-server/       ← backend (server.js is the startup file)
├── package.json
└── package-lock.json
```

## Step 3 — Node.js app settings (hPanel → Advanced → Node.js)

- Node version: **20**
- Application mode: **Production**
- Application root: the folder from step 2
- **Application startup file: `dist-server/server.js`**
- Click **Run NPM Install**, then **Restart**

Do **not** set `PORT` — Passenger injects it and `server.ts` reads `process.env.PORT`.

## Step 4 — Verify

- `https://cateringdistrict.com.au/api/health` → `{"status":"ok"}`
- `https://cateringdistrict.com.au/` → homepage
- `https://cateringdistrict.com.au/about/maz-islam` → founder profile
- Hard-refresh a deep link — the Express catch-all serves `index.html` for any
  non-`/api` path, so SPA routes work without `.htaccess` rewrites.

## Updating after a code change

```bash
npm run build
```
Re-upload `dist/` and `dist-server/`, then **Restart** the Node app.
Run **npm install** again only if `package.json` changed.

## Notes

- `node_modules` is never uploaded. `better-sqlite3` is a native addon and must be
  compiled on the server by **Run NPM Install**.
- If the site is instead served statically from `public_html` with the PHP proxy
  (`public/api/index.php` → `localhost:3001`), that setup needs a fixed
  `PORT=3001` in `.env`. Pick one approach; the single Node app above is simpler.
- `src/db/index.ts` still hardcodes production DB credentials as fallbacks. Once
  `.env` is confirmed working on the server, remove them and rotate the password.

## Troubleshooting

- **502 from `/api/*`** — Node app is not running. Check the Node app error log.
- **White screen** — `dist/` missing or nested one level too deep in the app root.
- **Admin login fails after redeploy** — `BETTER_AUTH_SECRET` changed. Keep it
  stable across deploys.
