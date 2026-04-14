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
    <section className="relative bg-brand-paper py-16 lg:py-20 text-brand-navy">
      <div className="section-wrap">
        <div className="section-inner">
          <div className="flex flex-wrap items-end justify-between gap-10">
            <div className="max-w-2xl">
              <SectionLabel>Client Voices</SectionLabel>
              <h2 className="mt-8 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] text-brand-navy md:text-5xl lg:text-[3.5rem]">
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

          <div className="mt-12 border-t border-brand-navy/15">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <article
                    key={testimonial.client}
                    className="min-w-0 flex-[0_0_100%] py-10 lg:py-16"
                  >
                    <div className="grid gap-6 lg:grid-cols-[0.1fr_0.9fr] lg:gap-10">
                      <div>
                        <span className="font-display text-[5rem] leading-[0.6] text-brand-red/40">
                          "
                        </span>
                      </div>
                      <div>
                        <p className="max-w-4xl font-display text-2xl font-medium leading-[1.3] text-brand-navy lg:text-3xl xl:text-4xl">
                          {testimonial.quote}
                        </p>
                        <div className="mt-8 flex items-center gap-5 border-t border-brand-navy/15 pt-5">
                          <div className="h-10 w-10 rounded-full bg-brand-navy/10" />
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

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="py-4 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-navy/60"
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
