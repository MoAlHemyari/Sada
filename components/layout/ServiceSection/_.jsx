import Service from "./Service";
import Features from "./Features";
import Solutions from "./Solutions";
import Showcase from "@/components/ui/Showcase";

export default function ServicesSection({ dict, lang }) {
    dict = dict.services_section;
    return (
        <section className="container tree-section" id="features">
            <div className="headline-wrapper">
                <h2 className="headline">{dict.headline}</h2>
                <h3 className="sub-headline">{dict.subheadline}</h3>
            </div>

            <Showcase />

            <Service dict={dict} lang={lang} />
            <Features dict={dict} />
            <Solutions dict={dict} />
        </section>
    );
}