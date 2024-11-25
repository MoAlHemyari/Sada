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
          <Link href={`#about`}>{dict.navbar.about}</Link>
          <Link href={`#features`}>{dict.navbar.features}</Link>
          {/* <Link href={`/${lang}/pricing`}>{dict.navbar.pricing}</Link> */}
          <Link href={`https://43us9n0vsgt.typeform.com/to/SoDXgTpg`}>{dict.navbar.careers}</Link>
          <Link href={`https://43us9n0vsgt.typeform.com/to/QDGWxlgl`}>
            <Button variant="outline" className="w-full">
              {dict.navbar.book_demo}
            </Button>
          </Link>
          <LanguageSwitcher lang={lang} className="w-full" />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
