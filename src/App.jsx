import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import HomePage from './pages/HomePage'
import PlaceholderPage from './pages/PlaceholderPage'

const routeContent = {
  services: {
    title: 'Our Services',
    description:
      'Service page foundation is ready. Next phase will implement full service storytelling, imagery, and detailed capability breakdowns.',
  },
  projects: {
    title: 'Projects',
    description:
      'Projects page foundation is ready. Next phase will add detailed case studies, filtering, and full gallery experiences.',
  },
  about: {
    title: 'About Us',
    description:
      'About page foundation is ready. Next phase will add brand history, team storytelling, and regional operating details.',
  },
  contact: {
    title: 'Contact Us',
    description:
      'Contact page foundation is ready. Next phase will integrate the production contact form and dual-region contact workflows.',
  },
}

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-brand-mist">
      <Navbar />

      <main className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/services"
            element={
              <PlaceholderPage
                title={routeContent.services.title}
                description={routeContent.services.description}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <PlaceholderPage
                title={routeContent.projects.title}
                description={routeContent.projects.description}
              />
            }
          />
          <Route
            path="/about"
            element={
              <PlaceholderPage
                title={routeContent.about.title}
                description={routeContent.about.description}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <PlaceholderPage
                title={routeContent.contact.title}
                description={routeContent.contact.description}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
