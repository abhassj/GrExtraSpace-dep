import { motion } from 'framer-motion'
import SectionLabel from '../components/ui/SectionLabel'
import { methods } from '../data/homeContent'

const MotionArticle = motion.article

export default function MethodsSection() {
  return (
    <section className="relative bg-brand-navy py-24 text-white lg:py-32">
      <div className="section-wrap relative">
        <div className="section-inner">
          <div className="max-w-3xl">
            <SectionLabel light>Construction Methods</SectionLabel>
            <h2 className="mt-8 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] text-white md:text-5xl lg:text-[3.5rem]">
              Technical expertise built around precision, speed,
              <br />
              and <span className="italic">durability.</span>
            </h2>
          </div>

          <div className="mt-16 sm:mt-24 grid gap-12 md:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
            {methods.map((method, idx) => (
              <MotionArticle
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                key={method.id}
                className="group relative flex flex-col items-start p-6 md:p-8 hover:bg-white/[0.03] rounded-2xl transition duration-500"
              >
                <div className="flex items-center gap-4">
                   <span className="font-display text-sm text-brand-gold">
                     0{idx + 1}
                   </span>
                   <h3 className="font-display text-2xl md:text-3xl text-white">
                     {method.title}
                   </h3>
                </div>
                <div className="mt-6">
                   <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold/70 mb-4">
                     {method.summary}
                   </p>
                   <p className="text-base leading-relaxed text-white/75 group-hover:text-white/90 transition-colors">
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
