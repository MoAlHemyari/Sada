"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import TogglingImage from "./TogglingImage";

export default function SurveyTool({ dict, lang }) {
  dict = dict.tools.survey_tool;
  const switcher = dict.switcher;

  const [view, setView] = useState(switcher.kiosk.src);

  return (
    <div>
      <div className="headline-wrapper">
        <h2 className="second-headline">
          <span className="text-blue-5">1.</span> {dict.headline}
        </h2>
        <p>{dict.description}</p>
      </div>

      <div className="grid items-center gap-3">
        <ToggleGroup
          className="inline-flex rounded-lg border p-1 shadow-sm w-min justify-self-center my-4"
          type="single"
          value={view}
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          <ToggleGroupItem onClick={() => setView(switcher.kiosk.src)} value={switcher.kiosk.src} aria-label={switcher.kiosk.name}>
            {switcher.kiosk.name}
          </ToggleGroupItem>
          <ToggleGroupItem onClick={() => setView(switcher.tablet.src)} value={switcher.tablet.src} aria-label={switcher.tablet.name}>
            {switcher.tablet.name}
          </ToggleGroupItem>
        </ToggleGroup>

        {/* Display Image Based on View */}
        <Image
          src={`/image/tool/survrey-tool-${switcher[view].src}.svg`}
          alt={`${dict.image_alt}${lang !== "ar" ? " " : ""}${view.name}`}
          className="undraggable shrinked-width-70 desktop:h-[40rem] tablet:h-[30rem] wideMobiles:h-[20rem] h-[16rem]" // h-[40rem] to match the height of the viewed images
          width={1920}
          height={1080}
          draggable={false}
        />
      </div>
    </div>
  );
}
