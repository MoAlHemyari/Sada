import Emoji from "@/components/component/Emoji"; 

export default function Features({ dict }) {
  dict = dict.sections.features;
  return (
    <section>
      <div className="headline-wrapper">
        <h2 className="second-headline">{dict.headline}</h2>
        <p className="">{dict.description}</p>
      </div>

      <div className="grid tablet:grid-cols-2 gap-6 shrinked-width-50">
        {/* Localization Card */}
        <div className="bg-blue-8 rounded-lg p-12 tablet:p-10">
          <div className="mb-4">
            <Emoji name="speaker" alt="speaker" size={32} />
          </div>
          <h3 className="font-bold text-blue-1 mb-2">
            {dict.components.localization.headline}
          </h3>
          <p className="text-grey-dark">
            {dict.components.localization.description}
          </p>
        </div>

        {/* Survey Management Card */}
        <div className="bg-blue-8 rounded-lg p-12 tablet:p-10">
          <div className="mb-4">
          <Emoji name="writing-hand" alt="writing-hand" size={32} />
          </div>
          <h3 className="font-bold text-blue-1 mb-2">
            {dict.components.survey_management.headline}
          </h3>
          <p className="text-grey-dark">
            {dict.components.survey_management.description}
          </p>
        </div>

        {/* Comprehensive Dashboard Card */}
        <div className="tablet:col-span-2 bg-blue-8 rounded-lg p-12 tablet:p-10">
          <div className="mb-4">
          <Emoji name="chart-increasing" alt="chart-increasing" size={32} />
          </div>
          <h3 className="font-bold text-blue-1 mb-2">
            {dict.components.comprehensive_dashboard.headline}
          </h3>
          <p className="text-grey-dark">
            {dict.components.comprehensive_dashboard.description}
          </p>
        </div>
      </div>
    </section>
  );
}
