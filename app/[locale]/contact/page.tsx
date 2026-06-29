import { setRequestLocale } from "next-intl/server";
import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/ContactForm";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main>
      <ContactHero />
      <ContactForm />
    </main>
  );
}
