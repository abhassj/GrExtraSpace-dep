import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../data/homeContent'

const MotionDiv = motion.div
const MotionParagraph = motion.p
const MotionHeading = motion.h1

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.16,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const SLIDE_INTERVAL = 5200

export default function HeroSection() {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length)
    }, SLIDE_INTERVAL)

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current)
      }
    }
  }, [])

  const activeSlide = heroSlides[index]

  return (
    <section className="relative h-[100svh] overflow-hidden bg-brand-mist text-brand-navy lg:min-h-screen lg:h-auto">
      <div className="grid h-full grid-cols-1 grid-rows-[auto_1fr] lg:grid-rows-none lg:min-h-screen lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative flex flex-col justify-end pb-6 pt-20 sm:pb-10 sm:pt-28 md:pb-16 md:pt-36 lg:justify-center lg:pb-10 lg:pt-10">
          <div className="section-wrap">
            <MotionDiv
              className="max-w-xl"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <MotionHeading
                variants={item}
                className="font-display text-[2.5rem] font-medium leading-[1.02] tracking-[-0.015em] text-brand-navy sm:text-[2.75rem] md:text-6xl lg:text-[4.5rem] xl:text-[5rem]"
              >
                Building beyond
                <br />
                <span className="italic text-brand-navy/90">boundaries.</span>
              </MotionHeading>

              <MotionParagraph
                variants={item}
                className="mt-6 max-w-md text-[15px] leading-relaxed text-brand-navy/70 sm:mt-8 sm:text-base md:text-lg"
              >
                Fourth-generation builders delivering turnkey construction,
                container solutions, and bespoke architecture across the United
                Kingdom and South Africa.
              </MotionParagraph>

              <MotionDiv
                variants={item}
                className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10"
              >
                <Link
                  to="/about#lets-work-together"
                  className="inline-flex items-center gap-3 border border-brand-red bg-brand-red px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-red-deep hover:shadow-[0_14px_30px_-10px_rgba(217,4,41,0.55)] sm:px-7 sm:py-4"
                >
                  Get a Quote
                  <ArrowRight size={14} />
                </Link>
              </MotionDiv>

              <MotionDiv
                variants={item}
                className="mt-16 hidden items-center gap-8 lg:flex"
              >
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-navy/60">
                  <span className="text-base">🇬🇧</span> United Kingdom
                </div>
                <span className="h-px w-6 bg-brand-navy/25" />
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-navy/60">
                  <span className="text-base">🇿🇦</span> South Africa
                </div>
              </MotionDiv>
            </MotionDiv>
          </div>
        </div>

        <div className="relative min-h-0 overflow-hidden bg-brand-ink lg:min-h-screen">
          <AnimatePresence mode="sync">
            <motion.div
              key={activeSlide.image}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={activeSlide.image}
                alt={activeSlide.caption}
                fetchpriority="high"
                className={`h-full w-full ${
                  activeSlide.objectFit === 'contain'
                    ? `${activeSlide.bgClass || 'bg-transparent'} object-contain object-center`
                    : 'object-cover'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-brand-ink/30 to-brand-ink/10 lg:from-brand-ink/60 lg:via-brand-ink/10 lg:to-transparent" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-mist via-brand-mist/40 to-transparent lg:h-48 lg:via-brand-mist/60" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 sm:p-6 md:flex-row md:items-end md:justify-between md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeSlide.caption}-label`}
                className="text-white"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                  {activeSlide.category}
                </p>
                <p className="mt-2 font-display text-lg leading-tight tracking-tight sm:text-xl md:text-2xl">
                  {activeSlide.caption}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-2 sm:gap-3">
              {heroSlides.map((slide, slideIndex) => (
                <button
                  key={slide.caption}
                  type="button"
                  className="group flex flex-col items-center gap-1.5 min-h-[40px] min-w-[32px] justify-center sm:gap-2 sm:min-w-[44px]"
                  onClick={() => setIndex(slideIndex)}
                  aria-label={`Show slide ${slideIndex + 1}`}
                >
                  <span className="text-[9px] font-semibold text-white/60 transition group-hover:text-white sm:text-[10px]">
                    0{slideIndex + 1}
                  </span>
                  <span
                    className={`h-[2px] w-6 transition-all duration-500 sm:w-8 ${
                      slideIndex === index
                        ? 'bg-brand-gold'
                        : 'bg-white/30 group-hover:bg-white/70'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute left-6 top-24 hidden flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70 md:flex">
            <span>Est. 2006</span>
            <span className="h-10 w-px bg-white/25" />
            <span className="rotate-label">4th Generation</span>
          </div>
        </div>
      </div>

      <a
        href="#who-we-are"
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-navy/60 transition hover:text-brand-navy lg:inline-flex"
      >
        Scroll
        <ArrowDown size={12} className="animate-bounce" />
      </a>
    </section>
  )
}
