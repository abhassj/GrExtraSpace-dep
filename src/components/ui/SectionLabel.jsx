import clsx from 'clsx'

export default function SectionLabel({ children, className, light = false }) {
  return (
    <span
      className={clsx(
        'flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em]',
        light ? 'text-white/70' : 'text-brand-navy/70',
        className,
      )}
    >
      <span
        className={clsx(
          'h-px w-10',
          light ? 'bg-brand-gold' : 'bg-brand-red',
        )}
      />
      {children}
    </span>
  )
}
