import "@/app/globals.css";
import { getDictionary } from "@/get-dictionary";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const myFont = IBM_Plex_Sans_Arabic({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
});

// export async function generateStaticParams() {
//   return [
//     { lang: 'en' },
//     { lang: 'ar' },
//   ]
// }

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;


  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body className={`${myFont.variable} font-sans`}>
      {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
