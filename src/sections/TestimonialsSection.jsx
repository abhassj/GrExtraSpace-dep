import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import SectionLabel from '../components/ui/SectionLabel'
import { testimonials } from '../data/homeContent'

const trustSignals = [
  'Google Reviews 4.9/5',
  'Certified Build Teams',
  'Cross-Border Delivery',
]

export default function TestimonialsSection() {
  const autoplay = useRef(
    Autoplay({
      delay: 6000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  )

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) {
      return undefined
    }

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi])

  return (
    <section className="relative bg-brand-paper py-24 text-brand-navy lg:py-32">
      <div className="section-wrap">
        <div className="section-inner">
          <div className="flex flex-wrap items-end justify-between gap-10">
            <div className="max-w-2xl">
              <SectionLabel>Client Voices</SectionLabel>
              <h2 className="mt-10 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] text-brand-navy md:text-5xl lg:text-[3.5rem]">
                Trusted for quality
                <br />
                and <span className="italic">dependable delivery.</span>
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={`dot-${testimonial.client}`}
                  type="button"
                  className="group flex flex-col items-center gap-2"
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <span
                    className={clsx(
                      'text-[10px] font-semibold transition',
                      selectedIndex === index
                        ? 'text-brand-red'
                        : 'text-brand-navy/40',
                    )}
                  >
                    0{index + 1}
                  </span>
                  <span
                    className={clsx(
                      'h-[2px] w-10 transition-all',
                      selectedIndex === index
                        ? 'bg-brand-red'
                        : 'bg-brand-navy/20 group-hover:bg-brand-navy/40',
                    )}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-brand-navy/15">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <article
                    key={testimonial.client}
                    className="min-w-0 flex-[0_0_100%] py-16"
                  >
                    <div className="grid gap-10 lg:grid-cols-[0.2fr_0.8fr] lg:gap-16">
                      <div>
                        <span className="font-display text-[8rem] leading-[0.6] text-brand-red/40">
                          "
                        </span>
                      </div>
                      <div>
                        <p className="max-w-4xl font-display text-2xl font-medium leading-[1.3] text-brand-navy md:text-4xl lg:text-[2.75rem]">
                          {testimonial.quote}
                        </p>
                        <div className="mt-10 flex items-center gap-5 border-t border-brand-navy/15 pt-6">
                          <div className="h-12 w-12 rounded-full bg-brand-navy/10" />
                          <div>
                            <p className="font-display text-lg text-brand-navy">
                              {testimonial.client}
                            </p>
                            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-navy/60">
                              {testimonial.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-px border-t border-brand-navy/15 bg-brand-navy/15 md:grid-cols-3">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="bg-brand-paper px-6 py-6 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-navy/70"
              >
                {signal}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
