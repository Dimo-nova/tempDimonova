# Dimonova Next.js Port Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Port the static Dimonova hash-SPA marketing site to Next.js (App Router, TypeScript) with locale-prefixed real routes, preserving the design pixel-for-pixel.

**Architecture:** App Router, fully static (SSG). Six route segments under a `[locale]` segment. `next-intl` handles localized routing and messages. Markup is ported verbatim from the old `_design_source.html` (now in `archive/`), keeping inline styles via a `style-string → React.CSSProperties` parser helper so values copy 1:1. Interactivity (scroll header, mobile nav, WhatsApp widget, contact form, language switch) lives in small client components.

**Tech Stack:** Next.js (latest), TypeScript, next-intl, Playwright.

## Global Constraints

- Active locales: `en` (default + fallback), `es`, `de`, `fr`, `pt`. No `zh`.
- `localePrefix: 'as-needed'` — `en` unprefixed, others prefixed (`/es/...`).
- Output: fully static. Every route reachable via `generateStaticParams`.
- Inline styles preserved verbatim — no Tailwind, no CSS Modules. Shared rules (keyframes, `@media`, `.dim-*`) live in `app/globals.css`.
- Brand name "Dimonova", email/phone/hours, currency, dish/venue mock names, and Terms/Privacy/Cookies labels are NOT translated (no i18n key).
- Contact form is front-end-only (no backend submission).
- Pixel-faithful port: no content, copy, or design changes.
- Old static files live in `archive/` and are the source of truth for markup during the port.
- i18n keys kept 1:1 with the old dictionary (nested form — see Task 5).
- Final `next build` and `npx playwright test` must both pass green.

---

### Task 1: Scaffold Next.js project and archive the old site

**Files:**
- Create: `package.json` (replace), `tsconfig.json`, `next.config.ts`, `next-env.d.ts`, `.gitignore` (update), `app/globals.css` (placeholder), `app/layout.tsx` (temporary root)
- Move: `_design_source.html`, `_build.js`, `_smoke-test.js`, `index.html`, `styles.css`, `app.js`, `i18n.js`, `support.js` (if present) → `archive/`
- Modify: `.gitignore`

**Interfaces:**
- Produces: a buildable empty Next app; `archive/` containing all old static files.

- [ ] **Step 1: Archive old static files**

```bash
cd "C:/Users/Pablo Lopez/projects/DIMONOVA/temp-dimonova"
mkdir -p archive
git mv _design_source.html _build.js _smoke-test.js index.html styles.css app.js i18n.js archive/
# support.js may not be tracked; move if it exists
[ -f support.js ] && git mv support.js archive/ || true
```

- [ ] **Step 2: Install Next + TypeScript + next-intl**

```bash
npm pkg delete scripts.build scripts.dev scripts.start scripts.test
npm install next@latest react@latest react-dom@latest next-intl
npm install -D typescript @types/node @types/react @types/react-dom @playwright/test
```

- [ ] **Step 3: Add `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "ES2022"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", "archive"]
}
```

- [ ] **Step 4: Add `next.config.ts` with next-intl plugin**

```ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n.ts");

const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);
```

- [ ] **Step 5: Update `.gitignore`**

Append:

```
/.next/
/node_modules
/out/
next-env.d.ts
/test-results/
/playwright-report/
```

- [ ] **Step 6: Update `package.json` scripts**

```bash
npm pkg set scripts.dev="next dev" scripts.build="next build" scripts.start="next start" scripts.lint="next lint" scripts.test:e2e="playwright test"
```

- [ ] **Step 7: Temporary root layout + page so the build succeeds**

`app/layout.tsx`:

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
```

`app/page.tsx`:

```tsx
export default function Page() {
  return <main>scaffold</main>;
}
```

`app/globals.css`: empty file for now.

- [ ] **Step 8: Verify build**

Run: `npm run build`
Expected: `Compiled successfully`, route `/` listed. No type errors.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js + TypeScript app, archive old static site"
```

---

### Task 2: Playwright harness

**Files:**
- Create: `playwright.config.ts`, `e2e/smoke.spec.ts`

**Interfaces:**
- Produces: `npx playwright test` runs against a dev server on port 3100.

- [ ] **Step 1: Add `playwright.config.ts`**

```ts
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  reporter: "list",
  use: { baseURL: "http://localhost:3100", trace: "on-first-retry" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "npm run build && npx next start -p 3100",
    url: "http://localhost:3100",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
```

- [ ] **Step 2: Install browser**

```bash
npx playwright install chromium
```

- [ ] **Step 3: Write the failing smoke test**

`e2e/smoke.spec.ts`:

```ts
import { test, expect } from "@playwright/test";

test("home page responds", async ({ page }) => {
  const res = await page.goto("/");
  expect(res?.status()).toBe(200);
});
```

- [ ] **Step 4: Run it**

Run: `npm run test:e2e`
Expected: PASS (scaffold page returns 200).

- [ ] **Step 5: Commit**

```bash
git add playwright.config.ts e2e/smoke.spec.ts package.json package-lock.json
git commit -m "test: add Playwright harness"
```

---

### Task 3: Move assets, port global CSS, favicons

**Files:**
- Move: `assets/` → `public/assets/`; `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` → `public/`
- Modify: `app/globals.css`

**Interfaces:**
- Produces: static assets served from `/assets/...` and `/favicon.svg`; `globals.css` with the design's base/keyframe/media/`.dim-*` rules.

- [ ] **Step 1: Move assets and favicons into `public/`**

```bash
mkdir -p public
git mv assets public/assets
git mv favicon.svg favicon-32.png apple-touch-icon.png public/
```

- [ ] **Step 2: Port the CSS**

Copy the contents of the old `<style>` block — it is in `archive/styles.css` (everything between the header comment and the `/* runtime helpers */` line is the design CSS; the `.sc-if[hidden]` helper is NOT needed). Paste verbatim into `app/globals.css`. This includes: the `*`/`body`/`a,button`/`button`/`input` resets, `.dim-page`/`@keyframes dimFade|dimPulse|dimRise`, `.dim-wa-pulse`, `.dim-pop`, and both `@media` blocks with all `.dim-*` rules.

Then prepend the font import at the very top of `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');
```

- [ ] **Step 3: Import globals in temporary root layout**

In `app/layout.tsx`, add at top: `import "./globals.css";`

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: success, no errors.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: move assets to public, port design CSS to globals.css"
```

---

### Task 4: Inline-style + interactivity helpers

**Files:**
- Create: `lib/style.ts`, `components/Hover.tsx`

**Interfaces:**
- Produces:
  - `s(css: string): React.CSSProperties` — parses a CSS declaration string into a React style object. Lets ported markup keep inline style strings verbatim.
  - `<Hover as="button"|"a"|... base={cssString} hover={cssString} {...rest}>` — client component applying `hover` styles on mouseenter/focus, restoring on leave/blur. Replaces `style-hover`/`style-focus`.

- [ ] **Step 1: Write failing test for `s()`**

`lib/style.test.ts`:

```ts
import { test, expect } from "@playwright/test";
import { s } from "./style";

test("parses declarations to camelCased object", () => {
  expect(s("display:flex;gap:10px")).toEqual({ display: "flex", gap: "10px" });
});
test("camelCases hyphenated props and keeps url() colons", () => {
  expect(s("background-image:url(/a.png);border-radius:8px")).toEqual({
    backgroundImage: "url(/a.png)",
    borderRadius: "8px",
  });
});
```

> Note: this unit test runs under Playwright's runner (`playwright test lib/style.test.ts`). Keep it in `lib/` next to the source.

- [ ] **Step 2: Run it, verify it fails**

Run: `npx playwright test lib/style.test.ts`
Expected: FAIL — `Cannot find module './style'`.

- [ ] **Step 3: Implement `lib/style.ts`**

```ts
import type { CSSProperties } from "react";

/** Parse an inline CSS declaration string into a React style object. */
export function s(css: string): CSSProperties {
  const out: Record<string, string> = {};
  for (const decl of css.split(";")) {
    const i = decl.indexOf(":");
    if (i === -1) continue;
    const prop = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim();
    if (!prop) continue;
    const key = prop.startsWith("--")
      ? prop
      : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[key] = value;
  }
  return out as CSSProperties;
}
```

- [ ] **Step 4: Run test, verify pass**

Run: `npx playwright test lib/style.test.ts`
Expected: PASS.

- [ ] **Step 5: Implement `components/Hover.tsx`**

```tsx
"use client";
import { useState } from "react";
import { s } from "@/lib/style";

type Tag = "button" | "a" | "div" | "span";
type Props = {
  as?: Tag;
  base: string;
  hover?: string;
  focus?: string;
} & React.HTMLAttributes<HTMLElement> & Record<string, unknown>;

export default function Hover({ as = "button", base, hover, focus, children, ...rest }: Props) {
  const [active, setActive] = useState(false);
  const Tag = as as keyof JSX.IntrinsicElements;
  const style = { ...s(base), ...(active ? s([hover, focus].filter(Boolean).join(";")) : {}) };
  return (
    <Tag
      {...rest}
      style={style}
      onMouseEnter={() => hover && setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => focus && setActive(true)}
      onBlur={() => setActive(false)}
    >
      {children as React.ReactNode}
    </Tag>
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add lib/style.ts lib/style.test.ts components/Hover.tsx
git commit -m "feat: add inline-style parser and Hover helper"
```

---

### Task 5: next-intl config, messages conversion, middleware

**Files:**
- Create: `lib/i18n.ts`, `lib/routing.ts`, `middleware.ts`, `messages/en.json`, `messages/es.json`, `messages/de.json`, `messages/fr.json`, `messages/pt.json`, `scripts/convert-i18n.mjs`

**Interfaces:**
- Produces:
  - `routing` object (from `lib/routing.ts`): `locales = ['en','es','de','fr','pt']`, `defaultLocale = 'en'`, `localePrefix = 'as-needed'`.
  - `Link`, `usePathname`, `useRouter`, `redirect`, `getPathname` re-exported from `lib/routing.ts` via `createNavigation`.
  - `messages/<locale>.json` — nested objects (dotted keys expanded), 1:1 with old dictionary.

- [ ] **Step 1: Write the conversion script**

`scripts/convert-i18n.mjs`:

```js
// Converts archive/i18n.js (window.I18N flat dotted keys) into nested
// messages/<locale>.json files. Run once: node scripts/convert-i18n.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const src = readFileSync("archive/i18n.js", "utf8");
// Evaluate the IIFE against a fake window to capture I18N.
const window = {};
new Function("window", src)(window);
const I18N = window.I18N;
if (!I18N) throw new Error("window.I18N not found");

function nest(flat) {
  const root = {};
  for (const [dotted, value] of Object.entries(flat)) {
    const parts = dotted.split(".");
    let node = root;
    for (let i = 0; i < parts.length - 1; i++) {
      node[parts[i]] ??= {};
      node = node[parts[i]];
    }
    node[parts[parts.length - 1]] = value;
  }
  return root;
}

mkdirSync("messages", { recursive: true });
for (const locale of ["en", "es", "de", "fr", "pt"]) {
  const dict = I18N[locale] || {};
  writeFileSync(`messages/${locale}.json`, JSON.stringify(nest(dict), null, 2) + "\n");
  console.log(`wrote messages/${locale}.json (${Object.keys(dict).length} keys)`);
}
```

- [ ] **Step 2: Run the conversion**

Run: `node scripts/convert-i18n.mjs`
Expected: five "wrote messages/..." lines, en with the most keys.

- [ ] **Step 3: Add `lib/routing.ts`**

```ts
import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "es", "de", "fr", "pt"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
```

- [ ] **Step 4: Add `lib/i18n.ts` (request config)**

```ts
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as never)) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
```

- [ ] **Step 5: Add `middleware.ts`**

```ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./lib/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
```

- [ ] **Step 6: Verify build**

Run: `npm run build`
Expected: success.

- [ ] **Step 7: Commit**

```bash
git add lib/routing.ts lib/i18n.ts middleware.ts messages scripts/convert-i18n.mjs next.config.ts
git commit -m "feat: add next-intl routing, request config, converted messages"
```

---

### Task 6: Locale layout shell + restructure routes

**Files:**
- Delete: temporary `app/page.tsx`
- Create: `app/[locale]/layout.tsx`, `app/[locale]/page.tsx` (placeholder home)
- Modify: `app/layout.tsx` (strip to pass-through), `lib/imgSrc.ts`

**Interfaces:**
- Consumes: `routing` (Task 5), `s()` (Task 4).
- Produces:
  - `app/[locale]/layout.tsx` exporting `generateStaticParams` over locales and wrapping children in `NextIntlClientProvider`, with `<html lang={locale}>`.
  - `imgSrc(base: 'hero'|'features'|'dishes'|'manager_data', locale: string): string` from `lib/imgSrc.ts`.

- [ ] **Step 1: Implement `lib/imgSrc.ts` (ported from archive/app.js)**

```ts
const LANG_FILE: Record<string, string> = {
  en: "english", es: "spanish", de: "german", fr: "french", pt: "portuguese",
};
const IMG_LANGS: Record<string, string[]> = {
  hero: ["en", "es", "de", "fr"],
  features: ["en", "es", "de", "fr"],
  dishes: ["en", "es", "de", "fr", "pt"],
  manager_data: ["en", "es", "de", "fr", "pt"],
};

export function imgSrc(base: keyof typeof IMG_LANGS, locale: string): string {
  const langs = IMG_LANGS[base] || ["en"];
  const lang = langs.includes(locale) ? locale : "en";
  return `/assets/${LANG_FILE[lang]}_${base}.png`;
}
```

- [ ] **Step 2: Reduce `app/layout.tsx` to a pass-through**

```tsx
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

- [ ] **Step 3: Implement `app/[locale]/layout.tsx`**

```tsx
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/lib/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
```

> Note: Header/Footer/WhatsApp are added to this layout in Tasks 7–8. The `<html>`/`<body>` live here (not the root layout) so `lang` is correct per locale.

- [ ] **Step 4: Delete temp home, add placeholder locale home**

```bash
git rm app/page.tsx
```

`app/[locale]/page.tsx`:

```tsx
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export default function Home({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = useTranslations();
  return <main>{t("nav.home")}</main>;
}
```

- [ ] **Step 5: Build + e2e**

Run: `npm run build` then `npm run test:e2e`
Expected: build lists `/[locale]` routes; smoke test still 200.

- [ ] **Step 6: Add locale routing e2e**

Append to `e2e/smoke.spec.ts`:

```ts
test("english at root, spanish prefixed", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("main")).toHaveText("Home");
  await page.goto("/es");
  await expect(page.locator("main")).toHaveText("Inicio");
});
```

> The `es` text comes from `messages/es.json` key `nav.home`. If the converted value differs, assert the actual value in that file.

- [ ] **Step 7: Run e2e**

Run: `npm run test:e2e`
Expected: PASS.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: locale layout, static params, imgSrc helper, route restructure"
```

---

### Task 7: Header, MobileNav, LangSwitcher

**Files:**
- Create: `components/Header.tsx`, `components/MobileNav.tsx`, `components/LangSwitcher.tsx`, `components/NavLink.tsx`
- Modify: `app/[locale]/layout.tsx` (mount `<Header/>`)
- Test: `e2e/header.spec.ts`

**Interfaces:**
- Consumes: `Link`, `usePathname` (Task 5), `s()` (Task 4), `useTranslations`.
- Produces:
  - `<Header/>` — client; sticky, scroll-aware bg/shadow (`scrolled` when `window.scrollY > 8`), active nav link colored from `usePathname`, hides desktop nav under 900px via `.dim-hide-md`, shows hamburger via `.dim-show-md`.
  - `<MobileNav/>` — client; toggles a panel with the five nav links.
  - `<LangSwitcher/>` — client; flag dropdown (flagcdn `gb/es/de/fr/pt`), switches locale via `useRouter().replace(pathname, {locale})`.

**Porting rules (apply to every component that copies markup):**
1. Source markup is in `archive/_design_source.html`. Find the section by its `<!-- ... -->` comment banner.
2. `class="x"` → `className="x"`; `style="..."` → `style={s("...")}` (copy the CSS string verbatim).
3. Self-close void tags (`<img ...>` → `<img ... />`, `<br>` → `<br />`, `<input ...>` → `<input ... />`).
4. `onClick="{{ navX }}"` → `<Link href="/x">` (or the home `Link href="/"`). `onClick="{{ toggleWA }}"` etc. → the relevant client handler.
5. `data-i18n="k"` → `{t("k")}` as the element's child text. `data-i18n-html="k"` → `dangerouslySetInnerHTML={{ __html: t.raw("k") }}` (preserves `<em>`/`<br>`). `data-i18n-placeholder="k"` → `placeholder={t("k")}`. `data-i18n-img="base"` → `src={imgSrc("base", locale)}`.
6. `style-hover`/`style-focus` elements → `<Hover as=... base="..." hover="..." focus="...">`.
7. Dynamic `{{ headerBg }}`, `{{ xLinkColor }}`, pill bindings → real React state/derived values (see below), NOT the static defaults the old `_build.js` used.

- [ ] **Step 1: Header source reference**

Read `archive/_design_source.html` HEADER block (the `<header ...>` through its closing `</header>`, ~lines 54–95 originally). Note the structure: logo button (already an `<img src="assets/dimonova-logo.png">` → change to `/assets/dimonova-logo.png`), desktop `<nav class="dim-hide-md">` with five buttons, a `.dim-show-md` hamburger, and the demo/contact CTA. The header `background` and `box-shadow` are driven by scroll.

- [ ] **Step 2: Implement `components/NavLink.tsx`**

```tsx
"use client";
import { usePathname, Link } from "@/lib/routing";
import { s } from "@/lib/style";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <Link href={href} style={s(`color:${active ? "#1F1814" : "#8A7E70"};transition:color .15s`)}>
      {children}
    </Link>
  );
}
```

- [ ] **Step 3: Implement `components/LangSwitcher.tsx`**

```tsx
"use client";
import { useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/routing";
import { s } from "@/lib/style";

const FLAGS: Record<string, string> = { en: "gb", es: "es", de: "de", fr: "fr", pt: "pt" };

export default function LangSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function pick(code: string) {
    setOpen(false);
    router.replace(pathname, { locale: code });
  }

  return (
    <div style={s("position:relative")}>
      <button onClick={() => setOpen((o) => !o)} style={s("display:flex;align-items:center;gap:6px")}>
        <img src={`https://flagcdn.com/24x18/${FLAGS[locale]}.png`} alt={locale} width={24} height={18} />
      </button>
      {open && (
        <div className="dim-pop" style={s("position:absolute;right:0;top:120%;background:#fff;border:1px solid #E8E0D2;border-radius:10px;padding:6px;display:flex;flex-direction:column;gap:2px;z-index:60")}>
          {Object.keys(FLAGS).map((code) => (
            <button key={code} data-lang={code} onClick={() => pick(code)} style={s("display:flex;align-items:center;gap:8px;padding:6px 10px;border-radius:6px")}>
              <img src={`https://flagcdn.com/24x18/${FLAGS[code]}.png`} alt={code} width={24} height={18} />
              <span style={s("font:500 13px/1 'Instrument Sans',sans-serif;text-transform:uppercase")}>{code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

> Reference the old LangSwitcher markup in `archive/_design_source.html` (search `data-lang`) and match padding/border values exactly where they differ from the above defaults.

- [ ] **Step 4: Implement `components/MobileNav.tsx`**

Port the `.dim-show-md` hamburger + the slide-down panel from `archive/_design_source.html` (search the mobile nav block). Use `useState` for open/close; links are `<NavLink>`; close on navigation. Keep all inline styles via `s()`.

- [ ] **Step 5: Implement `components/Header.tsx`**

```tsx
"use client";
import { useEffect, useState } from "react";
import { Link } from "@/lib/routing";
import { useTranslations } from "next-intl";
import { s } from "@/lib/style";
import NavLink from "./NavLink";
import MobileNav from "./MobileNav";
import LangSwitcher from "./LangSwitcher";

export default function Header() {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bg = scrolled ? "rgba(250,246,240,.85)" : "transparent";
  const shadow = scrolled ? "0 1px 0 rgba(31,24,20,.06)" : "none";

  return (
    <header style={s(`position:sticky;top:0;z-index:50;background:${bg};backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:${shadow};transition:background .25s ease,box-shadow .25s ease`)}>
      <div className="dim-pad-h" style={s("max-width:1240px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:18px 40px")}>
        <Link href="/" style={s("display:flex;align-items:center")}>
          <img src="/assets/dimonova-logo.png" alt="Dimonova" style={s("height:30px;width:auto;display:block")} />
        </Link>
        <nav className="dim-hide-md" style={s("display:flex;gap:32px;align-items:center;font:500 14px/1 'Instrument Sans',sans-serif")}>
          <NavLink href="/features">{t("nav.features")}</NavLink>
          <NavLink href="/pricing">{t("nav.pricing")}</NavLink>
          <NavLink href="/cases">{t("nav.cases")}</NavLink>
          <NavLink href="/about">{t("nav.about")}</NavLink>
          <NavLink href="/contact">{t("nav.contact")}</NavLink>
          <LangSwitcher />
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
```

> The exact `bg`/`shadow` values and the CTA button (if the original header has a "Request a demo" button — search the header block) must match `archive/_design_source.html`. The old `_build.js` set unscrolled defaults `headerBg=transparent`, `headerShadow=none`; the scrolled values come from the original `DCLogic`/`app.js` `render()` — copy them verbatim from `archive/app.js`.

- [ ] **Step 6: Mount Header in locale layout**

In `app/[locale]/layout.tsx`, inside `NextIntlClientProvider`, render `<Header />` before `{children}`.

- [ ] **Step 7: Write header e2e**

`e2e/header.spec.ts`:

```ts
import { test, expect } from "@playwright/test";

test("nav links route to real pages", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Features" }).click();
  await expect(page).toHaveURL("/features");
});

test("language switch changes URL locale", async ({ page }) => {
  await page.goto("/");
  await page.locator("[data-lang='es']").click({ trial: false }).catch(() => {});
  // open switcher then pick es
  await page.locator("header button").last().click();
  await page.locator("[data-lang='es']").click();
  await expect(page).toHaveURL(/\/es(\/|$)/);
});

test("mobile nav toggles under 900px", async ({ page }) => {
  await page.setViewportSize({ width: 480, height: 900 });
  await page.goto("/");
  await expect(page.locator(".dim-hide-md")).toBeHidden();
});
```

> After Header is mounted, the nav links exist on every page. If the LangSwitcher button selector is ambiguous, give the switcher button a stable `aria-label` (e.g. `aria-label="Language"`) and target that.

- [ ] **Step 8: Run e2e**

Run: `npm run test:e2e`
Expected: PASS.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: header, mobile nav, language switcher with real routing"
```

---

### Task 8: Footer + WhatsApp widget

**Files:**
- Create: `components/Footer.tsx`, `components/WhatsAppWidget.tsx`
- Modify: `app/[locale]/layout.tsx` (mount both)
- Test: `e2e/footer-wa.spec.ts`

**Interfaces:**
- Consumes: `Link`, `s()`, `useTranslations`.
- Produces: `<Footer/>` (server-safe; uses `useTranslations` so keep it a server component rendered within provider — if it needs client hooks, mark `"use client"`). `<WhatsAppWidget/>` — client; floating button toggles a panel (`waOpen` state), venue chips, "continue to WhatsApp" CTA.

- [ ] **Step 1: Port Footer**

Read the FOOTER block in `archive/_design_source.html` (search `<!-- FOOTER`/`footer.col_product`). Port verbatim per the porting rules. The brand logo button → `<Link href="/"><img src="/assets/dimonova-logo.png" .../></Link>`. Footer column links that map to pages → `<Link>`; Terms/Privacy/Cookies stay plain text (not translated). Mark `"use client"` only if needed; otherwise use `getTranslations` server-side.

- [ ] **Step 2: Port WhatsApp widget**

Read the WhatsApp block (search `wa.name`/`dim-wa-pulse`/`toggle-wa`). Implement as a client component: a floating launcher button (`.dim-wa-pulse`), and a panel shown when `waOpen` (`useState`). Venue chips (`wa.chip_restaurant` etc.) and the disclaimer port verbatim. The launcher `onClick` toggles `waOpen`.

- [ ] **Step 3: Mount in layout**

In `app/[locale]/layout.tsx`: render `<Header/>`, `{children}`, `<Footer/>`, `<WhatsAppWidget/>` in that order inside the provider.

- [ ] **Step 4: Write e2e**

`e2e/footer-wa.spec.ts`:

```ts
import { test, expect } from "@playwright/test";

test("whatsapp widget toggles open", async ({ page }) => {
  await page.goto("/");
  const panel = page.getByText(/Dimonova team|Equipo Dimonova/i);
  await expect(panel).toBeHidden();
  await page.getByRole("button", { name: /whatsapp/i }).first().click();
  await expect(panel).toBeVisible();
});

test("footer renders tagline", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("footer")).toBeVisible();
});
```

> If the WhatsApp launcher has no accessible name, add `aria-label="WhatsApp"` to it. Adjust the panel matcher to the actual `wa.name` value.

- [ ] **Step 5: Run e2e**

Run: `npm run test:e2e`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: footer and WhatsApp widget"
```

---

### Task 9: Home page sections

**Files:**
- Create: `components/sections/Hero.tsx`, `LogoStrip.tsx`, `FeaturesSummary.tsx`, `HowItWorks.tsx`, `Pricing*`/`Cases*` teasers as present on home, `HomeCta.tsx` (one file per distinct home section in the source)
- Modify: `app/[locale]/page.tsx`
- Test: `e2e/home.spec.ts`

**Interfaces:**
- Consumes: `s()`, `imgSrc`, `useTranslations`/`getTranslations`, `Link`, `Hover`.
- Produces: a home page rendering all home sections from the source, in order.

- [ ] **Step 1: Identify home sections**

In `archive/_design_source.html`, the home page is the `<div class="sc-if" data-if="isHome">` block (originally `<sc-if value="{{ isHome }}">`). List each `<section>`/comment-bannered block inside it. Create one component per block under `components/sections/`.

- [ ] **Step 2: Port each home section (worked example — Hero)**

`components/sections/Hero.tsx`:

```tsx
import { getTranslations, getLocale } from "next-intl/server";
import { s } from "@/lib/style";
import { imgSrc } from "@/lib/imgSrc";

export default async function Hero() {
  const t = await getTranslations();
  const locale = await getLocale();
  return (
    <section className="dim-pad-h" style={s("/* copy the hero section's outer style verbatim */")}>
      {/* Port the hero markup from archive/_design_source.html verbatim per the
          porting rules. Example transforms applied to the inner nodes: */}
      <div className="dim-hero-grid" style={s("/* verbatim */")}>
        <div>
          <div style={s("/* eyebrow style */")}>{t("home.hero.eyebrow")}</div>
          <h1 className="dim-h1" style={s("/* verbatim */")}>
            {t("home.hero.title1")}<br />{t("home.hero.title2")}
          </h1>
          <p style={s("/* verbatim */")}>{t("home.hero.body")}</p>
          <div style={s("/* verbatim */")} dangerouslySetInnerHTML={{ __html: t.raw("home.hero.avatars") }} />
        </div>
        <div className="dim-hero-visual" style={s("/* verbatim */")}>
          <img src={imgSrc("hero", locale)} alt="" style={s("/* verbatim */")} />
        </div>
      </div>
    </section>
  );
}
```

Replace every `/* verbatim */` with the exact CSS string from the source. Repeat this transform for each home section component. Buttons that link to pages → `<Link>`; buttons with `style-hover` → `<Hover>`.

- [ ] **Step 3: Assemble `app/[locale]/page.tsx`**

```tsx
import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import FeaturesSummary from "@/components/sections/FeaturesSummary";
// ...import the rest in source order

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main>
      <Hero />
      <LogoStrip />
      <FeaturesSummary />
      {/* ...rest in source order */}
    </main>
  );
}
```

- [ ] **Step 4: Write home e2e**

`e2e/home.spec.ts`:

```ts
import { test, expect } from "@playwright/test";

test("home hero heading renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("digital menu");
});

test("home shows venue logo strip", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByAltText("La Pulpería")).toBeVisible();
});

test("localized hero screenshot swaps for spanish", async ({ page }) => {
  await page.goto("/es");
  await expect(page.locator("img[src*='spanish_hero']")).toBeVisible();
});
```

- [ ] **Step 5: Run e2e**

Run: `npm run test:e2e`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: home page sections"
```

---

### Task 10: Features, Pricing, Cases, About pages

**Files:**
- Create: `app/[locale]/features/page.tsx`, `app/[locale]/pricing/page.tsx`, `app/[locale]/cases/page.tsx`, `app/[locale]/about/page.tsx`, plus their section components under `components/sections/`
- Test: `e2e/pages.spec.ts`

**Interfaces:**
- Consumes: same helpers as Task 9.
- Produces: four statically-generated pages, each porting its `data-if` block from the source.

- [ ] **Step 1: Port each page's source block**

For each page, the source block is `<div class="sc-if" data-if="isFeatures">` (and `isPricing`, `isCases`, `isAbout`). Port each contained section into `components/sections/` components per the porting rules, and assemble a `page.tsx` mirroring Task 9's pattern (await params, `setRequestLocale`, render sections in source order).

The About page uses headshots: `<img src="/assets/pablo_headshot.jpeg">` and `<img src="/assets/sergio_headshot.jpg">` (verbatim paths under `public/assets`).

- [ ] **Step 2: Each page.tsx skeleton (repeat per page)**

```tsx
import { setRequestLocale } from "next-intl/server";
// import this page's section components

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <main>{/* sections in source order */}</main>;
}
```

- [ ] **Step 3: Write e2e for all four**

`e2e/pages.spec.ts`:

```ts
import { test, expect } from "@playwright/test";

const pages = ["features", "pricing", "cases", "about"];
for (const p of pages) {
  test(`${p} page renders a heading`, async ({ page }) => {
    await page.goto(`/${p}`);
    await expect(page.getByRole("heading").first()).toBeVisible();
  });
  test(`${p} page works in spanish`, async ({ page }) => {
    await page.goto(`/es/${p}`);
    await expect(page.getByRole("heading").first()).toBeVisible();
  });
}
```

- [ ] **Step 4: Run e2e**

Run: `npm run test:e2e`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: features, pricing, cases, about pages"
```

---

### Task 11: Contact page + ContactForm

**Files:**
- Create: `app/[locale]/contact/page.tsx`, `components/ContactForm.tsx`, plus any contact-side section component
- Test: `e2e/contact.spec.ts`

**Interfaces:**
- Consumes: `s()`, `useTranslations`, `Hover`.
- Produces: `<ContactForm/>` — client; venue-type picker (`restaurant|pub|cafe|other`, default `restaurant`), name/email/venue inputs, submit with validation. Validation rules (from `archive/app.js` `submitForm`): name required (`errors.name`), venue required (`errors.venue`), email required (`errors.email_required`) and must match the email regex else (`errors.email_invalid`). On success show the submitted/thank-you state; `resetForm` clears it.

- [ ] **Step 1: Confirm validation rules from source**

Read `archive/app.js` `submitForm()` and copy the exact email regex and the required-field logic. Reproduce them in `ContactForm.tsx` (do not invent new rules).

- [ ] **Step 2: Implement `components/ContactForm.tsx`**

Port the contact form markup from the `data-if="isContact"` block. Wire:
- venue pills → `useState<"restaurant"|"pub"|"cafe"|"other">("restaurant")`, applying the pill style bindings (active = filled dark, others = bordered) exactly as `archive/app.js` computed them.
- inputs → controlled `useState` for `name`, `email`, `venue`.
- submit handler → run the ported validation; set `errors` state; if valid, set `submitted=true`.
- error text → render under each field from the corresponding `errors.*` translation key, only when that field has an error.
- placeholders → `placeholder={t("...placeholder key...")}` per `data-i18n-placeholder`.

```tsx
"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { s } from "@/lib/style";

const EMAIL_RE = /* copy exact regex from archive/app.js */;

export default function ContactForm() {
  const t = useTranslations();
  const [vtype, setVtype] = useState<"restaurant" | "pub" | "cafe" | "other">("restaurant");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [venue, setVenue] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; venue?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (!name.trim()) next.name = t("errors.name");
    if (!venue.trim()) next.venue = t("errors.venue");
    if (!email.trim()) next.email = t("errors.email_required");
    else if (!EMAIL_RE.test(email)) next.email = t("errors.email_invalid");
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  }
  // ...render ported markup; show success state when submitted
}
```

- [ ] **Step 3: Assemble contact page**

`app/[locale]/contact/page.tsx` — await params, `setRequestLocale`, render the contact intro/side section(s) + `<ContactForm/>` in source order.

- [ ] **Step 4: Write e2e**

`e2e/contact.spec.ts`:

```ts
import { test, expect } from "@playwright/test";

test("empty submit shows validation errors", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: /send|request|submit/i }).click();
  await expect(page.getByText(/name is required|tu nombre/i)).toBeVisible();
});

test("valid submit succeeds", async ({ page }) => {
  await page.goto("/contact");
  await page.getByLabel(/name/i).fill("Test");
  await page.getByLabel(/venue|place/i).fill("Test Pub");
  await page.getByLabel(/e-?mail/i).fill("test@example.com");
  await page.getByRole("button", { name: /send|request|submit/i }).click();
  await expect(page.getByText(/thank|gracias|thanks/i)).toBeVisible();
});

test("venue picker selects pub", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: /pub/i }).first().click();
  // assert the pub pill is in the active (filled) style
});
```

> If inputs lack labels, target by `placeholder` or add `aria-label`. Match success text to the actual submitted-state copy. Fill in the venue-picker assertion against the active pill's computed background.

- [ ] **Step 5: Run e2e**

Run: `npm run test:e2e`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: contact page and validated contact form"
```

---

### Task 12: SEO metadata, sitemap, robots

**Files:**
- Modify: `app/[locale]/layout.tsx` (add `generateMetadata`), each `page.tsx` (add `generateMetadata`)
- Create: `app/sitemap.ts`, `app/robots.ts`, `lib/meta.ts`
- Test: `e2e/seo.spec.ts`

**Interfaces:**
- Consumes: `routing`, `getTranslations`.
- Produces:
  - `lib/meta.ts`: `pageMetadata(locale, path, titleKey, descKey)` → a `Metadata` object with `title`, `description`, `alternates.canonical`, `alternates.languages` (hreflang for all locales), and OpenGraph.
  - `app/sitemap.ts`, `app/robots.ts`.

- [ ] **Step 1: Set `metadataBase` + favicons + theme color in root layout**

In `app/layout.tsx` export:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://dimonova.com"),
  themeColor: "#FAF6F0",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};
```

> Confirm production domain; if not `dimonova.com`, use the real one.

- [ ] **Step 2: Implement `lib/meta.ts`**

```ts
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "./routing";

export async function pageMetadata(
  locale: string,
  path: string, // e.g. "" for home, "/features"
  titleKey: string,
  descKey: string,
): Promise<Metadata> {
  const t = await getTranslations({ locale });
  const seg = (l: string) => (l === routing.defaultLocale ? path || "/" : `/${l}${path}`);
  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[l] = seg(l);
  const title = t(titleKey);
  const description = t(descKey);
  return {
    title,
    description,
    alternates: { canonical: seg(locale), languages },
    openGraph: { title, description, type: "website", locale },
  };
}
```

> Add SEO title/description keys to `messages/*.json` if they don't already exist (e.g. `seo.home.title`, `seo.home.desc`, ... per page). If the dictionary lacks them, reuse existing hero/intro keys per page and note it. Keep `en` values matching the old `_build.js` `<title>`/description for home.

- [ ] **Step 3: Add `generateMetadata` to each page**

Example for home `app/[locale]/page.tsx`:

```tsx
import { pageMetadata } from "@/lib/meta";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return pageMetadata(locale, "", "seo.home.title", "seo.home.desc");
}
```

Repeat per page with its path and keys.

- [ ] **Step 4: Implement `app/sitemap.ts` and `app/robots.ts`**

```ts
// app/sitemap.ts
import type { MetadataRoute } from "next";
import { routing } from "@/lib/routing";

const PATHS = ["", "/features", "/pricing", "/cases", "/about", "/contact"];
const BASE = "https://dimonova.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];
  for (const p of PATHS) {
    for (const l of routing.locales) {
      const path = l === routing.defaultLocale ? p || "/" : `/${l}${p}`;
      urls.push({ url: `${BASE}${path}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 });
    }
  }
  return urls;
}
```

```ts
// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://dimonova.com/sitemap.xml" };
}
```

- [ ] **Step 5: Write SEO e2e**

`e2e/seo.spec.ts`:

```ts
import { test, expect } from "@playwright/test";

test("home has title and canonical and hreflang", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Dimonova/);
  await expect(page.locator("link[rel='canonical']")).toHaveCount(1);
  await expect(page.locator("link[rel='alternate'][hreflang='es']")).toHaveCount(1);
});

test("sitemap and robots resolve", async ({ page }) => {
  expect((await page.goto("/sitemap.xml"))?.status()).toBe(200);
  expect((await page.goto("/robots.txt"))?.status()).toBe(200);
});
```

- [ ] **Step 6: Run e2e**

Run: `npm run test:e2e`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: per-page SEO metadata, hreflang, sitemap, robots"
```

---

### Task 13: Docs, cleanup, final verification

**Files:**
- Modify: `README.md`, `CLAUDE.md`, `TODO.md`
- Delete: `.vercelignore` (static-only), `.nojekyll`
- Test: full suite

**Interfaces:**
- Produces: updated docs describing the Next architecture; green build + e2e.

- [ ] **Step 1: Remove obsolete static-deploy files**

```bash
git rm .vercelignore .nojekyll
```

- [ ] **Step 2: Rewrite `CLAUDE.md` and `README.md`**

Replace the "static site / `_build.js` / hash SPA" descriptions with the Next.js architecture: App Router, `app/[locale]/`, `components/`, `messages/`, next-intl, inline styles via `lib/style.ts`, Playwright e2e, `archive/` holds the old site. Update commands: `npm run dev`, `npm run build`, `npm run test:e2e`.

- [ ] **Step 3: Update `TODO.md`**

Remove items made obsolete by the port (the `_build.js` pipeline, hash-routing accessibility note if now resolved by `<Link>`). Keep the contact-form backend item. Add any follow-ups discovered during the port.

- [ ] **Step 4: Full verification**

Run: `npm run build`
Expected: success; all 11 routes × locales statically generated, no type errors.

Run: `npm run test:e2e`
Expected: all specs PASS.

- [ ] **Step 5: Visual spot-check against the archive**

Run `npm run dev`, open `/`, `/features`, `/pricing`, `/cases`, `/about`, `/contact` and the `/es` variants. Compare side-by-side with the old site (open `archive/index.html` via a static server) for visual parity. Note any drift and fix the offending inline style string.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "docs: update README/CLAUDE/TODO for Next.js; remove static deploy files"
```

---

## Self-Review

**Spec coverage:**
- App Router + TS + SSG → Tasks 1, 6. ✓
- Locale-prefixed routing (`as-needed`) → Task 5. ✓
- Six route segments → Tasks 9 (home), 10 (4 pages), 11 (contact). ✓
- Inline styles preserved → Task 4 (`s()`), applied throughout. ✓
- globals.css (keyframes/media/`.dim-*`) → Task 3. ✓
- State-machine mapping (scroll header, mobile nav, WA, vtype, errors, lang, hover) → Tasks 7, 8, 11. ✓
- i18n migration (nested JSON, `t`/`t.raw`/placeholder/img) → Tasks 5, 6, and porting rules in Task 7. ✓
- SEO (generateMetadata, hreflang, canonical, sitemap, robots, favicons, theme-color) → Task 12. ✓
- Contact form front-end-only, same validation → Task 11. ✓
- Localized screenshots → Task 6 (`imgSrc`), used in Tasks 9–10. ✓
- Archive old files → Task 1. ✓
- Playwright e2e mirroring smoke test → Tasks 2, 7–12. ✓
- Vercel/deploy cleanup → Task 13. ✓
- Logo in header/footer → Tasks 7, 8 (uses `/assets/dimonova-logo.png`). ✓

**Type consistency:** `s()`, `imgSrc(base, locale)`, `pageMetadata(locale, path, titleKey, descKey)`, `routing`, `Link`/`usePathname`/`useRouter` from `lib/routing.ts` used consistently across tasks. ✓

**Known fill-ins (require reading the archive, not placeholders):** exact inline-style strings per ported node (rule: copy verbatim from `archive/_design_source.html`); exact scrolled header bg/shadow and pill style values (rule: copy from `archive/app.js` `render()`); exact email regex (rule: copy from `archive/app.js` `submitForm`); SEO copy keys (rule: reuse home `<title>`/description from `archive/_build.js`, add per-page keys to messages). These are deterministic lookups in known files, intentionally not reproduced here to avoid drift against the source of truth.
