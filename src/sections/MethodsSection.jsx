import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionLabel from '../components/ui/SectionLabel'
import { methods } from '../data/homeContent'

const MotionArticle = motion.article

export default function MethodsSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  // Framer Motion variants mapping for the fanned layout (desktop only)
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
    hover: () => ({
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
            <h2 className="mt-6 font-display text-3xl font-medium leading-[1.05] tracking-[-0.01em] text-white sm:text-4xl md:text-5xl lg:text-[3.2rem]">
              Technical expertise built around precision, speed,
              <br className="hidden md:block" />
              and <span className="italic">durability.</span>
            </h2>
          </div>

          {/* ── Desktop Fan Layout ── */}
          <div className="relative mt-16 hidden h-[460px] w-full max-w-[1100px] items-start justify-center lg:flex sm:mt-20">
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

          {/* ── Mobile Stacked Cards ── */}
          <div className="mt-12 grid w-full gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:hidden">
            {methods.map((method, idx) => (
              <motion.article
                key={`mobile-${method.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-left backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="h-[3px] w-10 rounded-full bg-brand-red" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl leading-[1.2] text-white sm:text-2xl">
                  {method.title}
                </h3>

                <div className="mt-4 h-px w-full bg-white/10" />

                <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-[15px]">
                  {method.detail}
                </p>
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
