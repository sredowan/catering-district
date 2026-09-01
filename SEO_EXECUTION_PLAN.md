# SEO Execution Plan - Catering District

Prepared from the research in `SEO_STRATEGY.md`, the current application code,
the live website, and direct reviews of named competitors and industry sources.

## Executive Summary

The existing strategy has the right market positioning: Catering District should
target club executives, boards, operations managers, and tender decision-makers,
not consumers searching for event catering.

The execution order should be:

1. Fix crawlability, canonicalisation, HTTP status, and trust issues.
2. Publish five high-intent commercial pages.
3. Add credible case studies and operational proof.
4. Build club-specific pages only where the content can be differentiated.
5. Publish expert operational content and earn links from industry organisations.

Do not mass-produce club-type or location pages yet. Without unique evidence,
these would risk becoming thin doorway pages.

## Current SEO Findings

| Issue | Impact | Evidence | Required fix | Priority |
| --- | --- | --- | --- | --- |
| Important content requires JavaScript | Critical | Live HTML contains no page copy, H1, canonical, internal navigation, or JSON-LD. The automated checker found zero indexable words and no H1. | Generate static HTML for every public route during `npm run build`. | P0 |
| Metadata is client-side only | High | All routes initially return the homepage title and description. Social crawlers may never see React Helmet updates. | Prerender titles, descriptions, canonicals, Open Graph tags, and JSON-LD. | P0 |
| Unknown URLs return HTTP 200 | High | A nonexistent test URL returned the homepage with status 200. | Return a real 404 page and HTTP status. | P0 |
| Duplicate hostname is accessible | High | `https://www.cateringdistrict.com.au/` returns 200 instead of redirecting. | Permanently redirect `www` to the non-`www` canonical domain. | P0 |
| Trust claims conflict or lack proof | High | The site claims a 2006 founding date and 18+ company years, while the founder profile says Catering District began in 2026. Retention and growth statistics have no visible supporting evidence. | Separate Maz's career experience from company history and verify every published metric. | P0 |
| Business schema is inaccurate | Medium | The company is marked as a `FoodEstablishment`, although it is primarily a B2B hospitality operator. | Use a connected Organization, WebSite, WebPage, and Service schema graph. | P1 |
| No measurement stack was found | High | No GA4, GTM, or conversion tracking was found in source. | Configure Search Console, Bing Webmaster Tools, GA4, and lead events. | P1 |
| Sitemap is clean but too small | Medium | The sitemap contains seven URLs and none of the proposed high-intent pages. | Generate the sitemap from the public route and content manifest. | P1 |

## Positioning

### Primary Category

Club catering, contract catering, and food and beverage management for licensed
clubs across NSW.

### Primary Audience

Club CEOs, general managers, directors, operations managers, and company
secretaries preparing an EOI, tender, operational review, or management change.

### Core Promise

Catering District helps clubs turn underperforming kitchens into profitable,
compliant, scalable hospitality operations.

### Primary Conversion

Request a capability statement or discuss a club catering contract.

Replace consumer-oriented calls to action such as `Book Now` with:

- Request Our Capability Statement
- Discuss Your Club's Catering
- Invite Us to Your EOI
- Request an Operational Review
- Speak With Maz

Use NSW as the initial geographic focus. Expand nationally only after contracts,
case studies, partnerships, or operational capacity demonstrate a genuine national
service footprint.

## Recommended Site Architecture

```text
/
|-- /services
|   |-- /services/club-catering
|   |-- /services/contract-catering
|   |-- /services/food-beverage-management
|   `-- /services/kitchen-management-compliance
|-- /tenders-eoi
|-- /clubs
|   |-- /clubs/bowling-club-catering
|   |-- /clubs/rsl-club-catering
|   `-- /clubs/golf-club-catering
|-- /case-studies
|   `-- /case-studies/[venue-or-descriptive-result]
|-- /insights
|   |-- /insights/club-catering-contract-vs-in-house
|   |-- /insights/club-food-beverage-profitability
|   |-- /insights/club-catering-eoi-checklist
|   |-- /insights/haccp-compliance-nsw-clubs
|   `-- /insights/club-kitchen-labour-costs
|-- /about
|   `-- /about/maz-islam
|-- /capability-statement
`-- /contact
```

Start with bowling, RSL, and golf clubs because these align with the documented
market and Maz's experience. Add other club-type pages only when each page can
contain genuinely distinct operational detail and proof.

Do not create location pages for Sydney, Newcastle, Wollongong, or other regions
until each location has real contracts, testimonials, staff, partnerships, or
operational examples.

## Commercial Page Build Order

| Order | Page | Primary intent | Recommended H1 | Main CTA |
| --- | --- | --- | --- | --- |
| 1 | `/tenders-eoi` | Club catering EOI and tender | Club Catering Tender and EOI Responses | Invite Us to Your EOI |
| 2 | `/services/club-catering` | Club catering services | Club Catering Services for NSW Licensed Clubs | Request Capability Statement |
| 3 | `/services/contract-catering` | Contract caterer | Contract Catering for Clubs and Hospitality Venues | Discuss Your Contract |
| 4 | `/services/food-beverage-management` | Club F&B management | Club Food and Beverage Management | Request an Operational Review |
| 5 | `/services/kitchen-management-compliance` | Kitchen operations and compliance | Commercial Kitchen Management and Compliance | Speak With Maz |
| 6 | `/case-studies` | Proof and supplier evaluation | Club Catering and Hospitality Results | Discuss Similar Results |
| 7 | `/capability-statement` | Procurement validation | Catering District Capability Statement | Download or Request PDF |

The capability statement should have an indexable HTML page. A PDF may supplement
it, but locking all useful information behind a form removes SEO value and adds
friction for procurement buyers.

## Requirements For Every Commercial Page

- Keyword-specific title, H1, URL, and introduction.
- Direct definition of the service within the first 200 words.
- Operational problems the service solves.
- Deliverables and implementation process.
- Club-specific risks and compliance requirements.
- Maz's relevant credentials and named experience.
- Verified metrics or clearly labelled qualitative outcomes.
- Comparison table where it helps the buyer decide.
- Three to six direct FAQs.
- Contextual links to services, club pages, case studies, and insights.
- Capability-statement or consultation CTA.
- Service, WebPage, BreadcrumbList, and Organization schema.

## Technical SEO Sprint

1. Add deterministic build-time prerendering for every public route.
2. Confirm page source contains the final H1, copy, canonical, metadata, links,
   and JSON-LD without executing JavaScript.
3. Create one route manifest used by routing, prerendering, navigation, and sitemap
   generation.
4. Redirect HTTP to HTTPS and `www` to `cateringdistrict.com.au`.
5. Choose one trailing-slash convention and redirect the alternative.
6. Return genuine 404 responses for unknown paths.
7. Add `noindex` and an `X-Robots-Tag` header to `/admin/*`.
8. Change the document language from `en` to `en-AU`.
9. Generate sitemap `lastmod` values from real publication changes.
10. Create dedicated 1200 x 630 Open Graph images.
11. Load the first hero image eagerly and preload only the true LCP asset.
12. Run mobile Lighthouse and record LCP, INP, CLS, SEO, and accessibility baselines.

## Schema Plan

Use one connected JSON-LD graph with stable `@id` references.

| Page type | Schema |
| --- | --- |
| Homepage | `Organization`, `WebSite`, `WebPage` |
| Service pages | `Service`, `WebPage`, `BreadcrumbList` |
| Club hubs | `CollectionPage`, `BreadcrumbList` |
| Insight articles | `Article`, `Person`, `BreadcrumbList` |
| Visible FAQs | `FAQPage` only when identical questions and answers appear on-page |
| Founder profile | `Person`, `ProfilePage`, `BreadcrumbList` |
| Contact page | `ContactPage` with an Organization reference |

Remove `FoodEstablishment`, cuisine, and price-range data unless Catering District
operates a customer-facing location that matches those claims.

Add the existing LinkedIn, Facebook, and Instagram profiles to
`Organization.sameAs`.

Correct the company founding date. Maz's 19 years of hospitality experience should
belong to the Person entity, not the company's history.

## Content Strategy

| Priority topic | Buyer stage | Search intent | Format |
| --- | --- | --- | --- |
| Club catering contract vs in-house operation | Decision | Outsourcing comparison | Comparison table and board checklist |
| How to prepare a club catering EOI | Procurement | Tender preparation | Step-by-step guide |
| How to improve club F&B profitability | Problem aware | Margin improvement | Expert pillar article |
| Club menu engineering and food-cost control | Evaluation | Operational performance | Worked framework |
| HACCP compliance checklist for NSW clubs | Risk review | Compliance | HTML checklist and PDF |
| Club kitchen labour costs and rostering | Problem aware | Cost control | Guide citing Fair Work |
| Transitioning to a new contract caterer | Decision | Change management | 30/60/90-day plan |
| What boards should evaluate in a catering proposal | Procurement | Supplier scoring | Evaluation matrix |
| Bowling club bistro operating model | Segment | Bowling club catering | Club-specific playbook |
| RSL catering compliance and member experience | Segment | RSL club catering | Club-specific playbook |

Every article should:

- Be attributed to Maz.
- Show relevant credentials.
- Include published and reviewed dates.
- Cite primary Australian sources.
- Lead with a direct, extractable answer.
- Use tables, numbered steps, definitions, and direct FAQs where appropriate.
- Link to the corresponding commercial service page.

## Authority And Link Acquisition

- Publish named venue case studies whenever permission is available.
- Seek inclusion in relevant ClubsNSW partner and supplier channels.
- Apply to Future Food's hospitality operator network.
- Contribute practical articles to club-management publications.
- Build relationships with Bowls NSW, Golf NSW, RSL and Services Clubs, and
  regional club associations.
- Request links from real venue partners, suppliers, consultants, and training
  organisations.
- Maintain a complete Google Business Profile for the legitimate Clyde office or
  service area.
- Avoid generic paid backlink packages and mass directory submissions.

Catering HQ's strongest advantage is visible venue proof. Catering District needs
credible operational evidence more than it needs a large volume of generic content.

## 90-Day Roadmap

| Period | Deliverables |
| --- | --- |
| Weeks 1-2 | Prerendering, redirects, 404 handling, noindex rules, schema corrections, claim audit, Search Console, Bing, and GA4 setup |
| Weeks 3-4 | New homepage positioning, `/tenders-eoi`, `/services/club-catering`, and capability statement |
| Weeks 5-6 | Contract catering, F&B management, kitchen management, and compliance pages |
| Weeks 7-8 | At least two case studies plus bowling and RSL pages |
| Weeks 9-10 | Four expert insight articles with citations and Maz attribution |
| Weeks 11-12 | Industry outreach, partner links, content refresh, indexation review, and conversion analysis |

## Measurement Plan

Track business outcomes rather than raw traffic:

- Non-brand impressions to commercial pages.
- Indexed versus submitted URLs.
- Rankings for Cluster A and B terms from `SEO_STRATEGY.md`.
- Capability-statement requests.
- EOI or tender invitations.
- Consultation form completions.
- Qualified email and phone leads.
- Organic lead-to-opportunity conversion.
- Referring domains from clubs and industry organisations.
- AI citations for club catering, tender, profitability, and compliance queries.

Keyword volume must be validated through Keyword Planner, Ahrefs, Semrush, or
Search Console. Do not invent search volume, ranking, traffic, or revenue forecasts.

## Decisions Required Before Content Production

1. Confirm whether the first commercial focus is NSW or all Australia.
2. Identify contracts and venues that may be named.
3. Provide evidence for retention, revenue-growth, venue-count, and event-count
   claims.
4. Confirm exactly which services Catering District currently sells.
5. Confirm whether Maz can approve and author expert articles.
6. Provide Search Console and GA4 access or establish new properties.

## Definition Of Success

The first SEO phase is complete when:

- Every public route has indexable static HTML.
- Canonical redirects and true 404 responses work.
- Search Console and analytics collect reliable data.
- The five priority commercial pages are live and internally linked.
- Company history and performance claims are accurate and supported.
- At least two case studies are published.
- Relevant schema passes Google and Schema.org validation.
- Qualified organic leads and tender opportunities can be attributed to landing
  pages and search queries.
