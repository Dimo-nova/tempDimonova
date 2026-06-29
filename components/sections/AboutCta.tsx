import { getTranslations } from "next-intl/server";
import { s } from "@/lib/style";
import { Link } from "@/lib/routing";
import Hover from "@/components/Hover";

export default async function AboutCta() {
  const t = await getTranslations();
  return (
    <section className="dim-pad-h" style={s("max-width:1240px;margin:0 auto;padding:64px 40px 120px;text-align:center")}>
      <h2 className="dim-h2" style={s("font:400 44px/1.08 'Instrument Sans',sans-serif;color:#1F1814;letter-spacing:-.025em;margin:0 0 24px;text-wrap:balance;max-width:680px;margin-left:auto;margin-right:auto")}>{t("about.cta.title")}</h2>
      <Hover
        as="button"
        base="font:600 14px/1 'Instrument Sans',sans-serif;color:#FAF6F0;background:#1F1814;padding:16px 26px;border-radius:999px"
        hover="background:#2D2520"
      >
        <Link href="/contact" style={s("display:contents;color:inherit;text-decoration:none")}>
          {t("common.demo_arrow")}
        </Link>
      </Hover>
    </section>
  );
}
