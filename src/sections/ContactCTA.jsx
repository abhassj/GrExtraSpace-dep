import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contactImage } from '../data/homeContent'

export default function ContactCTA() {
  return (
    <section className="relative bg-brand-mist py-24 text-brand-navy lg:py-32">
      <div className="section-wrap">
        <div className="section-inner">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-navy shadow-editorial">
                <img
                  src={contactImage}
                  alt="GR Extra Space construction team"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-6 -right-6 hidden flex-col gap-2 border border-brand-navy/15 bg-brand-mist px-6 py-5 shadow-editorial md:flex">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-red">
                  Established 2006
                </p>
                <p className="font-display text-2xl text-brand-navy">
                  4th Generation
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-brand-navy/60">
                  Builders
                </p>
              </div>
            </div>

            <div>
              <p className="eyebrow">Get In Touch</p>

              <h2 className="mt-10 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] text-brand-navy md:text-5xl lg:text-[3.5rem]">
                Construction is a team
                <br />
                sport, and we want
                <br />
                <span className="italic">you in the lineup.</span>
              </h2>

              <p className="mt-10 max-w-lg text-base leading-relaxed text-brand-navy/70">
                GR Extra Space needs people-readers and problem-solvers,
                creators and collaborators, thinkers, doers, and innovators.
                Above all, we need leaders. That's where you come in.
              </p>

              <div className="mt-12 grid max-w-md grid-cols-2 gap-6 border-y border-brand-navy/15 py-6">
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

                <button
                  type="button"
                  className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-brand-navy/80 transition hover:text-brand-red"
                >
                  <span className="flex h-10 w-10 items-center justify-center border border-brand-navy/30">
                    <Play size={12} className="translate-x-[1px]" />
                  </span>
                  Come to Belong
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
