import MapHeroSection from '../sections/about/MapHeroSection'
import OurStorySection from '../sections/about/OurStorySection'
import WorkTogetherSection from '../sections/about/WorkTogetherSection'

export default function AboutPage() {
  return (
    <div className="relative">
      <MapHeroSection />
      <OurStorySection />
      <WorkTogetherSection />
    </div>
  )
}
