import Emoji from "@/components/component/Emoji"; 

export default function Solutions({ dict }) {
  dict = dict.sections.solutions;
  return (
    <section>
      <div className="headline-wrapper">
        <h2 className="second-headline">{dict.headline}</h2>
        <p className="">{dict.description}</p>
      </div>

      <div className="grid tablet:grid-cols-2 gap-6 shrinked-width-50">
        {/* Gatherings Card */}
        <div className="bg-blue-7 rounded-lg p-10">
          <div className="mb-4">
            <Emoji name="party-popper" alt="party-popper" size={32} />
          </div>
          <h3 className="font-bold text-blue-1 mb-2">
            {dict.components.gatherings.headline}
          </h3>
          <p className="text-grey-dark">
            {dict.components.gatherings.description}
          </p>
        </div>

        {/* Workspaces Card */}
        <div className="bg-blue-7 rounded-lg p-10">
          <div className="mb-4">
          <Emoji name="briefcase" alt="briefcase" size={32} />
          </div>
          <h3 className="font-bold text-blue-1 mb-2">
            {dict.components.workspaces.headline}
          </h3>
          <p className="text-grey-dark">
            {dict.components.workspaces.description}
          </p>
        </div>

        {/* Transit Hubs Card */}
        <div className="bg-blue-7 rounded-lg p-10">
          <div className="mb-4">
          <Emoji name="station" alt="station" size={32} />
          </div>
          <h3 className="font-bold text-blue-1 mb-2">
            {dict.components.transit_hubs.headline}
          </h3>
          <p className="text-grey-dark">
            {dict.components.transit_hubs.description}
          </p>
        </div>

        {/* Healthcare Card */}
        <div className="bg-blue-7 rounded-lg p-10">
          <div className="mb-4">
          <Emoji name="stethoscope" alt="stethoscope" size={32} />
          </div>
          <h3 className="font-bold text-blue-1 mb-2">
            {dict.components.healthcare.headline}
          </h3>
          <p className="text-grey-dark">
            {dict.components.healthcare.description}
          </p>
        </div>
      </div>
    </section>
  );
}
