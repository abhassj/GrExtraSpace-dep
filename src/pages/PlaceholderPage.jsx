import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PlaceholderPage({ title, description }) {
  return (
    <section className="relative flex min-h-[80vh] items-center bg-brand-mist py-40 text-brand-navy">
      <div className="section-wrap w-full">
        <div className="section-inner">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-brand-navy/70">
                <span className="h-px w-10 bg-brand-red" />
                Foundation Ready
              </p>

              <h1 className="mt-10 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] text-brand-navy md:text-5xl lg:text-[3.75rem]">
                {title}
              </h1>
            </div>

            <div>
              <p className="max-w-lg text-base leading-relaxed text-brand-navy/70">
                {description}
              </p>

              <Link to="/" className="cta-outline-dark mt-10">
                Return Home
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
