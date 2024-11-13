import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import LanguageSwitcher from "@/components/component/LanguageSwitcher";

export default function DesktopNavigation({ lang, dict }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="tablet:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={lang === "ar" ? "left" : "right"}
        className="w-[300px] tablet:w-[400px]"
      >
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
  );
}
