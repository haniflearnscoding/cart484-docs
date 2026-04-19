interface SectionWrapperProps {
  id: string
  ariaLabel: string
  children: React.ReactNode
  className?: string
}

export function SectionWrapper({ id, ariaLabel, children, className = '' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`py-24 px-6 md:px-12 max-w-5xl mx-auto ${className}`}
    >
      {children}
    </section>
  )
}
