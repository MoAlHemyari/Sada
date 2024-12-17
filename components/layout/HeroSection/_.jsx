import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HeroSection({ lang, dict }) {
  dict = dict.hero_section;
  return (
    <main className="container">
      <div className="grid desktop:grid-cols-2 items-center gap-12 px-4 tablet:py-6">
        <div className="space-y-6 desktop:text-start text-center py-2 tablet:py-16 desktop:px-1 tablet:px-10">
          <h1 className="desktop:text-5xl tablet:text-6xl text-4xl font-bold leading-tight">
            {dict.headline}
          </h1>
          <p>{dict.subheadline}</p>
          <div className="flex gap-3 justify-center desktop:justify-start">
            <Link href={`https://43us9n0vsgt.typeform.com/to/QDGWxlgl`}>
              <Button>{dict.cta_button}</Button>
            </Link>
            <Link href={`#features`}>
              <Button variant="outline" className="text-blue-4">
                {dict.learn_more}{" "}
                {lang !== "ar" ? (
                  <ArrowRight className="ml-2 h-4 w-4" />
                ) : (
                  <ArrowLeft className="ml-2 h-4 w-4" />
                )}
              </Button>
            </Link>
          </div>
        </div>
        <Image
          src="/image/showcase.webp"
          alt={dict.hero_image.DEFAULT}
          width={1139}
          height={612}
          className="undraggable w-90%"
          draggable={false}
        />
      </div>
    </main>
  );
}
