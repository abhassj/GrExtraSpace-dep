import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { contactOffices } from '../../data/aboutContent'
import { UKFlag, SAFlag } from '../../components/ui/Flags'

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
                <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
                  {office.id === 'uk' ? (
                    <UKFlag className="h-[14px] w-auto rounded-[1px]" />
                  ) : (
                    <SAFlag className="h-[14px] w-auto rounded-[1px]" />
                  )}
                  {office.country}
                </div>

                <p className="mt-3 font-display text-xl text-white sm:text-2xl">
                  {office.region}
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-center gap-2.5">
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current text-brand-gold" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                    <p className="text-[15px] font-medium tracking-wide text-white/90">
                      <a
                        href={office.phoneTel.replace('tel:', 'https://wa.me/')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-brand-gold"
                      >
                        {office.phone}
                      </a>
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2.5">
                    <Mail className="h-[18px] w-[18px] text-brand-gold" />
                    <p className="text-[15px] text-white/80 hover:text-brand-gold transition-colors break-words">
                      <a href={`mailto:${office.email}`}>{office.email}</a>
                    </p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
