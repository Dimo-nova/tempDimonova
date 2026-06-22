# Dimonova website

The marketing website for **Dimonova** — done-for-you digital menus for
restaurants, pubs and cafés. We build, style, host and run the menu; the venue
just changes a dish in a couple of taps.

It's a fast, lightweight site with six pages — **Home, Features, Pricing,
Case studies, About,** and **Contact** — including a contact/demo-request form
and a WhatsApp chat widget.

## See it locally

You don't need to install anything to look at it — just open `index.html` in a
web browser.

To run it on a local web address (recommended, so everything behaves exactly as
it will live):

```bash
npm run dev
```

Then open the address it prints (usually <http://localhost:3000>).

## Put it online

The site is hosted on **Vercel**. To publish:

```bash
vercel            # creates a private preview link to share
vercel --prod     # publishes to the live site
```

(You'll need the Vercel CLI installed and to be logged in: `npm i -g vercel`
then `vercel login`.)

## What still needs doing before launch

There's a checklist in **[`TODO.md`](./TODO.md)** — the main things are:

- **Real content** — the case studies, testimonials, team members, venue logos
  and all the placeholder images are stand-ins. They're meant to be swapped for
  the real thing.
- **The contact form** currently shows a "thanks, we'll be in touch" message but
  doesn't actually send anywhere yet — it needs connecting to email.
- **The WhatsApp button** is a preview and doesn't open a real chat yet.
- **Contact details and prices** (`hello@dimonova.com`, the phone number,
  "From €600 / €45 a month") should be double-checked and updated.

## What's in here

The visitor-facing site is just three files: `index.html`, `styles.css` and
`app.js`. Everything else (files starting with `_`, plus `CLAUDE.md`) is for
development and isn't part of the published site.

If you're a developer (or an AI assistant) picking this up, start with
**[`CLAUDE.md`](./CLAUDE.md)** — it explains how the site is structured, how it's
generated from the original design, and how to test changes.

## Tech, briefly

Plain HTML, CSS and JavaScript — no framework, no build step needed to run.
It was built from a Claude Design export and deploys as a static site.
