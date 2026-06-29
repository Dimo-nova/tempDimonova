import { getTranslations } from "next-intl/server";
import { s } from "@/lib/style";

export default async function PricingFaq() {
  const t = await getTranslations();
  const qas = ["1","2","3","4","5"] as const;
  return (
    <section className="dim-pad-h" style={s("max-width:840px;margin:0 auto;padding:24px 40px 120px")}>
      <h2 className="dim-h2" style={s("font:400 36px/1.1 'Instrument Sans',sans-serif;color:#1F1814;letter-spacing:-.025em;margin:0 0 40px;text-wrap:balance")}>{t("pricing.faq.title")}</h2>
      <div style={s("display:flex;flex-direction:column;gap:32px")}>
        {qas.map((n) => (
          <div key={n}>
            <div style={s("font:500 17px/1.3 'Instrument Sans',sans-serif;color:#1F1814;letter-spacing:-.01em;margin-bottom:10px")}>{t(`pricing.faq.q${n}`)}</div>
            <div style={s("font:400 15px/1.6 'Instrument Sans',sans-serif;color:#4A4036")}>{t(`pricing.faq.a${n}`)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
