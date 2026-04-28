import { motion } from 'framer-motion'

const MotionDiv = motion.div

export default function OurStorySection() {
  return (
    <section className="relative overflow-hidden bg-brand-paper py-24 md:py-32" id="our-story">
      {/* Blueprint grid overlay */}
      <div className="blueprint-grid absolute inset-0 opacity-[0.06] mix-blend-overlay" />

      <div className="section-wrap relative z-10">
        <div className="section-inner max-w-[1200px]">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 border border-brand-navy/10 bg-white/50 px-4 py-2 backdrop-blur-md">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-navy">Our History</span>
            </div>
            
            <h2 className="mt-2 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] md:text-5xl lg:text-[4rem] text-brand-navy">
              A four-generation <span className="italic text-brand-navy/80 font-normal">legacy</span><br className="hidden md:block"/> of building excellence
            </h2>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-16 grid gap-10 lg:grid-cols-2 lg:gap-20"
          >
            <div className="space-y-6 text-base leading-relaxed text-brand-navy/75 md:text-lg">
              <p>
                <strong className="font-semibold text-brand-navy">GR Extra Space</strong> is a 20yr old construction company led by a husband-and-wife team Viky and Reshma Maharaj with 4th generation of industry expertise transferred, now operating between South Africa and London.
              </p>
              <p>
                Built on a powerful four-generation legacy, the company's foundations trace back to a family lineage of successful construction businesses, a heritage that now drives a new era of growth and innovation. Today, that legacy continues to evolve, with the next generation contributing specialist expertise in engineering and high-rise timber fabrication construction.
              </p>
            </div>
            
            <div className="space-y-6 text-base leading-relaxed text-brand-navy/75 md:text-lg">
              <p>
                Established in South Africa in 2006, GR Extra Space has expanded internationally, positioning itself within the London market while maintaining strong operational roots. This cross-border presence reflects both stability and strategic growth, key pillars for long-term investment potential.
              </p>
              <p>
                As a family led business, GR Extra Space combines heritage, technical excellence, and hands-on delivery to create high quality turnkey extra space bespoke developments. The company is focused on building not just structures, but lasting partnerships offering investors a trusted, legacy driven platform for growth.
              </p>
            </div>
          </MotionDiv>
          
          {/* Subtle separator at the bottom for aesthetics */}
          <MotionDiv
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="mt-20 h-px w-full bg-brand-navy/10 origin-left"
          />
        </div>
      </div>
    </section>
  )
}
