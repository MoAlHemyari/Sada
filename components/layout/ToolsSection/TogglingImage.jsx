import { Bold, Italic, Underline } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export default function TogglingImage({ dict }) {
  const [switcher, imageAlt] = [dict.switcher, dict.image_alt];

  return (
    <ToggleGroup className="inline-flex rounded-lg border p-1 shadow-sm w-min justify-self-center my-4" type="single">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        {dict.switcher.tablet.name}
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        {dict.switcher.kiosk.name}
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
