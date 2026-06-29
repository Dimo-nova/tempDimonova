// Headless smoke test of the site's state machine using jsdom.
// Verifies routing, page visibility, WhatsApp toggle, mobile nav,
// venue-type pills, and contact-form validation. Run: node _smoke-test.js
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const i18nJs = fs.readFileSync(path.join(__dirname, "i18n.js"), "utf8");
const appJs = fs.readFileSync(path.join(__dirname, "app.js"), "utf8");

const dom = new JSDOM(html, { runScripts: "outside-only", pretendToBeVisual: true, url: "https://example.com/" });
const { window } = dom;
const { document } = window;

// jsdom lacks scrollTo; stub it
window.scrollTo = () => {};
window.HTMLElement.prototype.scrollIntoView = () => {};

// execute i18n.js then app.js in the window context (app.js reads window.I18N)
const vm = require("vm");
const ctx = dom.getInternalVMContext();
vm.runInContext(i18nJs, ctx);
vm.runInContext(appJs, ctx);

let pass = 0, fail = 0;
function ok(cond, msg) { if (cond) { pass++; } else { fail++; console.error("  ✗ " + msg); } }

const visible = (sel) => {
  const el = document.querySelector(sel);
  return el && !el.hidden;
};
const click = (el) => el.dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
// jsdom doesn't auto-fire hashchange on programmatic hash changes the way
// browsers do, so fire it explicitly after navigation clicks.
const fireHashChange = () => window.dispatchEvent(new window.Event("hashchange"));
// jsdom's implicit form submission is unreliable; dispatch submit directly.
const submit = () => document.querySelector('[data-action="submit-form"]')
  .dispatchEvent(new window.Event("submit", { bubbles: true, cancelable: true }));

// initial state -> home page visible, others hidden
ok(visible('.sc-if[data-if="isHome"]'), "home visible on load");
ok(!visible('.sc-if[data-if="isFeatures"]'), "features hidden on load");
ok(!visible('.sc-if[data-if="waOpen"]'), "WhatsApp panel hidden on load");

// navigate to features via nav link
click(document.querySelector('header nav button[data-nav="features"]'));
fireHashChange();
ok(window.location.hash === "#features", "hash set to #features");
ok(visible('.sc-if[data-if="isFeatures"]'), "features visible after nav");
ok(!visible('.sc-if[data-if="isHome"]'), "home hidden after nav");

// active nav link colour updates
const featBtn = document.querySelector('header nav button[data-nav="features"]');
ok(featBtn.style.color === "rgb(31, 24, 20)" || featBtn.style.color === "#1F1814", "active nav link recoloured");

// WhatsApp toggle
click(document.querySelector('[data-action="toggle-wa"]'));
ok(visible('.sc-if[data-if="waOpen"]'), "WhatsApp panel opens");
ok(!visible('.sc-if[data-if="waClosed"]'), "WhatsApp FAB icon swaps");
click(document.querySelector('[data-action="toggle-wa"]'));
ok(!visible('.sc-if[data-if="waOpen"]'), "WhatsApp panel closes");

// mobile nav toggle
click(document.querySelector('[data-action="toggle-mobile"]'));
ok(visible('.sc-if[data-if="mobileNav"]'), "mobile nav opens");

// go to contact page
window.location.hash = "#contact";
window.dispatchEvent(new window.Event("hashchange"));
ok(visible('.sc-if[data-if="isContact"]'), "contact page visible");
ok(!visible('.sc-if[data-if="mobileNav"]'), "mobile nav reset on navigation");

// venue-type pills
click(document.querySelector('[data-vtype="pub"]'));
const pub = document.querySelector('[data-vtype="pub"]');
const rest = document.querySelector('[data-vtype="restaurant"]');
ok(pub.style.background === "rgb(31, 24, 20)", "pub pill becomes active");
ok(rest.style.background === "transparent", "restaurant pill deactivates");

// submit empty form -> validation errors
submit();
ok(visible('.sc-if[data-if="errors.name"]'), "name error shown on empty submit");
ok(visible('.sc-if[data-if="errors.email"]'), "email error shown on empty submit");
ok(visible('.sc-if[data-if="errors.venue"]'), "venue error shown on empty submit");
ok(!visible('.sc-if[data-if="submitted"]'), "success not shown when invalid");

// bad email
document.querySelector('[data-field="name"]').value = "Aoife";
document.querySelector('[data-field="venue"]').value = "The Crowing Cock";
const emailEl = document.querySelector('[data-field="email"]');
emailEl.value = "not-an-email";
emailEl.dispatchEvent(new window.Event("input", { bubbles: true }));
submit();
const emailErrEl = document.querySelector('.sc-if[data-if="errors.email"] div');
ok(visible('.sc-if[data-if="errors.email"]') && /doesn't look right/.test(emailErrEl.textContent), "invalid email rejected");

// valid submit -> success state
emailEl.value = "aoife@crowingcock.com";
emailEl.dispatchEvent(new window.Event("input", { bubbles: true }));
submit();
ok(visible('.sc-if[data-if="submitted"]'), "success state shown on valid submit");
ok(!visible('.sc-if[data-if="showForm"]'), "form hidden on success");

// reset form
click(document.querySelector('[data-action="reset-form"]'));
ok(visible('.sc-if[data-if="showForm"]'), "form returns after reset");
ok(document.querySelector('[data-field="name"]').value === "", "fields cleared on reset");

// ---- i18n engine -----------------------------------------------------------
ok(typeof window.Dimonova === "object" && typeof window.Dimonova.setLanguage === "function",
  "i18n public API exposed");
ok(window.I18N && window.I18N.en && window.I18N.en["nav.features"] === "Features",
  "English dictionary present");
// the engine applied English text to tagged elements on init
const featNav = document.querySelector('header nav button[data-nav="features"]');
ok(featNav && featNav.getAttribute("data-i18n") === "nav.features" && featNav.textContent === "Features",
  "nav label tagged and populated from dictionary");
// switching language writes localStorage and is reflected by getLanguage()
// switching to Spanish applies translated strings (text, html heading, placeholder)
window.Dimonova.setLanguage("es");
ok(featNav.textContent === "Características", "Spanish applied to nav label");
ok(document.querySelector('[data-i18n-placeholder="contact.form.message_ph"]').getAttribute("placeholder") === window.I18N.es["contact.form.message_ph"], "Spanish applied to placeholder");
ok(window.localStorage.getItem("lang") === "es", "Spanish persisted to localStorage");
// switching back to English restores the originals
window.Dimonova.setLanguage("en");
ok(featNav.textContent === "Features", "English restored after switching back");
ok(window.localStorage.getItem("lang") === "en", "selected language persisted to localStorage");
ok(window.Dimonova.getLanguage() === "en", "getLanguage reflects current language");

// ---- language switcher UI --------------------------------------------------
ok(!visible('.sc-if[data-if="langOpen"]'), "language dropdown hidden initially");
click(document.querySelector('[data-action="toggle-lang"]'));
ok(visible('.sc-if[data-if="langOpen"]'), "language dropdown opens on toggle");
// the desktop button reflects the active language (flag + code)
ok(document.querySelector('[data-lang-code]').textContent === "EN", "selector shows active language code");
ok(/16x12\/gb\.png/.test(document.querySelector('[data-lang-flag]').getAttribute("src")), "selector shows active flag image");
// the active row carries the visible dot
ok(document.querySelector('[data-lang-dot="en"]').style.opacity === "1", "active language row marked");
ok(document.querySelector('[data-lang-dot="es"]').style.opacity === "0", "inactive language row not marked");
// selecting a language closes the dropdown
click(document.querySelector('[data-lang="en"]'));
ok(!visible('.sc-if[data-if="langOpen"]'), "dropdown closes after selecting a language");

console.log("\n" + pass + " passed, " + fail + " failed");
process.exit(fail ? 1 : 0);
