import { Helmet } from 'react-helmet-async'
import ContactCTA from '../sections/ContactCTA'
import HeroSection from '../sections/HeroSection'
import IntroSection from '../sections/IntroSection'
import MethodsSection from '../sections/MethodsSection'
import PartnersMarquee from '../sections/PartnersMarquee'
import ProjectsSlider from '../sections/ProjectsSlider'
import ServicesOverview from '../sections/ServicesOverview'
import TestimonialsSection from '../sections/TestimonialsSection'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>GR Extra Space | Building Beyond Boundaries</title>
        <meta name="description" content="GR Extra Space — fourth-generation builders delivering turnkey construction, container solutions, and bespoke architecture across the United Kingdom and South Africa. 20+ years of excellence." />
        <link rel="canonical" href="https://grextraspace.com/" />
        <meta property="og:title" content="GR Extra Space | Building Beyond Boundaries" />
        <meta property="og:url" content="https://grextraspace.com/" />
      </Helmet>

      <HeroSection />
      <IntroSection />
      <ServicesOverview />
      <MethodsSection />
      <ProjectsSlider />
      <TestimonialsSection />
      <ContactCTA />
      <PartnersMarquee />
    </>
  )
}