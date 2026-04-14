import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navLinks } from '../../data/homeContent'

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

export default function Footer() {
  return (
    <footer className="relative bg-brand-ink text-white">
      <div className="section-wrap">
        <div className="section-inner">
          <div className="grid gap-16 border-b border-white/10 py-20 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
            <div>
              <Link to="/" className="inline-flex items-center gap-3">
                <img
                  src="/Gr%20logo.png"
                  alt="GR Extra Space"
                  className="h-12 w-auto"
                />
                <span className="font-display text-xl font-medium text-white">
                  GR Extra Space
                </span>
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
                    className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white/75 transition hover:border-brand-gold hover:text-brand-gold"
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
                    <span className="text-base">🇿🇦</span> South Africa | KZN
                  </p>
                  <p className="mt-2">+27 00 000 0000</p>
                  <p>info@grextraspace.co.za</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                    <span className="text-base">🇬🇧</span> United Kingdom | Berkshire
                  </p>
                  <p className="mt-2">+44 00 0000 0000</p>
                  <p>uk@grextraspace.com</p>
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
