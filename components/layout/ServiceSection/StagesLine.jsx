// import Emoji from "@/components/component/Emoji";

// export default function StagesLine({ dict, lang }) {
//   console.log(lang);
//   dict = dict.stages_showcase;
//   const isRTL = lang === "ar";


//   const getPercentageColor = (percentage) => {
//     if (percentage >= 70) return "text-green";
//     if (percentage >= 40) return "text-orange";
//     return "text-red";
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto px-4 py-8">
//       <div className="relative">

//         {/* Tablet Line */}
//         <div className="absolute hidden tablet:block top-8 left-0 right-0 h-1 bg-blue-3" />

//         {/* Stages */}
//         <div className="relative flex flex-col tablet:grid tablet:grid-cols-6 gap-8 tablet:gap-2">
//           {Object.values(dict).map((stage, index) => (
//             <div
//               key={index}
//               className="flex flex-row tablet:flex-col mx-auto items-center"
//             >
//               <div className="relative w-16 tablet:w-full flex justify-center">
//                 {/* Title */}
//                 <div className="text-blue-3 mb-0 tablet:mb-8 font-medium whitespace-nowrap">
//                   {index + 1}. {stage.title}
//                 </div>

//                 {/* Mobile Line */}
//                 <div id="mobile-line" className="absolute tablet:hidden -top-6 bottom-0 left-[92px] mx-auto w-1 h-20 bg-blue-3" />

//                 {/* Triangle */}
//                 <div className={`absolute ${isRTL ? "right-24": "left-24"} tablet:left-1/2 top-1/2 tablet:top-9 -translate-y-1/2 tablet:-translate-y-0 tablet:-translate-x-1/2 w-0 h-0 border-t-[6px] tablet:border-t-[8px] border-b-[6px] tablet:border-b-0 border-l-[8px] tablet:border-l-[6px] border-r-0 tablet:border-r-[6px] border-t-transparent tablet:border-t-blue-3 border-b-transparent border-l-blue-3 tablet:border-l-transparent tablet:border-r-transparent`} />
//               </div>
//               <div className="flex-grow w-max tablet:flex-grow-0 ml-12 tablet:ml-0">
//                 <div className="bg-[#fff] border rounded-lg px-4 py-2 flex items-center gap-4 shadow-sm">
//                   <Emoji name={stage.emoji} size={20} />
//                   <span
//                     className={`text-md font-semibold ${getPercentageColor(
//                       stage.percentage
//                     )}`}
//                   >
//                     {stage.percentage}%
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import Emoji from "@/components/component/Emoji";

export default function StagesLine({ dict, lang }) {
  dict = dict.stages_showcase;
  console.log('dict', dict);

  const isRTL = lang === 'ar' || lang === 'he'; // Add more RTL languages as needed

  const getPercentageColor = (percentage) => {
    if (percentage >= 70) return "text-green";
    if (percentage >= 40) return "text-orange";
    return "text-red";
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="relative">

        {/* tablet's line */}
        <div className="absolute hidden tablet:block top-8 left-0 right-0 h-1 bg-blue-3" />

        {/* Stages parent element */}
        <div className={`relative flex flex-col tablet:grid tablet:grid-cols-6 gap-8 tablet:gap-2 [&>*] ${isRTL ? 'tablet:flex-row-reverse' : ''}`}>
          {Object.values(dict).map((stage, index) => (
            <div
              key={index}
              className="flex flex-row tablet:flex-col mx-auto items-center"
            >
              <div className="relative w-16 tablet:w-full flex justify-center">

                {/* stage's title */}
                <div className="text-blue-3 mb-0 tablet:mb-8 font-medium whitespace-nowrap">
                  {index + 1}. {stage.title}
                </div>

                {/* stage's mobile's line */}
                <div id="mobile-line" className={`absolute tablet:hidden -top-6 bottom-0 ${isRTL ? 'right-[100px]' : 'left-[92px]'} mx-auto w-1 h-20 bg-blue-3`} />

                {/* stage's triangle */}
                <div className={`absolute ${isRTL ? 'right-[104px] tablet:right-1/2' : 'left-24 tablet:left-1/2'} top-1/2 tablet:top-9 -translate-y-1/2 tablet:-translate-y-0 tablet:-translate-x-1/2 w-0 h-0 
                  ${isRTL ? 
                    'border-t-[6px] tablet:border-t-[8px] border-b-[6px] tablet:border-b-0 border-r-[8px] tablet:border-r-[6px] border-l-0 tablet:border-l-[6px] border-t-transparent tablet:border-t-blue-3 border-b-transparent border-r-blue-3 tablet:border-r-transparent tablet:border-l-transparent' :
                    'border-t-[6px] tablet:border-t-[8px] border-b-[6px] tablet:border-b-0 border-l-[8px] tablet:border-l-[6px] border-r-0 tablet:border-r-[6px] border-t-transparent tablet:border-t-blue-3 border-b-transparent border-l-blue-3 tablet:border-l-transparent tablet:border-r-transparent'
                  }`} />
              </div>

              {/* stage's card */}
              <div className={`flex-grow w-max tablet:flex-grow-0 ${isRTL ? 'mr-16 tablet:mr-0' : 'ml-14 tablet:ml-0'}`}>
                <div className="bg-[#fff] border rounded-lg px-4 py-2 flex items-center gap-4 shadow-sm">
                  <Emoji name={stage.emoji} size={20} />
                  <span
                    className={`text-md font-semibold ${getPercentageColor(
                      stage.percentage
                    )}`}
                  >
                    {stage.percentage}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}