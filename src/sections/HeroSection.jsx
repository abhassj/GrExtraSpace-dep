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
    <section className="relative min-h-screen overflow-hidden bg-brand-mist text-brand-navy">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative flex flex-col justify-end pb-16 pt-32 md:pb-20 md:pt-40 lg:justify-center lg:pb-10 lg:pt-10">
          <div className="section-wrap">
            <MotionDiv
              className="max-w-xl"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <MotionParagraph
                variants={item}
                className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-brand-navy/70"
              >
                <span className="h-px w-10 bg-brand-red" />
                GR Extra Space Construction
              </MotionParagraph>

              <MotionHeading
                variants={item}
                className="mt-8 font-display text-[2.75rem] font-medium leading-[1.02] tracking-[-0.015em] text-brand-navy md:text-6xl lg:text-[4.5rem] xl:text-[5rem]"
              >
                Building beyond
                <br />
                <span className="italic text-brand-navy/90">boundaries.</span>
              </MotionHeading>

              <MotionParagraph
                variants={item}
                className="mt-8 max-w-md text-base leading-relaxed text-brand-navy/70 md:text-lg"
              >
                Fourth-generation builders delivering turnkey construction,
                container solutions, and bespoke architecture across the United
                Kingdom and South Africa.
              </MotionParagraph>

              <MotionDiv
                variants={item}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 border border-brand-red bg-brand-red px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-red-deep hover:shadow-[0_14px_30px_-10px_rgba(217,4,41,0.55)]"
                >
                  Get a Quote
                  <ArrowRight size={14} />
                </Link>

                <Link
                  to="/projects"
                  className="inline-flex items-center gap-3 border border-brand-navy/60 bg-transparent px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-navy transition duration-300 hover:-translate-y-0.5 hover:bg-brand-navy hover:text-white"
                >
                  View Our Work
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

        <div className="relative min-h-[55vh] overflow-hidden bg-brand-ink lg:min-h-screen">
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
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 via-brand-ink/10 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-10">
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
                <p className="mt-2 font-display text-xl tracking-tight md:text-2xl">
                  {activeSlide.caption}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-3">
              {heroSlides.map((slide, slideIndex) => (
                <button
                  key={slide.caption}
                  type="button"
                  className="group flex flex-col items-center gap-2"
                  onClick={() => setIndex(slideIndex)}
                  aria-label={`Show slide ${slideIndex + 1}`}
                >
                  <span className="text-[10px] font-semibold text-white/60 transition group-hover:text-white">
                    0{slideIndex + 1}
                  </span>
                  <span
                    className={`h-[2px] w-8 transition-all duration-500 ${
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
