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