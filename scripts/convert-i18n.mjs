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
