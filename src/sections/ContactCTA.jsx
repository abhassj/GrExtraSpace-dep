import { Mail } from 'lucide-react'
import { contactImage } from '../data/homeContent'
import { contactOffices } from '../data/aboutContent'
import { motion } from 'framer-motion'
import { UKFlag, SAFlag } from '../components/ui/Flags'

const MotionDiv = motion.div

const ukOffice = contactOffices.find((o) => o.id === 'uk')
const saOffice = contactOffices.find((o) => o.id === 'sa')

export default function ContactCTA() {
  return (
    <section id="contact" className="relative bg-brand-mist py-14 text-brand-navy sm:py-16 lg:py-24">
      <div className="section-wrap">
        <MotionDiv 
          className="section-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
            <div className="relative">
              <div className="relative aspect-[4/3] md:aspect-[4/3] lg:aspect-square overflow-hidden bg-brand-navy shadow-editorial">
                <img
                  src={contactImage}
                  alt="GR Extra Space construction project"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/20 via-transparent to-transparent" />
              </div>

              {/* 4th Generation Badge — desktop */}
              <div className="absolute -bottom-6 -right-6 hidden lg:flex flex-col justify-center bg-brand-navy px-10 py-8 text-white shadow-2xl z-10">
                <p className="font-display text-[2.5rem] leading-none">4th</p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                  Generation<br/>Builders
                </p>
              </div>

              {/* 4th Generation Badge — mobile */}
              <div className="absolute -bottom-3 right-3 flex lg:hidden flex-col justify-center bg-brand-navy px-5 py-3.5 text-white shadow-2xl z-10 sm:-bottom-4 sm:right-4 sm:px-6 sm:py-4">
                <p className="font-display text-xl leading-none sm:text-2xl">4th</p>
                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                  Generation<br/>Builders
                </p>
              </div>
            </div>

            <div>
              <p className="eyebrow">Get In Touch</p>

              <h2 className="mt-5 font-display text-[2rem] font-medium leading-[1.05] tracking-[-0.01em] text-brand-navy sm:mt-8 sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                Ready For your
                <br />
                Next <span className="italic">Project?</span>
              </h2>

              <p className="mt-5 font-display text-lg text-brand-navy/90 sm:mt-8 sm:text-2xl">
                Let's create something great together
              </p>

              <p className="mt-3 max-w-lg text-sm leading-relaxed text-brand-navy/70 sm:mt-6 sm:text-base">
                Contact us or leave a message and we will get back to you with a competitive quote as soon as possible.
              </p>

              <div className="mt-7 grid max-w-md grid-cols-1 gap-8 border-t border-brand-navy/15 pt-8 sm:mt-10 sm:grid-cols-2 sm:gap-6 sm:pt-10">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-navy/60">
                    <UKFlag className="h-3 w-auto rounded-[1px]" /> {ukOffice.country}
                  </div>
                  <p className="mt-2 font-display text-base text-brand-navy sm:mt-3 sm:text-lg">
                    {ukOffice.region}
                  </p>
                  
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-brand-red" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                      </svg>
                      <p className="text-[13px] font-medium tracking-wide text-brand-navy/80">
                        <a
                          href={ukOffice.phoneTel.replace('tel:', 'https://wa.me/')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-brand-red"
                        >
                          {ukOffice.phone}
                        </a>
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-brand-red" />
                      <p className="text-[13px] text-brand-navy/80 hover:text-brand-red transition-colors break-words">
                        <a href={`mailto:${ukOffice.email}`}>{ukOffice.email}</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-navy/60">
                    <SAFlag className="h-3 w-auto rounded-[1px]" /> {saOffice.country}
                  </div>
                  <p className="mt-2 font-display text-base text-brand-navy sm:mt-3 sm:text-lg">{saOffice.region}</p>
                  
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-brand-red" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                      </svg>
                      <p className="text-[13px] font-medium tracking-wide text-brand-navy/80">
                        <a
                          href={saOffice.phoneTel.replace('tel:', 'https://wa.me/')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-brand-red"
                        >
                          {saOffice.phone}
                        </a>
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-brand-red" />
                      <p className="text-[13px] text-brand-navy/80 hover:text-brand-red transition-colors break-words">
                        <a href={`mailto:${saOffice.email}`}>{saOffice.email}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
