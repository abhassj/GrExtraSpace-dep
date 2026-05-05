import { Helmet } from 'react-helmet-async'
import MapHeroSection from '../sections/about/MapHeroSection'
import OurStorySection from '../sections/about/OurStorySection'
import WorkTogetherSection from '../sections/about/WorkTogetherSection'

export default function AboutPage() {
  return (
    <div className="relative">
      <Helmet>
        <title>About Us | GR Extra Space — International Presence</title>
        <meta name="description" content="Discover the story behind GR Extra Space — a four-generation construction legacy operating across the United Kingdom and South Africa. Learn about our team, methods, and commitment to building excellence." />
        <link rel="canonical" href="https://grextraspace.com/about" />
        <meta property="og:title" content="About Us | GR Extra Space — International Presence" />
        <meta property="og:url" content="https://grextraspace.com/about" />
        <meta property="og:description" content="A four-generation construction legacy. Discover GR Extra Space's story, international presence, and commitment to excellence across the UK and South Africa." />
      </Helmet>

      <MapHeroSection />
      <OurStorySection />
      <WorkTogetherSection />
    </div>
  )
}
