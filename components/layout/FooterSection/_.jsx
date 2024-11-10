import Link from "next/link";
import Image from "next/image";

export default function About({ dict, lang }) {
  const socialMedia = dict.footer.social_media;
  const links = dict.footer.links;

  return (
    <footer className="container border-t border-blue-5">
      <div className="flex flex-col tablet:flex-row items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span>© 2024{new Date().getFullYear() > 2024 ? `-${new Date().getFullYear()}` : ""}{dict.footer.comma}</span>
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
          <span>.</span>
        </div>

        {/* links */}
        <nav className="flex flex-wrap justify-center gap-8">
            {Object.values(links).map((link) => (
              <Link
                key={link.name}
                href={`/${lang}/${link.link}`}
              >
                {link.name}
              </Link>
            ))}
        </nav>

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
                  src={`/image/icon/${media.name.substr(0, 1).toLowerCase() === "x" ? "x" : `${media.src}`}-icon.svg`}
                  alt={media.name}
                  title={media.name}
                  width={18}
                  height={18}
                  className="h-5 w-auto"
                />
              </Link>
            ))}
        </div>
      </div>
    </footer>
  );
}
