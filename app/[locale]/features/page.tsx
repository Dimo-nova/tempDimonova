import { setRequestLocale } from "next-intl/server";
import FeaturesHero from "@/components/sections/FeaturesHero";
import FeaturesDashboard from "@/components/sections/FeaturesDashboard";
import FeaturesAnalytics from "@/components/sections/FeaturesAnalytics";
import FeaturesOnboarding from "@/components/sections/FeaturesOnboarding";
import FeaturesCta from "@/components/sections/FeaturesCta";

export default async function FeaturesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main>
      <FeaturesHero />
      <FeaturesDashboard />
      <FeaturesAnalytics />
      <FeaturesOnboarding />
      <FeaturesCta />
    </main>
  );
}
