import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/homeContent'

const MotionFullscreen = motion.div

const LOGO_SRC = '/logo%201.png'

export default function Navbar() {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('up')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Track scroll direction and scroll position
  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const scrollY = window.scrollY
      const direction = scrollY > lastScrollY ? 'down' : 'up'

      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction)
      }

      lastScrollY = scrollY > 0 ? scrollY : 0
      setIsScrolled(scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollDirection])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Hide the navbar when scrolling down (unless the mobile menu is open)
  const isNavHidden = isScrolled && scrollDirection === 'down' && !isMobileMenuOpen

  return (
    <>
      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isNavHidden ? '-translate-y-full' : 'translate-y-0',
          isMobileMenuOpen
            ? 'bg-brand-navy'
            : isScrolled
              ? 'bg-brand-mist/95 backdrop-blur-md shadow-sm'
              : 'bg-transparent'
        )}
      >
        <div className="section-wrap">
          <div className="section-inner flex h-16 items-center justify-between sm:h-20 md:h-24">
            <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src={LOGO_SRC}
                alt="GR Extra Space"
                className={clsx(
                  'h-11 w-auto object-contain transition sm:h-14 md:h-[4.5rem] drop-shadow-sm',
                  isMobileMenuOpen ? 'brightness-0 invert' : ''
                )}
              />
            </Link>

            <div className="hidden items-center gap-10 lg:flex">
              <nav className="flex items-center gap-10">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      clsx(
                        'relative text-xs font-semibold uppercase tracking-[0.22em] transition-colors duration-300',
                        isActive ? 'text-brand-red' : 'text-brand-navy/70 hover:text-brand-navy',
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span
                          className={clsx(
                            'absolute -bottom-2 left-1/2 h-[2px] w-6 -translate-x-1/2 bg-brand-red transition-opacity duration-300',
                            isActive ? 'opacity-100' : 'opacity-0',
                          )}
                        />
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>

              <Link
                to="/about#lets-work-together"
                className="inline-flex items-center gap-2 border border-brand-red bg-brand-red px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-red-deep hover:shadow-[0_14px_30px_-12px_rgba(217,4,41,0.7)]"
              >
                Get a Quote
              </Link>
            </div>

            <button
              type="button"
              className={clsx(
                'relative z-[60] inline-flex items-center gap-2 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors lg:hidden',
                isMobileMenuOpen ? 'text-white' : 'text-brand-navy hover:text-brand-red'
              )}
              aria-label={
                isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((current) => !current)}
            >
              <span className="hidden xs:inline sm:inline">{isMobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
              {isMobileMenuOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <MotionFullscreen
            className="fixed inset-0 z-40 flex flex-col bg-brand-navy text-white lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.08]" />

            <div className="relative flex h-full flex-1 flex-col overflow-y-auto px-6 pb-10 pt-24 sm:px-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-brand-gold">
                Navigation
              </p>

              <nav className="mt-6 flex flex-col">
                {navLinks.map((item, idx) => (
                  <motion.div
                    key={`mobile-${item.to}`}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={item.to}
                      className={clsx(
                        'flex items-baseline justify-between border-b border-white/10 py-5 font-display text-4xl leading-none transition sm:text-5xl',
                        location.pathname === item.to
                          ? 'text-brand-gold'
                          : 'text-white hover:text-brand-gold',
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{item.label}</span>
                      <span className="font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
                        0{idx + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10"
              >
                <Link
                  to="/about#lets-work-together"
                  className="inline-flex w-full items-center justify-center gap-3 border border-brand-red bg-brand-red px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </motion.div>

              <div className="mt-auto pt-12">
                <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
                  <div>
                    <p className="text-brand-gold">United Kingdom</p>
                    <p className="mt-2 text-white/70 normal-case tracking-normal">Berkshire</p>
                  </div>
                  <div>
                    <p className="text-brand-gold">South Africa</p>
                    <p className="mt-2 text-white/70 normal-case tracking-normal">KwaZulu-Natal</p>
                  </div>
                </div>
              </div>
            </div>
          </MotionFullscreen>
        ) : null}
      </AnimatePresence>
    </>
  )
}
