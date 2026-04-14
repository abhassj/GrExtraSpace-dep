import { useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/homeContent'

const MotionDiv = motion.div

export default function ServicesOverview() {
  const [activeId, setActiveId] = useState(services[0].id)

  return (
    <section className="relative bg-brand-mist py-24 text-brand-navy lg:py-32">
      <div className="section-wrap">
        <div className="section-inner">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="flex flex-col justify-between">
              <div>
                <p className="eyebrow">Powering Your Project</p>

                <h2 className="mt-10 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] text-brand-navy md:text-5xl lg:text-[3.5rem]">
                  We offer the services
                  <br />
                  you need, plus a few
                  <br />
                  you didn't know
                  <br />
                  <span className="italic">you wanted.</span>
                </h2>

                <p className="mt-10 max-w-md text-base leading-relaxed text-brand-navy/70">
                  Whether you're looking for container-led developments, turnkey
                  project management, or full-lifecycle bespoke construction —
                  we've got you covered. From concept to completion, we deliver
                  with precision, speed, and long-term value across the UK and
                  South Africa.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-4">
                <Link to="/services" className="cta-outline-dark">
                  Our Services
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-brand-navy/80 transition hover:text-brand-red"
                >
                  <span className="flex h-10 w-10 items-center justify-center border border-brand-navy/30">
                    <Play size={12} className="translate-x-[1px]" />
                  </span>
                  The GR Way
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="flex h-[560px] w-full">
                {services.slice(0, 5).map((service) => {
                  const isActive = activeId === service.id
                  return (
                    <MotionDiv
                      key={service.id}
                      className={clsx(
                        'group relative cursor-pointer overflow-hidden border-r border-brand-navy/15 last:border-r-0',
                        isActive ? 'flex-[3]' : 'flex-[0.6]',
                      )}
                      style={{ transition: 'flex 0.8s cubic-bezier(0.22, 1, 0.36, 1)' }}
                      onMouseEnter={() => setActiveId(service.id)}
                    >
                      <div className="absolute inset-0 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className={clsx(
                            'h-full w-full object-cover transition-all duration-[1200ms]',
                            isActive
                              ? 'scale-100 opacity-100'
                              : 'scale-110 opacity-0',
                          )}
                        />
                        <div
                          className={clsx(
                            'absolute inset-0 transition-opacity duration-700',
                            isActive
                              ? 'bg-gradient-to-t from-brand-ink/85 via-brand-ink/25 to-transparent'
                              : 'bg-brand-mist',
                          )}
                        />
                      </div>

                      <div className="relative flex h-full items-end p-5">
                        <div
                          className={clsx(
                            'rotate-label font-display text-2xl font-medium tracking-tight transition-all duration-500',
                            isActive
                              ? 'text-white opacity-0'
                              : 'text-brand-navy opacity-100',
                          )}
                        >
                          {service.shortLabel}
                        </div>

                        <MotionDiv
                          className="absolute inset-x-0 bottom-0 p-6"
                          initial={false}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            y: isActive ? 0 : 20,
                          }}
                          transition={{
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-gold">
                            0{services.indexOf(service) + 1}
                          </p>
                          <h3 className="mt-2 font-display text-3xl font-medium text-white">
                            {service.title}
                          </h3>
                          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/80">
                            {service.benefit}
                          </p>
                        </MotionDiv>
                      </div>
                    </MotionDiv>
                  )
                })}
              </div>

              <div className="mt-6 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-navy/60">
                <span>Hover to explore</span>
              </div>
            </div>

            <div className="space-y-3 lg:hidden">
              {services.map((service, idx) => (
                <details
                  key={service.id}
                  className="group border border-brand-navy/15 bg-white"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-5 font-display text-xl text-brand-navy">
                    <span className="flex items-center gap-4">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-red">
                        0{idx + 1}
                      </span>
                      {service.title}
                    </span>
                    <ArrowRight
                      size={16}
                      className="transition group-open:rotate-90"
                    />
                  </summary>
                  <div className="border-t border-brand-navy/10">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-48 w-full object-cover"
                    />
                    <p className="px-5 py-5 text-sm leading-relaxed text-brand-navy/75">
                      {service.benefit}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
