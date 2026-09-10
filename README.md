# Montreux Wealth Management

Next.js marketing site for Montreux Wealth Management - integrated investment management, financial planning, and tax services.

## Stack

- **Next.js 15** (App Router, static generation)
- **React 18** + TypeScript
- **Tailwind CSS**

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to Vercel - Next.js is detected automatically. No custom rewrites needed.

## SEO

- Per-page metadata (title, description, canonical, Open Graph, Twitter)
- Dynamic `sitemap.xml` and `robots.txt`
- JSON-LD structured data (Organization, FAQ on Cash Balance page)
- `public/llms.txt` for AI crawlers
- Static pre-rendering for all public pages

## Project Structure

```
app/           → Routes and layouts (App Router)
components/    → UI components
components/pages/ → Full page content
lib/           → SEO helpers and site config
constants/     → External service URLs
utils/         → Calculator logic
public/        → Static assets (llms.txt)
```
