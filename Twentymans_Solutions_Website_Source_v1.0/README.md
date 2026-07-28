# Twentyman's Solutions Website

Complete editable source package for the Twentyman's Solutions website published at:

- https://twentymans.com.au
- https://www.twentymans.com.au

Export date: 27 July 2026

## Included

- Home, Services, About and Contact/Quote pages
- Responsive site-wide header, navigation and footer
- Quote-request form and email handoff
- Complete CSS, metadata, sitemap and robots configuration
- Twentyman's Solutions logo files
- All website photographs and visual assets
- Local font files
- Exact dependency lockfile
- Build, validation and deployment configuration

The dependency directory (`node_modules`) and generated build folders are deliberately excluded. They are recreated from `package-lock.json`; this is standard for a complete source-code package and keeps the download small.

## Main editing locations

| Purpose | File or folder |
| --- | --- |
| Homepage | `app/page.tsx` |
| Services page | `app/services/page.tsx` |
| About page | `app/about/page.tsx` |
| Contact page | `app/contact/page.tsx` |
| Quote form behaviour | `app/contact/quote-form.tsx` |
| Header and footer | `app/site-chrome.tsx` |
| Site-wide styling | `app/globals.css` |
| Metadata and structured data | `app/layout.tsx` |
| Images and logo | `public/` |
| Sitemap | `app/sitemap.ts` |
| Search crawler rules | `app/robots.ts` |

## Requirements

- Node.js 22.13 or newer
- npm
- Linux, WSL2 or a compatible development environment for the supplied build scripts

## Run locally

From the extracted project folder:

```bash
npm ci
npm run dev
```

Open the local address shown in the terminal. Changes under `app/` and `public/` will be reflected by the development server.

## Production build

```bash
npm run build
```

This creates and validates the Cloudflare Worker-compatible production output under `dist/`.

To run an already-built version locally:

```bash
npm run start
```

## Deployment notes

The live website is currently hosted through ChatGPT Sites, while VentraIP holds the domain and DNS.

The included `.openai/hosting.json` retains the existing Sites project connection. When editing through ChatGPT Work, keep this file unchanged so revisions continue to target the current Twentyman's Solutions site.

If moving the website to a different host:

1. Keep this package as the master source.
2. Install the locked dependencies with `npm ci`.
3. Build with `npm run build`.
4. Configure the new host for the generated Cloudflare Worker-compatible application.
5. Test every route and the quote-email workflow.
6. Only then update the VentraIP A/CNAME records.

Do not cancel or change domain or email services until the replacement deployment, HTTPS certificate and email DNS records have been verified.

## Forms

The quote form prepares an email using the visitor's own mail application. It does not include a server-side database or silently submit personal information.

## Images

All website imagery and logo variants used by the project are in `public/`. When replacing an image, preserve the filename or update the matching path in the relevant page component.

## Useful commands

```bash
npm run dev
npm run build
npm run start
npm run lint
npm test
```

## Ownership backup

Keep the ZIP unchanged as a dated source backup. For active editing, extract a separate working copy and use Git or another version-control system to track revisions.
