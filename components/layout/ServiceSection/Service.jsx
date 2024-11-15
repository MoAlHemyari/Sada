import StagesLine from "./StagesLine";

export default function Analysis({ dict, lang }) {
    dict = dict.sections.services;
    return (
        <section>
            <div className="headline-wrapper">
                <h2 className="second-headline">{dict.headline}</h2>
                <p className="">{dict.description}</p>
            </div>
            <StagesLine dict={dict} lang={lang} />
        </section>
    );
}