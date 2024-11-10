export default function StatisticsSection({ dict, lang }) {
  dict = dict.statistics_section;
  return (
    <section className="container border-y border-blue-6 py-5">
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 items-center">
          <div
            className={`grid grid-cols-3 gap-2 text-center tablet:text-start [&_h3]:${
              lang !== "ar" ? "tracking-tighter" : ""
            }`}
          >
            <div>
              <h3 className="text-3xl font-bold text-blue-1">{dict.customers_surveyed.num}</h3>
              <p>{dict.customers_surveyed.text}</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-1">
                {dict.issued_CX_reports.num}
              </h3>
              <p>{dict.issued_CX_reports.text}</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-1">
                {dict.enhanced_experiences.num}
              </h3>
              <p>{dict.enhanced_experiences.text}</p>
            </div>
          </div>
          <p className="hidden tablet:block text-blue-1 font-semibold text-1xl">
            {dict.description}
          </p>
      </div>
    </section>
  );
}
