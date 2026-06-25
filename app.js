/* ============================================================
   Dimonova — client runtime
   A hand-written reimplementation of the original Claude Design
   DCLogic component: hash routing, a scroll-aware header, the
   mobile nav, the WhatsApp widget, and the contact form.
   ============================================================ */
(function () {
  "use strict";

  var PAGES = ["home", "features", "pricing", "cases", "about", "contact"];

  // lang code -> flagcdn country code for the flag image
  var LANG_FLAGS = { en: "gb", es: "es", de: "de", fr: "fr", pt: "pt" };

  // Localised product screenshots in assets/. Files are named
  // <LANG_FILE[code]>_<base>.png. IMG_LANGS lists which languages actually
  // have a screenshot for each base; anything missing falls back to English.
  var LANG_FILE = { en: "english", es: "spanish", de: "german", fr: "french", pt: "portuguese" };
  var IMG_LANGS = {
    hero: ["en", "es", "de", "fr"],
    features: ["en", "es", "de", "fr"],
    dishes: ["en", "es", "de", "fr", "pt"],
    manager_data: ["en", "es", "de", "fr", "pt"],
  };
  function imgSrc(base, code) {
    var langs = IMG_LANGS[base] || ["en"];
    var lang = langs.indexOf(code) >= 0 ? code : "en";
    return "assets/" + LANG_FILE[lang] + "_" + base + ".png";
  }

  function storedLang() {
    try { return localStorage.getItem("lang") || "en"; } catch (e) { return "en"; }
  }

  var state = {
    page: "home",
    scrolled: false,
    mobileNav: false,
    waOpen: false,
    vtype: "restaurant",
    submitted: false,
    errors: {}, // { name, email, venue }
    lang: storedLang(),
    langOpen: false,
  };

  var prevVisiblePage = null;

  // ---- element refs --------------------------------------------------------
  var header = document.querySelector("header");
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll("header nav.dim-hide-md button[data-nav]")
  );
  var pillButtons = Array.prototype.slice.call(
    document.querySelectorAll("button[data-vtype]")
  );
  var scIfs = Array.prototype.slice.call(document.querySelectorAll(".sc-if"));

  // ---- i18n ----------------------------------------------------------------
  // Look up a key in the active language, falling back to English, then the
  // key itself. Used for runtime strings (validation messages) that aren't
  // attached to a [data-i18n] element.
  function t(key) {
    var I18N = window.I18N || {};
    var dict = I18N[state.lang] || {};
    if (dict[key] != null) return dict[key];
    var en = I18N.en || {};
    return en[key] != null ? en[key] : key;
  }

  // Apply a language to the whole document: swap textContent / innerHTML /
  // placeholder on every tagged element. Called once on init and again on
  // each language switch — never from render().
  function setLanguage(code) {
    var I18N = window.I18N || {};
    if (!I18N[code]) code = "en";
    state.lang = code;
    try { localStorage.setItem("lang", code); } catch (e) {}

    var dict = I18N[code] || {};
    var en = I18N.en || {};
    function val(key) { return dict[key] != null ? dict[key] : en[key]; }

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = val(el.getAttribute("data-i18n"));
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = val(el.getAttribute("data-i18n-html"));
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var v = val(el.getAttribute("data-i18n-placeholder"));
      if (v != null) el.setAttribute("placeholder", v);
    });
    document.querySelectorAll("[data-i18n-img]").forEach(function (el) {
      el.setAttribute("src", imgSrc(el.getAttribute("data-i18n-img"), code));
    });
  }

  // ---- derived conditions (mirrors renderVals) -----------------------------
  function computeIf(name) {
    switch (name) {
      case "isHome": return state.page === "home";
      case "isFeatures": return state.page === "features";
      case "isPricing": return state.page === "pricing";
      case "isCases": return state.page === "cases";
      case "isAbout": return state.page === "about";
      case "isContact": return state.page === "contact";
      case "mobileNav": return state.mobileNav;
      case "waOpen": return state.waOpen;
      case "waClosed": return !state.waOpen;
      case "langOpen": return state.langOpen;
      case "submitted": return state.submitted;
      case "showForm": return !state.submitted;
      case "errors.name": return !!state.errors.name;
      case "errors.email": return !!state.errors.email;
      case "errors.venue": return !!state.errors.venue;
      default: return false;
    }
  }

  // ---- render --------------------------------------------------------------
  function render() {
    // sc-if visibility
    scIfs.forEach(function (el) {
      var name = el.getAttribute("data-if");
      var visible = computeIf(name);
      el.hidden = !visible;

      // fill error messages
      if (name.indexOf("errors.") === 0) {
        var field = name.split(".")[1];
        var msg = state.errors[field] || "";
        var inner = el.firstElementChild;
        if (inner) inner.textContent = msg;
      }
    });

    // page enter animation (replay dimFade on navigation)
    if (state.page !== prevVisiblePage) {
      var activeWrap = document.querySelector('.sc-if[data-if="is' + cap(state.page) + '"]');
      var pageEl = activeWrap ? activeWrap.querySelector(".dim-page") : null;
      if (pageEl) {
        pageEl.style.animation = "none";
        // force reflow then restore so the animation re-runs
        void pageEl.offsetWidth;
        pageEl.style.animation = "";
      }
      prevVisiblePage = state.page;
    }

    // header background / shadow
    if (header) {
      if (state.scrolled) {
        header.style.background = "rgba(250,246,240,.92)";
        header.style.boxShadow = "0 1px 0 #E8E0D2, 0 8px 24px -16px rgba(31,24,20,.18)";
      } else {
        header.style.background = "transparent";
        header.style.boxShadow = "none";
      }
    }

    // desktop nav active link colour
    navLinks.forEach(function (btn) {
      btn.style.color = btn.getAttribute("data-nav") === state.page ? "#1F1814" : "#8A7E70";
    });

    // venue-type pills
    pillButtons.forEach(function (btn) {
      var on = btn.getAttribute("data-vtype") === state.vtype;
      btn.style.background = on ? "#1F1814" : "transparent";
      btn.style.color = on ? "#FAF6F0" : "#1F1814";
      btn.style.borderColor = on ? "#1F1814" : "#E8E0D2";
    });

    // language selector: button label (flag + code)
    var langFlag = document.querySelector("[data-lang-flag]");
    var langCode = document.querySelector("[data-lang-code]");
    if (langFlag) langFlag.setAttribute("src", "https://flagcdn.com/16x12/" + (LANG_FLAGS[state.lang] || "gb") + ".png");
    if (langCode) langCode.textContent = state.lang.toUpperCase();

    // desktop dropdown: active row dot
    document.querySelectorAll("[data-lang-dot]").forEach(function (dot) {
      dot.style.opacity = dot.getAttribute("data-lang-dot") === state.lang ? "1" : "0";
    });

    // mobile pills: active fill
    document.querySelectorAll("[data-lang-pill]").forEach(function (pill) {
      var on = pill.getAttribute("data-lang-pill") === state.lang;
      pill.style.background = on ? "#1F1814" : "transparent";
      pill.style.color = on ? "#FAF6F0" : "#1F1814";
      pill.style.borderColor = on ? "#1F1814" : "#E8E0D2";
    });
  }

  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  // ---- routing -------------------------------------------------------------
  function readHash() {
    var h = (window.location.hash || "#home").replace(/^#\/?/, "");
    var p = PAGES.indexOf(h) !== -1 ? h : "home";
    state.page = p;
    state.mobileNav = false;
    state.submitted = false;
    state.errors = {};
    render();
    try { window.scrollTo(0, 0); } catch (e) {}
  }

  function navigate(page) {
    if (window.location.hash === "#" + page) {
      try { window.scrollTo(0, 0); } catch (e) {}
      return;
    }
    window.location.hash = "#" + page;
  }

  function onScroll() {
    var s = (window.scrollY || window.pageYOffset || 0) > 12;
    if (s !== state.scrolled) {
      state.scrolled = s;
      render();
    }
  }

  // ---- contact form --------------------------------------------------------
  function getField(name) {
    var el = document.querySelector('[data-field="' + name + '"]');
    return el ? el.value : "";
  }

  function submitForm() {
    var name = getField("name").trim();
    var email = getField("email").trim();
    var venue = getField("venue").trim();
    var errors = {};
    if (!name) errors.name = t("errors.name");
    if (!email) errors.email = t("errors.email_required");
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.email = t("errors.email_invalid");
    if (!venue) errors.venue = t("errors.venue");

    if (Object.keys(errors).length) {
      state.errors = errors;
      render();
      // move focus to the first invalid field
      var firstBad = document.querySelector('[data-field="' + Object.keys(errors)[0] + '"]');
      if (firstBad) firstBad.focus();
      return;
    }
    state.submitted = true;
    state.errors = {};
    render();
  }

  function resetForm() {
    ["name", "email", "venue", "phone", "message"].forEach(function (f) {
      var el = document.querySelector('[data-field="' + f + '"]');
      if (el) el.value = "";
    });
    state.vtype = "restaurant";
    state.submitted = false;
    state.errors = {};
    render();
  }

  // ---- global event delegation ---------------------------------------------
  document.addEventListener("click", function (e) {
    // language selection (desktop dropdown rows + mobile pills)
    var langEl = e.target.closest("[data-lang]");
    if (langEl) { setLanguage(langEl.getAttribute("data-lang")); state.langOpen = false; render(); return; }

    // close the language dropdown when clicking anywhere outside it
    if (state.langOpen && !e.target.closest("[data-lang-selector]")) {
      state.langOpen = false;
      render();
    }

    var navEl = e.target.closest("[data-nav]");
    if (navEl) { navigate(navEl.getAttribute("data-nav")); return; }

    var vtypeEl = e.target.closest("[data-vtype]");
    if (vtypeEl) { state.vtype = vtypeEl.getAttribute("data-vtype"); render(); return; }

    var actionEl = e.target.closest("[data-action]");
    if (actionEl) {
      var action = actionEl.getAttribute("data-action");
      if (action === "toggle-wa") { state.waOpen = !state.waOpen; render(); }
      else if (action === "toggle-mobile") { state.mobileNav = !state.mobileNav; render(); }
      else if (action === "toggle-lang") { state.langOpen = !state.langOpen; render(); }
      else if (action === "reset-form") { resetForm(); }
    }
  });

  document.addEventListener("submit", function (e) {
    var form = e.target.closest('[data-action="submit-form"]');
    if (form) { e.preventDefault(); submitForm(); }
  });

  // clear a field's error as the user corrects it
  document.addEventListener("input", function (e) {
    var f = e.target.getAttribute && e.target.getAttribute("data-field");
    if (f && state.errors[f]) { state.errors[f] = ""; render(); }
  });

  // ---- hover / focus helper (replaces style-hover / style-focus) -----------
  function bindStateStyles() {
    document.querySelectorAll("[data-hover]").forEach(function (el) {
      var extra = el.getAttribute("data-hover");
      el.addEventListener("mouseenter", function () {
        el._baseStyle = el.getAttribute("style") || "";
        el.setAttribute("style", el._baseStyle + ";" + extra);
      });
      el.addEventListener("mouseleave", function () {
        el.setAttribute("style", el._baseStyle || "");
      });
    });
    document.querySelectorAll("[data-focus]").forEach(function (el) {
      var extra = el.getAttribute("data-focus");
      el.addEventListener("focus", function () {
        el._baseFocusStyle = el.getAttribute("style") || "";
        el.setAttribute("style", el._baseFocusStyle + ";" + extra);
      });
      el.addEventListener("blur", function () {
        el.setAttribute("style", el._baseFocusStyle || "");
      });
    });
  }

  // ---- public API (language switcher + tests) ------------------------------
  window.Dimonova = {
    setLanguage: function (code) { setLanguage(code); render(); },
    getLanguage: function () { return state.lang; },
    t: t,
  };

  // ---- init ----------------------------------------------------------------
  setLanguage(state.lang);
  bindStateStyles();
  window.addEventListener("hashchange", readHash);
  window.addEventListener("scroll", onScroll, { passive: true });
  readHash();
  onScroll();
})();
