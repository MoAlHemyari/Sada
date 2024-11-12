import Image from "next/image";
import SurveyTool from "./SurveyTool";
import DecisionDashboard from "./DecisionDashboard";

export default function ToolsSection({ dict, lang }) {
  dict = dict.tools_section;
  return (
    <section className="container tree-section">
      <div className="headline-wrapper">
        <h2 className="headline">{dict.headline}</h2>
        <h3 className="sub-headline">{dict.subheadline}</h3>
      </div>

      <Image
        src="/image/showcase.svg"
        alt="Showcase"
        className="undraggable shrinked-width-70"
        width={1920}
        height={1080}
        draggable={false}
      />

      <SurveyTool dict={dict} lang={lang} />
      <DecisionDashboard dict={dict} />
    </section>
  );
}
