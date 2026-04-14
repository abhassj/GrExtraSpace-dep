import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/homeContent'

const MotionBackdrop = motion.button
const MotionDrawer = motion.aside

const LOGO_SRC = '/Gr%20logo.png'

export default function Navbar() {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const transparentMode = isHome && !isScrolled

  return (
    <>
      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          transparentMode
            ? 'bg-transparent'
            : 'border-b border-white/10 bg-brand-navy/92 backdrop-blur-xl',
        )}
      >
        <div className="section-wrap">
          <div className="section-inner flex h-20 items-center justify-between md:h-24">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={LOGO_SRC}
                alt="GR Extra Space"
                className="h-10 w-auto md:h-12"
              />
              <span className="hidden font-display text-lg font-semibold text-white md:inline">
                GR Extra Space
              </span>
            </Link>

            <nav className="hidden items-center gap-10 lg:flex">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    clsx(
                      'relative text-xs font-medium uppercase tracking-[0.22em] transition-colors duration-300',
                      isActive ? 'text-white' : 'text-white/70 hover:text-white',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span
                        className={clsx(
                          'absolute -bottom-2 left-1/2 h-[2px] w-6 -translate-x-1/2 bg-brand-gold transition-opacity duration-300',
                          isActive ? 'opacity-100' : 'opacity-0',
                        )}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-brand-red bg-brand-red px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-red-deep hover:shadow-[0_14px_30px_-12px_rgba(217,4,41,0.7)]"
              >
                Get a Quote
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center border border-white/30 text-white backdrop-blur lg:hidden"
              aria-label={
                isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              onClick={() => setIsMobileMenuOpen((current) => !current)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <>
            <MotionBackdrop
              type="button"
              className="fixed inset-0 z-40 bg-brand-ink/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu backdrop"
            />

            <MotionDrawer
              className="fixed inset-y-0 right-0 z-50 w-[86%] max-w-sm border-l border-white/10 bg-brand-navy px-8 pb-10 pt-28 text-white shadow-glass lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav className="space-y-1">
                {navLinks.map((item) => (
                  <Link
                    key={`mobile-${item.to}`}
                    to={item.to}
                    className={clsx(
                      'flex items-center justify-between border-b border-white/10 py-5 font-display text-2xl transition',
                      location.pathname === item.to
                        ? 'text-brand-gold'
                        : 'text-white hover:text-brand-gold',
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                    <span className="text-xs uppercase tracking-[0.22em] text-white/40">
                      0{navLinks.indexOf(item) + 1}
                    </span>
                  </Link>
                ))}
              </nav>

              <Link
                to="/contact"
                className="mt-10 inline-flex w-full items-center justify-center gap-2 border border-brand-red bg-brand-red px-5 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </MotionDrawer>
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}
