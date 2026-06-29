import { getTranslations } from "next-intl/server";
import { s } from "@/lib/style";

export default async function AboutHero() {
  const t = await getTranslations();
  return (
    <section className="dim-pad-h" style={s("max-width:1240px;margin:0 auto;padding:64px 40px 40px")}>
      <div style={s("font:500 11px/1 'Instrument Sans',sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#B8523A;margin-bottom:18px")}>{t("about.eyebrow")}</div>
      <h1 className="dim-h1" style={s("font:400 64px/1.04 'Instrument Sans',sans-serif;color:#1F1814;letter-spacing:-.03em;text-wrap:balance;max-width:880px;margin:0 0 22px")} dangerouslySetInnerHTML={{ __html: t.raw("about.title") }} />
      <p style={s("font:400 17px/1.55 'Instrument Sans',sans-serif;color:#4A4036;max-width:640px;margin:0")}>{t("about.intro")}</p>
    </section>
  );
}
