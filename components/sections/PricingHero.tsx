import { getTranslations } from "next-intl/server";
import { s } from "@/lib/style";

export default async function PricingHero() {
  const t = await getTranslations();
  return (
    <section className="dim-pad-h" style={s("max-width:1240px;margin:0 auto;padding:64px 40px 40px;text-align:center")}>
      <div style={s("font:500 11px/1 'Instrument Sans',sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#B8523A;margin-bottom:18px")}>{t("pricing.eyebrow")}</div>
      <h1 className="dim-h1" style={s("font:400 60px/1.04 'Instrument Sans',sans-serif;color:#1F1814;letter-spacing:-.03em;text-wrap:balance;margin:0 auto 22px;max-width:780px")} dangerouslySetInnerHTML={{ __html: t.raw("pricing.title") }} />
      <p style={s("font:400 17px/1.55 'Instrument Sans',sans-serif;color:#4A4036;margin:0 auto;max-width:580px")}>{t("pricing.intro")}</p>
    </section>
  );
}
