import { getTranslations } from "next-intl/server";
import { s } from "@/lib/style";

export default async function PricingShape() {
  const t = await getTranslations();
  const items = ["i1","i2","i3","i4","i5"] as const;
  return (
    <section className="dim-pad-h" style={s("max-width:1240px;margin:0 auto;padding:0 40px 28px")}>
      <div className="dim-shape-inner" style={s("background:#FAF6F0;border:1px solid #E8E0D2;border-radius:24px;padding:48px")}>
        <div style={s("font:500 11px/1 'Instrument Sans',sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#8A7E70;margin-bottom:16px")}>{t("pricing.shape.eyebrow")}</div>
        <p style={s("font:400 17px/1.5 'Instrument Sans',sans-serif;color:#4A4036;margin:0 0 28px")}>{t("pricing.shape.intro")}</p>
        <div style={s("display:flex;flex-wrap:wrap;gap:10px")}>
          {items.map((k) => (
            <div key={k} style={s("padding:12px 18px;background:#fff;border:1px solid #E8E0D2;border-radius:12px;font:400 14px/1.4 'Instrument Sans',sans-serif;color:#1F1814")}>{t(`pricing.shape.${k}`)}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
