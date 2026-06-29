// One-time build: transform the Claude Design template (_design_source.html)
// into a self-contained static site (index.html + styles.css + app.js).
// Run with: node _build.js
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "_design_source.html");
const src = fs.readFileSync(SRC, "utf8");

// --- Extract the <style> block from <helmet> ---------------------------------
const styleMatch = /<style>([\s\S]*?)<\/style>/.exec(src);
const designCss = styleMatch ? styleMatch[1].trim() : "";

// --- Extract the template (between </helmet> and </x-dc>) --------------------
let tpl = src.split("</helmet>")[1].split("</x-dc>")[0];

// --- Transformations ---------------------------------------------------------
// 1. style-hover / style-focus -> data-hover / data-focus
tpl = tpl.replace(/style-hover="([^"]*)"/g, 'data-hover="$1"');
tpl = tpl.replace(/style-focus="([^"]*)"/g, 'data-focus="$1"');

// 2. <sc-if value="{{ X }}" hint-placeholder-val="{{ Y }}"> -> generic wrapper
tpl = tpl.replace(
  /<sc-if\s+value="\{\{\s*([\w.]+)\s*\}\}"\s+hint-placeholder-val="\{\{\s*(true|false)\s*\}\}"\s*>/g,
  '<div class="sc-if" data-if="$1" data-default="$2">'
);
tpl = tpl.replace(/<\/sc-if>/g, "</div>");

// 3. Navigation handlers -> data-nav (lowercased in JS)
tpl = tpl.replace(/onClick="\{\{\s*nav(\w+)\s*\}\}"/g, (_, n) => `data-nav="${n.toLowerCase()}"`);

// 4. Misc action handlers
tpl = tpl.replace(/onClick="\{\{\s*toggleWA\s*\}\}"/g, 'data-action="toggle-wa"');
tpl = tpl.replace(/onClick="\{\{\s*toggleMobileNav\s*\}\}"/g, 'data-action="toggle-mobile"');
tpl = tpl.replace(/onClick="\{\{\s*resetForm\s*\}\}"/g, 'data-action="reset-form"');

// 5. Venue-type picker buttons -> data-vtype
tpl = tpl.replace(/onClick="\{\{\s*pick(\w+)\s*\}\}"/g, (_, n) => `data-vtype="${n.toLowerCase()}"`);

// 6. Form submit
tpl = tpl.replace(/onSubmit="\{\{\s*submitForm\s*\}\}"/g, 'data-action="submit-form"');

// 7. Input field bindings: onChange -> data-field; drop onInput + value bindings
tpl = tpl.replace(/onChange="\{\{\s*set(\w+)\s*\}\}"/g, (_, n) => `data-field="${n.toLowerCase()}"`);
tpl = tpl.replace(/\s*onInput="\{\{\s*set\w+\s*\}\}"/g, "");
tpl = tpl.replace(/\s*value="\{\{\s*form\.\w+\s*\}\}"/g, "");

// 8. Input border bindings -> default border colour (JS recolours on error)
tpl = tpl.replace(/\{\{\s*(?:name|email|venue)Border\s*\}\}/g, "#E8E0D2");

// 9. Header dynamic bindings -> initial (unscrolled) values
tpl = tpl.replace(/\{\{\s*headerBg\s*\}\}/g, "transparent");
tpl = tpl.replace(/\{\{\s*headerShadow\s*\}\}/g, "none");

// 10. Nav link colour bindings -> muted default (JS sets active colour)
tpl = tpl.replace(/\{\{\s*\w+LinkColor\s*\}\}/g, "#8A7E70");

// 11. Venue-type pill style bindings -> defaults for vtype = "restaurant"
const pillDefaults = {
  restaurantBg: "#1F1814", restaurantColor: "#FAF6F0", restaurantBorder: "#1F1814",
  pubBg: "transparent", pubColor: "#1F1814", pubBorder: "#E8E0D2",
  cafeBg: "transparent", cafeColor: "#1F1814", cafeBorder: "#E8E0D2",
  otherBg: "transparent", otherColor: "#1F1814", otherBorder: "#E8E0D2",
};
for (const [k, v] of Object.entries(pillDefaults)) {
  tpl = tpl.replace(new RegExp("\\{\\{\\s*" + k + "\\s*\\}\\}", "g"), v);
}

// 12. Error-message text bindings -> empty (JS fills textContent)
tpl = tpl.replace(/\{\{\s*errors\.\w+\s*\}\}/g, "");

// --- Sanity check: no leftover template tokens -------------------------------
const leftover = tpl.match(/\{\{[^}]*\}\}/g);
if (leftover) {
  console.error("UNHANDLED TEMPLATE TOKENS:", [...new Set(leftover)]);
  process.exit(1);
}

// --- Assemble index.html -----------------------------------------------------
const head = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Dimonova — Digital menus, done for you</title>
<meta name="description" content="Dimonova builds, styles and runs digital menus for restaurants, pubs and cafés. We build your menu, link it into your website, and train your team. You change a dish in two taps.">
<meta name="theme-color" content="#FAF6F0">
<meta property="og:title" content="Dimonova — Digital menus, done for you">
<meta property="og:description" content="A menu worth showing off, built and set up for you. For restaurants, pubs & cafés.">
<meta property="og:type" content="website">
<link rel="icon" type="image/svg+xml" href="favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32.png">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>
<body>
`;

const tail = `
<script src="i18n.js" defer></script>
<script src="app.js" defer></script>
</body>
</html>
`;

const html = head + tpl.trim() + "\n" + tail;
fs.writeFileSync(path.join(__dirname, "index.html"), html, "utf8");

// --- styles.css = design CSS + runtime helpers -------------------------------
const css = `/* ============================================================
   Dimonova — styles
   Base styles & responsive rules are ported verbatim from the
   original Claude Design template; runtime helpers are appended.
   ============================================================ */
${designCss}

/* --- runtime helpers (replace the Claude Design runtime) --- */
.sc-if[hidden]{display:none!important}
`;
fs.writeFileSync(path.join(__dirname, "styles.css"), css, "utf8");

console.log("Built index.html (%d bytes) and styles.css", html.length);
