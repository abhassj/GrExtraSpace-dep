import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navLinks } from '../../data/homeContent'
import { contactOffices } from '../../data/aboutContent'

const serviceLinks = [
  'Container Builds',
  'Timber & Steel',
  'Park Homes',
  'Play Areas',
  'Turnkey Projects',
]

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
]

const saOffice = contactOffices.find((o) => o.id === 'sa')
const ukOffice = contactOffices.find((o) => o.id === 'uk')

export default function Footer() {
  return (
    <footer className="relative bg-brand-navy text-white">
      <div className="section-wrap">
        <div className="section-inner">
          <div className="grid gap-12 border-b border-white/10 py-16 sm:gap-16 sm:py-20 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
            <div>
              <Link to="/" className="inline-flex items-center gap-3">
                <img
                  src="/Gr%20logo%20(2).png"
                  alt="GR Extra Space"
                  className="h-14 w-auto object-contain brightness-0 invert"
                  loading="lazy"
                  width="120"
                  height="56"
                />
              </Link>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/65">
                Fourth-generation builders delivering turnkey construction,
                container solutions, and bespoke spaces across South Africa and
                the United Kingdom.
              </p>

              <div className="mt-8 flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-white/75 transition hover:border-brand-gold hover:text-brand-gold"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50">
                Navigate
              </h3>
              <ul className="mt-6 space-y-3 font-display text-lg text-white/85">
                {navLinks.map((item) => (
                  <li key={`footer-nav-${item.to}`}>
                    <Link
                      className="transition hover:text-brand-gold"
                      to={item.to}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50">
                Services
              </h3>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {serviceLinks.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50">
                Contact
              </h3>

              <div className="mt-6 space-y-6 text-sm text-white/75">
                <div>
                  <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                    <span className="text-base">{saOffice.flag}</span> {saOffice.country} | {saOffice.region}
                  </p>
                  <p className="mt-2">
                    <a href={saOffice.phoneTel} className="transition hover:text-white">{saOffice.phone}</a>
                  </p>
                  <p>
                    <a href={`mailto:${saOffice.email}`} className="transition hover:text-white">{saOffice.email}</a>
                  </p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                    <span className="text-base">{ukOffice.flag}</span> {ukOffice.country} | {ukOffice.region}
                  </p>
                  <p className="mt-2">
                    <a href={ukOffice.phoneTel} className="transition hover:text-white">{ukOffice.phone}</a>
                  </p>
                  <p>
                    <a href={`mailto:${ukOffice.email}`} className="transition hover:text-white">{ukOffice.email}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 py-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} GR Extra Space. All rights reserved.</p>
            <p>Privacy Policy | 4th Generation Builders Since 2006</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
