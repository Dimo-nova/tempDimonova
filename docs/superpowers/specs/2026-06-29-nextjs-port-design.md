# Dimonova — Next.js Port Design

**Date:** 2026-06-29
**Status:** Approved (design), pending spec review

## Goal

Port the existing static Dimonova marketing site (vanilla HTML/CSS/JS hash-SPA)
to **Next.js (App Router)**. Drivers: **SEO** (real server-rendered URLs,
per-page meta) and a **modern React stack** for future dynamic features.

## Decisions (locked)

| Decision | Choice |
|----------|--------|
| Framework | Next.js (latest), App Router |
| Language | **TypeScript** |
| Styling | **Keep inline styles** — port markup to JSX with `style={{…}}`, pixel-identical to current design |
| i18n | `next-intl`, locale-prefixed routing |
| Rendering | Fully static (SSG) — `generateStaticParams`, no server data |
| Testing | **Playwright** e2e (light) |
| Location | **Replace this repo** — restructure `temp-dimonova` into the Next project; old static files moved to `archive/` |
| Deploy | Vercel (auto-detects Next; drop `_build.js` static pipeline) |

## Current system (what we're porting)

- `index.html` — single page, six sections (`home`, `features`, `pricing`,
  `cases`, `about`, `contact`) toggled by URL hash via `.sc-if` wrappers.
- `app.js` — hand-written state machine: hash routing, scroll-aware header,
  mobile nav, WhatsApp widget, venue-type picker, contact-form validation,
  language switching, localized screenshot selection.
- `i18n.js` (~121KB) — `window.I18N[lang][key]` dictionary. Active languages:
  **en (source/fallback), es, de, fr, pt**. Applied via `data-i18n`,
  `data-i18n-html`, `data-i18n-placeholder` attributes.
- `styles.css` — keyframes, responsive `@media` rules, `.dim-*` helper classes.
- `assets/` — localized product screenshots (`<lang>_<base>.png`), headshots,
  venue logos under `assets/Logos/`.
- Brand logo + favicons added previously: `assets/dimonova-logo.png`,
  `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`.
- `_build.js` / `_smoke-test.js` — build transform + jsdom test (40 assertions).

## Target architecture

### Routing — real URLs replace the hash SPA

Six route segments, locale-prefixed with `localePrefix: 'as-needed'`
(English unprefixed, others prefixed):

```
/            /features      /pricing      /cases      /about      /contact
/es          /es/features   /es/pricing   …
/de  /fr  /pt  …
```

- Navigation uses `next/link`.
- Active-link styling derived from `usePathname()`.
- Language switch changes the locale segment in the URL (replaces the old
  `localStorage` lang). next-intl middleware handles locale detection/redirect.

### File layout

```
app/
  [locale]/
    layout.tsx          header + footer + WhatsApp widget; sets <html lang>; NextIntlClientProvider
    page.tsx            home
    features/page.tsx
    pricing/page.tsx
    cases/page.tsx
    about/page.tsx
    contact/page.tsx
  globals.css           ported from styles.css (keyframes, @media, .dim-* classes)
  sitemap.ts            per-locale sitemap
  robots.ts
components/
  Header.tsx            client — scroll-aware bg/shadow, active nav link
  MobileNav.tsx         client — open/close
  LangSwitcher.tsx      client — flag dropdown (flagcdn), routes to locale
  WhatsAppWidget.tsx    client — toggle/open panel
  ContactForm.tsx       client — venue-type picker + validation
  Footer.tsx            server
  sections/             Hero, LogoStrip, Features, Pricing, Cases, About, etc. (server)
messages/
  en.json es.json de.json fr.json pt.json   ← converted from i18n.js
lib/
  imgSrc.ts             localized screenshot picker (ported from app.js IMG_LANGS/LANG_FILE)
  i18n.ts               next-intl config (locales, defaultLocale, request config)
middleware.ts           next-intl locale middleware
public/
  assets/               moved from ./assets (screenshots, headshots, Logos/)
  favicon.svg  favicon-32.png  apple-touch-icon.png
e2e/                    Playwright specs
archive/                old static site: _design_source.html, _build.js, app.js,
                        i18n.js, index.html, styles.css, _smoke-test.js, support.js
```

### State machine → React mapping

| `app.js` concern | New home |
|------------------|----------|
| hash routing (`page`) | real route segments + `next/link` |
| `scrolled` (header bg/shadow) | scroll listener + `useState` in `Header.tsx` |
| `mobileNav` | local `useState` in `MobileNav.tsx` |
| `waOpen` | local `useState` in `WhatsAppWidget.tsx` |
| `vtype` (venue picker) | local `useState` in `ContactForm.tsx` |
| `errors`, `submitted` | local `useState` in `ContactForm.tsx` |
| `lang` (localStorage) | next-intl locale, URL-driven |
| `style-hover` / `style-focus` | `onMouseEnter`/`onFocus` handlers, or `:hover`/`:focus` in `globals.css` for static cases |
| localized screenshots | `lib/imgSrc.ts` given current locale |

### i18n migration

- Convert `window.I18N[lang][key]` → one JSON file per locale under `messages/`.
- `data-i18n="key"` → `t('key')`; `data-i18n-html="key"` → `t.rich('key', …)`
  for headings with `<em>` accents; `data-i18n-placeholder` → `placeholder={t('key')}`.
- en is the fallback locale. Brand name "Dimonova" stays untranslated.
- Migration is mechanical but large; keys preserved 1:1 to ease verification.

### SEO

- `generateMetadata` per page + locale: `title`, `description`, OpenGraph,
  canonical, `hreflang` alternates across the five locales.
- Root layout: `theme-color`, favicon links (svg + png + apple-touch).
- `app/sitemap.ts` enumerates all routes × locales; `app/robots.ts`.

### Contact form

Front-end-only, unchanged behavior (matches today; backend wiring tracked in
`TODO.md`, out of scope here). Same validation rules:
- name required, venue required, email required + regex.

## Testing — Playwright e2e (light)

Mirrors the intent of the current 40-assertion jsdom smoke test, in a real
browser:

1. Each of the six routes renders its page and correct `<h1>`/title.
2. Language switch changes the URL locale segment and visible copy.
3. WhatsApp widget toggles open/closed.
4. Mobile nav opens/closes (narrow viewport).
5. Venue-type picker selects a type.
6. Contact form validation: empty submit shows errors; valid submit succeeds.
7. `hreflang`/canonical present in page head (SEO smoke).

`next build` must pass with zero type errors as part of verification.

## Migration / cutover steps (high level)

1. Scaffold Next + TypeScript + next-intl into `temp-dimonova`; move old static
   files into `archive/`.
2. Move `assets/` → `public/assets/`; favicons → `public/`.
3. Port `styles.css` → `app/globals.css`.
4. Convert `i18n.js` → `messages/*.json`.
5. Build layout (header/footer/WA) + the six page sections from
   `_design_source.html`, keeping inline styles.
6. Wire interactivity (client components) per the state-machine mapping.
7. Add SEO metadata, sitemap, robots.
8. Add Playwright e2e; get green.
9. Update `package.json` scripts, `README.md`, `CLAUDE.md`; remove static-only
   `.vercelignore` entries.

## Out of scope

- Backend / form submission wiring.
- New content, copy, or design changes (port is pixel-faithful).
- Adding the Chinese locale (screenshots exist but `zh` is not an active
  language today).
- CMS integration.

## Risks

- **Visual drift** porting inline styles — mitigated by copying `style` values
  verbatim and visual spot-checks against the old site in `archive/`.
- **i18n volume** — 121KB of strings; mechanical conversion, keys kept 1:1.
- **`data-i18n-html` accents** — headings use `<em>`; must use `t.rich`/markup
  to preserve, not plain text interpolation.
