import SurveyTool from "./SurveyTool";
import DecisionDashboard from "./DecisionDashboard";
import Showcase from "@/components/ui/Showcase";

export default function ToolsSection({ dict, lang }) {
  dict = dict.tools_section;
  return (
    <section className="container tree-section" id="tools">
      <div className="headline-wrapper">
        <h2 className="headline">{dict.headline}</h2>
        <h3 className="sub-headline">{dict.subheadline}</h3>
      </div>

      <Showcase lang={lang} />

      <SurveyTool dict={dict} lang={lang} />
      <DecisionDashboard dict={dict} />
    </section>
  );
}
