# CocoBoost

Marketing website for **CocoBoost** — a Malaysia-based B2B coconut supplier serving
distributors, F&B manufacturers, hotels, retailers and export buyers.

Built with [Next.js](https://nextjs.org) (App Router) + TypeScript. The homepage was
ported from a Claude design file into server-rendered React components for SEO.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the dev server              |
| `npm run build` | Production build                  |
| `npm run start` | Serve the production build        |
| `npm run lint`  | Run ESLint                        |

## Before going live

The design ships with placeholder content (marked `*`). Replace before publishing:

- Company address, phone, email and `+60123456789` WhatsApp/`tel:` numbers
- Statistics (acres, output, years, countries)
- Certifications and certificate numbers (Halal, HACCP, ISO 22000, MeSTI)
- Client logos and the testimonial
- `og-image.jpg`, `favicon.ico` and `logo.png` in `public/`
- The canonical/OG domain (`https://mycocoboost.com`) in `app/layout.tsx`
- Replace the placeholder hero and plantation image blocks with real photos

## Deploy

This project is ready to deploy on [Vercel](https://vercel.com). Push to GitHub and
import the repo, or run `vercel`.
