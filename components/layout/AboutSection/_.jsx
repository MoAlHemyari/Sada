export default function About({ dict }) {
  dict = dict.about_section;

  return (
    <section className="container willScrollTo" id="about">
      <div className="bg-blue-7 rounded-xl">
        <div className="grid desktop:grid-cols-2 desktop:gap-16 gap-4 px-12 py-20 items-center">
          <div className="desktop:jusify-start tablet:justify-center">
            <h2 className="headline text-lg">{dict.headline}</h2>
            <h3 className="sub-headline text-3xl">{dict.subheadline}</h3>
          </div>
          <div>
            <p className="text-blue-3">
              {dict.brief.map((segment, index) => (
                segment.style === "bold" ? (
                  <strong className="font-semibold" key={index}>{segment.text}</strong>
                ) : (
                  <span key={index}>{segment.text}</span>
                )
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
