import { useRef, useState, useCallback } from 'react'
import clsx from 'clsx'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { projects } from '../data/homeContent'

export default function ProjectsSlider() {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      loop: true,
      skipSnaps: false,
      dragFree: true,
    },
    [autoplay.current]
  )

  const [hoveredIdx, setHoveredIdx] = useState(null)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section id="portfolio" className="relative bg-white py-16 text-brand-navy sm:py-20 lg:py-28 overflow-hidden">
      {/* We use a full-width flex layout to ensure the left side bleeds perfectly to 0px */}
      <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:gap-10 xl:gap-16">

        {/* Text block on mobile renders first via DOM order (placed below for desktop via order) */}
        <div className="order-1 w-full px-5 md:px-10 lg:order-2 lg:mt-0 lg:w-[28%] lg:pr-10 xl:pr-16 lg:pl-0 flex flex-col justify-center shrink-0">
          <h2 className="font-display text-[2rem] font-medium leading-[1.05] tracking-[-0.01em] text-brand-navy sm:text-4xl md:text-5xl lg:text-[3.2rem]">
            Extraordinary
            <br />
            spaces begin
            <br />
            with bold <span className="italic">ideas.</span>
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-brand-navy/70 sm:mt-6 sm:text-base lg:text-[15px]">
            Every great build starts with a vision. Explore our diverse portfolio of turnkey developments, container projects, and bespoke modular spaces. Let’s turn your architectural aspirations into reality.
          </p>

          {/* Navigation arrows */}
          <div className="mt-7 flex items-center gap-3 sm:mt-10">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous projects"
              className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full bg-brand-navy text-white transition hover:bg-brand-red shadow-sm"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next projects"
              className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full bg-brand-navy text-white transition hover:bg-brand-red shadow-sm"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="order-2 w-full lg:order-1 lg:w-[72%]">
          <div className="overflow-hidden pl-5 md:pl-10 lg:pl-0" ref={emblaRef}>
            {/* The flex container for embla. */}
            <div className="flex">
              {projects.map((project, index) => (
                <div
                  key={`${project.name}-${index}`}
                  className="relative min-w-0 flex-[0_0_82%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_48%] xl:flex-[0_0_42%] 2xl:flex-[0_0_35%] h-[360px] sm:h-[420px] md:h-[460px] lg:h-[550px] shrink-0 mr-3 sm:mr-4 lg:mr-6"
                  onMouseEnter={() => setHoveredIdx(index)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div
                    className="group relative block h-full w-full overflow-hidden rounded-[8px] bg-brand-navy shadow-sm cursor-pointer"
                  >
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className={clsx(
                        'absolute inset-0 h-full w-full object-cover transition-all duration-700',
                        hoveredIdx === index
                          ? 'scale-110 blur-[4px] brightness-50'
                          : 'scale-100 blur-0 brightness-100'
                      )}
                    />

                    {/* Hover overlay content (desktop) */}
                    <div
                      className={clsx(
                        'absolute inset-0 hidden flex-col justify-center px-8 transition-all duration-600 lg:flex',
                        hoveredIdx === index
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-6'
                      )}
                    >
                      <h3 className="font-display text-2xl font-medium leading-[1.15] text-white uppercase tracking-wide md:text-3xl">
                        {project.name}
                      </h3>
                      <div className="mt-6 mb-6 h-[1px] w-16 bg-brand-gold" />
                      <p className="text-sm leading-relaxed text-white/90 font-medium">
                        {project.summary}
                      </p>
                    </div>

                    {/* Mobile overlay content */}
                    <div className="absolute inset-x-0 bottom-0 lg:hidden">
                      <div className="bg-gradient-to-t from-brand-ink/85 via-brand-ink/40 to-transparent px-5 pb-5 pt-12">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
                          Featured Project
                        </p>
                        <h3 className="mt-2 font-display text-lg font-medium leading-[1.2] text-white">
                          {project.name}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-white/85">
                          {project.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
