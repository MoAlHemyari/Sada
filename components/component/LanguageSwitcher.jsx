"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LanguageSwitcher({ lang, className }) {

  return (
    <Select
      value={lang}
      onValueChange={(e) => (window.location.href = `/${e}`)}
      dir={`${lang === "ar" ? "rtl" : "ltr"}`}
    >
      <SelectTrigger className="w-24">
        <SelectValue placeholder={lang === "ar" ? "العربية" : "English"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="ar">العربية</SelectItem>
          <SelectItem value="en">Engilsh</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
