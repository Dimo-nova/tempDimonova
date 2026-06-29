import { getTranslations } from "next-intl/server";
import { s } from "@/lib/style";

export default async function CasesHero() {
  const t = await getTranslations();
  return (
    <section className="dim-pad-h" style={s("max-width:1240px;margin:0 auto;padding:64px 40px 40px")}>
      <div style={s("font:500 11px/1 'Instrument Sans',sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#B8523A;margin-bottom:18px")}>{t("cases.eyebrow")}</div>
      <h1 className="dim-h1" style={s("font:400 60px/1.04 'Instrument Sans',sans-serif;color:#1F1814;letter-spacing:-.03em;text-wrap:balance;margin:0 0 22px;max-width:880px")} dangerouslySetInnerHTML={{ __html: t.raw("cases.title") }} />
      <p style={s("font:400 17px/1.55 'Instrument Sans',sans-serif;color:#4A4036;max-width:600px;margin:0")}>{t("cases.intro")}</p>

      <div style={s("margin-top:24px;padding:14px 18px;background:#F1E8DA;border-left:3px solid #B8523A;border-radius:0 10px 10px 0;font:400 13px/1.55 'Instrument Sans',sans-serif;color:#4A4036")} dangerouslySetInnerHTML={{ __html: t.raw("cases.note") }} />
    </section>
  );
}
