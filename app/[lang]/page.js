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
import ClientSideFunctions from "@/components/layout/ClientSideFunctions";
import FadeIn from "@/components/ui/FadeIn";

export default async function Home({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <FadeIn delay={1000}>
        <HeaderSection dict={dict} lang={lang} />
      </FadeIn>
      <HeroSection dict={dict} lang={lang} />
      <FadeIn delay={1000}>
        <StatisticsSection dict={dict} lang={lang} />
      </FadeIn>
      <FadeIn delay={1500}>
        <AboutSection dict={dict} />
      </FadeIn>
      <FadeIn delay={2000}>
        <ClientsSection dict={dict} lang={lang} />
      </FadeIn>
      <FadeIn delay={250}>
        <ServiceSection dict={dict} lang={lang} />
      </FadeIn>
      <FadeIn delay={250}>
        <ToolsSection dict={dict} lang={lang} />
      </FadeIn>
      <div className="bg-gradient-to-t from-blue-6 to-white">
        <FadeIn delay={250}>
          <CTASection dict={dict} lang={lang} />
        </FadeIn>
        <FadeIn delay={250}>
          <FooterSection dict={dict} lang={lang} />
        </FadeIn>
      </div>
      <ClientSideFunctions />
    </>
  );
}
