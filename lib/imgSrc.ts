const LANG_FILE: Record<string, string> = {
  en: "english", es: "spanish", de: "german", fr: "french", pt: "portuguese",
};
const IMG_LANGS: Record<string, string[]> = {
  hero: ["en", "es", "de", "fr"],
  features: ["en", "es", "de", "fr"],
  dishes: ["en", "es", "de", "fr", "pt"],
  manager_data: ["en", "es", "de", "fr", "pt"],
};

export function imgSrc(base: keyof typeof IMG_LANGS, locale: string): string {
  const langs = IMG_LANGS[base] || ["en"];
  const lang = langs.includes(locale) ? locale : "en";
  return `/assets/${LANG_FILE[lang]}_${base}.png`;
}
