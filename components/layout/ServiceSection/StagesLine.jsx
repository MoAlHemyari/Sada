"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Emoji from "@/components/component/Emoji"
import { useInView } from "react-intersection-observer"

export default function StagesLine({ dict, lang }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [visibleStages, setVisibleStages] = useState(0)
  dict = dict.stages_showcase

  const isRTL = lang === "ar" || lang === "he"

  const getPercentageColor = (percentage) => {
    if (percentage >= 70) return "text-green"
    if (percentage >= 40) return "text-orange"
    return "text-red"
  }

  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setVisibleStages((prev) => {
          if (prev < Object.values(dict).length) {
            return prev + 1
          }
          clearInterval(timer)
          return prev
        })
      }, 500) // Show a new stage every 500ms

      return () => clearInterval(timer)
    }
  }, [inView, dict])

  return (
    <div ref={ref} className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="relative">
        {/* tablet's line */}
        <div className="absolute hidden tablet:block top-8 left-0 right-0 h-1 bg-blue-3" />

        {/* Stages parent element */}
        <div
          className={`relative flex flex-col tablet:grid tablet:grid-cols-6 gap-7 tablet:gap-2 [&>*] ${
            isRTL ? "tablet:flex-row-reverse" : ""
          }`}
        >
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
                <div
                  id="mobile-line"
                  className={`absolute tablet:hidden -top-6 bottom-0 ${
                    isRTL ? "right-[100px]" : "left-[92px]"
                  } mx-auto w-1 h-20 bg-blue-3`}
                />

                {/* stage's triangle */}
                <div
                  className={`absolute ${
                    isRTL
                      ? "right-[104px] tablet:right-1/2"
                      : "left-24 tablet:left-1/2"
                  } top-1/2 tablet:top-9 -translate-y-1/2 tablet:-translate-y-0 tablet:-translate-x-1/2 w-0 h-0 
                  ${
                    isRTL
                      ? "border-t-[6px] tablet:border-t-[8px] border-b-[6px] tablet:border-b-0 border-r-[8px] tablet:border-r-[6px] border-l-0 tablet:border-l-[6px] border-t-transparent tablet:border-t-blue-3 border-b-transparent border-r-blue-3 tablet:border-r-transparent tablet:border-l-transparent"
                      : "border-t-[6px] tablet:border-t-[8px] border-b-[6px] tablet:border-b-0 border-l-[8px] tablet:border-l-[6px] border-r-0 tablet:border-r-[6px] border-t-transparent tablet:border-t-blue-3 border-b-transparent border-l-blue-3 tablet:border-l-transparent tablet:border-r-transparent"
                  }`}
                />
              </div>

              {/* Invisible container to maintain layout */}
              <div
                className={`flex-grow w-max tablet:flex-grow-0 ${
                  isRTL ? "mr-16 tablet:mr-0" : "ml-14 tablet:ml-0"
                }`}
              >
                <div className="h-[52px] w-[100px]"> {/* Adjust width as needed */}
                  <AnimatePresence>
                    {index < visibleStages && inView && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="bg-[#fff] border rounded-lg px-4 py-2 flex items-center gap-4 shadow-sm absolute"
                      >
                        <Emoji name={stage.emoji} size={20} />
                        <span
                          className={`text-md font-semibold ${getPercentageColor(
                            stage.percentage
                          )}`}
                        >
                          {stage.percentage}%
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}