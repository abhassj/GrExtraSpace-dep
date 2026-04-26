import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { contactOffices } from '../../data/aboutContent'

export default function WorkTogetherSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-24 text-white md:py-32" id="lets-work-together">
      {/* Blueprint grid overlay */}
      <div className="blueprint-grid absolute inset-0 opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-brand-ink/20" />

      <div className="section-wrap relative z-10">
        <div className="section-inner max-w-[1000px] text-center">
          <p className="eyebrow-light text-brand-gold">Let's Work Together</p>
          
          <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] md:text-5xl lg:text-[4rem]">
            Ready to start your <br className="hidden md:block" />
            <span className="italic text-white/90">next build?</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Our teams in the United Kingdom and South Africa are ready to discuss your project requirements. Reach out to your local office below.
          </p>

          <div className="mx-auto mt-16 grid max-w-3xl gap-8 md:grid-cols-2 md:gap-16">
            {contactOffices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col items-center ${
                  index === 0 ? 'md:after:absolute md:after:-right-8 md:after:top-0 md:after:h-full md:after:w-px md:after:bg-white/10' : ''
                }`}
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
                  <span className="text-xl">{office.flag}</span>
                  {office.country}
                </div>
                
                <p className="mt-3 font-display text-2xl text-white">
                  {office.region}
                </p>
                
                <div className="mt-6 space-y-3">
                  <p className="text-sm font-medium tracking-wide text-white/90">
                    {office.phone}
                  </p>
                  <p className="text-sm text-white/70 hover:text-white transition-colors">
                    <a href={`mailto:${office.email}`}>{office.email}</a>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex justify-center"
          >
            <a
              href={`mailto:${contactOffices[0].email}`}
              className="inline-flex items-center gap-3 border border-brand-red bg-brand-red px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-red-deep hover:shadow-[0_14px_30px_-10px_rgba(217,4,41,0.55)]"
            >
              Contact Us Now
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
