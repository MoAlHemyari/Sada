'use client'
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "@/components/component/LanguageSwitcher"
import Image from "next/image"
import Link from "next/link"
import DesktopNavigation from "@/components/layout/HeaderSection/DesktopNavigation"
import MobileNavigation from "@/components/layout/HeaderSection/MobileNavigation"
import { useState, useEffect } from 'react'

const Logo = ({ lang, alt }) => (
  <div className="flex items-center space-x-2 w-[77px] relative">
    <Link href={`/${lang}`} className="flex items-center space-x-2">
      <Image
        src="/image/logo/sada.webp"
        alt={alt}
        id="logo"
        width={60}
        height={26}
        className="h-5 w-auto blue-filter-img"
        unoptimized
      />
    </Link>
  </div>
)

const DesktopSpecialNav = ({ lang, bookDemoText }) => (
  <div className="hidden tablet:flex items-center gap-4">
    <Link href={`https://43us9n0vsgt.typeform.com/to/QDGWxlgl`}>
      <Button variant="outline">{bookDemoText}</Button>
    </Link>
    <LanguageSwitcher lang={lang} className="button rounded-sm" />
    {/* theme colors has to setted up before enabling theme toggle */}
    {/* <ThemeToggle /> */}
  </div>
)

export default function HeaderSection({ lang, dict }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const headerDict = dict.header

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-400 bg-white backdrop-blur-sm py-3 ${isScrolled ? 'shadow-sm' : 'bg-transparent'}`}>
      <nav className="container flex items-center justify-between py-0">
        <div className="flex gap-12 text-sm items-center">
          <Logo lang={lang} alt={headerDict.logo.alt} />
          <DesktopNavigation lang={lang} dict={headerDict} />
        </div>

        <DesktopSpecialNav lang={lang} bookDemoText={headerDict.navbar.book_demo} />
        <MobileNavigation lang={lang} dict={headerDict} />
      </nav>
    </header >
  )
}
