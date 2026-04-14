import { useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import SectionLabel from '../components/ui/SectionLabel'
import { methods, processTimeline } from '../data/homeContent'

const MotionArticle = motion.article

export default function MethodsSection() {
  const [activeMethodId, setActiveMethodId] = useState(methods[0].id)

  const activeMethod =
    methods.find((method) => method.id === activeMethodId) ?? methods[0]

  return (
    <section className="relative bg-brand-ink py-24 text-white lg:py-32">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="section-wrap relative">
        <div className="section-inner">
          <div className="max-w-3xl">
            <SectionLabel light>Construction Methods</SectionLabel>
            <h2 className="mt-10 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] text-white md:text-5xl lg:text-[3.5rem]">
              Technical expertise built around precision, speed,
              <br />
              and <span className="italic">durability.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-2">
              {methods.map((method, idx) => (
                <button
                  key={method.id}
                  type="button"
                  className={clsx(
                    'group w-full border-l-2 px-6 py-6 text-left transition duration-500',
                    activeMethodId === method.id
                      ? 'border-brand-gold bg-white/5'
                      : 'border-white/15 hover:border-white/40',
                  )}
                  onClick={() => setActiveMethodId(method.id)}
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={clsx(
                        'font-display text-sm',
                        activeMethodId === method.id
                          ? 'text-brand-gold'
                          : 'text-white/40',
                      )}
                    >
                      0{idx + 1}
                    </span>
                    <div>
                      <p
                        className={clsx(
                          'font-display text-2xl transition-colors',
                          activeMethodId === method.id
                            ? 'text-white'
                            : 'text-white/70 group-hover:text-white',
                        )}
                      >
                        {method.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-white/55">
                        {method.summary}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <MotionArticle
              key={activeMethod.id}
              className="relative overflow-hidden border border-white/10 bg-white/5"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="h-48 bg-[radial-gradient(circle_at_18%_22%,rgba(255,183,3,0.28),rgba(255,183,3,0)_52%)]" />
              <div className="p-8 md:p-12">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
                  Method Detail
                </p>
                <h3 className="mt-4 font-display text-3xl font-medium text-white md:text-4xl">
                  {activeMethod.title}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-white/80">
                  {activeMethod.detail}
                </p>
              </div>
            </MotionArticle>
          </div>

          <div className="mt-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60">
              Delivery Process
            </p>

            <div className="mt-6 grid gap-px bg-white/12 md:grid-cols-5">
              {processTimeline.map((step, index) => (
                <div
                  key={step}
                  className="bg-brand-ink px-5 py-6"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
                    Step 0{index + 1}
                  </p>
                  <p className="mt-3 font-display text-lg text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
