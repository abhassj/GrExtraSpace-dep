import { useState } from 'react'
import { motion } from 'framer-motion'
import { Square } from 'lucide-react'
import SectionLabel from '../components/ui/SectionLabel'
import { methods } from '../data/homeContent'

const MotionArticle = motion.article

export default function MethodsSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  // Framer Motion variants mapping for the fanned layout
  const fanVariants = {
    idle: (idx) => {
      // Much wider, distinctive spread
      const rotate = idx === 0 ? -16 : idx === 1 ? -5 : idx === 2 ? 5 : 16
      const x = idx === 0 ? -240 : idx === 1 ? -80 : idx === 2 ? 80 : 240
      const y = idx === 0 ? 50 : idx === 1 ? 15 : idx === 2 ? 15 : 50
      
      return {
        rotate,
        x,
        y,
        zIndex: idx * 10,
        scale: 1,
        // Slower, premium easing curve instead of bouncy spring
        transition: { type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.8 },
      }
    },
    hover: (idx) => ({
      rotate: 0,
      y: -30, // pop up higher
      scale: 1.08, // Unique larger scale for luxurious floating look
      zIndex: 50, 
      boxShadow: '0 40px 80px -15px rgba(0, 0, 0, 0.8)', // Darkened shadow to show against navy background
      transition: { type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.6 },
    }),
  }

  return (
    <section className="relative bg-brand-navy py-20 text-white lg:py-24 overflow-hidden">
      <div className="section-wrap relative z-10">
        <div className="section-inner text-center md:text-left flex flex-col items-center">
          <div className="max-w-3xl text-center">
            <SectionLabel light>Construction Methods</SectionLabel>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] text-white md:text-5xl lg:text-[3.2rem]">
              Technical expertise built around precision, speed,
              <br />
              and <span className="italic">durability.</span>
            </h2>
          </div>

          {/* Cards Spread Container - Squeezed height and margin for full screen fit */}
          <div className="relative mt-16 sm:mt-20 flex h-[460px] w-full max-w-[1100px] items-start justify-center">
            {methods.map((method, idx) => (
              <MotionArticle
                custom={idx}
                variants={fanVariants}
                initial="idle"
                animate={hoveredIdx === idx ? 'hover' : 'idle'}
                onHoverStart={() => setHoveredIdx(idx)}
                onHoverEnd={() => setHoveredIdx(null)}
                key={method.id}
                viewport={{ once: true, margin: '-50px' }}
                className={`group absolute w-[280px] md:w-[320px] xl:w-[340px] origin-bottom rounded-[20px] border border-brand-navy/10 bg-brand-paper p-8 text-left shadow-sm transition-all duration-700 cursor-pointer overflow-hidden ${
                  hoveredIdx === idx ? 'bg-white border-brand-white' : ''
                }`}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    {/* Accent Top Stroke */}
                    <div
                      className={`h-[3px] w-12 rounded-full transition-all duration-500 ${
                        hoveredIdx === idx ? 'bg-brand-red shadow-[0_0_15px_rgba(217,4,41,0.3)]' : 'bg-brand-navy/20'
                      }`}
                    />
                    
                    {/* Hollow Diamond Icon */}
                    <div className={`mt-[-10px] mr-[-10px] rotate-45 border-[1.5px] p-[6px] rounded-[4px] opacity-70 transition-colors duration-500 ${
                      hoveredIdx === idx ? 'border-brand-red opacity-100' : 'border-brand-navy/20'
                    }`}>
                      <div className="h-2 w-2" />
                    </div>
                  </div>

                  <h3 className="mt-10 font-display text-2xl md:text-[1.75rem] leading-[1.2] text-brand-navy">
                    {method.title}
                  </h3>

                  <div className="mt-12 h-[1px] w-full transition-colors duration-500 bg-brand-navy/10" />

                  <p className="mt-8 text-[15px] leading-relaxed text-brand-navy/70 tracking-wide font-medium min-h-[140px] transition-colors duration-500">
                    {method.detail}
                  </p>
                </div>
              </MotionArticle>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
