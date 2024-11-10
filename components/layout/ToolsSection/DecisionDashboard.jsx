import Image from "next/image";

export default function DecisionDashboard({ dict }) {
  dict = dict.tools.decision_dashboard;
  return (
    <div>
      <div className="headline-wrapper">
        <h2 className="second-headline">
          <span className="text-blue-5">2.</span> {dict.headline}
        </h2>
        <p>{dict.description}</p>
      </div>

      <Image
        src="/image/tool/decision-dashboard.svg"
        alt={dict.image_alt}
        className="undraggable shrinked-width-70 h-[40rem]"
        width={1920}
        height={1080}
        draggable={false}
      />
    </div>
  );
}
