import { getTranslations } from "next-intl/server";
import { s } from "@/lib/style";

export default async function LogoStrip() {
  const t = await getTranslations();
  return (
    <section className="dim-pad-h" style={s("max-width:1240px;margin:0 auto;padding:64px 40px 16px;display:flex;flex-direction:column;align-items:center")}>
      <div style={s("font:500 11px/1 'Instrument Sans',sans-serif;letter-spacing:.22em;color:#8A7E70;text-transform:uppercase;margin-bottom:20px")}>{t("home.logos.label")}</div>
      <div style={s("display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;justify-items:center;gap:32px;opacity:.85;width:100%;max-width:600px")}>
        <img src="/assets/Logos/lapulperia.svg" alt="La Pulpería" style={s("height:48px;width:auto;object-fit:contain")} />
        <img src="/assets/Logos/balamo.svg" alt="Balamo" style={s("height:30px;width:auto;object-fit:contain")} />
        <img src="/assets/Logos/logo-calsot-neg.png" alt="Calçots" style={s("height:35px;width:auto;object-fit:contain")} />
      </div>
    </section>
  );
}
