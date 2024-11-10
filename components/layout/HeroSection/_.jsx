import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HeroSection({ lang, dict }) {
  dict = dict.hero_section;
  return (
    <main className="container">
      <div className="grid desktop:grid-cols-2 items-center gap-12 px-4">
        <div className="space-y-6 desktop:text-start text-center desktop:px-1 tablet:px-10">
          <h1 className="desktop:text-5xl tablet:text-6xl text-4xl font-bold text-[#143881] leading-tight">
            {dict.headline}
          </h1>
          <p>{dict.subheadline}</p>
          <div className="flex desktop:justify-start justify-center flex-row gap-4">
            <Link href="/contact">
              <Button className="bg-[#1C4FB5] hover:bg-[#143881] shadow-sm text-white px-4 py-3">
                {dict.cta_button}
              </Button>
            </Link>
            <Link href="/learn-more">
              <Button
                variant="outline"
                className="text-[#143881] hover:text-[#1C4FB5] border-none shadow-none hover:bg-transparent px-4 py-3"
              >
                {dict.learn_more} {lang !== 'ar' ? <ArrowRight className="ml-2 h-4 w-4" /> : <ArrowLeft className="ml-2 h-4 w-4" />}
              </Button>
            </Link>
          </div>
        </div>
        <div className="my-4 tablet:mt-0 mx-auto">
          <Image
            src="./image/showcase.svg"
            alt={dict.hero_image.DEFAULT}
            width={1139}
            height={612}
            className="undraggable"
            draggable={false}
          />
        </div>
      </div>
    </main>
  );
}
