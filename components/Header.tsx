"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/routing";
import { s } from "@/lib/style";
import NavLink from "./NavLink";
import MobileNav from "./MobileNav";
import LangSwitcher from "./LangSwitcher";
import Hover from "./Hover";

export default function Header() {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bg = scrolled ? "rgba(250,246,240,.92)" : "transparent";
  const shadow = scrolled
    ? "0 1px 0 #E8E0D2, 0 8px 24px -16px rgba(31,24,20,.18)"
    : "none";

  return (
    <header
      style={s(
        `position:sticky;top:0;z-index:50;background:${bg};backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:${shadow};transition:background .25s ease,box-shadow .25s ease`
      )}
    >
      <div
        className="dim-pad-h"
        style={s(
          "max-width:1240px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:18px 40px;position:relative"
        )}
      >
        {/* Logo */}
        <Link href="/" style={s("display:flex;align-items:center")}>
          <img
            src="/assets/dimonova-logo.png"
            alt="Dimonova"
            style={s("height:30px;width:auto;display:block")}
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="dim-hide-md"
          style={s(
            "display:flex;gap:32px;align-items:center;font:500 14px/1 'Instrument Sans',sans-serif"
          )}
        >
          <NavLink href="/features">{t("nav.features")}</NavLink>
          <NavLink href="/pricing">{t("nav.pricing")}</NavLink>
          <NavLink href="/cases">{t("nav.cases")}</NavLink>
          <NavLink href="/about">{t("nav.about")}</NavLink>
          <NavLink href="/contact">{t("nav.contact")}</NavLink>
        </nav>

        {/* Desktop right area: lang switcher + WhatsApp + demo CTA */}
        <div
          className="dim-hide-md"
          style={s("display:flex;gap:10px;align-items:center")}
        >
          <LangSwitcher />

          <Hover
            as="button"
            base="font:500 13px/1 'Instrument Sans',sans-serif;color:#1F1814;padding:10px 14px;display:inline-flex;align-items:center;gap:8px;border:1px solid #E8E0D2;border-radius:999px;background:#FAF6F0"
            hover="background:#F1E8DA"
          >
            <span
              style={s(
                "width:10px;height:10px;border-radius:50%;background:#25D366;display:inline-block"
              )}
            />
            <span>{t("nav.whatsapp")}</span>
          </Hover>

          <Hover
            as="a"
            href="/contact"
            base="font:600 13px/1 'Instrument Sans',sans-serif;color:#FAF6F0;background:#B8523A;padding:12px 18px;border-radius:999px;transition:background .15s,transform .15s;display:inline-flex;align-items:center"
            hover="background:#9B4530;transform:translateY(-1px)"
          >
            {t("nav.demo")}
          </Hover>
        </div>

        {/* Mobile hamburger + nav panel */}
        <MobileNav />
      </div>
    </header>
  );
}
