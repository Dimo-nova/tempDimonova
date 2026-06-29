import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/meta";
import CasesHero from "@/components/sections/CasesHero";
import CasesFeatured from "@/components/sections/CasesFeatured";
import CasesGrid from "@/components/sections/CasesGrid";
import CasesCta from "@/components/sections/CasesCta";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return pageMetadata(locale, "/cases", "seo.cases.title", "seo.cases.desc");
}

export default async function CasesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main>
      <CasesHero />
      <CasesFeatured />
      <CasesGrid />
      <CasesCta />
    </main>
  );
}
