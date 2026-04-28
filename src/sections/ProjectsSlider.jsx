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
    <section className="relative bg-white py-20 text-brand-navy lg:py-28 overflow-hidden">
      {/* We use a full-width flex layout to ensure the left side bleeds perfectly to 0px */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-10 xl:gap-16">
        
        {/* Slider Container - taking up 70% of viewport width, flush with absolute left edge */}
        <div className="w-full lg:w-[72%]">
          <div className="overflow-hidden" ref={emblaRef}>
            {/* The flex container for embla. No left padding so it starts at exactly 0. */}
            <div className="flex">
              {projects.map((project, index) => (
                <div
                  key={`${project.name}-${index}`}
                  className="relative min-w-0 flex-[0_0_85%] sm:flex-[0_0_55%] md:flex-[0_0_45%] lg:flex-[0_0_48%] xl:flex-[0_0_42%] 2xl:flex-[0_0_35%] h-[320px] sm:h-[420px] md:h-[460px] lg:h-[550px] shrink-0 mr-4 lg:mr-6"
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

        {/* Text block — right column, standard padding applied here so text doesn't touch edges */}
        <div className="mt-10 w-full px-5 md:px-10 lg:mt-0 lg:w-[28%] lg:pr-10 xl:pr-16 lg:pl-0 flex flex-col justify-center shrink-0">
          <h2 className="font-display text-3xl font-medium leading-[1.05] tracking-[-0.01em] text-brand-navy sm:text-4xl md:text-5xl lg:text-[3.2rem]">
            Extraordinary
            <br />
            spaces begin 
            <br />
            with bold <span className="italic">ideas.</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-brand-navy/70 lg:text-[15px]">
            Every great build starts with a vision. Explore our diverse portfolio of turnkey developments, container projects, and bespoke modular spaces. Let’s turn your architectural aspirations into reality.
          </p>



          {/* Navigation arrows (Layton circular layout) */}
          <div className="mt-10 flex items-center gap-3">
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

      </div>
    </section>
  )
}
