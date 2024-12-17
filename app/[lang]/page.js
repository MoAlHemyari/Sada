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
import ClientSideFunctions from "@/components/ClientSideFunctions";
import FadeIn from "@/components/ui/FadeIn"

export default async function Home({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <HeaderSection dict={dict} lang={lang} />
      <FadeIn duration={500} when="load">
        <HeroSection dict={dict} lang={lang} />
      </FadeIn>
      <FadeIn delay={300} duration={700} when="load">
        <StatisticsSection dict={dict} lang={lang} />
      </FadeIn>
      <FadeIn delay={2000} when="load">
        <AboutSection dict={dict} />
        <ClientsSection dict={dict} lang={lang} />
        <ServiceSection dict={dict} lang={lang} />
        <ToolsSection dict={dict} lang={lang} />
      </FadeIn>
      <div className="bg-gradient-to-t from-blue-6 to-white">
        <CTASection dict={dict} lang={lang} />
        <FooterSection dict={dict} lang={lang} />
      </div>
      <ClientSideFunctions />
    </>
  );
}
