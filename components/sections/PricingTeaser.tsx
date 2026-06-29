import { getTranslations } from "next-intl/server";
import { s } from "@/lib/style";
import { Link } from "@/lib/routing";
import Hover from "@/components/Hover";

export default async function PricingTeaser() {
  const t = await getTranslations();
  return (
    <section className="dim-pad-h" style={s("max-width:1240px;margin:0 auto;padding:0 40px 88px")}>
      <div style={s("background:#1F1814;color:#FAF6F0;border-radius:22px;padding:56px 48px;display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap")}>
        <div style={s("max-width:520px")}>
          <div style={s("font:500 11px/1 'Instrument Sans',sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#D69B7F;margin-bottom:16px")}>{t("home.price.eyebrow")}</div>
          <h2 className="dim-h2" style={s("font:400 36px/1.1 'Instrument Sans',sans-serif;color:#FAF6F0;letter-spacing:-.025em;margin:0 0 16px;text-wrap:balance")}>{t("home.price.title")}</h2>
          <p style={s("font:400 15px/1.6 'Instrument Sans',sans-serif;color:#B8A89A;margin:0")}>{t("home.price.body")}</p>
        </div>
        <div style={s("display:flex;flex-direction:column;gap:12px")}>
          <Hover
            as="button"
            base="font:600 14px/1 'Instrument Sans',sans-serif;color:#1F1814;background:#FAF6F0;padding:16px 24px;border-radius:999px;transition:transform .15s"
            hover="transform:translateY(-1px);background:#F1E8DA"
          >
            <Link href="/pricing" style={s("color:inherit;text-decoration:none")}>{t("home.price.see_full")}</Link>
          </Hover>
          <Hover
            as="button"
            base="font:500 14px/1 'Instrument Sans',sans-serif;color:#FAF6F0;padding:14px 22px;border:1px solid #D69B7F;border-radius:999px"
            hover="background:#3A2F26"
          >
            <Link href="/contact" style={s("color:inherit;text-decoration:none")}>{t("home.price.quote_cta")}</Link>
          </Hover>
        </div>
      </div>
    </section>
  );
}
