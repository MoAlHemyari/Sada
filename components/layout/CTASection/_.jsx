import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA({ dict, lang }) {
  dict = dict.footer.CTA_box;

  return (
    <section className="container">
      <div className=" bg-blue-3 shadow-xl rounded-xl pt-28">
        <div className="p-12 grid gap-8 grid-cols-7">
          <div className="desktop:col-span-4 col-span-7 grid gap-2 [&>*]:text-white">
            <h2 className="headline text-4xl">{dict.headline}</h2>
            <p className="">{dict.description}</p>
          </div>
          <div className="content-end desktop:justify-self-end desktop:col-span-3">
            <Link href={`/${lang}/contact`}>
              <Button className="bg-blue-8 hover:bg-blue-7 text-blue-2 shadow-sm px-4 py-3">
                {dict.cta_button}{" "}
                {lang !== "ar" ? (
                  <ArrowRight className="ml-2 h-4 w-4" />
                ) : (
                  <ArrowLeft className="ml-2 h-4 w-4" />
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
