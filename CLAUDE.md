# CLAUDE.md

Guidance for Claude (and other agents) working in this repo.

## What this is

A **static marketing site** for Dimonova — a done-for-you digital-menu service
for restaurants, pubs and cafés. It was generated from a Claude Design export
and implemented as plain HTML/CSS/JS. No framework, no build step required to
run or deploy.

**Open tasks live in [`TODO.md`](./TODO.md)** — check it before starting work and
keep it updated. Human-facing overview is in [`README.md`](./README.md).

## Architecture

It's a single-page app that switches between six "pages" using the URL hash.
There is no router library and no server — everything is client-side.

| File | Role | Hand-written? |
|------|------|---------------|
| `index.html` | All six pages as sibling sections, header, footer, WhatsApp widget. | Generated |
| `styles.css` | Design CSS (fonts, keyframes, responsive `@media` rules) + runtime helpers. | Generated |
| `app.js` | The client runtime / state machine. | **Hand-written** |
| `_design_source.html` | The original Claude Design export (the source of truth for markup). | Source |
| `_build.js` | Transforms `_design_source.html` → `index.html` + `styles.css`. | Hand-written |
| `_smoke-test.js` | jsdom test of the runtime behaviour. | Hand-written |

### The six pages

`home`, `features`, `pricing`, `cases`, `about`, `contact` — selected by hash
(`#home` … `#contact`). Each is wrapped in `<div class="sc-if" data-if="isHome">`
etc. `app.js` shows exactly one at a time.

## How the build works (important)

`index.html` and `styles.css` are **generated** — do not hand-edit them for
structural/content changes that should persist. Edit `_design_source.html` (or
the design in Claude Design) and re-run the build:

```bash
npm run build      # node _build.js
```

`_build.js` converts the Claude Design template syntax into plain HTML that
`app.js` understands:

| Design syntax | Becomes | Driven by |
|---------------|---------|-----------|
| `<sc-if value="{{ X }}">…</sc-if>` | `<div class="sc-if" data-if="X">…</div>` | `app.js` toggles `hidden` |
| `onClick="{{ navFeatures }}"` | `data-nav="features"` | click delegation |
| `onClick="{{ toggleWA }}"` | `data-action="toggle-wa"` | click delegation |
| `onClick="{{ pickPub }}"` | `data-vtype="pub"` | click delegation |
| `onChange="{{ setName }}"` | `data-field="name"` | read on submit |
| `onSubmit="{{ submitForm }}"` | `data-action="submit-form"` | submit delegation |
| `style-hover="…"` | `data-hover="…"` | hover helper in `app.js` |
| `style-focus="…"` | `data-focus="…"` | focus helper in `app.js` |
| `{{ headerBg }}`, `{{ …LinkColor }}`, pill/border bindings | static default values | recomputed by `app.js` |

If you add a new `{{ binding }}` or `<sc-if>` in the design, `_build.js` will
**fail loudly** on any unhandled `{{ … }}` token — add a matching rule there
and a matching case in `app.js`'s `computeIf()` / render logic.

### `app.js` mirrors the original `DCLogic`

`app.js` is a faithful re-implementation of the design's `DCLogic` component
(originally at the bottom of `_design_source.html`). Key pieces:

- `state` — `page, scrolled, mobileNav, waOpen, vtype, submitted, errors`.
- `computeIf(name)` — evaluates each `data-if` condition (mirrors `renderVals`).
- `render()` — toggles `.sc-if` visibility, fills error text, sets header
  bg/shadow on scroll, recolours the active nav link, styles the venue pills,
  replays the page-enter animation.
- `readHash()` / `navigate()` — hash routing; resets `mobileNav`, `submitted`,
  `errors` on navigation and scrolls to top (matches the original).
- `submitForm()` — same validation rules as the source (name/venue required,
  email required + regex). Front-end only; see `TODO.md` to wire up sending.
- Event handling is **delegated** on `document` (`click`, `submit`, `input`) —
  generated markup carries `data-*` hooks, so no per-element wiring.
- `bindStateStyles()` — replaces `style-hover`/`style-focus` by applying the
  extra styles on `mouseenter`/`focus` and restoring on leave/blur.

If you edit `app.js` by hand, keep it framework-free vanilla JS and re-run the
test.

## Testing

```bash
npm install        # jsdom (devDependency)
npm test           # node _smoke-test.js — 24 assertions, must stay green
```

The test exercises routing, page visibility, the WhatsApp toggle, mobile nav,
venue pills, and the full form-validation flow. **Add an assertion when you add
behaviour.** Note: jsdom doesn't auto-fire `hashchange` on programmatic hash
changes or do implicit form submission, so the test fires those events
explicitly — real browsers do them natively.

## Conventions / gotchas

- **Styling is inline** on elements (copied verbatim from the design) — match
  that style when editing markup in `_design_source.html`. Shared rules
  (keyframes, responsive breakpoints, `.dim-*` classes) live in the `<style>`
  block of `_design_source.html`, which the build copies into `styles.css`.
- Files prefixed with `_` are **source/build/test artifacts**, excluded from the
  Vercel deploy via `.vercelignore`. Only `index.html`, `styles.css`, `app.js`
  ship.
- Navigation uses `<button>` elements (from the design), not `<a>` — see the
  accessibility item in `TODO.md`.
- Content marked "placeholder" is intentional. Don't invent real names, quotes,
  metrics, or photos — leave placeholders until real content is supplied
  (tracked in `TODO.md`).

## Deploy

Static, zero-config on Vercel:

```bash
vercel             # preview
vercel --prod      # production
```
