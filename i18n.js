/* ============================================================
   Dimonova — translation dictionary
   window.I18N[lang][key] -> string. Applied by setLanguage() in app.js.

   Conventions:
   - `data-i18n="key"`            -> element.textContent
   - `data-i18n-html="key"`       -> element.innerHTML (headings with <em> accents)
   - `data-i18n-placeholder="key"`-> element.placeholder

   English ("en") is the source of truth and the fallback. Other languages
   are filled in their own phases (es, de, fr, pt).

   NOT translated (left as-is in the markup, no key): the brand name
   "Dimonova", email/phone/hours, currency and numeric values, dish names
   and venue props in the mockups ("The Crowing Cock", "Beef & Guinness pie"),
   and the Terms/Privacy/Cookies labels.
   ============================================================ */
(function () {
  "use strict";

  window.I18N = {
    en: {
      // ---- nav / header / footer shared ----
      "nav.features": "Features",
      "nav.pricing": "Pricing",
      "nav.cases": "Case studies",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.home": "Home",
      "nav.whatsapp": "WhatsApp",
      "nav.demo": "Request a demo",

      // ---- common buttons ----
      "common.chat_wa": "Chat on WhatsApp",
      "common.demo": "Request a demo",
      "common.demo_arrow": "Request a demo →",

      // ---- home: hero ----
      "home.hero.eyebrow": "For restaurants, pubs & cafés",
      "home.hero.title1": "A menu worth <em class=\"dim-h1-accent\" style=\"font-family:'Instrument Serif',serif;font-weight:400;font-style:italic;color:#B8523A;font-size:64px\">showing off</em>,",
      "home.hero.title2": "built and set up for you.",
      "home.hero.body": "We build your digital menu, style it to your brand, link it into your existing website, and train your team. You change a dish in two taps.",
      "home.hero.avatars": "Loved by independent venues<br>across the country",

      // ---- home: hero dashboard visual ----
      "home.viz.dash_label": "Dashboard · live",
      "home.viz.dash_title": "This week's favourites",
      "home.viz.days": "Mon — Sun",
      "home.viz.menu_views": "Menu views",
      "home.viz.updates": "Updates this week",

      // ---- home: logo strip ----
      "home.logos.label": "Trusted by independent venues",
      "home.logos.placeholder": "venue logo",

      // ---- home: features summary ----
      "home.feat.eyebrow": "What you get",
      "home.feat.title": "Software that feels like <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">your venue</em>, not a generic template.",
      "home.feat.see_all": "See all features →",
      "home.feat.c1_title": "A digital menu, properly designed",
      "home.feat.c1_body": "Photos, descriptions, allergens, prices — all laid out so diners actually read them.",
      "home.feat.c2_title": "A dashboard you can run from the bar",
      "home.feat.c2_body": "Edit a dish, swap a photo, mark something sold out — from any phone or laptop, in seconds.",
      "home.feat.c3_title": "See what diners actually want",
      "home.feat.c3_body": "Dish popularity, views, and trends — so your next menu is based on data, not guesswork.",

      // ---- home: how it works ----
      "home.how.eyebrow": "How it works",
      "home.how.title": "We do the heavy lifting. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#D69B7F\">You run the show.</em>",
      "home.how.s1_title": "Send your menu",
      "home.how.s1_body": "PDF, a phone photo of the chalkboard, a Word doc — whatever you've got. We take it from there.",
      "home.how.s2_title": "We build & style it",
      "home.how.s2_body": "Matched to your brand, your tone, your venue. Photos, allergens, sections — properly laid out.",
      "home.how.s3_title": "Link & train",
      "home.how.s3_body": "Plugged into your existing website. A 30-minute training call with your team. That's the handover.",
      "home.how.s4_title": "You run it",
      "home.how.s4_body": "Edit a dish in 10 seconds. See what's selling. We're still there when you need us.",
      "home.how.quote": "\"Most people go live in 5–7 days from sending us their menu. The training call is the longest meeting we ask of you.\"",
      "home.how.more": "More on the setup →",

      // ---- home: differentiator ----
      "home.diff.eyebrow": "The difference",
      "home.diff.title": "This isn't <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">another tool</em> to learn. It's a service.",
      "home.diff.body": "Most digital menu products hand you a builder, a help centre, and a free trial. We don't. We build the thing for you, plug it into your site, and sit down with your team to walk them through it.",
      "home.diff.p1": "We build your menu from whatever you have — PDF, photo, doc.",
      "home.diff.p2": "We style it to match your brand and venue.",
      "home.diff.p3": "We link it into your existing website ourselves.",
      "home.diff.p4": "We train your team in a single 30-minute session.",
      "home.diff.card_badge": "product shot",
      "home.diff.card_pill": "Onboarding session — visual",
      "home.diff.card_title": "Setup, sorted",
      "home.diff.card_body": "From signed contract to live menu in days, not weeks.",

      // ---- home: social proof ----
      "home.proof.quote": "Placeholder testimonial — the kind of quote that says \"we don't have to think about the menu anymore.\" Real client quote goes here.",
      "home.proof.client": "Client name",
      "home.proof.role": "Role · Venue name",
      "home.proof.stat1_label": "Average go-live",
      "home.proof.stat1_unit": "days",
      "home.proof.stat2_label": "Time to edit a dish",
      "home.proof.stat2_unit": "seconds",

      // ---- home: pricing teaser ----
      "home.price.eyebrow": "Pricing, plainly",
      "home.price.title": "A one-time setup fee, then a flat monthly subscription.",
      "home.price.body": "Hosting, support, and updates included. No per-cover charges, no per-dish charges, no surprise invoices.",
      "home.price.see_full": "See full pricing →",
      "home.price.quote_cta": "Get a tailored quote",

      // ---- home: closing CTA ----
      "home.cta.eyebrow": "Ready when you are",
      "home.cta.title": "Let's get your menu <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">live</em>.",
      "home.cta.body": "A 20-minute demo. We'll show you the dashboard, walk through real venue setups, and answer everything. No commitment.",

      // ---- features: intro ----
      "features.eyebrow": "Features",
      "features.title": "Everything you need to run your menu. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Nothing you don't.</em>",
      "features.intro": "Four parts to Dimonova: the digital menu your diners see, the dashboard your team runs it from, the analytics that tell you what's working, and the done-for-you onboarding that gets all of it live.",

      // ---- features: 1 digital menu ----
      "features.f1.eyebrow": "01 · The digital menu",
      "features.f1.title": "A menu that looks like your venue, not a takeaway app.",
      "features.f1.body": "Photos, descriptions, allergens, prices, sections, daily specials — properly typeset. Loads fast on a phone. Lives inside your existing website, so diners never feel handed off to a third-party tool.",
      "features.f1.p1": "<strong style=\"font-weight:600\">Embedded, not redirected.</strong> Lives at <span style=\"font-family:'Instrument Serif',serif;font-style:italic\">yourvenue.com/menu</span>, not a generic URL.",
      "features.f1.p2": "<strong style=\"font-weight:600\">Allergens &amp; dietary tags</strong> on every dish, filterable for diners.",
      "features.f1.p3": "<strong style=\"font-weight:600\">Optional QR codes</strong> — table cards, posters, business cards — point straight to it.",
      "features.f1.p4": "<strong style=\"font-weight:600\">Sold-out states</strong> flip a dish off instantly during service.",

      // ---- features: 2 dashboard ----
      "features.f2.eyebrow": "02 · The dashboard",
      "features.f2.title": "If you can use Instagram, you can use this.",
      "features.f2.body": "No menu engineer training, no agency tickets, no \"raise a support request to change a price.\" Whoever's running the floor can flip a dish off, raise a price, or swap a photo from their phone in under a minute.",
      "features.f2.p1": "<strong style=\"font-weight:600\">Drag &amp; drop</strong> dishes between sections.",
      "features.f2.p2": "<strong style=\"font-weight:600\">Multiple users</strong> — owner, chef, floor manager.",
      "features.f2.p3": "<strong style=\"font-weight:600\">Schedule changes</strong> — flip on the brunch menu Saturday at 9am, off at 2pm.",
      "features.f2.p4": "<strong style=\"font-weight:600\">Works on any device.</strong> Bartender's phone, manager's iPad, owner's laptop.",
      "features.f2.viz_menu": "Menu",
      "features.f2.viz_all": "All dishes",
      "features.f2.viz_starters": "Starters",
      "features.f2.viz_mains": "Mains",
      "features.f2.viz_desserts": "Desserts",
      "features.f2.viz_drinks": "Drinks",
      "features.f2.viz_insights": "Insights",
      "features.f2.viz_popularity": "Popularity",
      "features.f2.viz_newdish": "+ New dish",
      "features.f2.viz_soldout": "Sold out",

      // ---- features: 3 analytics ----
      "features.f3.eyebrow": "03 · Analytics",
      "features.f3.title": "The menu is finally giving you data, not guesses.",
      "features.f3.body": "Every dish view is logged. You see what diners look at, what they skip, and what's losing them at the description. Run a brunch special; see if anyone read it. Your next menu refresh is decisions, not opinions.",
      "features.f3.p1": "<strong style=\"font-weight:600\">Dish popularity</strong> by week, month, and section.",
      "features.f3.p2": "<strong style=\"font-weight:600\">View &amp; dwell time</strong> — was the dish noticed, or skipped?",
      "features.f3.p3": "<strong style=\"font-weight:600\">Trend lines</strong> across menu changes, so you can see what worked.",
      "features.f3.p4": "<strong style=\"font-weight:600\">Weekly digest email</strong> — top 5, bottom 5, what changed.",
      "features.f3.viz_title": "Views — last 12 weeks",
      "features.f3.viz_total": "Total views",
      "features.f3.viz_top": "Top section",
      "features.f3.viz_trend": "Trend",
      "features.f3.viz_top_value": "Mains",

      // ---- features: 4 onboarding ----
      "features.f4.eyebrow": "04 · Done-for-you onboarding",
      "features.f4.title": "The part nobody else does. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#D69B7F\">We do it for you.</em>",
      "features.f4.c1_title": "Menu build",
      "features.f4.c1_body": "Send us your menu in whatever format you have. We type it up, structure it, organise it into sections, add allergens, and check every dish with you before going live.",
      "features.f4.c2_title": "Brand styling",
      "features.f4.c2_body": "Colours, fonts, photography style — matched to your venue. The menu should feel like it belongs to your brand, not ours. We'll take cues from your existing site and signage.",
      "features.f4.c3_title": "Website linking",
      "features.f4.c3_body": "Embedded directly into your existing website by us. Squarespace, Wix, WordPress, custom build — we handle it. Your menu lives at yourvenue.com/menu, not on someone else's domain.",
      "features.f4.c4_title": "Team training",
      "features.f4.c4_body": "A single 30-minute session with whoever will run the dashboard — usually the owner and the floor manager. We screen-share, you take notes. After that, you're independent.",
      "features.f4.quote": "\"You bought software. We're handing you a working menu.\"",
      "features.f4.promise": "Our promise · in five to seven days, you're live",

      // ---- features: CTA ----
      "features.cta.title": "See it on your menu, not ours.",
      "features.cta.body": "Book a demo and we'll mock up a section of your real menu — no commitment, no slides.",

      // ---- pricing: intro ----
      "pricing.eyebrow": "Pricing",
      "pricing.title": "Two charges. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">No surprises.</em>",
      "pricing.intro": "A one-time setup fee covers the build, styling, website linking, and team training. After that, a flat monthly subscription covers hosting, support, and updates.",

      // ---- pricing: setup card ----
      "pricing.setup.eyebrow": "One-time setup",
      "pricing.setup.title": "Setup, done for you",
      "pricing.setup.body": "Paid once, at the start. Covers everything from \"we have a PDF\" to \"diners are reading it on their phones.\"",
      "pricing.setup.price": "From €600",
      "pricing.setup.price_note": "One-time, billed when you go live. Adjusted for venue size and menu complexity.",
      "pricing.setup.covered": "What's covered",
      "pricing.setup.i1": "Menu typed up, structured and organised by us",
      "pricing.setup.i2": "Styled to match your existing brand",
      "pricing.setup.i3": "Linked into your existing website",
      "pricing.setup.i4": "QR codes (table cards, posters) — optional add-on",
      "pricing.setup.i5": "Team training session, 30 minutes, video call",

      // ---- pricing: monthly card ----
      "pricing.monthly.badge": "Ongoing",
      "pricing.monthly.eyebrow": "Monthly subscription",
      "pricing.monthly.title": "Everything, kept running",
      "pricing.monthly.body": "Paid monthly. Hosting, support, software updates, and our team on hand when you need a hand.",
      "pricing.monthly.price_amt": "From €45",
      "pricing.monthly.price_per": "/mo",
      "pricing.monthly.price_note": "Billed monthly. Cancel any time, on a month's notice.",
      "pricing.monthly.included": "What's included",
      "pricing.monthly.i1": "Unlimited dishes, sections, and updates",
      "pricing.monthly.i2": "Multiple users — owner, chef, floor",
      "pricing.monthly.i3": "Dish popularity analytics & weekly digest",
      "pricing.monthly.i4": "Hosting, security, software updates",
      "pricing.monthly.i5": "Real human support — email & WhatsApp",

      // ---- pricing: CTA strip ----
      "pricing.strip.title": "Final price depends on your menu & venue.",
      "pricing.strip.body": "A 7-dish café and a 60-dish gastropub aren't the same job. Tell us about your venue and we'll quote on the call.",
      "pricing.strip.cta": "Get a tailored quote →",

      // ---- pricing: FAQ ----
      "pricing.faq.title": "Things people ask first",
      "pricing.faq.q1": "Is there a contract?",
      "pricing.faq.a1": "A simple service agreement, cancellable on a month's notice. No multi-year lock-ins.",
      "pricing.faq.q2": "What if my menu changes a lot?",
      "pricing.faq.a2": "Edit it yourself, as often as you like. The monthly subscription is flat regardless of how often you change things.",
      "pricing.faq.q3": "Do I need a new website?",
      "pricing.faq.a3": "No. Your existing one stays. We embed the menu into it. Squarespace, Wix, WordPress, or a custom build — all fine.",
      "pricing.faq.q4": "What about photos of the dishes?",
      "pricing.faq.a4": "You can supply your own, use ours from your existing site, or skip photos entirely. Optional add-on: we arrange a photographer.",
      "pricing.faq.q5": "How long until we're live?",
      "pricing.faq.a5": "Five to seven working days from receiving your menu, in most cases. We'll commit to a date on the demo call.",

      // ---- cases: intro ----
      "cases.eyebrow": "Case studies",
      "cases.title": "Real venues. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Real menus.</em> Real results.",
      "cases.intro": "Case studies and testimonials are being collected from current clients. Real stories will replace each of the placeholders below as they're approved.",
      "cases.note": "<strong style=\"font-weight:600;color:#1F1814\">Placeholder note:</strong> all client names, quotes, and metrics on this page are placeholders. Real content drops in here when supplied.",

      // ---- cases: featured ----
      "cases.featured.eyebrow": "Featured · Pub",
      "cases.featured.quote": "\"Placeholder pull-quote about how the team can finally update the menu without waiting on the website agency.\"",
      "cases.featured.body": "Placeholder client story — a paragraph describing the venue before Dimonova, the change after, and one specific outcome (faster updates, more menu views, dish that surprised them).",
      "cases.featured.client": "Client name",
      "cases.featured.role": "Role · Venue name",
      "cases.featured.photo_badge": "venue photo",
      "cases.featured.photo_pill": "Featured venue photo",

      // ---- cases: grid (shared labels) ----
      "cases.grid.photo": "venue photo",
      "cases.grid.type_restaurant": "Restaurant",
      "cases.grid.type_pub": "Pub",
      "cases.grid.type_cafe": "Café",
      "cases.grid.venue": "Venue name placeholder",
      "cases.grid.summary": "One-line summary of what changed for them — placeholder until real content drops in.",
      "cases.grid.live_since": "Live since",
      "cases.grid.live_value": "TBD",
      "cases.grid.result": "Result",
      "cases.grid.result_value": "placeholder",

      // ---- cases: CTA ----
      "cases.cta.title": "Want to be the next case study?",

      // ---- about: intro ----
      "about.eyebrow": "About",
      "about.title": "A small team. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">A specific job.</em>",
      "about.intro": "Dimonova exists because the menu — the most-read page of any restaurant's website — was being treated as an afterthought. We build it, run it, and look after it for you.",

      // ---- about: why we exist ----
      "about.why.eyebrow": "Why we exist",
      "about.why.title": "Most digital menus are bad. The good ones are too much work.",
      "about.why.p1": "Every restaurant has the same problem: the menu changes constantly, but the website never reflects it. PDFs are out of date. The website agency is on a two-week ticket queue. The QR code product is a nightmare to edit. Somewhere along the way, the menu — the thing diners actually want to look at — became the worst-maintained part of the venue's online presence.",
      "about.why.p2": "We built Dimonova because that problem isn't really a software problem. It's a service problem. Software doesn't make your menu professional — a designer does. Software doesn't link it to your website — a developer does. Software doesn't train your team — a person does. So we do all of that, and the software is what makes it cheap enough to make sense.",
      "about.why.p3": "We work with restaurants, pubs, and cafés. We don't work with chains — bespoke setup wouldn't scale, and they don't need it.",
      "about.why.aside_label": "In short",
      "about.why.aside_quote": "\"We make digital menus for places that take their food seriously and don't want to think about software.\"",
      "about.why.aside_sign": "The Dimonova team",

      // ---- about: principles ----
      "about.principles.eyebrow": "How we work",
      "about.principles.title": "Three principles, and not many more.",
      "about.principles.p1_title": "Do the work for them.",
      "about.principles.p1_body": "If onboarding takes the customer more than 30 minutes of their time, we've designed it wrong.",
      "about.principles.p2_title": "Pricing they can predict.",
      "about.principles.p2_body": "Flat monthly. No per-cover charges, no per-dish charges, no surprise invoices on busy weeks.",
      "about.principles.p3_title": "Their brand, not ours.",
      "about.principles.p3_body": "The menu lives on the venue's domain, in the venue's style. We're the ones quietly making it work.",

      // ---- about: team ----
      "about.team.eyebrow": "The team",
      "about.team.title": "The people you'll actually talk to.",
      "about.team.portrait": "portrait",
      "about.team.name": "Name placeholder",
      "about.team.role1": "Founder & build lead",
      "about.team.role2": "Design & styling",
      "about.team.role3": "Customer success",
      "about.team.role4": "Engineering",

      // ---- about: CTA ----
      "about.cta.title": "Want to see how it'd work for your venue?",

      // ---- contact: intro ----
      "contact.eyebrow": "Contact",
      "contact.title": "Tell us about your venue. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">We'll do the rest.</em>",
      "contact.intro": "A demo is usually 20 minutes — we'll show you the dashboard, walk through real venue setups, and quote you on the call.",

      // ---- contact: success state ----
      "contact.success.title": "Got it. We'll be in touch.",
      "contact.success.body": "Expect an email from our team within one working day to book the demo. If it's urgent, message us on WhatsApp.",
      "contact.success.wa": "WhatsApp us",
      "contact.success.again": "Send another",

      // ---- contact: form ----
      "contact.form.eyebrow": "Request a demo",
      "contact.form.name_label": "Your name",
      "contact.form.name_ph": "Aoife Kennedy",
      "contact.form.email_label": "Email",
      "contact.form.email_ph": "aoife@crowingcock.com",
      "contact.form.venue_label": "Venue name",
      "contact.form.venue_ph": "The Crowing Cock",
      "contact.form.vtype_label": "Venue type",
      "contact.form.vtype_restaurant": "Restaurant",
      "contact.form.vtype_pub": "Pub",
      "contact.form.vtype_cafe": "Café",
      "contact.form.vtype_other": "Other",
      "contact.form.phone_label": "Phone",
      "contact.form.optional": "(optional)",
      "contact.form.phone_ph": "+353 …",
      "contact.form.message_label": "Anything we should know?",
      "contact.form.message_ph": "Menu size, current website, anything specific you'd like to see on the demo…",
      "contact.form.disclaimer": "We'll only use this to set up your demo. No marketing list.",
      "contact.form.submit": "Request a demo →",

      // ---- contact: side panel ----
      "contact.side.chat_label": "Prefer to chat?",
      "contact.side.chat_body": "Faster than email. We're usually back to you within the hour during opening times.",
      "contact.side.chat_btn": "Open WhatsApp",
      "contact.side.old_label": "Or, the old fashioned way",
      "contact.side.email_label": "Email",
      "contact.side.phone_label": "Phone",
      "contact.side.hours_label": "Hours",
      "contact.side.hours_value": "Mon — Fri, 9am — 6pm<br>Sat, 10am — 2pm",
      "contact.side.sell_quote": "\"We'll quote you on the call. No follow-up sales sequences, no pressure.\"",
      "contact.side.sell_label": "How we sell",

      // ---- form validation errors ----
      "errors.name": "Your name is required.",
      "errors.email_required": "Email is required.",
      "errors.email_invalid": "That email doesn't look right.",
      "errors.venue": "Venue name is required.",

      // ---- footer ----
      "footer.tagline": "Digital menus and dashboards for restaurants, pubs, and cafés that take their food seriously.",
      "footer.col_product": "Product",
      "footer.col_company": "Company",
      "footer.col_contact": "Contact",
      "footer.rights": "© 2026 Dimonova. All rights reserved.",
      // Terms / Privacy / Cookies are intentionally NOT translated (no real pages yet).

      // ---- WhatsApp widget ----
      "wa.name": "Dimonova team",
      "wa.status": "Usually back within an hour",
      "wa.greeting": "Hi 👋 — what kind of venue are you running? Happy to share a 30-second walkthrough of the dashboard.",
      "wa.chip_restaurant": "I run a restaurant",
      "wa.chip_pub": "I run a pub",
      "wa.chip_cafe": "I run a café",
      "wa.continue": "Continue to WhatsApp",
      "wa.disclaimer": "+353 (0)1 555 0199 · prototype, won't actually open",
    },

    es: {
      // ---- nav / header / footer shared ----
      "nav.features": "Características",
      "nav.pricing": "Precios",
      "nav.cases": "Casos de éxito",
      "nav.about": "Nosotros",
      "nav.contact": "Contacto",
      "nav.home": "Inicio",
      "nav.whatsapp": "WhatsApp",
      "nav.demo": "Solicitar una demo",

      // ---- common buttons ----
      "common.chat_wa": "Chatea por WhatsApp",
      "common.demo": "Solicitar una demo",
      "common.demo_arrow": "Solicitar una demo →",

      // ---- home: hero ----
      "home.hero.eyebrow": "Para restaurantes, pubs y cafeterías",
      "home.hero.title1": "Una carta para <em class=\"dim-h1-accent\" style=\"font-family:'Instrument Serif',serif;font-weight:400;font-style:italic;color:#B8523A;font-size:64px\">presumir</em>,",
      "home.hero.title2": "creada y configurada para ti.",
      "home.hero.body": "Creamos tu carta digital, la adaptamos a tu marca, la integramos en tu web actual y formamos a tu equipo. Tú cambias un plato en dos toques.",
      "home.hero.avatars": "La eligen locales independientes<br>de todo el país",

      // ---- home: hero dashboard visual ----
      "home.viz.dash_label": "Panel · en vivo",
      "home.viz.dash_title": "Favoritos de la semana",
      "home.viz.days": "Lun — Dom",
      "home.viz.menu_views": "Vistas de la carta",
      "home.viz.updates": "Cambios esta semana",

      // ---- home: logo strip ----
      "home.logos.label": "La confían locales independientes",
      "home.logos.placeholder": "logo del local",

      // ---- home: features summary ----
      "home.feat.eyebrow": "Lo que incluye",
      "home.feat.title": "Un software que se siente como <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">tu local</em>, no una plantilla genérica.",
      "home.feat.see_all": "Ver todas las características →",
      "home.feat.c1_title": "Una carta digital, bien diseñada",
      "home.feat.c1_body": "Fotos, descripciones, alérgenos y precios — presentados para que los clientes los lean de verdad.",
      "home.feat.c2_title": "Un panel que manejas desde la barra",
      "home.feat.c2_body": "Edita un plato, cambia una foto o marca algo como agotado — desde cualquier móvil o portátil, en segundos.",
      "home.feat.c3_title": "Descubre qué quieren tus clientes",
      "home.feat.c3_body": "Popularidad de los platos, vistas y tendencias — para que tu próxima carta se base en datos, no en suposiciones.",

      // ---- home: how it works ----
      "home.how.eyebrow": "Cómo funciona",
      "home.how.title": "Nosotros hacemos el trabajo duro. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#D69B7F\">Tú llevas las riendas.</em>",
      "home.how.s1_title": "Envíanos tu carta",
      "home.how.s1_body": "Un PDF, una foto de la pizarra, un documento de Word — lo que tengas. Nosotros nos encargamos del resto.",
      "home.how.s2_title": "La creamos y la diseñamos",
      "home.how.s2_body": "Adaptada a tu marca, tu tono y tu local. Fotos, alérgenos y secciones — bien organizados.",
      "home.how.s3_title": "Integración y formación",
      "home.how.s3_body": "Integrada en tu web actual. Una formación de 30 minutos con tu equipo. Ese es el traspaso.",
      "home.how.s4_title": "Tú la gestionas",
      "home.how.s4_body": "Edita un plato en 10 segundos. Mira qué se vende. Seguimos ahí cuando nos necesites.",
      "home.how.quote": "«La mayoría está en línea en 5–7 días desde que nos envía su carta. La formación es la reunión más larga que te pedimos.»",
      "home.how.more": "Más sobre la puesta en marcha →",

      // ---- home: differentiator ----
      "home.diff.eyebrow": "La diferencia",
      "home.diff.title": "Esto no es <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">otra herramienta</em> que aprender. Es un servicio.",
      "home.diff.body": "La mayoría de productos de cartas digitales te dan un editor, un centro de ayuda y una prueba gratis. Nosotros no. Lo creamos por ti, lo integramos en tu web y nos sentamos con tu equipo para explicárselo.",
      "home.diff.p1": "Creamos tu carta con lo que tengas — PDF, foto o documento.",
      "home.diff.p2": "La diseñamos a juego con tu marca y tu local.",
      "home.diff.p3": "La integramos en tu web actual nosotros mismos.",
      "home.diff.p4": "Formamos a tu equipo en una sola sesión de 30 minutos.",
      "home.diff.card_badge": "imagen del producto",
      "home.diff.card_pill": "Sesión de incorporación — visual",
      "home.diff.card_title": "Puesta en marcha, resuelta",
      "home.diff.card_body": "Del contrato firmado a la carta en línea en días, no semanas.",

      // ---- home: social proof ----
      "home.proof.quote": "Testimonio de ejemplo — el típico comentario de «ya no tenemos que preocuparnos por la carta». Aquí irá una cita real de un cliente.",
      "home.proof.client": "Nombre del cliente",
      "home.proof.role": "Cargo · Nombre del local",
      "home.proof.stat1_label": "Puesta en marcha media",
      "home.proof.stat1_unit": "días",
      "home.proof.stat2_label": "Tiempo para editar un plato",
      "home.proof.stat2_unit": "segundos",

      // ---- home: pricing teaser ----
      "home.price.eyebrow": "Precios, claros",
      "home.price.title": "Un pago único de configuración y luego una cuota mensual fija.",
      "home.price.body": "Alojamiento, soporte y actualizaciones incluidos. Sin cargos por comensal, sin cargos por plato, sin facturas sorpresa.",
      "home.price.see_full": "Ver precios completos →",
      "home.price.quote_cta": "Pide un presupuesto a medida",

      // ---- home: closing CTA ----
      "home.cta.eyebrow": "Cuando quieras",
      "home.cta.title": "Pongamos tu carta <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">en línea</em>.",
      "home.cta.body": "Una demo de 20 minutos. Te enseñamos el panel, repasamos casos reales y respondemos a todo. Sin compromiso.",

      // ---- features: intro ----
      "features.eyebrow": "Características",
      "features.title": "Todo lo que necesitas para gestionar tu carta. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Nada que sobre.</em>",
      "features.intro": "Cuatro partes en Dimonova: la carta digital que ven tus clientes, el panel desde el que la gestiona tu equipo, las analíticas que te dicen qué funciona y la incorporación llave en mano que lo pone todo en marcha.",

      // ---- features: 1 digital menu ----
      "features.f1.eyebrow": "01 · La carta digital",
      "features.f1.title": "Una carta con la cara de tu local, no de una app de comida a domicilio.",
      "features.f1.body": "Fotos, descripciones, alérgenos, precios, secciones y sugerencias del día — bien maquetados. Carga rápido en el móvil. Vive dentro de tu web actual, así los clientes nunca sienten que los mandan a una herramienta externa.",
      "features.f1.p1": "<strong style=\"font-weight:600\">Integrada, no redirigida.</strong> Vive en <span style=\"font-family:'Instrument Serif',serif;font-style:italic\">tulocal.com/carta</span>, no en una URL genérica.",
      "features.f1.p2": "<strong style=\"font-weight:600\">Alérgenos y etiquetas dietéticas</strong> en cada plato, filtrables para los clientes.",
      "features.f1.p3": "<strong style=\"font-weight:600\">Códigos QR opcionales</strong> — tarjetas de mesa, carteles, tarjetas de visita — que llevan directos a ella.",
      "features.f1.p4": "<strong style=\"font-weight:600\">Estados de agotado</strong> que ocultan un plato al instante durante el servicio.",

      // ---- features: 2 dashboard ----
      "features.f2.eyebrow": "02 · El panel",
      "features.f2.title": "Si sabes usar Instagram, sabes usar esto.",
      "features.f2.body": "Sin cursos de maquetación de cartas, sin tickets a la agencia, sin «abre una solicitud para cambiar un precio». Quien lleve la sala puede ocultar un plato, subir un precio o cambiar una foto desde el móvil en menos de un minuto.",
      "features.f2.p1": "<strong style=\"font-weight:600\">Arrastra y suelta</strong> platos entre secciones.",
      "features.f2.p2": "<strong style=\"font-weight:600\">Varios usuarios</strong> — propietario, chef, encargado de sala.",
      "features.f2.p3": "<strong style=\"font-weight:600\">Programa cambios</strong> — activa la carta de brunch el sábado a las 9:00 y desactívala a las 14:00.",
      "features.f2.p4": "<strong style=\"font-weight:600\">Funciona en cualquier dispositivo.</strong> El móvil del camarero, el iPad del encargado, el portátil del dueño.",
      "features.f2.viz_menu": "Carta",
      "features.f2.viz_all": "Todos los platos",
      "features.f2.viz_starters": "Entrantes",
      "features.f2.viz_mains": "Principales",
      "features.f2.viz_desserts": "Postres",
      "features.f2.viz_drinks": "Bebidas",
      "features.f2.viz_insights": "Datos",
      "features.f2.viz_popularity": "Popularidad",
      "features.f2.viz_newdish": "+ Nuevo plato",
      "features.f2.viz_soldout": "Agotado",

      // ---- features: 3 analytics ----
      "features.f3.eyebrow": "03 · Analíticas",
      "features.f3.title": "Por fin la carta te da datos, no suposiciones.",
      "features.f3.body": "Cada vista de un plato queda registrada. Ves qué miran los clientes, qué se saltan y qué los pierde en la descripción. Lanza una sugerencia de brunch; comprueba si alguien la leyó. Tu próxima carta serán decisiones, no opiniones.",
      "features.f3.p1": "<strong style=\"font-weight:600\">Popularidad de los platos</strong> por semana, mes y sección.",
      "features.f3.p2": "<strong style=\"font-weight:600\">Vistas y tiempo de atención</strong> — ¿se fijaron en el plato o lo saltaron?",
      "features.f3.p3": "<strong style=\"font-weight:600\">Líneas de tendencia</strong> a lo largo de los cambios de carta, para ver qué funcionó.",
      "features.f3.p4": "<strong style=\"font-weight:600\">Resumen semanal por correo</strong> — top 5, los 5 últimos, qué cambió.",
      "features.f3.viz_title": "Vistas — últimas 12 semanas",
      "features.f3.viz_total": "Vistas totales",
      "features.f3.viz_top": "Sección destacada",
      "features.f3.viz_trend": "Tendencia",
      "features.f3.viz_top_value": "Principales",

      // ---- features: 4 onboarding ----
      "features.f4.eyebrow": "04 · Incorporación llave en mano",
      "features.f4.title": "La parte que nadie más hace. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#D69B7F\">La hacemos por ti.</em>",
      "features.f4.c1_title": "Montaje de la carta",
      "features.f4.c1_body": "Envíanos tu carta en el formato que tengas. La transcribimos, la estructuramos, la organizamos por secciones, añadimos los alérgenos y revisamos cada plato contigo antes de publicarla.",
      "features.f4.c2_title": "Diseño de marca",
      "features.f4.c2_body": "Colores, tipografías, estilo de fotografía — a juego con tu local. La carta debe sentirse de tu marca, no de la nuestra. Nos guiamos por tu web y tu señalética actuales.",
      "features.f4.c3_title": "Integración en la web",
      "features.f4.c3_body": "La integramos nosotros directamente en tu web actual. Squarespace, Wix, WordPress, desarrollo a medida — nos encargamos. Tu carta vive en tulocal.com/carta, no en el dominio de otro.",
      "features.f4.c4_title": "Formación del equipo",
      "features.f4.c4_body": "Una única sesión de 30 minutos con quien vaya a gestionar el panel — normalmente el dueño y el encargado de sala. Compartimos pantalla, tú tomas notas. Después, eres independiente.",
      "features.f4.quote": "«Compraste software. Te entregamos una carta lista para usar.»",
      "features.f4.promise": "Nuestra promesa · en cinco a siete días, estás en línea",

      // ---- features: CTA ----
      "features.cta.title": "Míralo en tu carta, no en la nuestra.",
      "features.cta.body": "Reserva una demo y maquetamos una sección de tu carta real — sin compromiso, sin diapositivas.",

      // ---- pricing: intro ----
      "pricing.eyebrow": "Precios",
      "pricing.title": "Dos pagos. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Sin sorpresas.</em>",
      "pricing.intro": "Un pago único de configuración cubre el montaje, el diseño, la integración en la web y la formación del equipo. Después, una cuota mensual fija cubre el alojamiento, el soporte y las actualizaciones.",

      // ---- pricing: setup card ----
      "pricing.setup.eyebrow": "Pago único de configuración",
      "pricing.setup.title": "Configuración de la carta",
      "pricing.setup.body": "Se paga una vez, al principio. Cubre todo, desde «tenemos un PDF» hasta «los clientes la leen en el móvil».",
      "pricing.setup.price": "Desde €600",
      "pricing.setup.price_note": "Pago único, facturado cuando entras en línea. Ajustado al tamaño del local y la complejidad de la carta.",
      "pricing.setup.covered": "Qué incluye",
      "pricing.setup.i1": "Carta transcrita, estructurada y organizada por nosotros",
      "pricing.setup.i2": "Diseñada a juego con tu marca actual",
      "pricing.setup.i3": "Integrada en tu web actual",
      "pricing.setup.i4": "Códigos QR (tarjetas de mesa, carteles) — complemento opcional",
      "pricing.setup.i5": "Sesión de formación del equipo, 30 minutos, videollamada",

      // ---- pricing: monthly card ----
      "pricing.monthly.badge": "Continuo",
      "pricing.monthly.eyebrow": "Suscripción mensual",
      "pricing.monthly.title": "Todo, en marcha",
      "pricing.monthly.body": "Pago mensual. Alojamiento, soporte, actualizaciones de software y nuestro equipo a mano cuando lo necesites.",
      "pricing.monthly.price_amt": "Desde €45",
      "pricing.monthly.price_per": "/mes",
      "pricing.monthly.price_note": "Facturación mensual. Cancela cuando quieras, con un mes de aviso.",
      "pricing.monthly.included": "Qué incluye",
      "pricing.monthly.i1": "Platos, secciones y cambios ilimitados",
      "pricing.monthly.i2": "Varios usuarios — propietario, chef, sala",
      "pricing.monthly.i3": "Analíticas de popularidad y resumen semanal",
      "pricing.monthly.i4": "Host de la web, seguridad y actualizaciones",
      "pricing.monthly.i5": "Soporte humano de verdad — correo y WhatsApp",

      // ---- pricing: CTA strip ----
      "pricing.strip.title": "El precio final depende de tu carta y tu local.",
      "pricing.strip.body": "Una cafetería de 7 platos y un gastropub de 60 no son el mismo trabajo. Cuéntanos sobre tu local y te lo presupuestamos en la llamada.",
      "pricing.strip.cta": "Pide un presupuesto a medida →",

      // ---- pricing: FAQ ----
      "pricing.faq.title": "Lo que la gente pregunta primero",
      "pricing.faq.q1": "¿Hay permanencia?",
      "pricing.faq.a1": "Un acuerdo de servicio sencillo, cancelable con un mes de aviso. Sin ataduras de varios años.",
      "pricing.faq.q2": "¿Y si mi carta cambia mucho?",
      "pricing.faq.a2": "Edítala tú mismo, tantas veces como quieras. La cuota mensual es fija sin importar con qué frecuencia cambies cosas.",
      "pricing.faq.q3": "¿Necesito una web nueva?",
      "pricing.faq.a3": "No. La tuya actual se queda. Integramos la carta en ella. Squarespace, Wix, WordPress o un desarrollo a medida — todo vale.",
      "pricing.faq.q4": "¿Y las fotos de los platos?",
      "pricing.faq.a4": "Puedes aportar las tuyas, usar las de tu web actual u omitir las fotos. Complemento opcional: organizamos un fotógrafo.",
      "pricing.faq.q5": "¿Cuánto tardamos en estar en línea?",
      "pricing.faq.a5": "De cinco a siete días laborables desde que recibimos tu carta, en la mayoría de los casos. Fijaremos una fecha en la llamada de demo.",

      // ---- cases: intro ----
      "cases.eyebrow": "Casos de éxito",
      "cases.title": "Locales reales. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Cartas reales.</em> Resultados reales.",
      "cases.intro": "Estamos recopilando casos y testimonios de clientes actuales. Las historias reales irán sustituyendo cada uno de los ejemplos de abajo a medida que se aprueben.",
      "cases.note": "<strong style=\"font-weight:600;color:#1F1814\">Nota de ejemplo:</strong> todos los nombres, citas y métricas de esta página son de ejemplo. El contenido real se incorporará aquí cuando esté disponible.",

      // ---- cases: featured ----
      "cases.featured.eyebrow": "Destacado · Pub",
      "cases.featured.quote": "«Cita de ejemplo sobre cómo el equipo por fin puede actualizar la carta sin esperar a la agencia web.»",
      "cases.featured.body": "Historia de cliente de ejemplo — un párrafo que describe el local antes de Dimonova, el cambio después y un resultado concreto (cambios más rápidos, más vistas de la carta, un plato que los sorprendió).",
      "cases.featured.client": "Nombre del cliente",
      "cases.featured.role": "Cargo · Nombre del local",
      "cases.featured.photo_badge": "foto del local",
      "cases.featured.photo_pill": "Foto del local destacado",

      // ---- cases: grid (shared labels) ----
      "cases.grid.photo": "foto del local",
      "cases.grid.type_restaurant": "Restaurante",
      "cases.grid.type_pub": "Pub",
      "cases.grid.type_cafe": "Cafetería",
      "cases.grid.venue": "Nombre del local (ejemplo)",
      "cases.grid.summary": "Resumen en una línea de lo que cambió para ellos — ejemplo hasta que llegue el contenido real.",
      "cases.grid.live_since": "En línea desde",
      "cases.grid.live_value": "Por definir",
      "cases.grid.result": "Resultado",
      "cases.grid.result_value": "ejemplo",

      // ---- cases: CTA ----
      "cases.cta.title": "¿Quieres ser el próximo caso de éxito?",

      // ---- about: intro ----
      "about.eyebrow": "Nosotros",
      "about.title": "Un equipo pequeño. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Un trabajo concreto.</em>",
      "about.intro": "Dimonova existe porque la carta — la página más leída de la web de cualquier restaurante — se trataba como algo secundario. Nosotros la creamos, la gestionamos y la cuidamos por ti.",

      // ---- about: why we exist ----
      "about.why.eyebrow": "Por qué existimos",
      "about.why.title": "La mayoría de cartas digitales son malas. Las buenas dan demasiado trabajo.",
      "about.why.p1": "Todos los restaurantes tienen el mismo problema: la carta cambia constantemente, pero la web nunca lo refleja. Los PDF están desactualizados. La agencia web tiene una cola de tickets de dos semanas. El producto de QR es un infierno de editar. En algún momento, la carta — lo que los clientes de verdad quieren mirar — se convirtió en la parte peor mantenida de la presencia online del local.",
      "about.why.p2": "Creamos Dimonova porque ese problema no es realmente un problema de software. Es un problema de servicio. El software no hace tu carta profesional — lo hace un diseñador. El software no la conecta con tu web — lo hace un desarrollador. El software no forma a tu equipo — lo hace una persona. Así que hacemos todo eso, y el software es lo que lo hace lo bastante barato para que tenga sentido.",
      "about.why.p3": "Trabajamos con restaurantes, pubs y cafeterías. No trabajamos con cadenas — la configuración a medida no escalaría, y ellas no la necesitan.",
      "about.why.aside_label": "En resumen",
      "about.why.aside_quote": "«Hacemos cartas digitales para sitios que se toman en serio su comida y no quieren pensar en software.»",
      "about.why.aside_sign": "El equipo de Dimonova",

      // ---- about: principles ----
      "about.principles.eyebrow": "Cómo trabajamos",
      "about.principles.title": "Tres principios, y no muchos más.",
      "about.principles.p1_title": "Hacer el trabajo por ellos.",
      "about.principles.p1_body": "Si la incorporación le lleva al cliente más de 30 minutos de su tiempo, la hemos diseñado mal.",
      "about.principles.p2_title": "Precios que pueden prever.",
      "about.principles.p2_body": "Cuota mensual fija. Sin cargos por comensal, sin cargos por plato, sin facturas sorpresa en semanas con mucho movimiento.",
      "about.principles.p3_title": "Su marca, no la nuestra.",
      "about.principles.p3_body": "La carta vive en el dominio del local, con el estilo del local. Nosotros somos quienes, en silencio, hacemos que funcione.",

      // ---- about: team ----
      "about.team.eyebrow": "El equipo",
      "about.team.title": "Las personas con las que vas a hablar de verdad.",
      "about.team.portrait": "retrato",
      "about.team.name": "Nombre (ejemplo)",
      "about.team.role1": "Fundador y responsable de montaje",
      "about.team.role2": "Diseño y estilo",
      "about.team.role3": "Atención al cliente",
      "about.team.role4": "Ingeniería",

      // ---- about: CTA ----
      "about.cta.title": "¿Quieres ver cómo funcionaría para tu local?",

      // ---- contact: intro ----
      "contact.eyebrow": "Contacto",
      "contact.title": "Cuéntanos sobre tu local. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Nosotros hacemos el resto.</em>",
      "contact.intro": "Una demo suele durar 20 minutos — te enseñamos el panel, repasamos casos reales y te presupuestamos en la llamada.",

      // ---- contact: success state ----
      "contact.success.title": "Recibido. Te escribimos pronto.",
      "contact.success.body": "Espera un correo de nuestro equipo en un día laborable para reservar la demo. Si es urgente, escríbenos por WhatsApp.",
      "contact.success.wa": "Escríbenos por WhatsApp",
      "contact.success.again": "Enviar otro",

      // ---- contact: form ----
      "contact.form.eyebrow": "Solicitar una demo",
      "contact.form.name_label": "Tu nombre",
      "contact.form.name_ph": "Aoife Kennedy",
      "contact.form.email_label": "Correo electrónico",
      "contact.form.email_ph": "aoife@crowingcock.com",
      "contact.form.venue_label": "Nombre del local",
      "contact.form.venue_ph": "The Crowing Cock",
      "contact.form.vtype_label": "Tipo de local",
      "contact.form.vtype_restaurant": "Restaurante",
      "contact.form.vtype_pub": "Pub",
      "contact.form.vtype_cafe": "Cafetería",
      "contact.form.vtype_other": "Otro",
      "contact.form.phone_label": "Teléfono",
      "contact.form.optional": "(opcional)",
      "contact.form.phone_ph": "+34 …",
      "contact.form.message_label": "¿Algo que debamos saber?",
      "contact.form.message_ph": "Tamaño de la carta, web actual, cualquier cosa concreta que quieras ver en la demo…",
      "contact.form.disclaimer": "Solo lo usaremos para preparar tu demo. Sin listas de marketing.",
      "contact.form.submit": "Solicitar una demo →",

      // ---- contact: side panel ----
      "contact.side.chat_label": "¿Prefieres chatear?",
      "contact.side.chat_body": "Más rápido que el correo. Solemos responder en menos de una hora en horario de apertura.",
      "contact.side.chat_btn": "Abrir WhatsApp",
      "contact.side.old_label": "O, a la vieja usanza",
      "contact.side.email_label": "Correo electrónico",
      "contact.side.phone_label": "Teléfono",
      "contact.side.hours_label": "Horario",
      "contact.side.hours_value": "Lun — Vie, 9:00 — 18:00<br>Sáb, 10:00 — 14:00",
      "contact.side.sell_quote": "«Te presupuestamos en la llamada. Sin secuencias de venta de seguimiento, sin presión.»",
      "contact.side.sell_label": "Cómo vendemos",

      // ---- form validation errors ----
      "errors.name": "Tu nombre es obligatorio.",
      "errors.email_required": "El correo es obligatorio.",
      "errors.email_invalid": "Ese correo no parece correcto.",
      "errors.venue": "El nombre del local es obligatorio.",

      // ---- footer ----
      "footer.tagline": "Cartas digitales y paneles para restaurantes, pubs y cafeterías que se toman en serio su comida.",
      "footer.col_product": "Producto",
      "footer.col_company": "Empresa",
      "footer.col_contact": "Contacto",
      "footer.rights": "© 2026 Dimonova. Todos los derechos reservados.",

      // ---- WhatsApp widget ----
      "wa.name": "Equipo de Dimonova",
      "wa.status": "Solemos responder en una hora",
      "wa.greeting": "Hola 👋 — ¿qué tipo de local llevas? Encantados de enseñarte un recorrido de 30 segundos por el panel.",
      "wa.chip_restaurant": "Llevo un restaurante",
      "wa.chip_pub": "Llevo un pub",
      "wa.chip_cafe": "Llevo una cafetería",
      "wa.continue": "Continuar en WhatsApp",
      "wa.disclaimer": "+353 (0)1 555 0199 · prototipo, no se abrirá de verdad",
    },

    de: {
      // ---- nav / header / footer shared ----
      "nav.features": "Funktionen",
      "nav.pricing": "Preise",
      "nav.cases": "Referenzen",
      "nav.about": "Über uns",
      "nav.contact": "Kontakt",
      "nav.home": "Start",
      "nav.whatsapp": "WhatsApp",
      "nav.demo": "Demo anfragen",

      // ---- common buttons ----
      "common.chat_wa": "Per WhatsApp chatten",
      "common.demo": "Demo anfragen",
      "common.demo_arrow": "Demo anfragen →",

      // ---- home: hero ----
      "home.hero.eyebrow": "Für Restaurants, Pubs & Cafés",
      "home.hero.title1": "Eine Karte zum <em class=\"dim-h1-accent\" style=\"font-family:'Instrument Serif',serif;font-weight:400;font-style:italic;color:#B8523A;font-size:64px\">Vorzeigen</em>,",
      "home.hero.title2": "von uns erstellt und eingerichtet.",
      "home.hero.body": "Wir erstellen deine digitale Speisekarte, passen sie an deine Marke an, binden sie in deine bestehende Website ein und schulen dein Team. Ein Gericht änderst du mit zwei Fingertipps.",
      "home.hero.avatars": "Beliebt bei unabhängigen Lokalen<br>im ganzen Land",

      // ---- home: hero dashboard visual ----
      "home.viz.dash_label": "Dashboard · live",
      "home.viz.dash_title": "Favoriten dieser Woche",
      "home.viz.days": "Mo — So",
      "home.viz.menu_views": "Aufrufe der Karte",
      "home.viz.updates": "Änderungen diese Woche",

      // ---- home: logo strip ----
      "home.logos.label": "Vertraut von unabhängigen Lokalen",
      "home.logos.placeholder": "Logo des Lokals",

      // ---- home: features summary ----
      "home.feat.eyebrow": "Das bekommst du",
      "home.feat.title": "Software, die sich wie <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">dein Lokal</em> anfühlt, nicht wie eine Standardvorlage.",
      "home.feat.see_all": "Alle Funktionen ansehen →",
      "home.feat.c1_title": "Eine digitale Speisekarte, richtig gestaltet",
      "home.feat.c1_body": "Fotos, Beschreibungen, Allergene, Preise — so angeordnet, dass die Gäste sie wirklich lesen.",
      "home.feat.c2_title": "Ein Dashboard, das du von der Theke aus bedienst",
      "home.feat.c2_body": "Ein Gericht bearbeiten, ein Foto austauschen, etwas als ausverkauft markieren — von jedem Handy oder Laptop, in Sekunden.",
      "home.feat.c3_title": "Sieh, was deine Gäste wirklich wollen",
      "home.feat.c3_body": "Beliebtheit der Gerichte, Aufrufe und Trends — damit deine nächste Karte auf Daten basiert, nicht auf Vermutungen.",

      // ---- home: how it works ----
      "home.how.eyebrow": "So funktioniert's",
      "home.how.title": "Wir übernehmen die Schwerarbeit. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#D69B7F\">Du führst Regie.</em>",
      "home.how.s1_title": "Schick uns deine Karte",
      "home.how.s1_body": "Ein PDF, ein Handyfoto der Tafel, ein Word-Dokument — was immer du hast. Den Rest übernehmen wir.",
      "home.how.s2_title": "Wir bauen & gestalten sie",
      "home.how.s2_body": "Abgestimmt auf deine Marke, deinen Ton, dein Lokal. Fotos, Allergene, Bereiche — sauber aufbereitet.",
      "home.how.s3_title": "Einbinden & schulen",
      "home.how.s3_body": "Eingebunden in deine bestehende Website. Eine 30-minütige Schulung mit deinem Team. Das ist die Übergabe.",
      "home.how.s4_title": "Du betreibst sie",
      "home.how.s4_body": "Ein Gericht in 10 Sekunden ändern. Sehen, was sich verkauft. Wir sind weiterhin da, wenn du uns brauchst.",
      "home.how.quote": "„Die meisten sind 5–7 Tage nach dem Einsenden ihrer Karte online. Die Schulung ist der längste Termin, um den wir dich bitten.“",
      "home.how.more": "Mehr zur Einrichtung →",

      // ---- home: differentiator ----
      "home.diff.eyebrow": "Der Unterschied",
      "home.diff.title": "Das ist kein <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">weiteres Tool</em> zum Lernen. Es ist ein Service.",
      "home.diff.body": "Die meisten Anbieter digitaler Speisekarten geben dir einen Editor, ein Hilfecenter und eine kostenlose Testphase. Wir nicht. Wir bauen die Sache für dich, binden sie in deine Website ein und setzen uns mit deinem Team zusammen, um es zu erklären.",
      "home.diff.p1": "Wir erstellen deine Karte aus dem, was du hast — PDF, Foto, Dokument.",
      "home.diff.p2": "Wir gestalten sie passend zu deiner Marke und deinem Lokal.",
      "home.diff.p3": "Wir binden sie selbst in deine bestehende Website ein.",
      "home.diff.p4": "Wir schulen dein Team in einer einzigen 30-minütigen Sitzung.",
      "home.diff.card_badge": "Produktaufnahme",
      "home.diff.card_pill": "Onboarding-Sitzung — visuell",
      "home.diff.card_title": "Einrichtung, erledigt",
      "home.diff.card_body": "Vom unterschriebenen Vertrag zur Live-Karte in Tagen, nicht Wochen.",

      // ---- home: social proof ----
      "home.proof.quote": "Beispiel-Testimonial — die Art Zitat, das sagt „wir müssen nicht mehr über die Karte nachdenken“. Hier kommt ein echtes Kundenzitat hin.",
      "home.proof.client": "Name des Kunden",
      "home.proof.role": "Rolle · Name des Lokals",
      "home.proof.stat1_label": "Durchschnittlicher Go-live",
      "home.proof.stat1_unit": "Tage",
      "home.proof.stat2_label": "Zeit, ein Gericht zu ändern",
      "home.proof.stat2_unit": "Sekunden",

      // ---- home: pricing teaser ----
      "home.price.eyebrow": "Preise, klar gesagt",
      "home.price.title": "Eine einmalige Einrichtungsgebühr, dann ein fester Monatsbeitrag.",
      "home.price.body": "Hosting, Support und Updates inklusive. Keine Gebühren pro Gast, keine Gebühren pro Gericht, keine Überraschungsrechnungen.",
      "home.price.see_full": "Vollständige Preise ansehen →",
      "home.price.quote_cta": "Individuelles Angebot anfragen",

      // ---- home: closing CTA ----
      "home.cta.eyebrow": "Bereit, wenn du es bist",
      "home.cta.title": "Bringen wir deine Karte <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">online</em>.",
      "home.cta.body": "Eine 20-minütige Demo. Wir zeigen dir das Dashboard, gehen echte Einrichtungen durch und beantworten alles. Ohne Verpflichtung.",

      // ---- features: intro ----
      "features.eyebrow": "Funktionen",
      "features.title": "Alles, was du brauchst, um deine Karte zu führen. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Nichts, was du nicht brauchst.</em>",
      "features.intro": "Dimonova besteht aus vier Teilen: der digitalen Karte, die deine Gäste sehen, dem Dashboard, über das dein Team sie führt, der Analyse, die dir sagt, was funktioniert, und dem Rundum-Onboarding, das alles live bringt.",

      // ---- features: 1 digital menu ----
      "features.f1.eyebrow": "01 · Die digitale Karte",
      "features.f1.title": "Eine Karte, die aussieht wie dein Lokal, nicht wie eine Lieferdienst-App.",
      "features.f1.body": "Fotos, Beschreibungen, Allergene, Preise, Bereiche, Tagesempfehlungen — sauber gesetzt. Lädt schnell auf dem Handy. Lebt in deiner bestehenden Website, sodass Gäste nie das Gefühl haben, an ein Fremdtool weitergereicht zu werden.",
      "features.f1.p1": "<strong style=\"font-weight:600\">Eingebunden, nicht weitergeleitet.</strong> Lebt unter <span style=\"font-family:'Instrument Serif',serif;font-style:italic\">deinlokal.de/karte</span>, nicht unter einer generischen URL.",
      "features.f1.p2": "<strong style=\"font-weight:600\">Allergene & Ernährungshinweise</strong> bei jedem Gericht, für Gäste filterbar.",
      "features.f1.p3": "<strong style=\"font-weight:600\">Optionale QR-Codes</strong> — Tischkarten, Plakate, Visitenkarten — führen direkt dorthin.",
      "features.f1.p4": "<strong style=\"font-weight:600\">Ausverkauft-Status</strong> blendet ein Gericht während des Service sofort aus.",

      // ---- features: 2 dashboard ----
      "features.f2.eyebrow": "02 · Das Dashboard",
      "features.f2.title": "Wenn du Instagram bedienen kannst, kannst du das hier bedienen.",
      "features.f2.body": "Keine Schulung zum Karten-Profi, keine Agentur-Tickets, kein „stell eine Support-Anfrage, um einen Preis zu ändern“. Wer den Service leitet, kann ein Gericht ausblenden, einen Preis erhöhen oder ein Foto vom Handy aus in unter einer Minute austauschen.",
      "features.f2.p1": "<strong style=\"font-weight:600\">Drag & Drop</strong> von Gerichten zwischen Bereichen.",
      "features.f2.p2": "<strong style=\"font-weight:600\">Mehrere Nutzer</strong> — Inhaber, Koch, Serviceleitung.",
      "features.f2.p3": "<strong style=\"font-weight:600\">Änderungen planen</strong> — die Brunch-Karte samstags um 9 Uhr ein-, um 14 Uhr ausschalten.",
      "features.f2.p4": "<strong style=\"font-weight:600\">Funktioniert auf jedem Gerät.</strong> Das Handy des Barkeepers, das iPad der Leitung, der Laptop des Inhabers.",
      "features.f2.viz_menu": "Karte",
      "features.f2.viz_all": "Alle Gerichte",
      "features.f2.viz_starters": "Vorspeisen",
      "features.f2.viz_mains": "Hauptgerichte",
      "features.f2.viz_desserts": "Desserts",
      "features.f2.viz_drinks": "Getränke",
      "features.f2.viz_insights": "Einblicke",
      "features.f2.viz_popularity": "Beliebtheit",
      "features.f2.viz_newdish": "+ Neues Gericht",
      "features.f2.viz_soldout": "Ausverkauft",

      // ---- features: 3 analytics ----
      "features.f3.eyebrow": "03 · Analyse",
      "features.f3.title": "Endlich liefert dir die Karte Daten statt Vermutungen.",
      "features.f3.body": "Jeder Aufruf eines Gerichts wird erfasst. Du siehst, was Gäste ansehen, was sie überspringen und was sie bei der Beschreibung verlieren. Starte eine Brunch-Aktion; sieh, ob sie jemand gelesen hat. Deine nächste Überarbeitung sind Entscheidungen, keine Meinungen.",
      "features.f3.p1": "<strong style=\"font-weight:600\">Beliebtheit der Gerichte</strong> nach Woche, Monat und Bereich.",
      "features.f3.p2": "<strong style=\"font-weight:600\">Aufrufe & Verweildauer</strong> — wurde das Gericht beachtet oder übersprungen?",
      "features.f3.p3": "<strong style=\"font-weight:600\">Trendlinien</strong> über Kartenänderungen hinweg, damit du siehst, was funktioniert hat.",
      "features.f3.p4": "<strong style=\"font-weight:600\">Wöchentliche Zusammenfassung per E-Mail</strong> — Top 5, Flop 5, was sich geändert hat.",
      "features.f3.viz_title": "Aufrufe — letzte 12 Wochen",
      "features.f3.viz_total": "Aufrufe gesamt",
      "features.f3.viz_top": "Top-Bereich",
      "features.f3.viz_trend": "Trend",
      "features.f3.viz_top_value": "Hauptgerichte",

      // ---- features: 4 onboarding ----
      "features.f4.eyebrow": "04 · Rundum-Onboarding",
      "features.f4.title": "Der Teil, den sonst niemand macht. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#D69B7F\">Wir machen ihn für dich.</em>",
      "features.f4.c1_title": "Kartenaufbau",
      "features.f4.c1_body": "Schick uns deine Karte in dem Format, das du hast. Wir tippen sie ab, strukturieren sie, ordnen sie in Bereiche, ergänzen Allergene und prüfen jedes Gericht mit dir, bevor es live geht.",
      "features.f4.c2_title": "Markengestaltung",
      "features.f4.c2_body": "Farben, Schriften, Fotostil — abgestimmt auf dein Lokal. Die Karte soll sich nach deiner Marke anfühlen, nicht nach unserer. Wir orientieren uns an deiner bestehenden Website und Beschilderung.",
      "features.f4.c3_title": "Website-Einbindung",
      "features.f4.c3_body": "Von uns direkt in deine bestehende Website eingebunden. Squarespace, Wix, WordPress, Eigenentwicklung — wir kümmern uns. Deine Karte lebt unter deinlokal.de/karte, nicht auf der Domain eines anderen.",
      "features.f4.c4_title": "Team-Schulung",
      "features.f4.c4_body": "Eine einzige 30-minütige Sitzung mit allen, die das Dashboard führen — meist Inhaber und Serviceleitung. Wir teilen den Bildschirm, du machst dir Notizen. Danach bist du eigenständig.",
      "features.f4.quote": "„Du hast Software gekauft. Wir übergeben dir eine fertige Karte.“",
      "features.f4.promise": "Unser Versprechen · in fünf bis sieben Tagen bist du live",

      // ---- features: CTA ----
      "features.cta.title": "Sieh es auf deiner Karte, nicht auf unserer.",
      "features.cta.body": "Buche eine Demo und wir gestalten einen Bereich deiner echten Karte — ohne Verpflichtung, ohne Folien.",

      // ---- pricing: intro ----
      "pricing.eyebrow": "Preise",
      "pricing.title": "Zwei Zahlungen. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Keine Überraschungen.</em>",
      "pricing.intro": "Eine einmalige Einrichtungsgebühr deckt Aufbau, Gestaltung, Website-Einbindung und Team-Schulung ab. Danach deckt ein fester Monatsbeitrag Hosting, Support und Updates ab.",

      // ---- pricing: setup card ----
      "pricing.setup.eyebrow": "Einmalige Einrichtung",
      "pricing.setup.title": "Einrichtung der Karte",
      "pricing.setup.body": "Einmal zu Beginn bezahlt. Deckt alles ab, von „wir haben ein PDF“ bis „Gäste lesen sie auf dem Handy“.",
      "pricing.setup.price": "Ab €600",
      "pricing.setup.price_note": "Einmalig, abgerechnet beim Go-live. Angepasst an Größe des Lokals und Komplexität der Karte.",
      "pricing.setup.covered": "Was enthalten ist",
      "pricing.setup.i1": "Karte von uns abgetippt, strukturiert und geordnet",
      "pricing.setup.i2": "Gestaltet passend zu deiner bestehenden Marke",
      "pricing.setup.i3": "In deine bestehende Website eingebunden",
      "pricing.setup.i4": "QR-Codes (Tischkarten, Plakate) — optionale Ergänzung",
      "pricing.setup.i5": "Team-Schulung, 30 Minuten, Videoanruf",

      // ---- pricing: monthly card ----
      "pricing.monthly.badge": "Laufend",
      "pricing.monthly.eyebrow": "Monatsabo",
      "pricing.monthly.title": "Alles, am Laufen gehalten",
      "pricing.monthly.body": "Monatlich bezahlt. Hosting, Support, Software-Updates und unser Team zur Stelle, wenn du Hilfe brauchst.",
      "pricing.monthly.price_amt": "Ab €45",
      "pricing.monthly.price_per": "/Mon.",
      "pricing.monthly.price_note": "Monatlich abgerechnet. Jederzeit kündbar, mit einem Monat Frist.",
      "pricing.monthly.included": "Was enthalten ist",
      "pricing.monthly.i1": "Unbegrenzte Gerichte, Bereiche und Änderungen",
      "pricing.monthly.i2": "Mehrere Nutzer — Inhaber, Koch, Service",
      "pricing.monthly.i3": "Beliebtheitsanalyse & wöchentliche Zusammenfassung",
      "pricing.monthly.i4": "Hosting, Sicherheit, Software-Updates",
      "pricing.monthly.i5": "Echter menschlicher Support — E-Mail & WhatsApp",

      // ---- pricing: CTA strip ----
      "pricing.strip.title": "Der Endpreis hängt von deiner Karte und deinem Lokal ab.",
      "pricing.strip.body": "Ein Café mit 7 Gerichten und ein Gastropub mit 60 sind nicht dieselbe Aufgabe. Erzähl uns von deinem Lokal und wir machen dir im Gespräch ein Angebot.",
      "pricing.strip.cta": "Individuelles Angebot anfragen →",

      // ---- pricing: FAQ ----
      "pricing.faq.title": "Was die Leute zuerst fragen",
      "pricing.faq.q1": "Gibt es eine Vertragsbindung?",
      "pricing.faq.a1": "Ein einfacher Servicevertrag, kündbar mit einem Monat Frist. Keine mehrjährigen Bindungen.",
      "pricing.faq.q2": "Was, wenn sich meine Karte oft ändert?",
      "pricing.faq.a2": "Ändere sie selbst, so oft du willst. Der Monatsbeitrag bleibt gleich, egal wie oft du etwas änderst.",
      "pricing.faq.q3": "Brauche ich eine neue Website?",
      "pricing.faq.a3": "Nein. Deine bestehende bleibt. Wir binden die Karte darin ein. Squarespace, Wix, WordPress oder eine Eigenentwicklung — alles in Ordnung.",
      "pricing.faq.q4": "Was ist mit Fotos der Gerichte?",
      "pricing.faq.a4": "Du kannst eigene liefern, unsere von deiner bestehenden Website nutzen oder ganz auf Fotos verzichten. Optionale Ergänzung: Wir organisieren einen Fotografen.",
      "pricing.faq.q5": "Wie lange, bis wir live sind?",
      "pricing.faq.a5": "In den meisten Fällen fünf bis sieben Werktage ab Erhalt deiner Karte. Im Demo-Gespräch legen wir ein Datum fest.",

      // ---- cases: intro ----
      "cases.eyebrow": "Referenzen",
      "cases.title": "Echte Lokale. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Echte Karten.</em> Echte Ergebnisse.",
      "cases.intro": "Fallstudien und Testimonials werden derzeit von aktuellen Kunden gesammelt. Echte Geschichten ersetzen nach Freigabe nach und nach jeden der Platzhalter unten.",
      "cases.note": "<strong style=\"font-weight:600;color:#1F1814\">Hinweis zu Platzhaltern:</strong> alle Kundennamen, Zitate und Kennzahlen auf dieser Seite sind Platzhalter. Echte Inhalte kommen hier hinein, sobald sie vorliegen.",

      // ---- cases: featured ----
      "cases.featured.eyebrow": "Im Fokus · Pub",
      "cases.featured.quote": "„Platzhalter-Zitat darüber, wie das Team die Karte endlich aktualisieren kann, ohne auf die Webagentur zu warten.“",
      "cases.featured.body": "Platzhalter-Kundengeschichte — ein Absatz, der das Lokal vor Dimonova beschreibt, die Veränderung danach und ein konkretes Ergebnis (schnellere Änderungen, mehr Aufrufe, ein Gericht, das sie überrascht hat).",
      "cases.featured.client": "Name des Kunden",
      "cases.featured.role": "Rolle · Name des Lokals",
      "cases.featured.photo_badge": "Foto des Lokals",
      "cases.featured.photo_pill": "Foto des hervorgehobenen Lokals",

      // ---- cases: grid (shared labels) ----
      "cases.grid.photo": "Foto des Lokals",
      "cases.grid.type_restaurant": "Restaurant",
      "cases.grid.type_pub": "Pub",
      "cases.grid.type_cafe": "Café",
      "cases.grid.venue": "Name des Lokals (Platzhalter)",
      "cases.grid.summary": "Einzeilige Zusammenfassung dessen, was sich für sie geändert hat — Platzhalter, bis echte Inhalte vorliegen.",
      "cases.grid.live_since": "Live seit",
      "cases.grid.live_value": "Offen",
      "cases.grid.result": "Ergebnis",
      "cases.grid.result_value": "Platzhalter",

      // ---- cases: CTA ----
      "cases.cta.title": "Willst du die nächste Referenz sein?",

      // ---- about: intro ----
      "about.eyebrow": "Über uns",
      "about.title": "Ein kleines Team. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Eine konkrete Aufgabe.</em>",
      "about.intro": "Dimonova gibt es, weil die Karte — die meistgelesene Seite jeder Restaurant-Website — als Nebensache behandelt wurde. Wir erstellen sie, betreiben sie und kümmern uns für dich darum.",

      // ---- about: why we exist ----
      "about.why.eyebrow": "Warum es uns gibt",
      "about.why.title": "Die meisten digitalen Karten sind schlecht. Die guten machen zu viel Arbeit.",
      "about.why.p1": "Jedes Restaurant hat dasselbe Problem: Die Karte ändert sich ständig, aber die Website spiegelt das nie wider. PDFs sind veraltet. Die Webagentur hat eine zweiwöchige Ticket-Warteschlange. Das QR-Code-Produkt ist ein Albtraum zu bearbeiten. Irgendwann wurde die Karte — das, was Gäste eigentlich ansehen wollen — zum am schlechtesten gepflegten Teil des Online-Auftritts des Lokals.",
      "about.why.p2": "Wir haben Dimonova gebaut, weil dieses Problem eigentlich kein Software-Problem ist. Es ist ein Service-Problem. Software macht deine Karte nicht professionell — das macht ein Designer. Software bindet sie nicht in deine Website ein — das macht ein Entwickler. Software schult dein Team nicht — das macht ein Mensch. Also machen wir all das, und die Software ist das, was es günstig genug macht, damit es Sinn ergibt.",
      "about.why.p3": "Wir arbeiten mit Restaurants, Pubs und Cafés. Mit Ketten arbeiten wir nicht — die maßgeschneiderte Einrichtung würde nicht skalieren, und sie brauchen sie nicht.",
      "about.why.aside_label": "Kurz gesagt",
      "about.why.aside_quote": "„Wir machen digitale Karten für Orte, die ihr Essen ernst nehmen und nicht über Software nachdenken wollen.“",
      "about.why.aside_sign": "Das Dimonova-Team",

      // ---- about: principles ----
      "about.principles.eyebrow": "Wie wir arbeiten",
      "about.principles.title": "Drei Prinzipien, und nicht viel mehr.",
      "about.principles.p1_title": "Die Arbeit für sie erledigen.",
      "about.principles.p1_body": "Wenn das Onboarding den Kunden mehr als 30 Minuten seiner Zeit kostet, haben wir es falsch gestaltet.",
      "about.principles.p2_title": "Preise, die sie vorhersehen können.",
      "about.principles.p2_body": "Fester Monatsbeitrag. Keine Gebühren pro Gast, keine Gebühren pro Gericht, keine Überraschungsrechnungen in stressigen Wochen.",
      "about.principles.p3_title": "Ihre Marke, nicht unsere.",
      "about.principles.p3_body": "Die Karte lebt auf der Domain des Lokals, im Stil des Lokals. Wir sind die, die im Hintergrund still dafür sorgen, dass es funktioniert.",

      // ---- about: team ----
      "about.team.eyebrow": "Das Team",
      "about.team.title": "Die Menschen, mit denen du tatsächlich sprichst.",
      "about.team.portrait": "Porträt",
      "about.team.name": "Name (Platzhalter)",
      "about.team.role1": "Gründer & Aufbauleitung",
      "about.team.role2": "Design & Gestaltung",
      "about.team.role3": "Kundenbetreuung",
      "about.team.role4": "Entwicklung",

      // ---- about: CTA ----
      "about.cta.title": "Willst du sehen, wie es für dein Lokal funktionieren würde?",

      // ---- contact: intro ----
      "contact.eyebrow": "Kontakt",
      "contact.title": "Erzähl uns von deinem Lokal. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Den Rest machen wir.</em>",
      "contact.intro": "Eine Demo dauert meist 20 Minuten — wir zeigen dir das Dashboard, gehen echte Einrichtungen durch und machen dir im Gespräch ein Angebot.",

      // ---- contact: success state ----
      "contact.success.title": "Erhalten. Wir melden uns.",
      "contact.success.body": "Erwarte innerhalb eines Werktags eine E-Mail von unserem Team, um die Demo zu vereinbaren. Wenn es dringend ist, schreib uns auf WhatsApp.",
      "contact.success.wa": "Schreib uns auf WhatsApp",
      "contact.success.again": "Weitere senden",

      // ---- contact: form ----
      "contact.form.eyebrow": "Demo anfragen",
      "contact.form.name_label": "Dein Name",
      "contact.form.name_ph": "Aoife Kennedy",
      "contact.form.email_label": "E-Mail",
      "contact.form.email_ph": "aoife@crowingcock.com",
      "contact.form.venue_label": "Name des Lokals",
      "contact.form.venue_ph": "The Crowing Cock",
      "contact.form.vtype_label": "Art des Lokals",
      "contact.form.vtype_restaurant": "Restaurant",
      "contact.form.vtype_pub": "Pub",
      "contact.form.vtype_cafe": "Café",
      "contact.form.vtype_other": "Andere",
      "contact.form.phone_label": "Telefon",
      "contact.form.optional": "(optional)",
      "contact.form.phone_ph": "+49 …",
      "contact.form.message_label": "Sollten wir etwas wissen?",
      "contact.form.message_ph": "Größe der Karte, aktuelle Website, alles Konkrete, das du in der Demo sehen möchtest…",
      "contact.form.disclaimer": "Wir nutzen das nur, um deine Demo einzurichten. Keine Marketingliste.",
      "contact.form.submit": "Demo anfragen →",

      // ---- contact: side panel ----
      "contact.side.chat_label": "Lieber chatten?",
      "contact.side.chat_body": "Schneller als E-Mail. Während der Öffnungszeiten melden wir uns meist innerhalb einer Stunde.",
      "contact.side.chat_btn": "WhatsApp öffnen",
      "contact.side.old_label": "Oder, ganz klassisch",
      "contact.side.email_label": "E-Mail",
      "contact.side.phone_label": "Telefon",
      "contact.side.hours_label": "Öffnungszeiten",
      "contact.side.hours_value": "Mo — Fr, 9 — 18 Uhr<br>Sa, 10 — 14 Uhr",
      "contact.side.sell_quote": "„Wir machen dir im Gespräch ein Angebot. Keine Verkaufs-Nachfassserien, kein Druck.“",
      "contact.side.sell_label": "Wie wir verkaufen",

      // ---- form validation errors ----
      "errors.name": "Dein Name ist erforderlich.",
      "errors.email_required": "E-Mail ist erforderlich.",
      "errors.email_invalid": "Diese E-Mail sieht nicht richtig aus.",
      "errors.venue": "Name des Lokals ist erforderlich.",

      // ---- footer ----
      "footer.tagline": "Digitale Karten und Dashboards für Restaurants, Pubs und Cafés, die ihr Essen ernst nehmen.",
      "footer.col_product": "Produkt",
      "footer.col_company": "Unternehmen",
      "footer.col_contact": "Kontakt",
      "footer.rights": "© 2026 Dimonova. Alle Rechte vorbehalten.",

      // ---- WhatsApp widget ----
      "wa.name": "Dimonova-Team",
      "wa.status": "Meist innerhalb einer Stunde zurück",
      "wa.greeting": "Hi 👋 — was für ein Lokal führst du? Wir zeigen dir gern einen 30-Sekunden-Rundgang durchs Dashboard.",
      "wa.chip_restaurant": "Ich führe ein Restaurant",
      "wa.chip_pub": "Ich führe einen Pub",
      "wa.chip_cafe": "Ich führe ein Café",
      "wa.continue": "Weiter zu WhatsApp",
      "wa.disclaimer": "+353 (0)1 555 0199 · Prototyp, öffnet nicht wirklich",
    },

    fr: {
      // ---- nav / header / footer shared ----
      "nav.features": "Fonctionnalités",
      "nav.pricing": "Tarifs",
      "nav.cases": "Études de cas",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      "nav.home": "Accueil",
      "nav.whatsapp": "WhatsApp",
      "nav.demo": "Demander une démo",

      // ---- common buttons ----
      "common.chat_wa": "Discuter sur WhatsApp",
      "common.demo": "Demander une démo",
      "common.demo_arrow": "Demander une démo →",

      // ---- home: hero ----
      "home.hero.eyebrow": "Pour les restaurants, pubs et cafés",
      "home.hero.title1": "Une carte qu'on aime <em class=\"dim-h1-accent\" style=\"font-family:'Instrument Serif',serif;font-weight:400;font-style:italic;color:#B8523A;font-size:64px\">montrer</em>,",
      "home.hero.title2": "conçue et installée pour toi.",
      "home.hero.body": "Nous créons ta carte numérique, l'adaptons à ta marque, l'intégrons à ton site existant et formons ton équipe. Tu modifies un plat en deux tapotements.",
      "home.hero.avatars": "Adoptée par des établissements indépendants<br>dans tout le pays",

      // ---- home: hero dashboard visual ----
      "home.viz.dash_label": "Tableau de bord · en direct",
      "home.viz.dash_title": "Favoris de la semaine",
      "home.viz.days": "Lun — Dim",
      "home.viz.menu_views": "Vues de la carte",
      "home.viz.updates": "Modifications cette semaine",

      // ---- home: logo strip ----
      "home.logos.label": "La confiance d'établissements indépendants",
      "home.logos.placeholder": "logo de l'établissement",

      // ---- home: features summary ----
      "home.feat.eyebrow": "Ce que tu obtiens",
      "home.feat.title": "Un logiciel qui ressemble à <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">ton établissement</em>, pas à un modèle générique.",
      "home.feat.see_all": "Voir toutes les fonctionnalités →",
      "home.feat.c1_title": "Une carte numérique, bien conçue",
      "home.feat.c1_body": "Photos, descriptions, allergènes, prix — disposés pour que les clients les lisent vraiment.",
      "home.feat.c2_title": "Un tableau de bord que tu gères depuis le bar",
      "home.feat.c2_body": "Modifier un plat, changer une photo, marquer quelque chose en rupture — depuis n'importe quel téléphone ou ordinateur, en quelques secondes.",
      "home.feat.c3_title": "Vois ce que tes clients veulent vraiment",
      "home.feat.c3_body": "Popularité des plats, vues et tendances — pour que ta prochaine carte repose sur des données, pas sur des suppositions.",

      // ---- home: how it works ----
      "home.how.eyebrow": "Comment ça marche",
      "home.how.title": "Nous faisons le gros du travail. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#D69B7F\">Tu mènes la danse.</em>",
      "home.how.s1_title": "Envoie-nous ta carte",
      "home.how.s1_body": "Un PDF, une photo de l'ardoise, un document Word — ce que tu as. On s'occupe du reste.",
      "home.how.s2_title": "Nous la créons et la mettons en forme",
      "home.how.s2_body": "Adaptée à ta marque, ton ton, ton établissement. Photos, allergènes, sections — bien présentés.",
      "home.how.s3_title": "Intégration et formation",
      "home.how.s3_body": "Intégrée à ton site existant. Une formation de 30 minutes avec ton équipe. Voilà la passation.",
      "home.how.s4_title": "Tu la gères",
      "home.how.s4_body": "Modifie un plat en 10 secondes. Vois ce qui se vend. Nous restons là quand tu as besoin de nous.",
      "home.how.quote": "« La plupart sont en ligne 5 à 7 jours après nous avoir envoyé leur carte. La formation est la plus longue réunion qu'on te demande. »",
      "home.how.more": "En savoir plus sur l'installation →",

      // ---- home: differentiator ----
      "home.diff.eyebrow": "La différence",
      "home.diff.title": "Ce n'est pas <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">un outil de plus</em> à apprendre. C'est un service.",
      "home.diff.body": "La plupart des produits de carte numérique te donnent un éditeur, un centre d'aide et un essai gratuit. Pas nous. Nous créons la chose pour toi, l'intégrons à ton site et nous asseyons avec ton équipe pour tout lui expliquer.",
      "home.diff.p1": "Nous créons ta carte à partir de ce que tu as — PDF, photo, document.",
      "home.diff.p2": "Nous la mettons en forme pour qu'elle corresponde à ta marque et ton établissement.",
      "home.diff.p3": "Nous l'intégrons nous-mêmes à ton site existant.",
      "home.diff.p4": "Nous formons ton équipe en une seule session de 30 minutes.",
      "home.diff.card_badge": "visuel produit",
      "home.diff.card_pill": "Session d'intégration — visuel",
      "home.diff.card_title": "Installation, réglée",
      "home.diff.card_body": "Du contrat signé à la carte en ligne en quelques jours, pas semaines.",

      // ---- home: social proof ----
      "home.proof.quote": "Témoignage exemple — le genre de citation qui dit « on n'a plus à penser à la carte ». La vraie citation d'un client ira ici.",
      "home.proof.client": "Nom du client",
      "home.proof.role": "Fonction · Nom de l'établissement",
      "home.proof.stat1_label": "Mise en ligne moyenne",
      "home.proof.stat1_unit": "jours",
      "home.proof.stat2_label": "Temps pour modifier un plat",
      "home.proof.stat2_unit": "secondes",

      // ---- home: pricing teaser ----
      "home.price.eyebrow": "Tarifs, clairement",
      "home.price.title": "Des frais d'installation uniques, puis un abonnement mensuel fixe.",
      "home.price.body": "Hébergement, support et mises à jour inclus. Pas de frais par couvert, pas de frais par plat, pas de factures surprises.",
      "home.price.see_full": "Voir tous les tarifs →",
      "home.price.quote_cta": "Demander un devis sur mesure",

      // ---- home: closing CTA ----
      "home.cta.eyebrow": "Prêt quand tu l'es",
      "home.cta.title": "Mettons ta carte <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">en ligne</em>.",
      "home.cta.body": "Une démo de 20 minutes. On te montre le tableau de bord, on parcourt de vraies installations et on répond à tout. Sans engagement.",

      // ---- features: intro ----
      "features.eyebrow": "Fonctionnalités",
      "features.title": "Tout ce qu'il te faut pour gérer ta carte. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Rien de superflu.</em>",
      "features.intro": "Quatre éléments dans Dimonova : la carte numérique que voient tes clients, le tableau de bord depuis lequel ton équipe la gère, les analyses qui te disent ce qui fonctionne, et l'intégration clé en main qui met le tout en ligne.",

      // ---- features: 1 digital menu ----
      "features.f1.eyebrow": "01 · La carte numérique",
      "features.f1.title": "Une carte qui ressemble à ton établissement, pas à une appli de livraison.",
      "features.f1.body": "Photos, descriptions, allergènes, prix, sections, suggestions du jour — bien composés. Se charge vite sur mobile. Vit dans ton site existant, pour que les clients ne se sentent jamais renvoyés vers un outil tiers.",
      "features.f1.p1": "<strong style=\"font-weight:600\">Intégrée, pas redirigée.</strong> Vit sur <span style=\"font-family:'Instrument Serif',serif;font-style:italic\">tonetablissement.fr/carte</span>, pas sur une URL générique.",
      "features.f1.p2": "<strong style=\"font-weight:600\">Allergènes et étiquettes alimentaires</strong> sur chaque plat, filtrables pour les clients.",
      "features.f1.p3": "<strong style=\"font-weight:600\">QR codes optionnels</strong> — cartons de table, affiches, cartes de visite — y mènent directement.",
      "features.f1.p4": "<strong style=\"font-weight:600\">Les états « en rupture »</strong> retirent un plat instantanément pendant le service.",

      // ---- features: 2 dashboard ----
      "features.f2.eyebrow": "02 · Le tableau de bord",
      "features.f2.title": "Si tu sais utiliser Instagram, tu sais utiliser ceci.",
      "features.f2.body": "Pas de formation d'expert en cartes, pas de tickets à l'agence, pas de « ouvre une demande de support pour changer un prix ». La personne qui gère la salle peut retirer un plat, augmenter un prix ou changer une photo depuis son téléphone en moins d'une minute.",
      "features.f2.p1": "<strong style=\"font-weight:600\">Glisser-déposer</strong> des plats entre les sections.",
      "features.f2.p2": "<strong style=\"font-weight:600\">Plusieurs utilisateurs</strong> — propriétaire, chef, responsable de salle.",
      "features.f2.p3": "<strong style=\"font-weight:600\">Planifie les changements</strong> — active la carte brunch le samedi à 9 h, désactive-la à 14 h.",
      "features.f2.p4": "<strong style=\"font-weight:600\">Fonctionne sur tout appareil.</strong> Le téléphone du barman, l'iPad du responsable, l'ordinateur du propriétaire.",
      "features.f2.viz_menu": "Carte",
      "features.f2.viz_all": "Tous les plats",
      "features.f2.viz_starters": "Entrées",
      "features.f2.viz_mains": "Plats",
      "features.f2.viz_desserts": "Desserts",
      "features.f2.viz_drinks": "Boissons",
      "features.f2.viz_insights": "Analyses",
      "features.f2.viz_popularity": "Popularité",
      "features.f2.viz_newdish": "+ Nouveau plat",
      "features.f2.viz_soldout": "En rupture",

      // ---- features: 3 analytics ----
      "features.f3.eyebrow": "03 · Analyses",
      "features.f3.title": "La carte te donne enfin des données, pas des suppositions.",
      "features.f3.body": "Chaque vue d'un plat est enregistrée. Tu vois ce que les clients regardent, ce qu'ils sautent et ce qui les perd dès la description. Lance une suggestion brunch ; vois si quelqu'un l'a lue. Ta prochaine carte, ce sont des décisions, pas des opinions.",
      "features.f3.p1": "<strong style=\"font-weight:600\">Popularité des plats</strong> par semaine, mois et section.",
      "features.f3.p2": "<strong style=\"font-weight:600\">Vues et temps d'attention</strong> — le plat a-t-il été remarqué ou sauté ?",
      "features.f3.p3": "<strong style=\"font-weight:600\">Courbes de tendance</strong> au fil des changements de carte, pour voir ce qui a marché.",
      "features.f3.p4": "<strong style=\"font-weight:600\">Récap hebdo par e-mail</strong> — top 5, flop 5, ce qui a changé.",
      "features.f3.viz_title": "Vues — 12 dernières semaines",
      "features.f3.viz_total": "Vues totales",
      "features.f3.viz_top": "Section phare",
      "features.f3.viz_trend": "Tendance",
      "features.f3.viz_top_value": "Plats",

      // ---- features: 4 onboarding ----
      "features.f4.eyebrow": "04 · Intégration clé en main",
      "features.f4.title": "La partie que personne d'autre ne fait. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#D69B7F\">Nous la faisons pour toi.</em>",
      "features.f4.c1_title": "Montage de la carte",
      "features.f4.c1_body": "Envoie-nous ta carte dans le format que tu as. Nous la saisissons, la structurons, l'organisons en sections, ajoutons les allergènes et vérifions chaque plat avec toi avant la mise en ligne.",
      "features.f4.c2_title": "Identité de marque",
      "features.f4.c2_body": "Couleurs, polices, style photo — assortis à ton établissement. La carte doit sembler appartenir à ta marque, pas à la nôtre. Nous nous inspirons de ton site et de ta signalétique existants.",
      "features.f4.c3_title": "Intégration au site",
      "features.f4.c3_body": "Intégrée directement à ton site existant par nos soins. Squarespace, Wix, WordPress, développement sur mesure — on gère. Ta carte vit sur tonetablissement.fr/carte, pas sur le domaine d'un autre.",
      "features.f4.c4_title": "Formation de l'équipe",
      "features.f4.c4_body": "Une seule session de 30 minutes avec ceux qui gèreront le tableau de bord — en général le propriétaire et le responsable de salle. Nous partageons l'écran, tu prends des notes. Ensuite, tu es autonome.",
      "features.f4.quote": "« Tu as acheté un logiciel. On te remet une carte prête à l'emploi. »",
      "features.f4.promise": "Notre promesse · en cinq à sept jours, tu es en ligne",

      // ---- features: CTA ----
      "features.cta.title": "Vois-le sur ta carte, pas la nôtre.",
      "features.cta.body": "Réserve une démo et nous maquettons une section de ta vraie carte — sans engagement, sans diapositives.",

      // ---- pricing: intro ----
      "pricing.eyebrow": "Tarifs",
      "pricing.title": "Deux paiements. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Aucune surprise.</em>",
      "pricing.intro": "Des frais d'installation uniques couvrent le montage, la mise en forme, l'intégration au site et la formation de l'équipe. Ensuite, un abonnement mensuel fixe couvre l'hébergement, le support et les mises à jour.",

      // ---- pricing: setup card ----
      "pricing.setup.eyebrow": "Installation unique",
      "pricing.setup.title": "Configuration de la carte",
      "pricing.setup.body": "Payé une fois, au début. Couvre tout, de « on a un PDF » à « les clients la lisent sur leur téléphone ».",
      "pricing.setup.price": "À partir de €600",
      "pricing.setup.price_note": "Paiement unique, facturé à la mise en ligne. Ajusté selon la taille de l'établissement et la complexité de la carte.",
      "pricing.setup.covered": "Ce qui est compris",
      "pricing.setup.i1": "Carte saisie, structurée et organisée par nos soins",
      "pricing.setup.i2": "Mise en forme assortie à ta marque existante",
      "pricing.setup.i3": "Intégrée à ton site existant",
      "pricing.setup.i4": "QR codes (cartons de table, affiches) — option supplémentaire",
      "pricing.setup.i5": "Session de formation de l'équipe, 30 minutes, visio",

      // ---- pricing: monthly card ----
      "pricing.monthly.badge": "En continu",
      "pricing.monthly.eyebrow": "Abonnement mensuel",
      "pricing.monthly.title": "Tout, maintenu en marche",
      "pricing.monthly.body": "Payé chaque mois. Hébergement, support, mises à jour logicielles et notre équipe disponible quand tu as besoin d'un coup de main.",
      "pricing.monthly.price_amt": "À partir de €45",
      "pricing.monthly.price_per": "/mois",
      "pricing.monthly.price_note": "Facturé chaque mois. Annulable à tout moment, avec un mois de préavis.",
      "pricing.monthly.included": "Ce qui est inclus",
      "pricing.monthly.i1": "Plats, sections et modifications illimités",
      "pricing.monthly.i2": "Plusieurs utilisateurs — propriétaire, chef, salle",
      "pricing.monthly.i3": "Analyses de popularité et récap hebdomadaire",
      "pricing.monthly.i4": "Hébergement, sécurité, mises à jour logicielles",
      "pricing.monthly.i5": "Un vrai support humain — e-mail et WhatsApp",

      // ---- pricing: CTA strip ----
      "pricing.strip.title": "Le prix final dépend de ta carte et de ton établissement.",
      "pricing.strip.body": "Un café de 7 plats et un gastropub de 60 ne sont pas le même travail. Parle-nous de ton établissement et nous te ferons un devis lors de l'appel.",
      "pricing.strip.cta": "Demander un devis sur mesure →",

      // ---- pricing: FAQ ----
      "pricing.faq.title": "Ce qu'on demande en premier",
      "pricing.faq.q1": "Y a-t-il un engagement ?",
      "pricing.faq.a1": "Un simple contrat de service, résiliable avec un mois de préavis. Pas d'engagement sur plusieurs années.",
      "pricing.faq.q2": "Et si ma carte change beaucoup ?",
      "pricing.faq.a2": "Modifie-la toi-même, aussi souvent que tu veux. L'abonnement mensuel est fixe, quelle que soit la fréquence des changements.",
      "pricing.faq.q3": "Ai-je besoin d'un nouveau site ?",
      "pricing.faq.a3": "Non. Le tien reste. Nous y intégrons la carte. Squarespace, Wix, WordPress ou un développement sur mesure — tout convient.",
      "pricing.faq.q4": "Et les photos des plats ?",
      "pricing.faq.a4": "Tu peux fournir les tiennes, utiliser celles de ton site existant ou ne pas mettre de photos. Option supplémentaire : nous organisons un photographe.",
      "pricing.faq.q5": "Combien de temps avant la mise en ligne ?",
      "pricing.faq.a5": "Cinq à sept jours ouvrés après réception de ta carte, dans la plupart des cas. Nous fixerons une date lors de l'appel de démo.",

      // ---- cases: intro ----
      "cases.eyebrow": "Études de cas",
      "cases.title": "De vrais établissements. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">De vraies cartes.</em> De vrais résultats.",
      "cases.intro": "Les études de cas et témoignages sont en cours de collecte auprès de clients actuels. De vraies histoires remplaceront chacun des exemples ci-dessous au fur et à mesure de leur validation.",
      "cases.note": "<strong style=\"font-weight:600;color:#1F1814\">Note sur les exemples :</strong> tous les noms de clients, citations et chiffres de cette page sont des exemples. Le contenu réel viendra ici une fois fourni.",

      // ---- cases: featured ----
      "cases.featured.eyebrow": "À la une · Pub",
      "cases.featured.quote": "« Citation exemple sur la façon dont l'équipe peut enfin mettre à jour la carte sans attendre l'agence web. »",
      "cases.featured.body": "Histoire client exemple — un paragraphe décrivant l'établissement avant Dimonova, le changement après, et un résultat concret (mises à jour plus rapides, plus de vues, un plat qui les a surpris).",
      "cases.featured.client": "Nom du client",
      "cases.featured.role": "Fonction · Nom de l'établissement",
      "cases.featured.photo_badge": "photo de l'établissement",
      "cases.featured.photo_pill": "Photo de l'établissement à la une",

      // ---- cases: grid (shared labels) ----
      "cases.grid.photo": "photo de l'établissement",
      "cases.grid.type_restaurant": "Restaurant",
      "cases.grid.type_pub": "Pub",
      "cases.grid.type_cafe": "Café",
      "cases.grid.venue": "Nom de l'établissement (exemple)",
      "cases.grid.summary": "Résumé en une ligne de ce qui a changé pour eux — exemple en attendant le contenu réel.",
      "cases.grid.live_since": "En ligne depuis",
      "cases.grid.live_value": "À définir",
      "cases.grid.result": "Résultat",
      "cases.grid.result_value": "exemple",

      // ---- cases: CTA ----
      "cases.cta.title": "Tu veux être la prochaine étude de cas ?",

      // ---- about: intro ----
      "about.eyebrow": "À propos",
      "about.title": "Une petite équipe. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Une mission précise.</em>",
      "about.intro": "Dimonova existe parce que la carte — la page la plus lue du site de tout restaurant — était traitée comme un détail. Nous la créons, la gérons et nous en occupons pour toi.",

      // ---- about: why we exist ----
      "about.why.eyebrow": "Pourquoi nous existons",
      "about.why.title": "La plupart des cartes numériques sont mauvaises. Les bonnes demandent trop de travail.",
      "about.why.p1": "Chaque restaurant a le même problème : la carte change constamment, mais le site ne le reflète jamais. Les PDF sont périmés. L'agence web a une file d'attente de deux semaines. Le produit QR code est un cauchemar à modifier. À un moment, la carte — ce que les clients veulent vraiment regarder — est devenue la partie la plus mal entretenue de la présence en ligne de l'établissement.",
      "about.why.p2": "Nous avons créé Dimonova parce que ce problème n'est pas vraiment un problème de logiciel. C'est un problème de service. Un logiciel ne rend pas ta carte professionnelle — un designer, si. Un logiciel ne la relie pas à ton site — un développeur, si. Un logiciel ne forme pas ton équipe — une personne, si. Alors nous faisons tout cela, et le logiciel est ce qui rend l'ensemble assez abordable pour avoir du sens.",
      "about.why.p3": "Nous travaillons avec des restaurants, des pubs et des cafés. Pas avec des chaînes — l'installation sur mesure ne passerait pas à l'échelle, et elles n'en ont pas besoin.",
      "about.why.aside_label": "En bref",
      "about.why.aside_quote": "« Nous créons des cartes numériques pour des lieux qui prennent leur cuisine au sérieux et ne veulent pas penser au logiciel. »",
      "about.why.aside_sign": "L'équipe Dimonova",

      // ---- about: principles ----
      "about.principles.eyebrow": "Notre façon de travailler",
      "about.principles.title": "Trois principes, et pas beaucoup plus.",
      "about.principles.p1_title": "Faire le travail à leur place.",
      "about.principles.p1_body": "Si l'intégration coûte au client plus de 30 minutes de son temps, c'est qu'on l'a mal conçue.",
      "about.principles.p2_title": "Des prix prévisibles.",
      "about.principles.p2_body": "Mensuel fixe. Pas de frais par couvert, pas de frais par plat, pas de factures surprises les semaines chargées.",
      "about.principles.p3_title": "Leur marque, pas la nôtre.",
      "about.principles.p3_body": "La carte vit sur le domaine de l'établissement, dans son style. C'est nous qui, en coulisses, faisons en sorte que ça marche.",

      // ---- about: team ----
      "about.team.eyebrow": "L'équipe",
      "about.team.title": "Les personnes à qui tu parleras vraiment.",
      "about.team.portrait": "portrait",
      "about.team.name": "Nom (exemple)",
      "about.team.role1": "Fondateur et responsable du montage",
      "about.team.role2": "Design et mise en forme",
      "about.team.role3": "Relation client",
      "about.team.role4": "Ingénierie",

      // ---- about: CTA ----
      "about.cta.title": "Tu veux voir comment ça marcherait pour ton établissement ?",

      // ---- contact: intro ----
      "contact.eyebrow": "Contact",
      "contact.title": "Parle-nous de ton établissement. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">On s'occupe du reste.</em>",
      "contact.intro": "Une démo dure en général 20 minutes — on te montre le tableau de bord, on parcourt de vraies installations et on te fait un devis lors de l'appel.",

      // ---- contact: success state ----
      "contact.success.title": "Bien reçu. On te recontacte.",
      "contact.success.body": "Attends-toi à un e-mail de notre équipe sous un jour ouvré pour fixer la démo. Si c'est urgent, écris-nous sur WhatsApp.",
      "contact.success.wa": "Écris-nous sur WhatsApp",
      "contact.success.again": "En envoyer un autre",

      // ---- contact: form ----
      "contact.form.eyebrow": "Demander une démo",
      "contact.form.name_label": "Ton nom",
      "contact.form.name_ph": "Aoife Kennedy",
      "contact.form.email_label": "E-mail",
      "contact.form.email_ph": "aoife@crowingcock.com",
      "contact.form.venue_label": "Nom de l'établissement",
      "contact.form.venue_ph": "The Crowing Cock",
      "contact.form.vtype_label": "Type d'établissement",
      "contact.form.vtype_restaurant": "Restaurant",
      "contact.form.vtype_pub": "Pub",
      "contact.form.vtype_cafe": "Café",
      "contact.form.vtype_other": "Autre",
      "contact.form.phone_label": "Téléphone",
      "contact.form.optional": "(facultatif)",
      "contact.form.phone_ph": "+33 …",
      "contact.form.message_label": "Quelque chose à nous signaler ?",
      "contact.form.message_ph": "Taille de la carte, site actuel, tout ce que tu aimerais voir précisément lors de la démo…",
      "contact.form.disclaimer": "Nous l'utilisons uniquement pour organiser ta démo. Pas de liste marketing.",
      "contact.form.submit": "Demander une démo →",

      // ---- contact: side panel ----
      "contact.side.chat_label": "Tu préfères discuter ?",
      "contact.side.chat_body": "Plus rapide que l'e-mail. Pendant les heures d'ouverture, nous répondons en général en moins d'une heure.",
      "contact.side.chat_btn": "Ouvrir WhatsApp",
      "contact.side.old_label": "Ou, à l'ancienne",
      "contact.side.email_label": "E-mail",
      "contact.side.phone_label": "Téléphone",
      "contact.side.hours_label": "Horaires",
      "contact.side.hours_value": "Lun — Ven, 9 h — 18 h<br>Sam, 10 h — 14 h",
      "contact.side.sell_quote": "« On te fait un devis lors de l'appel. Pas de séquences de relance commerciale, pas de pression. »",
      "contact.side.sell_label": "Notre façon de vendre",

      // ---- form validation errors ----
      "errors.name": "Ton nom est requis.",
      "errors.email_required": "L'e-mail est requis.",
      "errors.email_invalid": "Cet e-mail ne semble pas correct.",
      "errors.venue": "Le nom de l'établissement est requis.",

      // ---- footer ----
      "footer.tagline": "Cartes numériques et tableaux de bord pour les restaurants, pubs et cafés qui prennent leur cuisine au sérieux.",
      "footer.col_product": "Produit",
      "footer.col_company": "Entreprise",
      "footer.col_contact": "Contact",
      "footer.rights": "© 2026 Dimonova. Tous droits réservés.",

      // ---- WhatsApp widget ----
      "wa.name": "Équipe Dimonova",
      "wa.status": "Réponse en général sous une heure",
      "wa.greeting": "Bonjour 👋 — quel type d'établissement gères-tu ? On te montre volontiers un aperçu du tableau de bord en 30 secondes.",
      "wa.chip_restaurant": "Je gère un restaurant",
      "wa.chip_pub": "Je gère un pub",
      "wa.chip_cafe": "Je gère un café",
      "wa.continue": "Continuer vers WhatsApp",
      "wa.disclaimer": "+353 (0)1 555 0199 · prototype, ne s'ouvrira pas vraiment",
    },

    pt: {
      // ---- nav / header / footer shared ----
      "nav.features": "Funcionalidades",
      "nav.pricing": "Preços",
      "nav.cases": "Casos de sucesso",
      "nav.about": "Sobre nós",
      "nav.contact": "Contacto",
      "nav.home": "Início",
      "nav.whatsapp": "WhatsApp",
      "nav.demo": "Pedir uma demo",

      // ---- common buttons ----
      "common.chat_wa": "Conversar no WhatsApp",
      "common.demo": "Pedir uma demo",
      "common.demo_arrow": "Pedir uma demo →",

      // ---- home: hero ----
      "home.hero.eyebrow": "Para restaurantes, pubs e cafés",
      "home.hero.title1": "Uma ementa para <em class=\"dim-h1-accent\" style=\"font-family:'Instrument Serif',serif;font-weight:400;font-style:italic;color:#B8523A;font-size:64px\">exibir</em>,",
      "home.hero.title2": "criada e configurada para ti.",
      "home.hero.body": "Criamos a tua ementa digital, adaptamo-la à tua marca, integramo-la no teu site atual e formamos a tua equipa. Mudas um prato com dois toques.",
      "home.hero.avatars": "A escolha de espaços independentes<br>de todo o país",

      // ---- home: hero dashboard visual ----
      "home.viz.dash_label": "Painel · em direto",
      "home.viz.dash_title": "Favoritos da semana",
      "home.viz.days": "Seg — Dom",
      "home.viz.menu_views": "Visualizações da ementa",
      "home.viz.updates": "Alterações esta semana",

      // ---- home: logo strip ----
      "home.logos.label": "A confiança de espaços independentes",
      "home.logos.placeholder": "logótipo do espaço",

      // ---- home: features summary ----
      "home.feat.eyebrow": "O que recebes",
      "home.feat.title": "Software que parece <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">o teu espaço</em>, não um modelo genérico.",
      "home.feat.see_all": "Ver todas as funcionalidades →",
      "home.feat.c1_title": "Uma ementa digital, bem desenhada",
      "home.feat.c1_body": "Fotos, descrições, alergénios e preços — dispostos para que os clientes os leiam mesmo.",
      "home.feat.c2_title": "Um painel que geres a partir do balcão",
      "home.feat.c2_body": "Edita um prato, troca uma foto, marca algo como esgotado — de qualquer telemóvel ou portátil, em segundos.",
      "home.feat.c3_title": "Vê o que os teus clientes querem mesmo",
      "home.feat.c3_body": "Popularidade dos pratos, visualizações e tendências — para que a tua próxima ementa se baseie em dados, não em suposições.",

      // ---- home: how it works ----
      "home.how.eyebrow": "Como funciona",
      "home.how.title": "Nós fazemos o trabalho pesado. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#D69B7F\">Tu comandas o espetáculo.</em>",
      "home.how.s1_title": "Envia-nos a tua ementa",
      "home.how.s1_body": "Um PDF, uma foto do quadro, um documento Word — o que tiveres. Nós tratamos do resto.",
      "home.how.s2_title": "Criamo-la e desenhamo-la",
      "home.how.s2_body": "Ajustada à tua marca, ao teu tom, ao teu espaço. Fotos, alergénios, secções — bem organizados.",
      "home.how.s3_title": "Integração e formação",
      "home.how.s3_body": "Integrada no teu site atual. Uma formação de 30 minutos com a tua equipa. É essa a entrega.",
      "home.how.s4_title": "Tu geres tudo",
      "home.how.s4_body": "Edita um prato em 10 segundos. Vê o que se vende. Continuamos cá quando precisares de nós.",
      "home.how.quote": "«A maioria fica online em 5 a 7 dias depois de nos enviar a ementa. A formação é a reunião mais longa que te pedimos.»",
      "home.how.more": "Mais sobre a configuração →",

      // ---- home: differentiator ----
      "home.diff.eyebrow": "A diferença",
      "home.diff.title": "Isto não é <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">mais uma ferramenta</em> para aprender. É um serviço.",
      "home.diff.body": "A maioria dos produtos de ementa digital dá-te um editor, um centro de ajuda e um período de teste gratuito. Nós não. Criamos a coisa por ti, integramo-la no teu site e sentamo-nos com a tua equipa para lhe explicar tudo.",
      "home.diff.p1": "Criamos a tua ementa a partir do que tiveres — PDF, foto, documento.",
      "home.diff.p2": "Desenhamo-la a condizer com a tua marca e o teu espaço.",
      "home.diff.p3": "Integramo-la nós próprios no teu site atual.",
      "home.diff.p4": "Formamos a tua equipa numa única sessão de 30 minutos.",
      "home.diff.card_badge": "imagem do produto",
      "home.diff.card_pill": "Sessão de integração — visual",
      "home.diff.card_title": "Configuração, resolvida",
      "home.diff.card_body": "Do contrato assinado à ementa online em dias, não semanas.",

      // ---- home: social proof ----
      "home.proof.quote": "Testemunho de exemplo — o tipo de citação que diz «já não temos de pensar na ementa». Aqui ficará uma citação real de um cliente.",
      "home.proof.client": "Nome do cliente",
      "home.proof.role": "Cargo · Nome do espaço",
      "home.proof.stat1_label": "Entrada online média",
      "home.proof.stat1_unit": "dias",
      "home.proof.stat2_label": "Tempo para editar um prato",
      "home.proof.stat2_unit": "segundos",

      // ---- home: pricing teaser ----
      "home.price.eyebrow": "Preços, com clareza",
      "home.price.title": "Um pagamento único de configuração e depois uma mensalidade fixa.",
      "home.price.body": "Alojamento, apoio e atualizações incluídos. Sem custos por cliente, sem custos por prato, sem faturas surpresa.",
      "home.price.see_full": "Ver todos os preços →",
      "home.price.quote_cta": "Pedir um orçamento à medida",

      // ---- home: closing CTA ----
      "home.cta.eyebrow": "Quando quiseres",
      "home.cta.title": "Vamos pôr a tua ementa <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">online</em>.",
      "home.cta.body": "Uma demo de 20 minutos. Mostramos-te o painel, percorremos configurações reais e respondemos a tudo. Sem compromisso.",

      // ---- features: intro ----
      "features.eyebrow": "Funcionalidades",
      "features.title": "Tudo o que precisas para gerir a tua ementa. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Nada a mais.</em>",
      "features.intro": "Quatro partes na Dimonova: a ementa digital que os teus clientes veem, o painel a partir do qual a tua equipa a gere, as análises que te dizem o que funciona e a integração chave na mão que põe tudo online.",

      // ---- features: 1 digital menu ----
      "features.f1.eyebrow": "01 · A ementa digital",
      "features.f1.title": "Uma ementa com a cara do teu espaço, não de uma app de entregas.",
      "features.f1.body": "Fotos, descrições, alergénios, preços, secções, sugestões do dia — bem compostos. Carrega depressa no telemóvel. Vive dentro do teu site atual, para que os clientes nunca sintam que foram encaminhados para uma ferramenta externa.",
      "features.f1.p1": "<strong style=\"font-weight:600\">Integrada, não redirecionada.</strong> Vive em <span style=\"font-family:'Instrument Serif',serif;font-style:italic\">oteuespaco.pt/ementa</span>, não num URL genérico.",
      "features.f1.p2": "<strong style=\"font-weight:600\">Alergénios e etiquetas alimentares</strong> em cada prato, filtráveis para os clientes.",
      "features.f1.p3": "<strong style=\"font-weight:600\">Códigos QR opcionais</strong> — cartões de mesa, cartazes, cartões de visita — levam diretamente até ela.",
      "features.f1.p4": "<strong style=\"font-weight:600\">Os estados de esgotado</strong> retiram um prato instantaneamente durante o serviço.",

      // ---- features: 2 dashboard ----
      "features.f2.eyebrow": "02 · O painel",
      "features.f2.title": "Se sabes usar o Instagram, sabes usar isto.",
      "features.f2.body": "Sem formação para te tornares perito em ementas, sem tickets para a agência, sem «abre um pedido de apoio para mudar um preço». Quem gere a sala pode retirar um prato, subir um preço ou trocar uma foto a partir do telemóvel em menos de um minuto.",
      "features.f2.p1": "<strong style=\"font-weight:600\">Arrasta e larga</strong> pratos entre secções.",
      "features.f2.p2": "<strong style=\"font-weight:600\">Vários utilizadores</strong> — proprietário, chef, responsável de sala.",
      "features.f2.p3": "<strong style=\"font-weight:600\">Agenda alterações</strong> — liga a ementa de brunch ao sábado às 9h e desliga-a às 14h.",
      "features.f2.p4": "<strong style=\"font-weight:600\">Funciona em qualquer dispositivo.</strong> O telemóvel do empregado de bar, o iPad do responsável, o portátil do dono.",
      "features.f2.viz_menu": "Ementa",
      "features.f2.viz_all": "Todos os pratos",
      "features.f2.viz_starters": "Entradas",
      "features.f2.viz_mains": "Pratos principais",
      "features.f2.viz_desserts": "Sobremesas",
      "features.f2.viz_drinks": "Bebidas",
      "features.f2.viz_insights": "Análises",
      "features.f2.viz_popularity": "Popularidade",
      "features.f2.viz_newdish": "+ Novo prato",
      "features.f2.viz_soldout": "Esgotado",

      // ---- features: 3 analytics ----
      "features.f3.eyebrow": "03 · Análises",
      "features.f3.title": "A ementa dá-te finalmente dados, não suposições.",
      "features.f3.body": "Cada visualização de um prato fica registada. Vês o que os clientes olham, o que ignoram e o que os perde logo na descrição. Lança uma sugestão de brunch; vê se alguém a leu. A tua próxima ementa serão decisões, não opiniões.",
      "features.f3.p1": "<strong style=\"font-weight:600\">Popularidade dos pratos</strong> por semana, mês e secção.",
      "features.f3.p2": "<strong style=\"font-weight:600\">Visualizações e tempo de atenção</strong> — o prato foi notado ou ignorado?",
      "features.f3.p3": "<strong style=\"font-weight:600\">Linhas de tendência</strong> ao longo das alterações da ementa, para veres o que resultou.",
      "features.f3.p4": "<strong style=\"font-weight:600\">Resumo semanal por e-mail</strong> — top 5, os 5 últimos, o que mudou.",
      "features.f3.viz_title": "Visualizações — últimas 12 semanas",
      "features.f3.viz_total": "Visualizações totais",
      "features.f3.viz_top": "Secção em destaque",
      "features.f3.viz_trend": "Tendência",
      "features.f3.viz_top_value": "Pratos principais",

      // ---- features: 4 onboarding ----
      "features.f4.eyebrow": "04 · Integração chave na mão",
      "features.f4.title": "A parte que mais ninguém faz. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#D69B7F\">Fazemo-la por ti.</em>",
      "features.f4.c1_title": "Montagem da ementa",
      "features.f4.c1_body": "Envia-nos a tua ementa no formato que tiveres. Transcrevemo-la, estruturamo-la, organizamo-la por secções, acrescentamos os alergénios e verificamos cada prato contigo antes de ficar online.",
      "features.f4.c2_title": "Design de marca",
      "features.f4.c2_body": "Cores, tipos de letra, estilo de fotografia — a condizer com o teu espaço. A ementa deve sentir-se como sendo da tua marca, não da nossa. Inspiramo-nos no teu site e na tua sinalética atuais.",
      "features.f4.c3_title": "Integração no site",
      "features.f4.c3_body": "Integrada diretamente no teu site atual por nós. Squarespace, Wix, WordPress, desenvolvimento à medida — tratamos disso. A tua ementa vive em oteuespaco.pt/ementa, não no domínio de outra pessoa.",
      "features.f4.c4_title": "Formação da equipa",
      "features.f4.c4_body": "Uma única sessão de 30 minutos com quem vai gerir o painel — normalmente o dono e o responsável de sala. Partilhamos o ecrã, tu tomas notas. Depois disso, ficas autónomo.",
      "features.f4.quote": "«Compraste software. Entregamos-te uma ementa pronta a usar.»",
      "features.f4.promise": "A nossa promessa · em cinco a sete dias, estás online",

      // ---- features: CTA ----
      "features.cta.title": "Vê-o na tua ementa, não na nossa.",
      "features.cta.body": "Marca uma demo e montamos uma secção da tua ementa real — sem compromisso, sem slides.",

      // ---- pricing: intro ----
      "pricing.eyebrow": "Preços",
      "pricing.title": "Dois pagamentos. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Sem surpresas.</em>",
      "pricing.intro": "Um pagamento único de configuração cobre a montagem, o design, a integração no site e a formação da equipa. Depois, uma mensalidade fixa cobre o alojamento, o apoio e as atualizações.",

      // ---- pricing: setup card ----
      "pricing.setup.eyebrow": "Configuração única",
      "pricing.setup.title": "Configuração da ementa",
      "pricing.setup.body": "Pago uma vez, no início. Cobre tudo, desde «temos um PDF» até «os clientes leem-na no telemóvel».",
      "pricing.setup.price": "Desde €600",
      "pricing.setup.price_note": "Pagamento único, faturado quando ficas online. Ajustado ao tamanho do espaço e à complexidade da ementa.",
      "pricing.setup.covered": "O que está incluído",
      "pricing.setup.i1": "Ementa transcrita, estruturada e organizada por nós",
      "pricing.setup.i2": "Desenhada a condizer com a tua marca atual",
      "pricing.setup.i3": "Integrada no teu site atual",
      "pricing.setup.i4": "Códigos QR (cartões de mesa, cartazes) — extra opcional",
      "pricing.setup.i5": "Sessão de formação da equipa, 30 minutos, videochamada",

      // ---- pricing: monthly card ----
      "pricing.monthly.badge": "Contínuo",
      "pricing.monthly.eyebrow": "Subscrição mensal",
      "pricing.monthly.title": "Tudo, a funcionar",
      "pricing.monthly.body": "Pago mensalmente. Alojamento, apoio, atualizações de software e a nossa equipa à mão quando precisares de ajuda.",
      "pricing.monthly.price_amt": "Desde €45",
      "pricing.monthly.price_per": "/mês",
      "pricing.monthly.price_note": "Faturado mensalmente. Cancela quando quiseres, com um mês de aviso.",
      "pricing.monthly.included": "O que está incluído",
      "pricing.monthly.i1": "Pratos, secções e alterações ilimitados",
      "pricing.monthly.i2": "Vários utilizadores — proprietário, chef, sala",
      "pricing.monthly.i3": "Análises de popularidade e resumo semanal",
      "pricing.monthly.i4": "Alojamento, segurança e atualizações de software",
      "pricing.monthly.i5": "Apoio humano de verdade — e-mail e WhatsApp",

      // ---- pricing: CTA strip ----
      "pricing.strip.title": "O preço final depende da tua ementa e do teu espaço.",
      "pricing.strip.body": "Um café de 7 pratos e um gastropub de 60 não são o mesmo trabalho. Fala-nos do teu espaço e damos-te um orçamento na chamada.",
      "pricing.strip.cta": "Pedir um orçamento à medida →",

      // ---- pricing: FAQ ----
      "pricing.faq.title": "O que as pessoas perguntam primeiro",
      "pricing.faq.q1": "Existe fidelização?",
      "pricing.faq.a1": "Um simples acordo de serviço, cancelável com um mês de aviso. Sem amarras de vários anos.",
      "pricing.faq.q2": "E se a minha ementa mudar muito?",
      "pricing.faq.a2": "Edita-a tu mesmo, tantas vezes quantas quiseres. A mensalidade é fixa, independentemente da frequência com que mudes coisas.",
      "pricing.faq.q3": "Preciso de um site novo?",
      "pricing.faq.a3": "Não. O teu atual fica. Integramos a ementa nele. Squarespace, Wix, WordPress ou um desenvolvimento à medida — tudo serve.",
      "pricing.faq.q4": "E as fotos dos pratos?",
      "pricing.faq.a4": "Podes fornecer as tuas, usar as do teu site atual ou dispensar as fotos. Extra opcional: tratamos de um fotógrafo.",
      "pricing.faq.q5": "Quanto tempo até estarmos online?",
      "pricing.faq.a5": "Cinco a sete dias úteis após recebermos a tua ementa, na maioria dos casos. Combinamos uma data na chamada de demo.",

      // ---- cases: intro ----
      "cases.eyebrow": "Casos de sucesso",
      "cases.title": "Espaços reais. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Ementas reais.</em> Resultados reais.",
      "cases.intro": "Os casos e testemunhos estão a ser recolhidos junto de clientes atuais. Histórias reais vão substituir cada um dos exemplos abaixo à medida que forem aprovadas.",
      "cases.note": "<strong style=\"font-weight:600;color:#1F1814\">Nota de exemplo:</strong> todos os nomes de clientes, citações e métricas nesta página são exemplos. O conteúdo real entra aqui quando estiver disponível.",

      // ---- cases: featured ----
      "cases.featured.eyebrow": "Em destaque · Pub",
      "cases.featured.quote": "«Citação de exemplo sobre como a equipa consegue finalmente atualizar a ementa sem esperar pela agência web.»",
      "cases.featured.body": "História de cliente de exemplo — um parágrafo a descrever o espaço antes da Dimonova, a mudança depois e um resultado concreto (alterações mais rápidas, mais visualizações, um prato que os surpreendeu).",
      "cases.featured.client": "Nome do cliente",
      "cases.featured.role": "Cargo · Nome do espaço",
      "cases.featured.photo_badge": "foto do espaço",
      "cases.featured.photo_pill": "Foto do espaço em destaque",

      // ---- cases: grid (shared labels) ----
      "cases.grid.photo": "foto do espaço",
      "cases.grid.type_restaurant": "Restaurante",
      "cases.grid.type_pub": "Pub",
      "cases.grid.type_cafe": "Café",
      "cases.grid.venue": "Nome do espaço (exemplo)",
      "cases.grid.summary": "Resumo numa linha do que mudou para eles — exemplo até chegar o conteúdo real.",
      "cases.grid.live_since": "Online desde",
      "cases.grid.live_value": "Por definir",
      "cases.grid.result": "Resultado",
      "cases.grid.result_value": "exemplo",

      // ---- cases: CTA ----
      "cases.cta.title": "Queres ser o próximo caso de sucesso?",

      // ---- about: intro ----
      "about.eyebrow": "Sobre nós",
      "about.title": "Uma equipa pequena. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Uma tarefa específica.</em>",
      "about.intro": "A Dimonova existe porque a ementa — a página mais lida do site de qualquer restaurante — era tratada como algo secundário. Nós criamo-la, gerimo-la e cuidamos dela por ti.",

      // ---- about: why we exist ----
      "about.why.eyebrow": "Porque existimos",
      "about.why.title": "A maioria das ementas digitais é má. As boas dão demasiado trabalho.",
      "about.why.p1": "Todos os restaurantes têm o mesmo problema: a ementa muda constantemente, mas o site nunca o reflete. Os PDF estão desatualizados. A agência web tem uma fila de pedidos de duas semanas. O produto de QR é um pesadelo para editar. A certa altura, a ementa — aquilo que os clientes querem mesmo ver — tornou-se a parte pior mantida da presença online do espaço.",
      "about.why.p2": "Criámos a Dimonova porque esse problema não é, na verdade, um problema de software. É um problema de serviço. O software não torna a tua ementa profissional — isso fá-lo um designer. O software não a liga ao teu site — isso fá-lo um programador. O software não forma a tua equipa — isso fá-lo uma pessoa. Por isso fazemos tudo isso, e o software é o que torna tudo barato o suficiente para fazer sentido.",
      "about.why.p3": "Trabalhamos com restaurantes, pubs e cafés. Não trabalhamos com cadeias — a configuração à medida não escalaria, e elas não precisam dela.",
      "about.why.aside_label": "Em resumo",
      "about.why.aside_quote": "«Fazemos ementas digitais para sítios que levam a sua comida a sério e não querem pensar em software.»",
      "about.why.aside_sign": "A equipa Dimonova",

      // ---- about: principles ----
      "about.principles.eyebrow": "Como trabalhamos",
      "about.principles.title": "Três princípios, e não muitos mais.",
      "about.principles.p1_title": "Fazer o trabalho por eles.",
      "about.principles.p1_body": "Se a integração custar ao cliente mais de 30 minutos do seu tempo, desenhámo-la mal.",
      "about.principles.p2_title": "Preços que conseguem prever.",
      "about.principles.p2_body": "Mensalidade fixa. Sem custos por cliente, sem custos por prato, sem faturas surpresa em semanas de muito movimento.",
      "about.principles.p3_title": "A marca deles, não a nossa.",
      "about.principles.p3_body": "A ementa vive no domínio do espaço, com o estilo do espaço. Somos nós que, em silêncio, fazemos com que funcione.",

      // ---- about: team ----
      "about.team.eyebrow": "A equipa",
      "about.team.title": "As pessoas com quem vais mesmo falar.",
      "about.team.portrait": "retrato",
      "about.team.name": "Nome (exemplo)",
      "about.team.role1": "Fundador e responsável de montagem",
      "about.team.role2": "Design e estilo",
      "about.team.role3": "Apoio ao cliente",
      "about.team.role4": "Engenharia",

      // ---- about: CTA ----
      "about.cta.title": "Queres ver como funcionaria para o teu espaço?",

      // ---- contact: intro ----
      "contact.eyebrow": "Contacto",
      "contact.title": "Fala-nos do teu espaço. <em style=\"font-family:'Instrument Serif',serif;font-style:italic;color:#B8523A\">Nós fazemos o resto.</em>",
      "contact.intro": "Uma demo dura normalmente 20 minutos — mostramos-te o painel, percorremos configurações reais e damos-te um orçamento na chamada.",

      // ---- contact: success state ----
      "contact.success.title": "Recebido. Entramos em contacto.",
      "contact.success.body": "Espera um e-mail da nossa equipa dentro de um dia útil para marcar a demo. Se for urgente, escreve-nos no WhatsApp.",
      "contact.success.wa": "Escreve-nos no WhatsApp",
      "contact.success.again": "Enviar outro",

      // ---- contact: form ----
      "contact.form.eyebrow": "Pedir uma demo",
      "contact.form.name_label": "O teu nome",
      "contact.form.name_ph": "Aoife Kennedy",
      "contact.form.email_label": "E-mail",
      "contact.form.email_ph": "aoife@crowingcock.com",
      "contact.form.venue_label": "Nome do espaço",
      "contact.form.venue_ph": "The Crowing Cock",
      "contact.form.vtype_label": "Tipo de espaço",
      "contact.form.vtype_restaurant": "Restaurante",
      "contact.form.vtype_pub": "Pub",
      "contact.form.vtype_cafe": "Café",
      "contact.form.vtype_other": "Outro",
      "contact.form.phone_label": "Telefone",
      "contact.form.optional": "(opcional)",
      "contact.form.phone_ph": "+351 …",
      "contact.form.message_label": "Algo que devamos saber?",
      "contact.form.message_ph": "Tamanho da ementa, site atual, qualquer coisa específica que queiras ver na demo…",
      "contact.form.disclaimer": "Só usamos isto para preparar a tua demo. Sem listas de marketing.",
      "contact.form.submit": "Pedir uma demo →",

      // ---- contact: side panel ----
      "contact.side.chat_label": "Preferes conversar?",
      "contact.side.chat_body": "Mais rápido do que o e-mail. Durante o horário de funcionamento, costumamos responder em menos de uma hora.",
      "contact.side.chat_btn": "Abrir WhatsApp",
      "contact.side.old_label": "Ou, à moda antiga",
      "contact.side.email_label": "E-mail",
      "contact.side.phone_label": "Telefone",
      "contact.side.hours_label": "Horário",
      "contact.side.hours_value": "Seg — Sex, 9h — 18h<br>Sáb, 10h — 14h",
      "contact.side.sell_quote": "«Damos-te um orçamento na chamada. Sem sequências de vendas a insistir, sem pressão.»",
      "contact.side.sell_label": "Como vendemos",

      // ---- form validation errors ----
      "errors.name": "O teu nome é obrigatório.",
      "errors.email_required": "O e-mail é obrigatório.",
      "errors.email_invalid": "Esse e-mail não parece correto.",
      "errors.venue": "O nome do espaço é obrigatório.",

      // ---- footer ----
      "footer.tagline": "Ementas digitais e painéis para restaurantes, pubs e cafés que levam a sua comida a sério.",
      "footer.col_product": "Produto",
      "footer.col_company": "Empresa",
      "footer.col_contact": "Contacto",
      "footer.rights": "© 2026 Dimonova. Todos os direitos reservados.",

      // ---- WhatsApp widget ----
      "wa.name": "Equipa Dimonova",
      "wa.status": "Resposta normalmente numa hora",
      "wa.greeting": "Olá 👋 — que tipo de espaço geres? Com todo o gosto mostramos-te uma visita de 30 segundos ao painel.",
      "wa.chip_restaurant": "Tenho um restaurante",
      "wa.chip_pub": "Tenho um pub",
      "wa.chip_cafe": "Tenho um café",
      "wa.continue": "Continuar para o WhatsApp",
      "wa.disclaimer": "+353 (0)1 555 0199 · protótipo, não abre mesmo",
    },
  };
})();
