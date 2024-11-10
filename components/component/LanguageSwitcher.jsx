"use client";

import Link from "next/link";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";

export default function LanguageSwitcher({ lang, className }) {
  const switchedTo = i18n.locales.find((locale) => locale !== lang);

  return (
    <Link href={`/${switchedTo}`}>
      <Button variant="ghost" className={className}>
        {switchedTo !== "ar" ? switchedTo.toUpperCase() : "العربية"}
      </Button>
    </Link>
  );
}
