import { getTranslations } from "next-intl/server";
import { s } from "@/lib/style";

export default async function CasesFeatured() {
  const t = await getTranslations();
  return (
    <section className="dim-pad-h" style={s("max-width:1240px;margin:0 auto;padding:32px 40px 24px")}>
      <div style={s("background:#fff;border:1px solid #E8E0D2;border-radius:22px;overflow:hidden;display:grid;grid-template-columns:1fr 1fr")} className="dim-hero-grid">
        <div style={s("padding:48px 44px;display:flex;flex-direction:column;justify-content:space-between")}>
          <div>
            <div style={s("font:500 11px/1 'Instrument Sans',sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#B8523A;margin-bottom:14px")}>{t("cases.featured.eyebrow")}</div>
            <div style={s("font:400 36px/1.15 'Instrument Sans',sans-serif;color:#1F1814;letter-spacing:-.025em;margin-bottom:14px;text-wrap:balance")}>{t("cases.featured.quote")}</div>
            <div style={s("font:400 14px/1.5 'Instrument Sans',sans-serif;color:#4A4036")}>{t("cases.featured.body")}</div>
          </div>
          <div style={s("display:flex;align-items:center;gap:14px;margin-top:32px")}>
            <div style={s("width:48px;height:48px;border-radius:50%;background:#D69B7F;border:2px solid #FAF6F0")}></div>
            <div>
              <div style={s("font:500 15px/1 'Instrument Sans',sans-serif;color:#1F1814")}>{t("cases.featured.client")}</div>
              <div style={s("font:400 13px/1.4 'Instrument Sans',sans-serif;color:#8A7E70;margin-top:3px")}>{t("cases.featured.role")}</div>
            </div>
          </div>
        </div>
        <div style={s("background:repeating-linear-gradient(45deg,#F4ECDE,#F4ECDE 10px,#EAE0CC 10px,#EAE0CC 20px);min-height:380px;display:flex;align-items:center;justify-content:center;position:relative")}>
          <div style={s("position:absolute;top:18px;left:18px;font:500 10px/1 'Instrument Sans',sans-serif;letter-spacing:.2em;color:#8A7E70;text-transform:uppercase")}>{t("cases.featured.photo_badge")}</div>
          <div style={s("background:#1F1814;color:#FAF6F0;padding:12px 20px;border-radius:999px;font:500 13px/1 'Instrument Sans',sans-serif")}>{t("cases.featured.photo_pill")}</div>
        </div>
      </div>
    </section>
  );
}
