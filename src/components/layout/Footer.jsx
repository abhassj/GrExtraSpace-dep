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

const socialLinks = []

const saOffice = contactOffices.find((o) => o.id === 'sa')
const ukOffice = contactOffices.find((o) => o.id === 'uk')

export default function Footer() {
  return (
    <footer className="relative bg-brand-navy text-white">
      <div className="section-wrap">
        <div className="section-inner">
          <div className="grid gap-10 border-b border-white/10 py-12 sm:gap-16 sm:py-20 md:grid-cols-2 xl:grid-cols-[1.5fr_0.8fr_1fr]">
            <div>
              <Link to="/" className="inline-flex items-center gap-3">
                <img
                  src="/logo%201.png"
                  alt="GR Extra Space"
                  className="h-12 w-auto object-contain brightness-0 invert sm:h-14"
                  loading="lazy"
                  width="120"
                  height="56"
                />
              </Link>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65 sm:mt-6">
                Fourth-generation builders delivering turnkey construction,
                container solutions, and bespoke spaces across South Africa and
                the United Kingdom.
              </p>

              {socialLinks.length > 0 ? (
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
              ) : null}
            </div>

            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50">
                Navigate
              </h3>
              <ul className="mt-4 space-y-2.5 font-display text-base text-white/85 sm:mt-6 sm:space-y-3 sm:text-lg">
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
                Contact
              </h3>

              <div className="mt-4 space-y-5 text-sm text-white/75 sm:mt-6 sm:space-y-6">
                <div>
                  <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                    <span className="text-base">{saOffice.flag}</span> {saOffice.country} | {saOffice.region}
                  </p>
                  <p className="mt-2 break-words">
                    <a href={saOffice.phoneTel} className="transition hover:text-white">{saOffice.phone}</a>
                  </p>
                  <p className="break-words">
                    <a href={`mailto:${saOffice.email}`} className="transition hover:text-white">{saOffice.email}</a>
                  </p>
                </div>

                <div>
                  <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                    <span className="text-base">{ukOffice.flag}</span> {ukOffice.country} | {ukOffice.region}
                  </p>
                  <p className="mt-2 break-words">
                    <a href={ukOffice.phoneTel} className="transition hover:text-white">{ukOffice.phone}</a>
                  </p>
                  <p className="break-words">
                    <a href={`mailto:${ukOffice.email}`} className="transition hover:text-white">{ukOffice.email}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 py-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45 sm:py-8 md:flex-row md:items-center md:justify-between md:gap-3">
            <p>© {new Date().getFullYear()} GR Extra Space. All rights reserved.</p>
            <p>Privacy Policy | 4th Generation Builders Since 2006</p>
          </div>

          <div className="border-t border-white/10 py-6 text-center sm:py-8">
            <p className="font-display text-[10px] font-medium uppercase tracking-[0.32em] text-white/40 sm:text-[11px] sm:tracking-[0.4em]">
              MADE WITH OBSESSION - <a href="https://www.astraweb.co.in" target="_blank" rel="noopener noreferrer" className="text-white/60 transition-colors hover:text-white">WWW.ASTRAWEB.CO.IN</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
