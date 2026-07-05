# Dr. Mohit Engla — Personal Website

Hybrid physician portfolio and patient-facing site for **Dr. Mohit Engla**, General Surgeon in Indore.

Built with [Astro](https://astro.build) + Tailwind CSS. Static, fast, and SEO-optimized.

## Quick start

```bash
cd site
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

## Build for production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Vercel, Netlify, or any static host.

### Vercel (this repo)

The repo root [`vercel.json`](../vercel.json) builds from `site/` automatically. Add `PUBLIC_WEB3FORMS_ACCESS_KEY` in Vercel → Settings → Environment Variables, then redeploy.

Alternatively, set Vercel **Root Directory** to `site`, Framework **Astro**, Output **dist**, Build **`npm run build`**.

## Appointment form setup (required for email notifications)

The booking form sends appointment requests via [Web3Forms](https://web3forms.com) (free).

1. Sign up at [web3forms.com](https://web3forms.com) with **englamohit442@gmail.com**
2. Copy your **Access Key**
3. Create `site/.env` from `.env.example`:
   ```
   PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
4. Restart the dev server
5. On Vercel/Netlify, add the same environment variable in project settings

When a patient submits, you get an email with their details; they see a confirmation and can optionally follow up on WhatsApp. Without the key, the form opens WhatsApp directly.

## Project structure

```
site/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/                 # Page sections
│   ├── data/
│   │   ├── site.ts                 # Config, contact, clinic placeholders
│   │   └── content.ts              # Site content
│   ├── layouts/BaseLayout.astro    # SEO, schema, fonts
│   └── pages/
│       ├── index.astro             # Main single-page site
│       └── privacy.astro           # Privacy policy
└── ASSETS.md                       # Checklist of items to update
```

## Customization

1. **Site config** — Edit `src/data/site.ts` for contact info, domain, headshot, clinic, social URLs
2. **Content** — Edit `src/data/content.ts` for bio, services, publications, FAQs
3. **Domain** — Update `site` in `astro.config.mjs` and `siteConfig.url` when purchased

See [ASSETS.md](./ASSETS.md) for the full checklist of placeholders.

## Features

- Hero with Book / Call / WhatsApp CTAs
- About, experience, services, expertise sections
- Appointments (phone, WhatsApp, contact form)
- Clinic info + map placeholder
- FAQ accordion
- Physician JSON-LD structured data
- Sitemap + robots.txt
- Medical disclaimer + privacy policy
- Mobile sticky contact bar
