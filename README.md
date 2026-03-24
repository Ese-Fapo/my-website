# Bem Site Developer - Next.js Project

This project is configured for **static export** so it can be deployed on shared hosting providers like **Hostinger**.

## Local development

Run the app in development mode:

```bash
npm run dev
```

## Build static files for Hostinger

Generate the production static site:

```bash
npm run build
```

After build completes, Next.js exports static files to:

- `out/`

## Deploy to Hostinger

1. Run `npm run build` locally.
2. Open Hostinger File Manager (or FTP).
3. Go to `public_html`.
4. Upload the **contents** of the `out/` folder (not the folder itself, unless you want a subpath deploy).
5. Remove old files in `public_html` first to avoid stale assets.

## Notes

- Static export is enabled in `next.config.ts` with `output: "export"`.
- `images.unoptimized: true` is enabled to support static hosting.
- If you update the site, rebuild and re-upload the latest `out/` contents.
