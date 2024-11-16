import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function HeroSection({ lang, dict }) {
  dict = dict.hero_section;
  return (
    <main className="container">
      <div className="grid desktop:grid-cols-2 items-center gap-12 px-4">
        <div className="space-y-6 desktop:text-start text-center desktop:px-1 tablet:px-10">
          <h1 className="desktop:text-5xl tablet:text-6xl text-4xl font-bold leading-tight">
            <FadeIn displacement={5} duration={1000} direction="tb">
              {dict.headline}
            </FadeIn>
          </h1>
          <FadeIn displacement={5} duration={1000} direction="tb">
            <p>{dict.subheadline}</p>
          </FadeIn>
          <FadeIn
            delay={14000}
            direction="bt"
            displacement={25}
            duration={1000}
          >
            <Link href="/contact">
              <Button>{dict.cta_button}</Button>
            </Link>
            <Link href="/learn-more">
              <Button variant="outline" className="text-blue-4">
                {dict.learn_more}{" "}
                {lang !== "ar" ? (
                  <ArrowRight className="ml-2 h-4 w-4" />
                ) : (
                  <ArrowLeft className="ml-2 h-4 w-4" />
                )}
              </Button>
            </Link>
          </FadeIn>
        </div>
        <FadeIn
          displacement={10}
          duration={14000}
          direction="rl"
          langDir={lang === "ar" ? "rtl" : "ltr"}
        >
          <Image
            src="/image/showcase.webp"
            alt={dict.hero_image.DEFAULT}
            width={1139}
            height={612}
            className="undraggable"
            draggable={false}
          />
        </FadeIn>
      </div>
    </main>
  );
}
