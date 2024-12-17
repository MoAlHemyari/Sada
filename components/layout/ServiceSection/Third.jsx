import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    title: "Workspaces",
    description: "Supporting productivity in offices, innovation hubs, and SMEs.",
    imageUrl: '/image/areas_section/gatherings.webp',
  },
  {
    title: "Gatherings",
    description: "Enhancing engagement at events, festivals, and retail spaces.",
    imageUrl: '/image/areas_section/gatherings.webp',
  },
  {
    title: "Transit Hubs",
    description: "Streamlining operations in airports, metro stations, and public facilities.",
    imageUrl: '/image/areas_section/gatherings.webp',
  },
  {
    title: "Healthcare",
    description: "Improving the communication in hospitals, clinics, and pharmacies.",
    imageUrl: '/image/areas_section/gatherings.webp',
  },
  {
    title: "Shopping Destinations",
    description: "Enhancing customer experiences in malls, outlets, and retail spaces.",
    imageUrl: '/image/areas_section/gatherings.webp',
  },
  {
    title: "Leisure Spaces",
    description: "Bringing joy to parks, cinemas, and entertainment venues.",
    imageUrl: '/image/areas_section/gatherings.webp',
  },
]

export default function Third({ lang }) {
  return (
    <section className="container mx-auto px-4 py-12">

      <div className="headline-wrapper">
        <h2 className="second-headline">Built for Every Space</h2>
        <p className="">Adaptable for every setting, from retail to public spaces and offices.</p>
      </div>

      <div className="grid gap-8 tablet:px-24 tablet:grid-cols-2 desktop:grid-cols-3">
        {categories.map((category) => (
          <article key={category.title} className="flex flex-col mb-4 gap-4">
            <div className="w-full row-span-2 aspect-[4/3]">
              <img
                src={category.imageUrl}
                className="w-full h-full rounded-xl"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">{category.title}</h3>
              <p>{category.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button size="lg" className="bg-blue-3 hover:bg-blue-2 rounded-full">
          Let&apos;s Talk About Your Needs!
        </Button>
      </div>
    </section>
  )
}
