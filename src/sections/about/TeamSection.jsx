import { motion } from 'framer-motion'
import { teamMembers } from '../../data/aboutContent'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function TeamSection() {
  return (
    <section className="bg-brand-paper py-24 md:py-32" id="meet-our-team">
      <div className="section-wrap">
        <div className="section-inner max-w-[1200px]">
          <div className="text-center">
            <p className="eyebrow">The People</p>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] text-brand-navy md:text-5xl lg:text-[3.5rem]">
              Meet Our Team
            </h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={item}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative mb-8 aspect-square w-64 overflow-hidden rounded-full shadow-lg transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <h3 className="font-display text-2xl font-medium text-brand-navy">
                  {member.name}
                </h3>
                
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">
                  {member.title}
                </p>
                
                <div className="mx-auto mt-4 h-px w-12 bg-brand-navy/15 transition-colors duration-300 group-hover:bg-brand-red" />
                
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-navy/70">
                  {member.descriptor}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
