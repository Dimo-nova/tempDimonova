import { getTranslations } from "next-intl/server";
import { s } from "@/lib/style";
import { Link } from "@/lib/routing";
import Hover from "@/components/Hover";

export default async function PricingStrip() {
  const t = await getTranslations();
  return (
    <section className="dim-pad-h" style={s("max-width:1240px;margin:0 auto;padding:0 40px 80px")}>
      <div style={s("padding:28px 32px;background:#1F1814;border-radius:18px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px")}>
        <div>
          <div style={s("font:500 18px/1.3 'Instrument Sans',sans-serif;color:#FAF6F0;letter-spacing:-.01em")}>{t("pricing.strip.title")}</div>
          <div style={s("font:400 14px/1.5 'Instrument Sans',sans-serif;color:#8A7E70;margin-top:4px")}>{t("pricing.strip.body")}</div>
        </div>
        <Hover
          as="button"
          base="font:600 14px/1 'Instrument Sans',sans-serif;color:#FAF6F0;background:#B8523A;padding:14px 22px;border-radius:999px"
          hover="background:#9B4530"
        >
          <Link href="/contact" style={s("display:contents;color:inherit;text-decoration:none")}>
            {t("pricing.strip.cta")}
          </Link>
        </Hover>
      </div>
    </section>
  );
}
