import Image from "next/image";
import Service from "./Service";
import Features from "./Features";
import Solutions from "./Solutions";

export default function ServicesSection({ dict }) {
    dict = dict.services_section;
    return (
        <section className="container tree-section">
            <div className="headline-wrapper">
                <h2 className="headline">{dict.headline}</h2>
                <h3 className="sub-headline">{dict.subheadline}</h3>
            </div>
            <Image
                src="/image/showcase.svg" alt="Showcase" className="undraggable shrinked-width-70" width={1920} height={1080} draggable={false}
            />
            <Service dict={dict} />
            <Features dict={dict} />
            <Solutions dict={dict} />
        </section>
    );
}