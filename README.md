# Sites Profissionais / Professional Websites - Next.js Project

This project supports Hostinger's managed **Next.js** deployment and a separate **static export** for manual uploads.

## Hostinger Git deployment

Use Node.js 22, application type Next.js, build command `npm run build`, and output directory `.next`. The start command is `npm start` when a start command is requested. No export-related environment variable is needed.

Production builds use Webpack to avoid the Turbopack/PostCSS subprocess failure seen on the Hostinger builder.

## Local development

Run the app in development mode:

```bash
npm run dev
```

## Build static files for Hostinger

Generate the production static site:

```bash
npm run export
```

After build completes, Next.js exports static files to:

- `out/`

## Deploy to Hostinger

1. Run `npm run export` locally.
2. Open Hostinger File Manager (or FTP).
3. Go to `public_html`.
4. Upload the **contents** of the `out/` folder (not the folder itself, unless you want a subpath deploy).
5. Remove old files in `public_html` first to avoid stale assets.

## Notes

- `npm run export` sets `NEXT_STATIC_EXPORT=1` and enables `output: "export"`; the normal build produces `.next` for a Next.js server.
- `images.unoptimized: true` is enabled to support static hosting.
- If you update the site, rebuild and re-upload the latest `out/` contents.
- Include the hidden `.htaccess` file when uploading to Hostinger. It enables text compression and caching for hashed JavaScript/CSS when Apache supports the corresponding modules.
- For a representative local performance audit of the static export, run `npm run export`, then `node scripts/preview-production.cjs` and test `http://127.0.0.1:4173` in Lighthouse. For the server build, use `npm run build` and `npm start`. Development mode is not representative of production performance.
