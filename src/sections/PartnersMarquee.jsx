import SectionLabel from '../components/ui/SectionLabel'

import buildIt from '../assets/brand logos/BUILD IT SA LOGO.png'
import clover from '../assets/brand logos/Clover SA logo.png'
import simbithi from '../assets/brand logos/Simbithi eco estate logo.png'
import sun from '../assets/brand logos/Sun international logo.svg'
import transnet from '../assets/brand logos/Transnet logo.png'
import mondi from '../assets/brand logos/mondi group logo.webp'
import npc from '../assets/brand logos/natal portland cement logo.png'
import sibaya from '../assets/brand logos/Sibaya logo.png'
import bnq from '../assets/brand logos/B n Q.png'
import howdens from '../assets/brand logos/HOWDENS LOGO NEW.png'
import wickes from '../assets/brand logos/WICKES LOGO NEW.svg'

const brandLogos = [
  { name: 'Build It', src: buildIt },
  { name: 'Clover', src: clover },
  { name: 'Simbithi', src: simbithi },
  { name: 'Sun International', src: sun },
  { name: 'Transnet', src: transnet },
  { name: 'Mondi', src: mondi },
  { name: 'NPC', src: npc },
  { name: 'Sibaya', src: sibaya },
  { name: 'B&Q', src: bnq },
  { name: 'Howdens', src: howdens },
  { name: 'Wickes', src: wickes },
]

// Duplicate arrays to ensure seamless marquee scrolling
const primaryLoop = [...brandLogos, ...brandLogos, ...brandLogos]
const secondaryLoop = [...brandLogos.slice().reverse(), ...brandLogos.slice().reverse(), ...brandLogos.slice().reverse()]

export default function PartnersMarquee() {
  return (
    <section className="relative bg-brand-mist py-14 text-brand-navy sm:py-20">
      <div className="section-wrap">
        <div className="section-inner">
          <div className="flex flex-col gap-3 border-b border-brand-navy/15 pb-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-6 sm:pb-8">
            <SectionLabel>Trusted Partners</SectionLabel>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-navy/60">
              Brands We Work With
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-8 overflow-hidden sm:mt-16 sm:space-y-12">
        <div className="marquee-shell overflow-hidden">
          <div className="marquee-track flex items-center gap-10 px-4 sm:gap-16 md:gap-24 lg:gap-32">
            {primaryLoop.map((partner, index) => (
              <img
                key={`primary-${partner.name}-${index}`}
                src={partner.src}
                alt={partner.name}
                loading="lazy"
                className="h-8 w-auto shrink-0 object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 sm:h-12 md:h-16"
              />
            ))}
          </div>
        </div>

        <div className="marquee-shell overflow-hidden">
          <div className="marquee-track-reverse flex items-center gap-10 px-4 sm:gap-16 md:gap-24 lg:gap-32">
            {secondaryLoop.map((partner, index) => (
              <img
                key={`secondary-${partner.name}-${index}`}
                src={partner.src}
                alt={partner.name}
                loading="lazy"
                className="h-8 w-auto shrink-0 object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 sm:h-12 md:h-16"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

