# Assets & configuration checklist

Update these items in [`src/data/site.ts`](src/data/site.ts) when available.

## Required before launch

| Item | Status | Action |
|------|--------|--------|
| Professional headshot | **Missing** | Add photo to `public/images/` and set `headshot: "/images/dr-mohit-engla.jpg"` |
| Domain | **Placeholder** | Purchase domain (e.g. `drmohitengla.com`) and update `site.url` in config + `astro.config.mjs` |
| Care philosophy | **Drafted** | Review/edit paragraphs in `src/data/content.ts` → `aboutContent` |

## Patient-facing (Phase 2 — placeholders in place)

| Item | Status | Action |
|------|--------|--------|
| Clinic name | **D21 Clinic** | — |
| Full clinic address | **Updated** | 85, SarvSuvidha Nagar, Bicholi Road, Begali, Indore |
| Google Maps link | **Updated** | [Google Maps](https://maps.app.goo.gl/qtsce26jsbTzpGTV6) |
| Clinic hours | Placeholder | Update `siteConfig.clinic.hours` when fixed schedule is available |
| Google Maps embed | **Updated** | Address-based embed in `site.ts` |
| Web3Forms access key | **Required** | Set `PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env` — see README |

## Professional profiles (for SEO schema)

| Item | Status | Action |
|------|--------|--------|
| LinkedIn | **Missing** | Set `profiles.linkedin` |
| ResearchGate | **Missing** | Set `profiles.researchgate` |
| Google Scholar | **Missing** | Set `profiles.googleScholar` |
| Practo | **Missing** | Set `profiles.practo` |

## Optional enhancements

- Publication URLs in `src/data/content.ts`
- Real patient testimonials (with written consent) in `testimonials` array
- Google Analytics / Search Console after domain is live
