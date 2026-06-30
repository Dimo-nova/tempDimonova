import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/routing";
import { s } from "@/lib/style";
import OpenWAButton from "@/components/OpenWAButton";
import { CONTACT } from "@/lib/config";

export default async function Footer() {
  const t = await getTranslations();

  return (
    <footer style={s("background:#1F1814;color:#FAF6F0;margin-top:0")}>
      <div
        className="dim-pad-h"
        style={s("max-width:1240px;margin:0 auto;padding:72px 40px 40px")}
      >
        <div
          className="dim-footer-grid"
          style={s(
            "display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:48px;margin-bottom:56px"
          )}
        >
          {/* Brand column */}
          <div>
            <Link
              href="/"
              style={s("display:flex;align-items:center;margin-bottom:18px")}
            >
              <img
                src="/assets/logo_horizontal.svg"
                alt="Dimonova"
                style={s("height:60px;width:auto;display:block")}
              />
            </Link>
            <p
              style={s(
                "font:400 14px/1.6 'Instrument Sans',sans-serif;color:#B8A89A;margin:0 0 24px;max-width:340px"
              )}
            >
              {t("footer.tagline")}
            </p>
            <div style={s("display:flex;gap:10px")}>
              <OpenWAButton label={t("nav.whatsapp")} />
              <Link
                href="/contact"
                style={s(
                  "font:500 13px/1 'Instrument Sans',sans-serif;color:#1F1814;background:#FAF6F0;padding:10px 16px;border-radius:999px;display:inline-flex;align-items:center"
                )}
              >
                {t("nav.demo")}
              </Link>
            </div>
          </div>

          {/* Product column */}
          <div>
            <div
              style={s(
                "font:500 11px/1 'Instrument Sans',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#8A7E70;margin-bottom:18px"
              )}
            >
              {t("footer.col_product")}
            </div>
            <div
              style={s(
                "display:flex;flex-direction:column;gap:12px;font:400 14px/1 'Instrument Sans',sans-serif"
              )}
            >
              <Link
                href="/features"
                style={s("text-align:left;color:#FAF6F0")}
              >
                {t("nav.features")}
              </Link>
              <Link href="/pricing" style={s("text-align:left;color:#FAF6F0")}>
                {t("nav.pricing")}
              </Link>
              <Link href="/cases" style={s("text-align:left;color:#FAF6F0")}>
                {t("nav.cases")}
              </Link>
            </div>
          </div>

          {/* Company column */}
          <div>
            <div
              style={s(
                "font:500 11px/1 'Instrument Sans',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#8A7E70;margin-bottom:18px"
              )}
            >
              {t("footer.col_company")}
            </div>
            <div
              style={s(
                "display:flex;flex-direction:column;gap:12px;font:400 14px/1 'Instrument Sans',sans-serif"
              )}
            >
              <Link href="/about" style={s("text-align:left;color:#FAF6F0")}>
                {t("nav.about")}
              </Link>
              <Link href="/contact" style={s("text-align:left;color:#FAF6F0")}>
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          {/* Contact column */}
          <div>
            <div
              style={s(
                "font:500 11px/1 'Instrument Sans',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#8A7E70;margin-bottom:18px"
              )}
            >
              {t("footer.col_contact")}
            </div>
            <div
              style={s(
                "display:flex;flex-direction:column;gap:12px;font:400 14px/1 'Instrument Sans',sans-serif;color:#FAF6F0"
              )}
            >
              <div>{CONTACT.email}</div>
              <div>{CONTACT.phoneIE} <span style={s("color:#8A7E70;font-size:12px")}>{t("footer.label_ie")}</span></div>
              <div>{CONTACT.phoneES} <span style={s("color:#8A7E70;font-size:12px")}>{t("footer.label_es")}</span></div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={s(
            "padding-top:28px;border-top:1px solid #3A2F26;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px;font:400 12px/1 'Instrument Sans',sans-serif;color:#8A7E70"
          )}
        >
          <div>{t("footer.rights")}</div>
          <div style={s("display:flex;gap:24px")}>
            <span>Terms</span>
            <span>Privacy</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
