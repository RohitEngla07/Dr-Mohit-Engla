# Dr Mohit Engla — Personal Website

Personal site for **Dr. Mohit Engla**, General Surgeon in Indore (D21 Clinic).

- **Live site:** deploy via [Vercel](https://vercel.com) from this repo
- **Source app:** [`site/`](site/) (Astro + Tailwind)

## Local development

```bash
cd site
npm install
cp .env.example .env   # add PUBLIC_WEB3FORMS_ACCESS_KEY
npm run dev
```

## Deploy on Vercel

This repo includes [`vercel.json`](vercel.json) so Vercel builds from the `site/` subdirectory automatically.

1. Import [github.com/RohitEngla07/Dr-Mohit-Engla](https://github.com/RohitEngla07/Dr-Mohit-Engla) on Vercel
2. Leave **Root Directory** empty (repo root) — `vercel.json` handles paths
3. Add environment variable:
   ```
   PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
   ```
4. Deploy

**Expected build settings (auto from `vercel.json`):**

| Setting | Value |
|---------|--------|
| Install | `npm install --prefix site` |
| Build | `npm run build --prefix site` |
| Output | `site/dist` |

If you previously set Root Directory to `site` in the Vercel dashboard, either clear it or use only the dashboard setting with Framework **Astro**, Build `npm run build`, Output `dist`.

## Repository layout

```
├── vercel.json              # Vercel build config (repo root)
├── Dr_Mohit_Engla_CV.pdf
└── site/                    # Astro project
    ├── src/
    ├── public/
    └── package.json
```

See [`site/README.md`](site/README.md) for content customization and form setup.
