import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps'

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.16,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const geoUrl = '/data/countries-50m.json'

// Standard coordinates: [Longitude, Latitude]
const mapLocations = [
  {
    country: 'United Kingdom',
    region: 'Berkshire',
    coordinates: [-1.2, 51.4], // Approx UK
    color: '#D90429', // brand-red
    id: 'GBR',
  },
  {
    country: 'South Africa',
    region: 'KZN',
    coordinates: [30.3, -29.6], // Approx KZN
    color: '#D90429', // brand-red
    id: 'ZAF',
  },
]

const MotionDiv = motion.div
const MotionHeading = motion.h1

export default function MapHeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-mist text-brand-navy pt-20 sm:pt-24 lg:pt-0 flex flex-col lg:block">
      {/* Background blueprint grid for texture matching inspiration */}
      <div className="blueprint-grid absolute inset-0 opacity-[0.06] pointer-events-none" />

      <div className="grid min-h-[88vh] grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] lg:min-h-screen">
        <div className="relative flex flex-col justify-center px-5 sm:px-6 md:px-12 lg:pl-20 xl:pl-32 pb-8 pt-10 sm:pb-12 sm:pt-16 lg:pb-0 lg:pt-0 z-10">
          <MotionDiv
            className="max-w-[550px]"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <MotionDiv variants={item} className="mb-5 inline-flex items-center gap-2 border border-brand-navy/10 bg-white/50 px-3 py-2 backdrop-blur-md sm:mb-6 sm:px-4">
              <div className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse"></div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-navy">International Presence</span>
            </MotionDiv>

            <MotionHeading
              variants={item}
              className="font-display font-bold text-[2.25rem] leading-[1.05] tracking-[-0.015em] text-brand-navy sm:text-[2.75rem] md:text-5xl lg:text-[4.5rem]"
            >
              Delivering <span className="italic text-brand-navy/80 font-normal">excellence</span><br className="hidden md:block"/> across borders
            </MotionHeading>

            <MotionDiv
              variants={item}
              className="mt-6 flex items-center border-l-2 border-brand-red pl-5 sm:mt-8 sm:pl-6"
            >
              <p className="text-[15px] leading-relaxed text-brand-navy/75 sm:text-base md:text-[1.15rem] lg:leading-[1.6]">
                We offer premium construction and bespoke architecture services across the United Kingdom and South Africa, and are expanding every day.
              </p>
            </MotionDiv>
          </MotionDiv>
        </div>

        {/* Right Panel: Map */}
        <div className="relative min-h-[44vh] w-full flex items-center justify-center p-4 sm:min-h-[50vh] lg:p-0 z-0">
          <MotionDiv 
            className="relative w-full max-w-[800px] h-full flex items-center justify-center lg:-ml-12 xl:-ml-24"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 360,
                center: [15, 10] // Focused on EMEA (Europe & Africa)
              }}
              width={800}
              height={800}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "60vh",
                filter: "drop-shadow(0px 16px 28px rgba(10, 25, 47, 0.2))"
              }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    // Check if country is active
                    const isUK = geo.properties.iso_a3 === 'GBR' || geo.properties.adm0_a3 === 'GBR' || geo.id === '826' || geo.properties.name === 'United Kingdom';
                    const isSA = geo.properties.iso_a3 === 'ZAF' || geo.properties.adm0_a3 === 'ZAF' || geo.id === '710' || geo.properties.name === 'South Africa';
                    
                    let fill = "#cbd2e0"; // Default inactive light grey
                    if (isUK || isSA) fill = "#D90429"; // brand-red

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={fill}
                        stroke="#ffffff"
                        strokeWidth={0.8}
                        style={{
                          default: { outline: "none", transition: "all 250ms" },
                          hover: { outline: "none", fill: (isUK || isSA) ? '#A00320' : '#b0b8cc', transition: "all 250ms" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* Map Pins */}
              {mapLocations.map((loc) => (
                <Marker key={loc.country} coordinates={loc.coordinates}>
                  <g className="group cursor-pointer">
                    {/* Teardrop Pin matching inspiration */}
                    <path
                      d="M12 0C7.58 0 4 3.58 4 8c0 5.25 8 13 8 13s8-7.75 8-13c0-4.42-3.58-8-8-8z"
                      fill="#ffffff"
                      stroke="rgba(0,0,0,0.1)"
                      strokeWidth="1"
                      transform="translate(-12, -24)"
                    />
                    {/* Inner colored circle (brand color) */}
                    <circle cx="0" cy="-16" r="3.5" fill={loc.color} />
                    
                    {/* Hover text label */}
                    <text
                      textAnchor="middle"
                      y="-32"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fill: "#0A192F",
                        fontSize: "12px",
                        fontWeight: "bold",
                        opacity: 0,
                        transition: "opacity 0.2s ease"
                      }}
                      className="group-hover:opacity-100 drop-shadow-md"
                    >
                      {loc.region}
                    </text>
                  </g>
                </Marker>
              ))}
            </ComposableMap>
          </MotionDiv>
        </div>
      </div>

      <a
        href="#lets-work-together"
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-navy/60 transition hover:text-brand-navy lg:inline-flex"
      >
        Scroll
        <ArrowDown size={12} className="animate-bounce" />
      </a>
    </section>
  )
}
