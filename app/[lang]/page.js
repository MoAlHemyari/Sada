import { getDictionary } from "@/get-dictionary";
import HeaderSection from "@/components/layout/HeaderSection/_";
import HeroSection from "@/components/layout/HeroSection/_";
import StatisticsSection from "@/components/layout/StatisticsSection/_";
import AboutSection from "@/components/layout/AboutSection/_";
import ClientsSection from "@/components/layout/ClientsSection/_";
import ServiceSection from "@/components/layout/ServiceSection/_";
import ToolsSection from "@/components/layout/ToolsSection/_";
import FooterSection from "@/components/layout/FooterSection/_";
import CTASection from "@/components/layout/CTASection/_";

export default async function Home({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <HeaderSection dict={dict} lang={lang} />
      <HeroSection dict={dict} lang={lang} />
      <StatisticsSection dict={dict} lang={lang} />
      <AboutSection dict={dict} />
      <ClientsSection dict={dict} />
      <ServiceSection dict={dict} />
      <ToolsSection dict={dict} />
      <div className="bg-gradient-to-t from-blue-6 to-white">
        <CTASection dict={dict} lang={lang} />
        <FooterSection dict={dict} lang={lang} />
      </div>
    </>
  );
}