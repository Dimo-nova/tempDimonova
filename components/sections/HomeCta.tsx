import { getTranslations } from "next-intl/server";
import { s } from "@/lib/style";
import { Link } from "@/lib/routing";
import Hover from "@/components/Hover";
import OpenWAButton from "@/components/OpenWAButton";

export default async function HomeCta() {
  const t = await getTranslations();
  return (
    <section className="dim-pad-h" style={s("max-width:1240px;margin:0 auto;padding:0 40px 120px;text-align:center")}>
      <div style={s("font:500 11px/1 'Instrument Sans',sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#B8523A;margin-bottom:18px")}>{t("home.cta.eyebrow")}</div>
      <h2 className="dim-h2" style={s("font:400 52px/1.05 'Instrument Sans',sans-serif;color:#1F1814;letter-spacing:-.03em;margin:0 0 28px;text-wrap:balance;max-width:760px;margin-left:auto;margin-right:auto")} dangerouslySetInnerHTML={{ __html: t.raw("home.cta.title") }} />
      <p style={s("font:400 17px/1.55 'Instrument Sans',sans-serif;color:#4A4036;margin:0 auto 32px;max-width:560px")}>{t("home.cta.body")}</p>
      <div style={s("display:flex;gap:12px;align-items:center;justify-content:center;flex-wrap:wrap")}>
        <Hover
          as="button"
          base="font:600 14px/1 'Instrument Sans',sans-serif;color:#FAF6F0;background:#1F1814;padding:16px 26px;border-radius:999px;transition:transform .15s,background .15s"
          hover="background:#2D2520;transform:translateY(-1px)"
        >
          <Link href="/contact" style={s("color:inherit;text-decoration:none")}>{t("common.demo_arrow")}</Link>
        </Hover>
        <OpenWAButton label={t("common.chat_wa")} />
      </div>
    </section>
  );
}
