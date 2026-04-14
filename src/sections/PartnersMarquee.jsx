import SectionLabel from '../components/ui/SectionLabel'
import { partnersPrimary, partnersSecondary } from '../data/homeContent'

const primaryLoop = [...partnersPrimary, ...partnersPrimary]
const secondaryLoop = [...partnersSecondary, ...partnersSecondary]

export default function PartnersMarquee() {
  return (
    <section className="relative bg-brand-mist py-20 text-brand-navy">
      <div className="section-wrap">
        <div className="section-inner">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-brand-navy/15 pb-8">
            <SectionLabel>Trusted Partners</SectionLabel>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-navy/60">
              Brands We Work With
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-4 overflow-hidden">
        <div className="marquee-shell overflow-hidden">
          <div className="marquee-track flex items-center gap-16 px-4">
            {primaryLoop.map((partner, index) => (
              <span
                key={`primary-${partner}-${index}`}
                className="shrink-0 font-display text-2xl font-medium uppercase tracking-[0.1em] text-brand-navy/35 transition-colors hover:text-brand-red md:text-3xl"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        <div className="marquee-shell overflow-hidden">
          <div className="marquee-track-reverse flex items-center gap-16 px-4">
            {secondaryLoop.map((partner, index) => (
              <span
                key={`secondary-${partner}-${index}`}
                className="shrink-0 font-display text-2xl font-medium uppercase tracking-[0.1em] text-brand-navy/35 transition-colors hover:text-brand-red md:text-3xl"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
