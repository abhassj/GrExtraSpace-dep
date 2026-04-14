import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contactImage } from '../data/homeContent'

export default function ContactCTA() {
  return (
    <section className="relative bg-brand-mist py-16 text-brand-navy lg:py-24">
      <div className="section-wrap">
        <div className="section-inner">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
            <div className="relative">
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden bg-brand-navy shadow-editorial">
                <img
                  src={contactImage}
                  alt="GR Extra Space construction project"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/20 via-transparent to-transparent" />
              </div>
            </div>

            <div>
              <p className="eyebrow">Get In Touch</p>

              <h2 className="mt-8 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] text-brand-navy md:text-5xl lg:text-[3.5rem]">
                Ready For your
                <br />
                Next <span className="italic">Project?</span>
              </h2>

              <p className="mt-8 font-display text-2xl text-brand-navy/90">
                Let’s create something great together
              </p>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-navy/70">
                Contact us or leave a message and we will get back to you with a competitive quote as soon as possible.
              </p>

              <div className="mt-10 grid max-w-md grid-cols-2 gap-6 border-y border-brand-navy/15 py-6">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-navy/60">
                    <span className="text-base">🇬🇧</span> United Kingdom
                  </div>
                  <p className="mt-3 font-display text-lg text-brand-navy">
                    Berkshire
                  </p>
                  <p className="mt-1 text-xs text-brand-navy/65">
                    +44 00 0000 0000
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-navy/60">
                    <span className="text-base">🇿🇦</span> South Africa
                  </div>
                  <p className="mt-3 font-display text-lg text-brand-navy">KZN</p>
                  <p className="mt-1 text-xs text-brand-navy/65">
                    +27 00 000 0000
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 border border-brand-red bg-brand-red px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-red-deep hover:shadow-[0_14px_30px_-10px_rgba(217,4,41,0.55)]"
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
