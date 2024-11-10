import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/component/LanguageSwitcher";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function HeaderSection({ lang, dict }) {
  dict = dict.header;
  return (
    <header className="container">
      <nav className="flex items-center justify-between">
        <div className="flex gap-12 text-sm items-center">
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <Image
              src="/image/logo/sada.webp"
              alt={dict.logo.alt}
              width={60}
              height={26}
              className="h-5 w-auto"
            />
          </Link>
          <div className="hidden tablet:flex gap-10 ">
            <Link href={`/${lang}/about`} className="text-grey hover:text-blue-4">
              {dict.navbar.about}
            </Link>
            <Link
              href={`/${lang}/features`}
              className="text-grey hover:text-blue-4"
            >
              {dict.navbar.features}
            </Link>
            <Link
              href={`/${lang}/pricing`}
              className="text-grey hover:text-blue-4"
            >
              {dict.navbar.pricing}
            </Link>
            <Link
              href={`/${lang}/careers`}
              className="text-grey hover:text-blue-4"
            >
              {dict.navbar.careers}
            </Link>
          </div>
        </div>

        <div className="hidden tablet:flex items-center gap-4 text-sm text-blue-navy">
          <Button variant="outline" className="button rounded-sm shadow-sm">{dict.navbar.book_demo}</Button>
          <LanguageSwitcher lang={lang} className={"button rounded-sm"} />
        </div>


        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="tablet:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] tablet:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link href={`/${lang}/about`} className="text-grey hover:text-blue-4">
              {dict.navbar.about}
              </Link>
              <Link
                href={`/${lang}/features`}
                className="text-grey hover:text-blue-4"
              >
                {dict.navbar.features}
              </Link>
              <Link
                href={`/${lang}/pricing`}
                className="text-grey hover:text-blue-4"
              >
                {dict.navbar.pricing}
              </Link>
              <Link
                href={`/${lang}/careers`}
                className="text-grey hover:text-blue-4"
              >
                {dict.navbar.careers}
              </Link>
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
