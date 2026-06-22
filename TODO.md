# Dimonova site — TODO

Status legend: `[ ]` not started · `[~]` in progress · `[x]` done

## 📝 Before launch — content (replace placeholders)

- [ ] Replace placeholder **case studies** (featured + 6 grid cards) with real venues, quotes, photos and results — `index.html`, "CASE STUDIES" section.
- [ ] Replace the home-page **testimonial** ("Placeholder testimonial…") and client name/role.
- [ ] Replace the **team** section (4 "Name placeholder" cards) with real names, roles and portraits — About page.
- [ ] Replace the 6 **"venue logo"** placeholders in the home logo strip.
- [ ] Swap all striped **placeholder image blocks** (`repeating-linear-gradient`) for real photos/screenshots: hero phone/dashboard, product shot, analytics, case-study photos, team portraits.
- [ ] Confirm / update **pricing** numbers — currently "From €600" one-time and "From €45/mo".
- [ ] Confirm **contact details**: `hello@dimonova.com`, `+353 (0)1 555 0199`, opening hours. Update everywhere (header, footer, contact page).

## 🔌 Before launch — functional

- [ ] **Wire up the contact form.** It currently validates and shows a success state but sends nothing. Post to a form service (e.g. Formspree, Vercel serverless function + email provider) — see `submitForm()` in `app.js`.
- [ ] **Make the WhatsApp widget real.** It's a UI prototype. Point "Continue to WhatsApp" at `https://wa.me/<number>` and remove the "prototype, won't actually open" note — WhatsApp section in `index.html`.
- [ ] Add real **legal pages** — Terms / Privacy / Cookies are static footer text, not links.
- [ ] Add a real **favicon / logo asset** (currently an inline SVG data-URI favicon).

## 🔎 Before launch — quality

- [ ] **Accessibility pass:** nav is built from `<button>`s — verify keyboard/screen-reader behaviour, add `aria-current` to the active nav link, `aria-label`s on icon-only buttons (WhatsApp FAB, mobile menu), and `alt` text on images once added.
- [ ] **SEO:** add an `og:image`, set the canonical/real domain, add a `sitemap.xml` and `robots.txt`. Consider that hash routes aren't separately indexable — if per-page SEO matters, see "Future" below.
- [ ] Cross-browser / device QA (iOS Safari, Android Chrome).

## 🌱 Future / nice to have

- [ ] (Optional) Convert hash routing to **real routes** (`/features`, `/pricing`, …) for per-page SEO and shareable links. This is a bigger change — would likely move to a framework (Next.js) or pre-rendered multi-page build.
- [ ] Add **analytics** (Vercel Analytics / Plausible).
- [ ] Connect a **custom domain** in Vercel.
- [ ] Cookie-consent banner if analytics/marketing cookies are added.

---
See `CLAUDE.md` for architecture/dev notes and `README.md` for the human overview.
