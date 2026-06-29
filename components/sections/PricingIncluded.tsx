import { getTranslations } from "next-intl/server";
import { s } from "@/lib/style";

export default async function PricingIncluded() {
  const t = await getTranslations();
  const items = ["i1","i2","i3","i4","i5","i6","i7","i8","i9"] as const;
  return (
    <section className="dim-pad-h" style={s("max-width:1240px;margin:0 auto;padding:0 40px 28px")}>
      <div style={s("background:#fff;border:1px solid #E8E0D2;border-radius:24px;padding:48px")}>
        <div style={s("font:500 11px/1 'Instrument Sans',sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#B8523A;margin-bottom:16px")}>{t("pricing.included.eyebrow")}</div>
        <h2 className="dim-h2" style={s("font:400 32px/1.1 'Instrument Sans',sans-serif;color:#1F1814;letter-spacing:-.02em;margin:0 0 32px;text-wrap:balance")}>{t("pricing.included.title")}</h2>
        <div className="dim-hero-grid" style={s("display:grid;grid-template-columns:1fr 1fr;gap:14px")}>
          {items.map((k) => (
            <div key={k} style={s("display:flex;gap:12px;align-items:flex-start")}>
              <div style={s("width:18px;height:18px;border-radius:50%;background:#F1E8DA;color:#B8523A;display:flex;align-items:center;justify-content:center;font:600 10px/1 'Instrument Sans',sans-serif;flex:none;margin-top:2px")}>✓</div>
              <div style={s("font:400 14px/1.5 'Instrument Sans',sans-serif;color:#1F1814")}>{t(`pricing.included.${k}`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
