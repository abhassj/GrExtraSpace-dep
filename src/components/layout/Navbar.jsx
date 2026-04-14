import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/homeContent'

const MotionBackdrop = motion.button
const MotionDrawer = motion.aside

const LOGO_SRC = '/Gr%20logo%20(2).png'

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
          isScrolled ? 'bg-brand-mist shadow-sm' : 'bg-brand-mist'
        )}
      >
        <div className="section-wrap">
          <div className="section-inner flex h-20 items-center justify-between md:h-24">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={LOGO_SRC}
                alt="GR Extra Space"
                className="h-14 w-auto object-contain md:h-[4.5rem] drop-shadow-sm"
              />
            </Link>

            <nav className="hidden items-center gap-10 lg:flex">
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
              className="inline-flex h-11 w-11 items-center justify-center border border-brand-navy/30 text-brand-navy transition-colors hover:bg-brand-navy/5 lg:hidden"
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
