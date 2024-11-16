import Link from "next/link";
import Image from "next/image";

export default function About({ dict, lang }) {
  const socialMedia = dict.footer.social_media;
  const links = dict.footer.links;

  return (
    <footer className="container border-t border-blue-5">
      <div className="flex flex-col gap-2 tablet:flex-row items-center justify-between text-sm">
        <div className="hidden tablet:flex items-center gap-2 [&_*]:text-black">
          <span>
            © 2024
            {new Date().getFullYear() > 2024
              ? `-${new Date().getFullYear()}`
              : ""}
            {dict.footer.comma}
          </span>
          <Link href={`/${lang}`} className="font-semibold">
            <Image
              src="/image/logo/sada.webp"
              alt="Sada Logo"
              width={60}
              height={26}
              className="w-11 h-auto undraggable"
              draggable={false}
            />
          </Link>
        </div>

        {/* links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 tablet:mb-0 mb-5">
          <Link
            key={links.about.name}
            href={`/${lang}/${links.about.link}`}
            className="hidden desktop:flex"
          >
            {links.about.name}
          </Link>
          <Link
            key={links.contact.name}
            href={`/${lang}/${links.contact.link}`}
            className="hidden tablet:flex"
          >
            {links.contact.name}
          </Link>
          <Link
            key={links.features.name}
            href={`/${lang}/${links.features.link}`}
            className="hidden desktop:flex"
          >
            {links.features.name}
          </Link>
          <Link
            key={links.pricing.name}
            href={`/${lang}/${links.pricing.link}`}
          >
            {links.pricing.name}
          </Link>
          <Link
            key={links.careers.name}
            href={`/${lang}/${links.careers.link}`}
          >
            {links.careers.name}
          </Link>

          <Link
            key={links.privacy_policy.name}
            href={`/${lang}/${links.privacy_policy.link}`}
          >
            {links.privacy_policy.name}
          </Link>

          <Link
            key={links.terms_of_service.name}
            href={`/${lang}/${links.terms_of_service.link}`}
          >
            {links.terms_of_service.name}
          </Link>
        </nav>


        <div className="flex tablet:hidden items-center gap-2 [&_*]:text-black">
          <span>
            © 2024
            {new Date().getFullYear() > 2024
              ? `-${new Date().getFullYear()}`
              : ""}
            {dict.footer.comma}
          </span>
          <Link href={`/${lang}`} className="font-semibold">
            <Image
              src="/image/logo/sada.webp"
              alt="Sada Logo"
              width={60}
              height={26}
              className="w-11 h-auto undraggable"
              draggable={false}
            />
          </Link>
        </div>

        {/* social media links */}
        <div className="flex items-center gap-3">
          {Object.values(socialMedia).map((media) => (
            <Link
              key={media.name}
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`/image/icon/${
                  media.name.substr(0, 1).toLowerCase() === "x"
                    ? "x"
                    : `${media.src}`
                }-icon.svg`}
                alt={media.name}
                title={media.name}
                width={18}
                height={18}
                className="h-5 w-auto filter-blue-2"
              />
            </Link>
          ))}
        </div>


   
      </div>
    </footer>
  );
}
