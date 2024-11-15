import Image from "next/image";

export default function ClientsSection({ dict, lang }) {
  dict = dict.clients_section;
  const clients = dict.clients_entities;

  return (
    <section className="container">
      <div className="headline-wrapper pt-0">
        <h2 className="headline">{dict.headline}</h2>
        <h3 className="sub-headline">{dict.subheadline}</h3>
      </div>
      <div className="grid grid-cols-2 justify-center gap-y-6 tablet:grid-cols-3 tablet:[&>*:last-child]:col-span-3 desktop:grid-cols-5 desktop:[&>*:last-child]:col-span-1">
        {Object.values(clients).map((client) => (
          <div
            key={client.src}
            className="flex items-center justify-center"
            // className={`grid w-max ${
            //   index === Object.values(clients).length - 1
            //     ? "tablet:last:col-span-3 desktop:last:col-span-1 tablet:justify-self-center"
            //     : ""
            // } ${
            //   index % 2 === 0
            //     ? "tablet:justify-self-center justify-self-start"
            //     : "tablet:justify-self-center justify-self-end"
            // }`}
          >
            <Image
              src={`./image/logo/${client.src}.svg`}
              alt={`${lang === "ar" ? "شعار " : ""}${client.alt}${
                lang === "en" ? " Logo" : ""
              }`}
              width={80}
              height={32}
              className="h-20 w-auto undraggable"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
