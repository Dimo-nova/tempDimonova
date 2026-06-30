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
            src="/assets/logo_horizontal.svg"
            alt="Dimonova"
            height={60}
            width={150}
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
            onClick={() =>
              window.dispatchEvent(new CustomEvent("dimonova:open-wa"))
            }
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#25D366" style={s("flex-shrink:0")}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
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
