"use client";
import { useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/routing";
import { s } from "@/lib/style";

const FLAGS: Record<string, string> = { en: "gb", es: "es", de: "de", fr: "fr", pt: "pt" };
const LABELS: Record<string, string> = { en: "English", es: "Español", de: "Deutsch", fr: "Français", pt: "Português" };

export default function LangSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function pick(code: string) {
    setOpen(false);
    router.replace(pathname, { locale: code });
  }

  return (
    <div style={s("position:relative")}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Choose language"
        style={s(
          "font:500 13px/1 'Instrument Sans',sans-serif;color:#1F1814;padding:9px 12px;display:inline-flex;align-items:center;gap:7px;border:1px solid #E8E0D2;border-radius:999px;background:#FAF6F0"
        )}
      >
        <img
          src={`https://flagcdn.com/16x12/${FLAGS[locale]}.png`}
          alt={locale}
          width={16}
          height={12}
          style={s("display:block;border-radius:2px")}
        />
        <span>{locale.toUpperCase()}</span>
        <span style={s("font-size:9px;color:#8A7E70")}>&#9662;</span>
      </button>
      {open && (
        <div
          className="dim-pop"
          style={s(
            "position:absolute;top:calc(100% + 8px);right:0;background:#fff;border:1px solid #E8E0D2;border-radius:14px;box-shadow:0 20px 40px -24px rgba(31,24,20,.25);padding:6px;min-width:188px;z-index:60"
          )}
        >
          {Object.keys(FLAGS).map((code) => (
            <button
              key={code}
              data-lang={code}
              onClick={() => pick(code)}
              style={s(
                "width:100%;display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:10px;background:transparent;font:500 13px/1 'Instrument Sans',sans-serif;color:#1F1814;text-align:left"
              )}
            >
              <img
                src={`https://flagcdn.com/16x12/${FLAGS[code]}.png`}
                alt={code}
                width={16}
                height={12}
                style={s("display:block;border-radius:2px")}
              />
              <span style={s("width:20px")}>{code.toUpperCase()}</span>
              <span style={s("flex:1")}>{LABELS[code]}</span>
              <span
                style={s(
                  `width:7px;height:7px;border-radius:50%;background:#B8523A;opacity:${code === locale ? "1" : "0"}`
                )}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
