import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/homeContent'

const regionFlag = {
  UK: '🇬🇧',
  SA: '🇿🇦',
}

export default function ProjectsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    dragFree: true,
    containScroll: 'trimSnaps',
  })
  const [selectedIndex, setSelectedIndex] = useState(1)
  const [snapCount, setSnapCount] = useState(projects.length)

  useEffect(() => {
    if (!emblaApi) {
      return undefined
    }

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap() + 1)
      setSnapCount(emblaApi.scrollSnapList().length)
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
    <section className="relative bg-brand-mist py-24 text-brand-navy lg:py-32">
      <div className="section-wrap">
        <div className="section-inner">
          <div className="flex flex-wrap items-end justify-between gap-10">
            <div className="max-w-2xl">
              <p className="eyebrow">Portfolio</p>
              <h2 className="mt-8 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] text-brand-navy md:text-5xl lg:text-[3.5rem]">
                All our projects started
                <br />
                with someone
                <br />
                <span className="italic">like you.</span>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-base leading-relaxed text-brand-navy/70">
                Someone with big plans and high standards. Browse our portfolio
                to see what we've built, then share your ideas for what could be
                next.
              </p>
              <Link to="/projects" className="cta-outline-dark mt-8">
                Portfolio
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 lg:mt-20">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center pl-5 md:pl-10 lg:pl-16 xl:pl-20">
            {projects.map((project, index) => {
              const isOffset = index % 2 !== 0
              return (
                <article
                  key={project.name}
                  className={clsx(
                    'relative min-w-0 shrink-0 px-3 md:px-4',
                    'flex-[0_0_88%] md:flex-[0_0_52%] lg:flex-[0_0_40%] xl:flex-[0_0_34%]',
                    isOffset ? 'lg:translate-y-10' : 'lg:translate-y-0',
                  )}
                >
                  <div className="group relative aspect-[4/5] overflow-hidden bg-brand-navy shadow-editorial">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-brand-ink/10 to-transparent" />

                    <div className="absolute left-5 top-5 flex items-center gap-2 border border-white/40 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                      <span>{regionFlag[project.region]}</span>
                      {project.region === 'UK' ? 'United Kingdom' : 'South Africa'}
                    </div>

                    <div className="absolute inset-x-0 bottom-0">
                      <div className="m-5 border border-white/20 bg-white/10 p-5 backdrop-blur-lg">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                          {project.category}
                        </p>
                        <h3 className="mt-2 font-display text-2xl leading-tight text-white md:text-[1.75rem]">
                          {project.name}
                        </h3>
                        <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-4">
                          <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">
                            {project.location}
                          </p>
                          <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition hover:text-brand-gold"
                          >
                            View
                            <ArrowRight size={12} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>

      <div className="section-wrap mt-12">
        <div className="section-inner flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-navy/60">
              Drag to explore
            </p>
            <span className="h-px w-16 bg-brand-navy/20" />
            <p className="font-display text-sm text-brand-navy">
              <span className="text-brand-red">{String(selectedIndex).padStart(2, '0')}</span>
              <span className="text-brand-navy/40"> / {String(snapCount).padStart(2, '0')}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center border border-brand-navy/30 text-brand-navy transition hover:bg-brand-navy hover:text-white"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous project"
            >
              <ArrowLeft size={16} />
            </button>

            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center border border-brand-red bg-brand-red text-white transition hover:bg-brand-red-deep"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next project"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
