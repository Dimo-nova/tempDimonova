"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/routing";
import { s } from "@/lib/style";
import NavLink from "./NavLink";

const FLAGS: Record<string, string> = { en: "gb", es: "es", de: "de", fr: "fr", pt: "pt" };

export default function MobileNav() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function close() {
    setOpen(false);
  }

  function pickLang(code: string) {
    setLangOpen(false);
    router.replace(pathname, { locale: code });
  }

  return (
    <>
      {/* Always-visible row on mobile: lang toggle + hamburger */}
      <div
        className="dim-show-md"
        style={s("display:none;align-items:center;gap:8px")}
      >
        {/* Current locale button — expands lang picker */}
        <button
          onClick={() => { setLangOpen((o) => !o); setOpen(false); }}
          style={s(
            "display:inline-flex;align-items:center;gap:6px;padding:8px 11px;border:1px solid #E8E0D2;border-radius:999px;background:#FAF6F0;font:500 12px/1 'Instrument Sans',sans-serif;color:#1F1814"
          )}
          aria-label="Switch language"
        >
          <img
            src={`https://flagcdn.com/16x12/${FLAGS[locale]}.png`}
            alt=""
            width={16}
            height={12}
            style={s("display:block;border-radius:2px")}
          />
          <span>{locale.toUpperCase()}</span>
        </button>

        {/* Hamburger */}
        <button
          onClick={() => { setOpen((o) => !o); setLangOpen(false); }}
          style={s(
            "display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border:1px solid #E8E0D2;border-radius:10px;background:#FAF6F0"
          )}
          aria-label="Open menu"
        >
          <div style={s("display:flex;flex-direction:column;gap:4px")}>
            <div style={s("width:18px;height:1.5px;background:#1F1814")} />
            <div style={s("width:18px;height:1.5px;background:#1F1814")} />
            <div style={s("width:14px;height:1.5px;background:#1F1814")} />
          </div>
        </button>
      </div>

      {/* Language picker dropdown */}
      {langOpen && (
        <div
          className="dim-pop"
          style={s(
            "position:absolute;top:100%;right:16px;padding:12px;background:#FAF6F0;border:1px solid #E8E0D2;border-radius:14px;z-index:51;display:flex;gap:8px;flex-wrap:wrap;box-shadow:0 8px 24px -8px rgba(31,24,20,.16)"
          )}
        >
          {Object.keys(FLAGS).map((code) => (
            <button
              key={code}
              onClick={() => pickLang(code)}
              style={s(
                `display:inline-flex;align-items:center;gap:7px;padding:9px 13px;border-radius:999px;border:1px solid ${code === locale ? "#B8523A" : "#E8E0D2"};background:${code === locale ? "#B8523A" : "transparent"};color:${code === locale ? "#FAF6F0" : "#1F1814"};font:500 13px/1 'Instrument Sans',sans-serif`
              )}
            >
              <img
                alt=""
                width={16}
                height={12}
                src={`https://flagcdn.com/16x12/${FLAGS[code]}.png`}
                style={s("display:block;border-radius:2px")}
              />
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      {/* Nav panel */}
      {open && (
        <div
          className="dim-pop"
          style={s(
            "position:absolute;top:100%;left:0;right:0;border-top:1px solid #E8E0D2;background:#FAF6F0;padding:16px 24px 24px;z-index:50"
          )}
        >
          <div
            style={s(
              "display:flex;flex-direction:column;gap:4px;font:500 16px/1 'Instrument Sans',sans-serif"
            )}
          >
            <div onClick={close}>
              <NavLink href="/">
                <div style={s("text-align:left;padding:14px 6px;border-bottom:1px solid #F1E8DA;color:#1F1814")}>
                  {t("nav.home")}
                </div>
              </NavLink>
            </div>
            <div onClick={close}>
              <NavLink href="/features">
                <div style={s("text-align:left;padding:14px 6px;border-bottom:1px solid #F1E8DA;color:#1F1814")}>
                  {t("nav.features")}
                </div>
              </NavLink>
            </div>
            <div onClick={close}>
              <NavLink href="/pricing">
                <div style={s("text-align:left;padding:14px 6px;border-bottom:1px solid #F1E8DA;color:#1F1814")}>
                  {t("nav.pricing")}
                </div>
              </NavLink>
            </div>
            <div onClick={close}>
              <NavLink href="/about">
                <div style={s("text-align:left;padding:14px 6px;border-bottom:1px solid #F1E8DA;color:#1F1814")}>
                  {t("nav.about")}
                </div>
              </NavLink>
            </div>
            <div onClick={close}>
              <NavLink href="/contact">
                <div style={s("text-align:left;padding:14px 6px;color:#1F1814")}>
                  {t("nav.contact")}
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
