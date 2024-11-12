import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/component/LanguageSwitcher";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function HeaderSection({ lang, dict }) {
  dict = dict.header;

  return (
    <header>
      <nav className="container flex items-center justify-between">
        <div className="flex gap-12 text-sm items-center">
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <Image
              src="/image/logo/sada.webp"
              alt={dict.logo.alt}
              width={60}
              height={26}
              className="h-5 w-auto blue-filter-img"
            />
          </Link>
          <div className="hidden tablet:flex gap-10 ">
            <Link href={`/${lang}/about`}>{dict.navbar.about}</Link>
            <Link href={`/${lang}/features`}>{dict.navbar.features}</Link>
            <Link href={`/${lang}/pricing`}>{dict.navbar.pricing}</Link>
            <Link href={`/${lang}/careers`}>{dict.navbar.careers}</Link>
          </div>
        </div>

        <div className="hidden tablet:flex items-center gap-4">
          <Button variant="outline">{dict.navbar.book_demo}</Button>
          <LanguageSwitcher lang={lang} className={"button rounded-sm"} />
          {/* <ModeToggle /> */}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="tablet:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side={lang === "ar" ? "left" : "right"} className="w-[300px] tablet:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link href={`/${lang}/about`}>{dict.navbar.about}</Link>
              <Link href={`/${lang}/features`}>{dict.navbar.features}</Link>
              <Link href={`/${lang}/pricing`}>{dict.navbar.pricing}</Link>
              <Link href={`/${lang}/careers`}>{dict.navbar.careers}</Link>
              <Button variant="outline" className="w-full">
                {dict.navbar.book_demo}
              </Button>
              <LanguageSwitcher lang={lang} className="w-full" />
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
