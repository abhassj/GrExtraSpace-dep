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
      className="relative bg-brand-navy py-24 text-white lg:py-32"
    >
      <div className="section-wrap">
        <div className="section-inner">
          <MotionDiv
            className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <SectionLabel light>Who We Are</SectionLabel>

              <h2 className="mt-10 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] text-white md:text-5xl lg:text-[3.5rem]">
                Four generations of
                <br />
                building <span className="italic">excellence.</span>
              </h2>

              <p className="mt-10 max-w-md text-base leading-relaxed text-white/75">
                Founded in KZN and expanded into Berkshire, GR Extra Space is a
                one-stop construction partner for container-led developments,
                turnkey project delivery, and bespoke structural builds across
                two continents.
              </p>

              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-brand-gold transition hover:text-white"
              >
                Our Story
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="grid gap-px bg-white/12 sm:grid-cols-2">
              {introStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-brand-navy px-6 py-10 md:px-8 md:py-14"
                >
                  <p className="font-display text-5xl leading-none text-white md:text-6xl">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </p>
                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60">
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
