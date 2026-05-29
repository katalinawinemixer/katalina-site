# KatalinaLondono.com

Personal website for Katalina Londoño, focused on clinical-trial operations, Latin American biotech, and the regulatory edges where early-phase therapies actually fail.

The site is meant to work as both a public writing home and a career artifact: it shows a point of view from inside clinical research operations, with essays that can be shared with founders, investors, operators, and hiring managers.

## What It Contains

- A homepage with current focus areas and featured essays.
- A `/start-here` path for new readers.
- A `/venture` page for biotech and venture readers.
- A `/now` page for current work and reading.
- An essay archive powered by MDX content.
- Topic pages, RSS, sitemap, robots metadata, favicons, and Cloudflare headers.

## Project Structure

```text
app/              Next.js App Router pages, layouts, metadata, and site components
content/essays/   MDX essays published on the site
lib/              Essay loading, reading metadata, and site configuration helpers
public/           Favicons, static images, and Cloudflare header rules
src/              Cloudflare Worker entrypoint
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The site usually runs at:

```text
http://localhost:3000
```

## Content Workflow

Add essays as MDX files in `content/essays/`. Shared site metadata lives in `lib/site.ts`; essay parsing and topic helpers live in `lib/essays.ts`.

## Verification

```bash
npm run lint
npm run build
```

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- MDX
- Tailwind CSS v4
- Cloudflare Workers / Pages configuration

## Status

This is the active public website repo. The old default Next.js README has been replaced with project-specific structure, run, and content notes so the GitHub repo now reads like the site it actually is.
