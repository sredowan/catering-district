# Hostinger Deployment Runbook

This file is the source of truth for humans and coding agents deploying Catering
District. Follow every section in order. Do not improvise around secrets, Git
history, build output, or production configuration.

## 1. Deployment Architecture

- Production repository: `https://github.com/sredowan/catering-district.git`
- Deployment branch: `main`
- Hosting platform: Hostinger Node.js application
- Node.js version: `20`
- Install command: `npm install`
- Build command: `npm run build` (legacy `npm run build:ui` is also safe)
- Startup file: `dist-server/server.js`
- Health endpoint: `https://cateringdistrict.com.au/api/health`
- Production site: `https://cateringdistrict.com.au`

Hostinger pulls `main`, installs dependencies, and runs `npm run build`. The build
creates both production targets:

- `dist/`: Vite frontend
- `dist-server/`: compiled Express server

The Express server serves prerendered public routes from `dist/`, handles all
`/api/*` routes, serves client-rendered admin routes, and returns a real HTTP 404
for unknown URLs.

## 2. Files That Must Be Committed

Commit source and deployment metadata only:

- `src/`
- `public/`
- `index.html`
- `package.json`
- `package-lock.json`
- `vite.config.ts`
- `tsconfig.json`
- Application configuration and documentation

Never commit:

- `.env` or any `.env.*` file
- Real passwords, API keys, auth secrets, or database credentials
- `node_modules/`
- `dist/`
- `dist-ssr/`
- `dist-server/`
- `deployment.zip`
- Logs, temporary files, or local editor state

`dist/`, `dist-ssr/`, `dist-server/`, and `node_modules/` are intentionally
ignored because Hostinger recreates them during deployment.

## 3. Hostinger Git Setup

In hPanel, open the Node.js application and configure:

1. Connect the GitHub repository `sredowan/catering-district`.
2. Select the `main` branch.
3. Enable automatic deployment after pushes when available.
4. Set Node.js to version `20`.
5. Set application mode to `Production`.
6. Set the install command to `npm install`.
7. Set the build command to `npm run build`. If the existing Hostinger application
   is fixed to `npm run build:ui`, that command now runs the same complete deployment
   build, including `dist-server/server.js`.
8. Set the startup file to `dist-server/server.js`.
9. Add all environment variables listed below.
10. Save the configuration and restart the application.

Do not set `PORT`. Hostinger Passenger injects `PORT` at runtime, and
`src/server.ts` reads it automatically.

## 4. Production Environment Variables

Configure these in the Hostinger Node.js application's environment-variable
settings. `.env.example` contains safe placeholders. Never paste production values
into Git, issues, pull requests, logs, or chat responses.

| Variable | Required | Production value or rule |
| --- | --- | --- |
| `NODE_ENV` | Yes | `production` |
| `DB_HOST` | Yes | Hostinger MySQL hostname |
| `DB_PORT` | Yes | Usually `3306` |
| `DB_USER` | Yes | Hostinger MySQL user |
| `DB_PASSWORD` | Yes | Hostinger MySQL password |
| `DB_NAME` | Yes | Hostinger MySQL database |
| `BETTER_AUTH_SECRET` | Yes | Stable random secret, minimum 32 bytes |
| `BETTER_AUTH_URL` | Yes | `https://cateringdistrict.com.au` |
| `FRONTEND_URL` | Yes | `https://cateringdistrict.com.au` |
| `SMTP_HOST` | Yes | `smtp.hostinger.com` |
| `SMTP_PORT` | Yes | `465` |
| `SMTP_USER` | Yes | Production mailbox address |
| `SMTP_PASS` | Yes | Production mailbox password |

Generate a new Better Auth secret only for first-time setup or an intentional
secret rotation:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"
```

Keep `BETTER_AUTH_SECRET` unchanged between normal deployments. Changing it can
invalidate existing sessions and break authentication.

### Agent Rules For Environment Files

1. Never open or print complete production environment files unless the user
   explicitly requests it.
2. Verify environment-variable presence without printing values.
3. Never stage `.env`, `.env.production.server`, or any other `.env.*` file.
4. Never invent production credentials.
5. If a required variable is missing in hPanel, stop and report its name only.
6. If a credential has appeared in Git history, tell the user to rotate it. Removing
   it from the latest commit does not remove it from old commits.

## 5. Pre-Deployment Git Checks

Run these before changing or committing anything:

```bash
git status --short --branch
git remote get-url origin
git branch --show-current
git log --oneline -10
```

Expected results:

- Remote is `https://github.com/sredowan/catering-district.git`.
- Deployment target is `main`.
- Existing unrelated user changes are left untouched.
- No environment file is staged.

Never use `git reset --hard`, force-push, or discard changes you did not create.

## 6. Install And Build Verification

Use the committed lockfile. For normal local verification:

```bash
npm install
npm run lint
npm run build
```

Successful `npm run build` must complete the full pipeline:

```text
frontend  -> Vite browser bundle           -> dist/
build:ssr -> Vite server-rendering bundle  -> dist-ssr/
sitemap   -> public and production sitemap -> public/sitemap.xml, dist/sitemap.xml
prerender -> static HTML for public routes -> dist/<route>/index.html
build:api -> TypeScript Express build      -> dist-server/
verify    -> required deployment artifacts -> pass or fail the build
```

The prerender step must report that all public routes include an H1, canonical
URL, and at least 100 words of indexable body copy.

The final deployment check must report:

```text
[deploy] Frontend, prerendered routes, and server startup file are ready.
```

Do not treat a frontend-only build as successful. Hostinger cannot start the
application unless `dist-server/server.js` exists.

For the closest simulation of Hostinger production, use a clean temporary Git
worktree and install production dependencies only:

```bash
git worktree add --detach ../catering-hostinger-build HEAD
cd ../catering-hostinger-build
npm ci --omit=dev
npm run lint
npm run build
```

Remove the temporary worktree after verification:

```bash
cd ../catering-district
git worktree remove --force ../catering-hostinger-build
git worktree prune
```

Do not commit the generated `dist/` or `dist-server/` directories.

## 7. Required Security Checks

Before committing, search the staged repository for known credentials, private
keys, and accidental environment files. At minimum, verify:

```bash
git status --short
git diff --check
git diff --cached --check
git ls-files -- .env .env.production.server
git ls-files -- node_modules dist dist-ssr dist-server
```

Expected results:

- Production environment files are not tracked.
- `node_modules/`, `dist/`, and `dist-server/` are not tracked.
- No whitespace errors are introduced.
- Database configuration reads credentials from `process.env` only.
- Frontend code does not embed server secrets.

If any real credential is found, do not push. Remove it, rotate it if exposed, and
re-run the checks.

## 8. Local Runtime Smoke Test

After a successful build, start `dist-server/server.js` with safe test environment
values and a temporary port. Do not point a smoke test at the production database.

Verify:

```text
GET http://127.0.0.1:<temporary-port>/api/health
```

Expected response:

```json
{"status":"ok","message":"Backend is running via Proxy"}
```

Stop the temporary server after the request. A smoke test must not send email,
create bookings, modify transactions, or write to a production database.

## 9. Review The Exact Deployment Diff

Before committing, inspect all intended changes:

```bash
git status --short
git diff
git diff --cached
git diff --cached --stat
git log --oneline -10
```

Stage files explicitly. Do not use `git add -A` when unrelated changes exist.

Use a concise commit message consistent with repository history, for example:

```bash
git commit -m "build: update Hostinger deployment"
```

## 10. Synchronize And Push

Fetch the latest deployment branch before pushing:

```bash
git fetch origin main
git status --short --branch
git log --oneline --decorate -5
git diff origin/main..HEAD --stat
```

If `origin/main` has new commits, integrate them without rewriting published
history. Resolve conflicts carefully and repeat all build checks.

Push only after the worktree is clean and verification passes:

```bash
git push origin main
```

Never force-push `main`.

Confirm the remote branch points to the expected commit:

```bash
git ls-remote origin refs/heads/main
git status --short --branch
```

## 11. Hostinger Deployment Process

After the push, Hostinger should:

1. Detect the new `main` commit.
2. Pull the repository.
3. Run `npm install` using `package-lock.json`.
4. Run `npm run build`.
5. Build the browser and SSR bundles, generate the sitemap, prerender public
   routes, and compile the Express server.
6. Create `dist/`, `dist-ssr/`, and `dist-server/`.
7. Start `dist-server/server.js` with the hPanel environment variables.
8. Route the domain to the Node.js application.

If automatic deployment is disabled, open the application in hPanel, deploy the
latest `main` commit, and restart the application manually.

## 12. Production Verification

Wait for the Hostinger build and restart to complete, then verify in this order:

1. Backend health:
   `https://cateringdistrict.com.au/api/health`
2. Homepage:
   `https://cateringdistrict.com.au/`
3. Founder profile:
   `https://cateringdistrict.com.au/about/maz-islam`
4. Contact page and booking form rendering.
5. Admin login page rendering.
6. A hard refresh on a deep link to confirm SPA fallback behavior.

Expected HTTP results:

- Health endpoint: `200` with `status: ok`
- Homepage: `200`
- Known public deep links: `200` with prerendered page HTML
- Unknown URLs: `404`
- Admin routes: `200` with `X-Robots-Tag: noindex, nofollow`
- Static assets: no missing JavaScript, CSS, image, or MIME-type errors

Check browser console and Hostinger application logs for runtime errors. Do not
submit real bookings or send test email without explicit user approval.

## 13. Troubleshooting

### Hostinger Build Fails

1. Confirm Node.js version is `20`.
2. Confirm install command is `npm install`.
3. Confirm build command is `npm run build`.
4. Confirm `package-lock.json` is committed.
5. Reproduce with `npm ci --omit=dev && npm run build` in a clean worktree.
6. Read the first build error, fix the root cause, and push a new commit.

### Application Returns 502

1. Confirm startup file is `dist-server/server.js`.
2. Confirm `npm run build` produced `dist-server/server.js`.
3. Check the build log contains the `build:api` and `[deploy]` success lines.
4. Confirm Hostinger runs `npm run build` or the supported `npm run build:ui`,
   not the frontend-only `npm run build:frontend`.
5. Check Hostinger application logs for a missing environment variable.
6. Confirm all variables from `.env.example` exist in hPanel.
7. Restart the Node.js application.

### Homepage Is Blank Or Assets Return 404

1. Confirm `npm run build` produced `dist/index.html` and `dist/assets/`.
2. Confirm `dist/` and `dist-server/` are side by side in the application root.
3. Confirm the app starts from `dist-server/server.js`.
4. Inspect browser network errors for the missing asset path.
5. Restart after a successful rebuild.

### Deep Links Return 404

1. Confirm traffic reaches the Node.js app, not a separate static `public_html`
   site.
2. Confirm `npm run prerender` generated `dist/<route>/index.html`.
3. Confirm the Express public-route handler remains after `express.static`.
4. Confirm the requested path is included in `PUBLIC_ROUTES` in `src/routes.ts`.

### Database Or Authentication Fails

1. Confirm all `DB_*` values are present in hPanel.
2. Confirm the database user has access to the configured database.
3. Confirm `BETTER_AUTH_URL` and `FRONTEND_URL` use HTTPS and the production domain.
4. Confirm `BETTER_AUTH_SECRET` is present and unchanged.
5. Do not print credential values in logs or chat.

### Booking Email Fails

1. Confirm `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, and `SMTP_PASS` exist.
2. Confirm port `465` uses a Hostinger mailbox credential.
3. Check Hostinger logs for the Nodemailer error without exposing credentials.
4. Test email delivery only with explicit user approval.

## 14. Rollback

Use a normal Git revert. Never reset or force-push the deployment branch.

```bash
git log --oneline -10
git revert <bad-commit-sha>
git push origin main
```

Hostinger will deploy the revert commit. After rollback, repeat all production
verification checks.

If the failure is caused only by an hPanel environment value, restore the previous
value and restart the app without changing Git.

## 15. Deployment Completion Report

Every agent must report:

- Commit SHA pushed to `main`
- Build command and result
- Type-check result
- Health-check result
- Homepage HTTP status
- Whether Hostinger deployment was automatic or manually triggered
- Any environment-variable names still missing, without values
- Any dependency or security warnings
- Any required follow-up, including credential rotation

A deployment is complete only when Git is pushed, Hostinger has built the commit,
the Node.js app is running, and production verification passes.
