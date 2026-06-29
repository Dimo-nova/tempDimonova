import { setRequestLocale } from "next-intl/server";
import AboutHero from "@/components/sections/AboutHero";
import AboutWhy from "@/components/sections/AboutWhy";
import AboutPrinciples from "@/components/sections/AboutPrinciples";
import AboutTeam from "@/components/sections/AboutTeam";
import AboutCta from "@/components/sections/AboutCta";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main>
      <AboutHero />
      <AboutWhy />
      <AboutPrinciples />
      <AboutTeam />
      <AboutCta />
    </main>
  );
}
