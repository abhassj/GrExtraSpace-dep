import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import SectionLabel from '../components/ui/SectionLabel'
import { introStats } from '../data/homeContent'

const MotionDiv = motion.div

export default function IntroSection() {
  return (
    <section
      id="who-we-are"
      className="relative bg-brand-navy py-16 text-white sm:py-20 lg:py-32"
    >
      <div className="section-wrap">
        <div className="section-inner">
          <MotionDiv
            className="grid gap-12 sm:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <SectionLabel light>Who We Are</SectionLabel>

              <h2 className="mt-6 font-display text-[2rem] font-medium leading-[1.05] tracking-[-0.01em] text-white sm:mt-8 sm:text-4xl md:text-5xl lg:mt-10 lg:text-[3.5rem]">
                Four generations of
                <br />
                building <span className="italic">excellence.</span>
              </h2>

              <div className="mt-6 max-w-md space-y-4 text-[15px] leading-relaxed text-white/75 sm:mt-8 sm:text-base lg:mt-10">
                <p>
                  GR Extra Space is a premier construction firm rooted in a century-old family legacy.
                  Operating across South Africa and London,
                  we combine traditional craftsmanship with modern innovation in engineering and high-rise timber fabrication.
                </p>
              </div>

              <Link
                to="/about#our-story"
                className="mt-8 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-brand-gold transition hover:text-white sm:mt-10"
              >
                Our Story
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/12">
              {introStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-brand-navy px-4 py-7 sm:px-6 sm:py-10 md:px-8 md:py-14"
                >
                  <p className="font-display text-[2.25rem] leading-none text-white sm:text-5xl md:text-6xl">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </p>
                  <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/60 sm:mt-5 sm:text-[10px] sm:tracking-[0.24em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
