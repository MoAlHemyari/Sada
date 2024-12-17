'use client'

import { useState } from 'react'
import Image from 'next/image'
import Emoji from '@/components/component/Emoji'

const Area = ({ title, description, icon, isHovered, onHover }) => (
  <div
    className={`p-10 rounded-lg transition-all duration-300 bg-blue-8 tablet:border  ${isHovered ? ' bg-blue-7 border-blue-5' : ''}`}
    onMouseEnter={onHover}
  >
    <div className="mb-4 text-primary">{icon}</div>
    <h3 className="font-bold mb-2 text-primary">{title}</h3>
    <p>{description}</p>
  </div>
)

export default function InteractiveArea() {
  const [hoveredArea, setHoveredArea] = useState('gatherings')

  const areas = {
    gatherings: {
      title: 'Gatherings',
      description: 'Enhancing engagement at events, festivals, and retail spaces.',
      icon: <Emoji name="party-popper" size="30" />,
      image: '/image/areas_section/gatherings.webp'
    },
    transit: {
      title: 'Transit Hubs',
      description: 'Streamlining operations in airports, metro stations, and public facilities.',
      icon: <Emoji name="station" size="30" />,
      image: '/image/areas_section/transithubs.webp'
    },
    workspaces: {
      title: 'Workspaces',
      description: 'Supporting productivity in offices, innovation hubs, and SMEs.',
      icon: <Emoji name="briefcase" size="30" />,
      image: '/image/areas_section/workspaces.webp'
    },
    healthcare: {
      title: 'Healthcare',
      description: 'Improving services and communication in hospitals, clinics, and pharmacies.',
      icon: <Emoji name="stethoscope" size="30" />,
      image: '/image/areas_section/healthcare.webp'
    }
  }

  return (
    <>
      <section>
        <div className="headline-wrapper">
          <h2 className="second-headline">Built for Every Space</h2>
          <p className="">Adaptable for every setting, from retail to public spaces and offices.</p>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-8">



          <div className="space-y-8">
            <Area
              {...areas.gatherings}
              isHovered={hoveredArea === 'gatherings'}
              onHover={() => setHoveredArea('gatherings')}
            />
            <Area
              {...areas.transit}
              isHovered={hoveredArea === 'transit'}
              onHover={() => setHoveredArea('transit')}
            />
          </div>

          <div className="relative tablet:aspect-auto aspect-[4/3] rounded-lg overflow-hidden">
            {Object.entries(areas).map(([key, area]) => (
              <Image
                key={key}
                src={area.image}
                alt={`${area.title} application`}
                fill
                className={`object-cover transition-opacity duration-300 ${hoveredArea === key ? 'opacity-100' : 'opacity-0'
                  }`}
              />
            ))}
          </div>

          <div className="space-y-8">
            <Area
              {...areas.workspaces}
              isHovered={hoveredArea === 'workspaces'}
              onHover={() => setHoveredArea('workspaces')}
            />
            <Area
              {...areas.healthcare}
              isHovered={hoveredArea === 'healthcare'}
              onHover={() => setHoveredArea('healthcare')}
            />
          </div>
        </div>
      </section>
    </>)
}

