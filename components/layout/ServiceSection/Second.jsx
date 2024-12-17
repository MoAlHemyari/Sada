'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const images = [
  {
    src: '/image/areas_section/gatherings.webp',
    alt: 'Shopping center with traditional architecture',
  },
  {
    src: '/image/areas_section/healthcare.webp',
    alt: 'Modern lounge area',
  },
  {
    src: '/image/areas_section/transithubs.webp',
    alt: 'Digital display area',
  },
  {
    src: '/image/areas_section/workspaces.webp',
    alt: 'Modern retail space',
  },
]


export default function second({ lang }) {
  return (
    <div className="relative overflow-hidden">

      <div className="relative mx-auto max-w-7xl px-4 py-20 mobile:px-6 tablet:px-8">
        <div className="grid gap-12 tablet:grid-cols-2 tablet:gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary mobile:text-4xl tablet:text-5xl">
              Built for Every Space
            </h2>
            <p className="mt-4 text-sm mobile:text-base tablet:text-lg">
              Adaptable for every setting, from retail to public spaces and offices.
            </p>
            <div className="mt-8">
              <Link href={`https://43us9n0vsgt.typeform.com/to/QDGWxlgl`}>
                <Button>Work with us</Button>
              </Link>
            </div>
          </div>

          <div>
            <div className="flex flex-row-reverse items-start">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative shadow-md"
                  style={{
                    marginInlineEnd: index === 0 ? '0' : '-8rem',
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="rounded-md h-auto object-cover tablet:max-h-[350px] mobile:max-h-[200px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
