import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { contactOffices } from '../../data/aboutContent'

const MotionDiv = motion.div

export default function WorkTogetherSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 text-white sm:py-24 md:py-32" id="lets-work-together">
      {/* Blueprint grid overlay */}
      <div className="blueprint-grid absolute inset-0 opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-brand-ink/20" />

      <div className="section-wrap relative z-10">
        <div className="section-inner max-w-[1000px] text-center">
          <p className="eyebrow-light text-brand-gold">Let's Work Together</p>

          <h2 className="mt-5 font-display text-[2rem] font-medium leading-[1.05] tracking-[-0.01em] sm:mt-6 sm:text-4xl md:text-5xl lg:text-[4rem]">
            Ready to start your <br className="hidden md:block" />
            <span className="italic text-white/90">next build?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/70 sm:mt-8 sm:text-base md:text-lg">
            Our teams in the United Kingdom and South Africa are ready to discuss your project requirements. Reach out to your local office below.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-10 sm:mt-16 md:grid-cols-2 md:gap-16">
            {contactOffices.map((office, index) => (
              <MotionDiv
                key={office.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col items-center ${
                  index === 0 ? 'pb-10 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-24 after:-translate-x-1/2 after:bg-white/10 md:pb-0 md:after:-right-8 md:after:left-auto md:after:top-0 md:after:h-full md:after:w-px md:after:translate-x-0' : ''
                }`}
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
                  <span className="text-xl">{office.flag}</span>
                  {office.country}
                </div>

                <p className="mt-3 font-display text-xl text-white sm:text-2xl">
                  {office.region}
                </p>

                <div className="mt-5 space-y-2 sm:mt-6 sm:space-y-3">
                  <p className="text-sm font-medium tracking-wide text-white/90">
                    <a
                      href={office.phoneTel}
                      className="transition-colors hover:text-white"
                    >
                      {office.phone}
                    </a>
                  </p>
                  <p className="text-sm text-white/70 hover:text-white transition-colors break-words">
                    <a href={`mailto:${office.email}`}>{office.email}</a>
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex justify-center sm:mt-16"
          >
            <a
              href={`mailto:${contactOffices[0].email}`}
              className="inline-flex items-center gap-3 border border-brand-red bg-brand-red px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-red-deep hover:shadow-[0_14px_30px_-10px_rgba(217,4,41,0.55)] sm:px-8 sm:py-4"
            >
              Contact Us Now
              <ArrowRight size={14} />
            </a>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
