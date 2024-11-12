"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SurveyTool({ dict, lang }) {
  dict = dict.tools.survey_tool;
  const [view, setView] = useState(dict.switcher.tablet);

  return (
    <div>
      <div className="headline-wrapper">
        <h2 className="second-headline">
          <span className="text-blue-5">1.</span> {dict.headline}
        </h2>
        <p>{dict.description}</p>
      </div>

      <div className="grid items-center gap-3">
        {/* Switcher Section */}
        <div className="relative bg-blue-7 border border-blue-5 shadow-inner mx-auto  inline-flex rounded-full overflow-hidden p-[2px]">
          {/* Sliding Highlight Background */}
          <span
            className={`absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] shadow-sm bg-blue-3 rounded-full transition-all duration-300 ${
              view === dict.switcher.kiosk
                ? "translate-x-full"
                : "translate-x-0"
            }`}
          />

          {/* Tablet View Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setView(dict.switcher.tablet)}
            className={`relative z-10 w-1/2 transition-colors duration-300 ${
              view === dict.switcher.tablet ? "text-blue-7" : "text-blue-4"
            }`}
          >
            {dict.switcher.tablet.name}
          </Button>

          {/* Kiosk View Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setView(dict.switcher.kiosk)}
            className={`relative z-10 w-1/2 transition-colors duration-300 ${
              view === dict.switcher.kiosk ? "text-blue-7" : "text-blue-4"
            }`}
          >
            {dict.switcher.kiosk.name}
          </Button>
        </div>

        {/* Display Image Based on View */}
        <Image
          src={`/image/tool/survrey-tool-${view.src}.svg`}
          alt={`${dict.image_alt}${lang !== "ar" ? " " : ""}${view}`}
          className="undraggable shrinked-width-70"
          width={1920}
          height={1080}
          draggable={false}
        />
      </div>
    </div>
  );
}
