import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PlaceholderPage({ title, description }) {
  return (
    <section className="relative flex min-h-[80vh] items-center bg-brand-mist py-40 text-brand-navy">
      <div className="section-wrap w-full">
        <div className="section-inner">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-brand-navy/70">
                <span className="h-px w-10 bg-brand-red" />
                Foundation Ready
              </p>

              <h1 className="mt-10 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] text-brand-navy md:text-5xl lg:text-[3.75rem]">
                {title}
              </h1>

              <p className="mt-8 max-w-lg text-base leading-relaxed text-brand-navy/70">
                {description}
              </p>

              <Link to="/" className="cta-outline-dark mt-10">
                Return Home
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-navy shadow-editorial hidden lg:block">
               <img 
                 src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80" 
                 alt={`${title} placeholder`} 
                 className="h-full w-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
