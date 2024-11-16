import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/component/LanguageSwitcher";
import Image from "next/image";
import Link from "next/link";
import DesktopNavigation from "@/components/layout/HeaderSection/DesktopNavigation";
import MobileNavigation from "@/components/layout/HeaderSection/MobileNavigation";
// import { ModeToggle } from "@/components/ui/mode-toggle";

export default function HeaderSection({ lang, dict }) {
  dict = dict.header;

  return (
    <header>
      <nav className="container flex items-center justify-between">
        <div className="flex gap-12 text-sm items-center">
        <div className="flex items-center space-x-2 w-[77px] relative">
        <Link href={`/${lang}`} className="flex items-center space-x-2">
            <Image
              src="/image/logo/sada.webp"
              alt={dict.logo.alt}
              width={60}
              height={26}
              className="h-5 w-auto blue-filter-img"
              unoptimized
            />
          </Link>
          </div>
          <DesktopNavigation lang={lang} dict={dict} />
        </div>

        <div className="hidden tablet:flex items-center gap-4">
          <Button variant="outline">{dict.navbar.book_demo}</Button>
          <LanguageSwitcher lang={lang} className={"button rounded-sm"} />
          {/* <ModeToggle /> */}
        </div>

        <MobileNavigation lang={lang} dict={dict} />
      </nav>
    </header>
  );
}
