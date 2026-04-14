import { useEffect, useRef, useState, useCallback } from 'react'
import clsx from 'clsx'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Link } from 'react-router-dom'
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
                  className="relative min-w-0 flex-[0_0_85%] sm:flex-[0_0_55%] md:flex-[0_0_45%] lg:flex-[0_0_48%] xl:flex-[0_0_42%] 2xl:flex-[0_0_35%] h-[400px] sm:h-[450px] lg:h-[550px] shrink-0 mr-4 lg:mr-6"
                  onMouseEnter={() => setHoveredIdx(index)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <Link
                    to="/projects"
                    className="group relative block h-full w-full overflow-hidden rounded-[8px] bg-brand-navy shadow-sm cursor-pointer"
                  >
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.name}
                      className={clsx(
                        'absolute inset-0 h-full w-full object-cover transition-all duration-700',
                        hoveredIdx === index
                          ? 'scale-110 blur-[4px] brightness-50'
                          : 'scale-100 blur-0 brightness-100'
                      )}
                    />

                    {/* Hover overlay content */}
                    <div
                      className={clsx(
                        'absolute inset-0 flex flex-col justify-center px-8 transition-all duration-600',
                        hoveredIdx === index
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-6'
                      )}
                    >
                      <h3 className="font-display text-2xl font-medium leading-[1.15] text-white uppercase tracking-wide md:text-3xl">
                        {project.name}
                      </h3>
                      <p className="mt-3 text-[12px] font-semibold text-white/90 uppercase tracking-[0.2em]">
                        {project.location}
                      </p>
                      <div className="mt-8 mb-8 h-[1px] w-16 bg-brand-gold" />
                      <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-white group-hover:text-brand-gold transition-colors">
                        <ArrowRight size={14} />
                        Learn More
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Text block — right column, standard padding applied here so text doesn't touch edges */}
        <div className="w-full px-5 md:px-10 lg:w-[28%] lg:pr-10 xl:pr-16 lg:pl-0 flex flex-col justify-center shrink-0">
          <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] text-brand-navy md:text-5xl lg:text-[3.2rem]">
            Extraordinary
            <br />
            spaces begin 
            <br />
            with bold <span className="italic">ideas.</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-brand-navy/70 lg:text-[15px]">
            Every great build starts with a vision. Explore our diverse portfolio of turnkey developments, container projects, and bespoke modular spaces. Let’s turn your architectural aspirations into reality.
          </p>

          <Link
            to="/projects"
            className="mt-8 inline-flex w-fit items-center gap-3 border border-brand-navy/20 px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-navy transition hover:bg-brand-navy hover:text-white rounded-[4px]"
          >
            Portfolio
          </Link>

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
