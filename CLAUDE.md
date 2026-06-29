# CLAUDE.md

Guidance for Claude (and other agents) working in this repo.

## What this is

A **marketing site** for Dimonova — a done-for-you digital-menu service for
restaurants, pubs and cafés. It is built with **Next.js 16, TypeScript, App
Router, and SSG** (static site generation). All routes are statically rendered
at build time.

**Open tasks live in [`TODO.md`](./TODO.md)** — check it before starting work and
keep it updated. Human-facing overview is in [`README.md`](./README.md).

## Architecture

| Layer | Detail |
|-------|--------|
| Framework | Next.js 16 — App Router, `generateStaticParams`, `generateMetadata` |
| Language | TypeScript (strict) |
| i18n | `next-intl` · 5 locales: `en`, `es`, `de`, `fr`, `pt` · `localePrefix: "as-needed"` (English at `/`, others at `/es/`, `/de/`, etc.) |
| Styling | Inline styles throughout (copied verbatim from the Claude Design export). `lib/style.ts` exports `s(css)` which parses a CSS string into `React.CSSProperties`. Global keyframes, media queries and `.dim-*` utility classes live in `app/globals.css`. |
| Hover/focus | `components/Hover.tsx` — a client component that applies extra inline styles on `mouseenter`/`focus` and restores them on leave/blur (mirrors the `data-hover`/`data-focus` pattern from the old `app.js`). |
| Routing helpers | `lib/routing.ts` — calls `createNavigation(routing)` and re-exports `Link`, `useRouter`, `usePathname`, `getPathname` from `next-intl/navigation`. Always import these wrappers, not the `next/navigation` originals. |
| SEO helpers | `lib/meta.ts` — `pageMetadata(locale, path, titleKey, descKey)` returns a `Metadata` object with canonical URL, `alternates.languages` (hreflang), and OpenGraph fields. |
| Image helper | `lib/imgSrc.ts` — `imgSrc(base, locale)` returns a locale-specific screenshot path (falls back to the `en` asset). |

### Route map

```
app/
  layout.tsx              # root layout (Viewport + global Metadata, no <html>)
  globals.css             # keyframes, media queries, .dim-* classes
  [locale]/
    layout.tsx            # sets <html lang>, wraps NextIntlClientProvider
    page.tsx              # home
    features/page.tsx
    pricing/page.tsx
    cases/page.tsx
    about/page.tsx
    contact/page.tsx
```

### Messages / translations

`messages/<locale>.json` holds all copy. Keys used by every page live at the
top level; page-specific keys are nested under the page name. Use
`getTranslations({ locale })` (server) or `useTranslations()` (client).

For HTML content (e.g. a paragraph with a `<br>`) use `t.raw(key)` and
`dangerouslySetInnerHTML`. For arrays (feature lists, FAQ items) use
`t.raw(key)` and cast to `string[]`.

### Inline-style rule

Styles are **never** in CSS classes — they are copied verbatim from
`archive/_design_source.html` as template-literal strings and passed through
`s(css)`. When porting new markup, copy the `style="…"` attribute value
exactly and wrap it: `style={s("…")}`.

### WhatsApp widget state

The WA panel (`waOpen` boolean) is managed in the `[locale]/layout.tsx` via a
client wrapper component (`components/WAWidget.tsx` or similar). It toggles on
the FAB click and on the "Continue" button. The "Continue" button links to
`https://wa.me/<number>`.

## Archive

`archive/` holds the original static HTML/CSS/JS site. It is the **source of
truth** for markup, inline styles, exact copy, animation values, and
scroll-header colours. When you need to verify a pixel-level detail, read the
archive:

- `archive/_design_source.html` — original Claude Design export
- `archive/app.js` — original state machine (scroll colours, pill styles, email regex, etc.)
- `archive/index.html` / `archive/styles.css` — built output

`archive/` is excluded from the Vercel deploy.

## Commands

```bash
npm run dev        # dev server on http://localhost:3000
npm run build      # production build (static export)
npm run test:e2e   # Playwright e2e on port 3100 (starts the server automatically)
```

## Testing

Playwright e2e lives in `e2e/`. The suite covers:

- All six routes in English and one locale (ES)
- Header scroll behaviour, mobile nav, WhatsApp widget
- Venue pill selection (contact page)
- Full contact-form validation flow

**Add a spec when you add behaviour.**

## SEO / metadata

- `app/layout.tsx` exports `viewport: Viewport` (`themeColor`) and base `metadata`.
- Each page's `generateMetadata` calls `pageMetadata(locale, "/path", titleKey, descKey)`.
- `sitemap.ts` and `robots.ts` live under `app/`.
- Favicons live in `public/` (`favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`).

## Conventions / gotchas

- **Do not** hand-edit files under `archive/` — they are the historical source of truth only.
- **Do not** use `next/navigation` directly — use the wrappers in `lib/routing.ts`.
- Content marked "placeholder" is intentional. Don't invent real names, quotes,
  metrics, or photos — leave placeholders until real content is supplied (tracked in `TODO.md`).
- Translated SEO copy (`meta.title.*`, `meta.description.*`) in `messages/` is
  currently in English for all locales — proper translations are a follow-up task.

### `t.raw()` and `dangerouslySetInnerHTML`

Several components render translation keys with embedded HTML via
`dangerouslySetInnerHTML={{ __html: t.raw("key") }}`. These keys contain
trusted markup (`<strong>`, `<em>`, `<span>`) copied from the original design.
Never put user-supplied data into a `t.raw()` key.

### Contact details

Hardcoded contact details (email, phone numbers, WhatsApp URL) live in
`lib/config.ts` and are imported from `@/lib/config`. Do not inline them in
components.

## Deploy

Static export via Vercel (zero-config):

```bash
vercel             # preview
vercel --prod      # production
```
