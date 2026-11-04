---
name: catering-district
description: Working on the Catering District website (cateringdistrict.com.au) — run it locally, edit site copy within the content rules, change the enquiry/lead flow, and build + push to Hostinger. Use for any change to this repo, including "build and push", content edits, new pages, or the contact button/forms.
---

# Catering District website

React 19 + Vite + Tailwind v4 frontend, prerendered per route; Express API (`src/server.ts`) with Drizzle on MySQL, Nodemailer email, Better Auth admin. Deployed as a Hostinger Node.js app from `main`. `DEPLOY.md` is the source of truth for deployment — read it before any build/push.

## Run locally

Two processes (Vite proxies `/api` to 3001):

```bash
npm run dev:api   # Express API on :3001 (tsx watch)
npm run dev       # Vite on :3000
```

Run both in the background and wait for `Express Backend started on port 3001` and Vite's `Local:` line. `.env` holds real credentials — never print it; check variable *names* only.

**Never submit the contact, enquiry, tender or booking forms** (locally or live) without the user's OK — each submission emails contact@cateringdistrict.com.au and sends an auto-reply to the address entered.

## Where things live

| Area | File |
| --- | --- |
| Public routes (prerendered) | `src/routes.ts`, wrapped in `src/components/Layout.tsx` |
| Admin (not prerendered, no Layout) | `src/pages/admin/*`, routes in `src/App.tsx` |
| Nav, footer, floating contact button mount | `src/components/Layout.tsx` |
| Floating "Contact Now" button + quick lead modal | `src/components/ContactNowButton.tsx` |
| Default site copy (about, services) + localStorage cache reset | `src/context/SiteContext.tsx` |
| Per-page SEO + JSON-LD | `src/components/SEO.tsx` |
| Enquiry API (saves lead, then emails) | `src/api/routes/enquiry.ts` |
| Email templates (admin + auto-replies) | `src/lib/emailTemplates.ts` |

### Enquiry types

`POST /api/enquiries` persists the lead first, then emails. The `type` field drives classification:

- `'General Website Enquiry'` (Contact page) → general auto-reply.
- `'Formal Tender / EOI Brief'`, or any request with `clubName` / `tenderClosingDate` → tender auto-reply.
- `'Quick Contact'` (floating button: club name, contact name, phone, email) → **not** a tender even though it has `clubName`; admin email subject `📞 [QUICK CONTACT] <club> - <name>`, general auto-reply.

Adding a new lead source: give it its own `type`, extend `isTender` logic, and add the label to the `sourceType` union in `createAdminLeadNotificationEmail`.

### Floating contact button

Round icon button, bottom-right, public pages only. It samples the element behind itself (`isDarkBehind`, using background colour or first gradient stop) and turns white over dark sections (homepage hero, dark Services band, footer). A dismissible "Need club catering? Contact now" hint shows ~1.5s after each page landing, auto-hides at 8s; dismissal is remembered in `sessionStorage` (`contactHintDismissed`).

## Brand voice (from the 2026-11 brand brief)

Sound like an **experienced, owner-led hospitality business that genuinely cares** — not a large corporate operator. Readers (club CEOs, directors, Boards) should feel: *"These people understand club hospitality, have real experience, and will be personally committed to our venue."*

- **Tagline:** "Your Club. Our Commitment." **Positioning statement:** "Owner-led club catering, community hospitality and operational accountability."
- **Use:** owner-led, hands-on, personally involved, accessible; 19+ years, practical expertise; genuine commitment, trust, long-term partnerships; local connections, member-first, welcoming; accountability, consistency, food safety, reliable service; building something meaningful, growing together.
- **Swap:** "trusted by clubs" → "ready to build trusted partnerships"; "we manage/transform clubs" → "committed to helping clubs strengthen their hospitality"; "proven success" → "backed by 19+ years of Maz's experience"; "industry-leading" → "owner-led hospitality business built on experience and dedication"; "guaranteed profitability" → "a commercially focused approach".
- **Avoid** corporate jargon: transform, turnkey, maximise yields, velocity, institutional, executive team, premier, seamless/flawless, rapid-response.
- **Don't** keep calling the company new or small — confident without exaggerating the portfolio. Don't say "founded in 2026" in marketing copy.
- Maz's *own* track record is fine when attributed to him: Industry Placement Solutions (1,500+ students, 700+ placements, 300+ industry venues), Future Chefs (9B-compliant training kitchen, Parramatta), venues Moorebank Sports Club (with On Point Catering Solutions), Crossroads Hotel, EBP RSL.
- Homepage order: hero (large "Catering District", then "Owner-Led Club Catering. Personally Committed.", then CTAs "Explore a Partnership" + "Invite Us to Your EOI / Tender" — keep it this clean) → **Meet Maz** section → story ("Hospitality Is Personal to Us.").
- Site copy defaults live in `SiteContext.tsx` and are cached in each visitor's browser — **bump `CONTENT_VERSION`** whenever default copy changes.

Team: Maz Islam (Founder & Managing Director), Kimberly May Abing (Operations, Administration & Front of House Manager), Mitch Walton (external Hospitality Operations Consultant; MD of On Point Catering Solutions, 20+ yrs chef), Back of House team.

## Content rules (important)

Catering District is a young company — Catering District itself has no track record yet. When writing or editing copy:

- **No** stats or ratings (satisfaction %, ticket times, covers, ★ ratings, events/venues/guests counts, audit pass rates, margin yields).
- **No** guarantees or absolutes: "zero subsidies/losses/downtime", "guaranteed", "eliminate subsidies", "100% compliant", "risk-free".
- **No** "Certified HACCP Auditor" badges, "accredited", "proven", "premier", "leading provider", or "Award MA000058 compliant/mapped". Refer to "the Registered Clubs Award" without the code.
- Phrase outcomes as aims: "designed to reduce kitchen losses", "HACCP-based food safety plans", "audit preparation".
- Experience belongs to the founder: "our founder's 19+ years", not "our years of experience".
- Insight articles may explain industry facts (award penalty rates, Standard 3.2.2A) but must not make claims about Catering District.

### Founder facts (Maz Islam JP)

Match his resume. **19+ years** (confirmed by the user). Title: **Founder & Managing Director** (Future Chefs / IPS roles remain "Founder & Director"). Based in the Macarthur area. Roles: Catering District (2026–), Future Chefs Pty Ltd (2023–), Industry Placement Solutions (2020–2025), Relief Kitchen Manager at On Point Catering Solutions (2023–), Hospitality Manager at Jesmond Aged Care (2013–2022), Head Chef at Crossroads Hotel (2010–2013), Qantas Airline Catering. Qualifications (6): Advanced Diploma of Hospitality Management, Diploma of Quality Auditing, Certificate IV in Kitchen Management, Food Safety Supervisor (NSW), HACCP & Internal Food Safety Auditor, White Card. The auditor qualification appears **only** on the `/about/maz-islam` qualifications list and the Kitchen Compliance "What qualifications…" FAQ.

Before finishing a content change, re-scan:

```bash
grep -rn -i -E "certified haccp|food safety auditor|accredited|MA000058|zero subsid|guarantee|95%|4\.9|<15|500\+|premier|leading provider" src --include=*.tsx --include=*.ts | grep -v pages/admin
```

Expected hits are only the founder qualification entries above and unrelated CSS (`100%` widths).

## Build and push

Follow `DEPLOY.md` §5–10. In short:

1. `git status --short --branch`, confirm remote `sredowan/catering-district` and branch `main`. Leave unrelated files alone — **never stage `migrations/002_full_schema.sql`**, `.env*`, or `dist*`.
2. `npm run lint` then `npm run build`. It must end with `[prerender] 38 routes OK` (or the current count) and `[deploy] Frontend, prerendered routes, and server startup file are ready.`
3. Smoke test with **dummy** credentials so nothing touches production:
   ```bash
   PORT=4999 NODE_ENV=production DB_HOST=127.0.0.1 DB_USER=smoke DB_PASSWORD=smoke DB_NAME=smoke \
   SMTP_HOST=localhost SMTP_USER=x SMTP_PASS=x BETTER_AUTH_SECRET=smoketestsecretsmoketestsecret1234 \
   node dist-server/server.js
   ```
   Expect `/api/health` → `{"status":"ok",…}` and `/` → 200, then stop it.
4. Stage files explicitly, `git diff --cached --check`, commit (`feat:` / `content:` / `fix:` style), `git fetch origin main`, fast-forward push. Never force-push.
5. **Verify the live site actually changed.** Hostinger's auto-deploy has not been firing — after the push, fetch `https://cateringdistrict.com.au/` and its `assets/index-*.js` and grep for the new content. If it's absent, tell the user to deploy latest `main` and restart in hPanel (or trigger it through the Hostinger connector once authenticated).
6. Report: commit SHA, build/lint result, smoke-test result, live status, anything unverified.
