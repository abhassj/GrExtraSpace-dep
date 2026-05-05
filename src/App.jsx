import { lazy, Suspense, useEffect, useCallback } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import HomePage from './pages/HomePage'

// Lazy-load pages
const AboutPage = lazy(() => import('./pages/AboutPage'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'))

/**
 * Dismiss the HTML preloader with a smooth exit animation.
 * Only runs on the very first mount (session-aware).
 */
function dismissPreloader() {
  const preloader = document.getElementById('preloader')
  if (!preloader) return

  // Mark that we've loaded once this session
  const hasLoaded = sessionStorage.getItem('gr-preloader-shown')
  
  if (hasLoaded) {
    // Instant removal for returning navigation within the same session
    preloader.remove()
    const preloaderStyles = document.getElementById('preloader-styles')
    if (preloaderStyles) preloaderStyles.remove()
    return
  }

  // First visit: let the animations play, then gracefully exit
  const minDisplayTime = 2400 // ms — enough for the progress bar and logo animation
  const startTime = performance.timing?.navigationStart || performance.now()
  const elapsed = Date.now() - startTime
  const remaining = Math.max(0, minDisplayTime - elapsed)

  setTimeout(() => {
    preloader.classList.add('preloader-exit')
    sessionStorage.setItem('gr-preloader-shown', '1')

    // Remove from DOM after the CSS transition completes
    setTimeout(() => {
      preloader.remove()
      const preloaderStyles = document.getElementById('preloader-styles')
      if (preloaderStyles) preloaderStyles.remove()
    }, 700)
  }, remaining)
}

function App() {
  const { pathname, hash } = useLocation()

  // Dismiss the preloader once the app is mounted and painted
  useEffect(() => {
    // Wait for next frame to ensure React has painted
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        dismissPreloader()
      })
    })
  }, [])

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return (
    <div className="relative min-h-screen overflow-x-clip bg-brand-mist">
      <Navbar />

      <main className="relative">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

export default App
