import MapHeroSection from '../sections/about/MapHeroSection'
import TeamSection from '../sections/about/TeamSection'
import WorkTogetherSection from '../sections/about/WorkTogetherSection'

export default function AboutPage() {
  return (
    <div className="relative">
      <MapHeroSection />
      <TeamSection />
      <WorkTogetherSection />
    </div>
  )
}
