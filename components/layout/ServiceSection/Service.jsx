import Image from "next/image";

export default function Analysis({ dict }) {
    dict = dict.sections.services;
    return (
        <section>
            <div className="headline-wrapper">
                <h2 className="second-headline">{dict.headline}</h2>
                <p className="">{dict.description}</p>
            </div>
            <Image
                src="/image/analysis.png" alt="Showcase" className="undraggable" width={1920} height={1080} draggable={false} 
            />
        </section>
    );
}