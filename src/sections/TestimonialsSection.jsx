import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
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

const MotionDiv = motion.div

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
    <section className="relative bg-brand-paper py-14 sm:py-16 lg:py-20 text-brand-navy">
      <div className="section-wrap">
        <MotionDiv 
          className="section-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-10">
            <div className="max-w-2xl">
              <SectionLabel>Client Voices</SectionLabel>
              <h2 className="mt-5 font-display text-[1.85rem] font-medium leading-[1.08] tracking-[-0.01em] text-brand-navy sm:mt-8 sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                Trusted for quality
                <br />
                and <span className="italic">dependable delivery.</span>
              </h2>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={`dot-${testimonial.client}`}
                  type="button"
                  className="group flex flex-col items-center gap-2 min-h-[40px] min-w-[36px] justify-center sm:min-w-[40px] sm:min-h-[44px]"
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
                      'h-[2px] w-8 transition-all sm:w-10',
                      selectedIndex === index
                        ? 'bg-brand-red'
                        : 'bg-brand-navy/20 group-hover:bg-brand-navy/40',
                    )}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-brand-navy/15 sm:mt-12">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <article
                    key={testimonial.client}
                    className="min-w-0 flex-[0_0_100%] py-8 sm:py-10 lg:py-16"
                  >
                    <div className="grid gap-4 sm:gap-6 lg:grid-cols-[0.1fr_0.9fr] lg:gap-10">
                      <div>
                        <span className="font-display text-[3.5rem] leading-[0.6] text-brand-red/40 sm:text-[5rem]">
                          "
                        </span>
                      </div>
                      <div>
                        <p className="max-w-4xl font-display text-[1.05rem] font-medium leading-[1.35] text-brand-navy sm:text-2xl lg:text-3xl xl:text-4xl">
                          {testimonial.quote}
                        </p>
                        <div className="mt-6 flex items-center gap-4 border-t border-brand-navy/15 pt-4 sm:mt-8 sm:gap-5 sm:pt-5">
                          <div className="h-9 w-9 shrink-0 rounded-full bg-brand-navy/10 sm:h-10 sm:w-10" />
                          <div className="min-w-0">
                            <p className="font-display text-base text-brand-navy sm:text-lg">
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

          <div className="mt-6 grid grid-cols-1 gap-2 border-t border-brand-navy/10 pt-6 sm:mt-8 sm:grid-cols-3 sm:gap-6 sm:border-0 sm:pt-0">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="py-2 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-navy/60 sm:py-4"
              >
                {signal}
              </div>
            ))}
          </div>

        </MotionDiv>
      </div>
    </section>
  )
}
