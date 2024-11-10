import Image from "next/image";

export default function Clients({ dict }) {
  dict = dict.clients_section;
  const clients = dict.clients_entities;

  return (
    <section className="container">
      <div className="headline-wrapper pt-0">
        <h2 className="headline">{dict.headline}</h2>
        <h3 className="sub-headline">{dict.subheadline}</h3>
      </div>
      <div className="grid desktop:grid-cols-5 tablet:grid-cols-3 tablet:last:col-span-2 justify-center grid-cols-2 tablet:gap-4 gap-y-4 gap-x-24">
        {Object.values(clients).map((client, index) => (
          <div
            key={client.src}
            className={`grid ${
              index === Object.values(clients).length - 1
                ? "tablet:last:col-span-3 desktop:last:col-span-1 tablet:justify-self-center"
                : ""
            } ${
              index % 2 === 0
                ? "tablet:justify-self-center justify-self-end"
                : "tablet:justify-self-center justify-self-start"
            }`}
          >
            <Image
              src={`./image/logo/${client.src}.svg`}
              alt={`${client.alt} Logo`}
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
