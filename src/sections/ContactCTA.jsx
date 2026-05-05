import { ArrowRight } from 'lucide-react'
import { contactImage } from '../data/homeContent'
import { contactOffices } from '../data/aboutContent'
import { Link } from 'react-router-dom'

const ukOffice = contactOffices.find((o) => o.id === 'uk')
const saOffice = contactOffices.find((o) => o.id === 'sa')

export default function ContactCTA() {
  return (
    <section id="contact" className="relative bg-brand-mist py-14 text-brand-navy sm:py-16 lg:py-24">
      <div className="section-wrap">
        <div className="section-inner">
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

              <div className="mt-7 grid max-w-md grid-cols-2 gap-4 border-y border-brand-navy/15 py-5 sm:mt-10 sm:gap-6 sm:py-6">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-navy/60">
                    <span className="text-base">{ukOffice.flag}</span> {ukOffice.country}
                  </div>
                  <p className="mt-2 font-display text-base text-brand-navy sm:mt-3 sm:text-lg">
                    {ukOffice.region}
                  </p>
                  <p className="mt-1 text-xs text-brand-navy/65 break-words">
                    <a href={ukOffice.phoneTel} className="transition hover:text-brand-navy">{ukOffice.phone}</a>
                  </p>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-navy/60">
                    <span className="text-base">{saOffice.flag}</span> {saOffice.country}
                  </div>
                  <p className="mt-2 font-display text-base text-brand-navy sm:mt-3 sm:text-lg">{saOffice.region}</p>
                  <p className="mt-1 text-xs text-brand-navy/65 break-words">
                    <a href={saOffice.phoneTel} className="transition hover:text-brand-navy">{saOffice.phone}</a>
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4 sm:mt-10">
                <Link
                  to="/about#lets-work-together"
                  className="inline-flex items-center gap-3 border border-brand-red bg-brand-red px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-red-deep hover:shadow-[0_14px_30px_-10px_rgba(217,4,41,0.55)] sm:px-8 sm:py-4"
                >
                  Contact Us
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
