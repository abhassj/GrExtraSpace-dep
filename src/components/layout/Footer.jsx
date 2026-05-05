import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { navLinks } from '../../data/homeContent'
import { contactOffices } from '../../data/aboutContent'
import { UKFlag, SAFlag } from '../ui/Flags'

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

              <div className="mt-4 space-y-6 sm:mt-6 sm:space-y-8">
                <div>
                  <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                    <SAFlag className="h-2.5 w-auto rounded-[1px]" /> {saOffice.country} | {saOffice.region}
                  </p>
                  
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-[14px] w-[14px] fill-current text-white/75" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                      </svg>
                      <p className="text-sm font-medium tracking-wide text-white/75">
                        <a
                          href={saOffice.phoneTel.replace('tel:', 'https://wa.me/')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-white"
                        >
                          {saOffice.phone}
                        </a>
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Mail className="h-[14px] w-[14px] text-white/75" />
                      <p className="text-sm text-white/75 hover:text-white transition-colors break-words">
                        <a href={`mailto:${saOffice.email}`}>{saOffice.email}</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                    <UKFlag className="h-2.5 w-auto rounded-[1px]" /> {ukOffice.country} | {ukOffice.region}
                  </p>
                  
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-[14px] w-[14px] fill-current text-white/75" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                      </svg>
                      <p className="text-sm font-medium tracking-wide text-white/75">
                        <a
                          href={ukOffice.phoneTel.replace('tel:', 'https://wa.me/')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-white"
                        >
                          {ukOffice.phone}
                        </a>
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Mail className="h-[14px] w-[14px] text-white/75" />
                      <p className="text-sm text-white/75 hover:text-white transition-colors break-words">
                        <a href={`mailto:${ukOffice.email}`}>{ukOffice.email}</a>
                      </p>
                    </div>
                  </div>
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
