import { getTranslations } from "next-intl/server";
import { s } from "@/lib/style";
import { Link } from "@/lib/routing";
import Hover from "@/components/Hover";

export default async function FeaturesSummary() {
  const t = await getTranslations();
  return (
    <section className="dim-pad-h" style={s("max-width:1240px;margin:0 auto;padding:80px 40px")}>
      <div style={s("display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:24px;margin-bottom:40px")}>
        <div style={s("max-width:540px")}>
          <div style={s("font:500 11px/1 'Instrument Sans',sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#B8523A;margin-bottom:14px")}>{t("home.feat.eyebrow")}</div>
          <h2 className="dim-h2" style={s("font:400 40px/1.1 'Instrument Sans',sans-serif;color:#1F1814;letter-spacing:-.025em;text-wrap:balance;margin:0")} dangerouslySetInnerHTML={{ __html: t.raw("home.feat.title") }} />
        </div>
        <Hover
          as="button"
          base="font:500 14px/1 'Instrument Sans',sans-serif;color:#1F1814;padding:12px 0;border-bottom:1px solid #1F1814"
          hover="color:#B8523A;border-bottom-color:#B8523A"
        >
          <Link href="/features" style={s("color:inherit;text-decoration:none")}>{t("home.feat.see_all")}</Link>
        </Hover>
      </div>

      <div className="dim-stack-md" style={s("display:grid;grid-template-columns:repeat(3,1fr);gap:20px")}>
        {/* Card 1 */}
        <Hover
          as="div"
          base="background:#fff;border:1px solid #E8E0D2;border-radius:18px;padding:28px;transition:transform .2s,box-shadow .2s"
          hover="transform:translateY(-3px);box-shadow:0 20px 40px -24px rgba(31,24,20,.18)"
        >
          <div style={s("width:42px;height:42px;border-radius:10px;background:#F1E8DA;display:flex;align-items:center;justify-content:center;margin-bottom:20px")}>
            <div style={s("width:18px;height:22px;border:1.5px solid #B8523A;border-radius:3px;position:relative")}>
              <div style={s("position:absolute;top:3px;left:2px;right:2px;height:1.5px;background:#B8523A")}></div>
              <div style={s("position:absolute;top:7px;left:2px;right:6px;height:1.5px;background:#B8523A")}></div>
              <div style={s("position:absolute;top:11px;left:2px;right:4px;height:1.5px;background:#B8523A")}></div>
            </div>
          </div>
          <h3 style={s("font:500 20px/1.2 'Instrument Sans',sans-serif;color:#1F1814;letter-spacing:-.01em;margin:0 0 8px")}>{t("home.feat.c1_title")}</h3>
          <p style={s("font:400 14px/1.55 'Instrument Sans',sans-serif;color:#4A4036;margin:0")}>{t("home.feat.c1_body")}</p>
        </Hover>

        {/* Card 2 */}
        <Hover
          as="div"
          base="background:#fff;border:1px solid #E8E0D2;border-radius:18px;padding:28px;transition:transform .2s,box-shadow .2s"
          hover="transform:translateY(-3px);box-shadow:0 20px 40px -24px rgba(31,24,20,.18)"
        >
          <div style={s("width:42px;height:42px;border-radius:10px;background:#F1E8DA;display:flex;align-items:center;justify-content:center;margin-bottom:20px")}>
            <div style={s("display:grid;grid-template-columns:1fr 1fr;gap:2px;width:20px;height:20px")}>
              <div style={s("background:#B8523A;border-radius:2px")}></div>
              <div style={s("background:#B8523A;border-radius:2px;opacity:.4")}></div>
              <div style={s("background:#B8523A;border-radius:2px;opacity:.4")}></div>
              <div style={s("background:#B8523A;border-radius:2px")}></div>
            </div>
          </div>
          <h3 style={s("font:500 20px/1.2 'Instrument Sans',sans-serif;color:#1F1814;letter-spacing:-.01em;margin:0 0 8px")}>{t("home.feat.c2_title")}</h3>
          <p style={s("font:400 14px/1.55 'Instrument Sans',sans-serif;color:#4A4036;margin:0")}>{t("home.feat.c2_body")}</p>
        </Hover>

        {/* Card 3 */}
        <Hover
          as="div"
          base="background:#fff;border:1px solid #E8E0D2;border-radius:18px;padding:28px;transition:transform .2s,box-shadow .2s"
          hover="transform:translateY(-3px);box-shadow:0 20px 40px -24px rgba(31,24,20,.18)"
        >
          <div style={s("width:42px;height:42px;border-radius:10px;background:#F1E8DA;display:flex;align-items:flex-end;justify-content:center;padding-bottom:7px;gap:2px;margin-bottom:20px")}>
            <div style={s("width:3px;height:7px;background:#B8523A;border-radius:1px")}></div>
            <div style={s("width:3px;height:12px;background:#B8523A;border-radius:1px")}></div>
            <div style={s("width:3px;height:10px;background:#B8523A;border-radius:1px")}></div>
            <div style={s("width:3px;height:16px;background:#B8523A;border-radius:1px")}></div>
            <div style={s("width:3px;height:13px;background:#B8523A;border-radius:1px")}></div>
          </div>
          <h3 style={s("font:500 20px/1.2 'Instrument Sans',sans-serif;color:#1F1814;letter-spacing:-.01em;margin:0 0 8px")}>{t("home.feat.c3_title")}</h3>
          <p style={s("font:400 14px/1.55 'Instrument Sans',sans-serif;color:#4A4036;margin:0")}>{t("home.feat.c3_body")}</p>
        </Hover>
      </div>
    </section>
  );
}
