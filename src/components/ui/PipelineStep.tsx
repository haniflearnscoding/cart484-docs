interface PipelineStepProps {
  number: number
  title: string
  description: string
  children?: React.ReactNode
}

export function PipelineStep({ number, title, description, children }: PipelineStepProps) {
  return (
    <div className="flex gap-6">
      {/* Number badge + connector */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-sm font-mono text-accent flex-shrink-0"
          aria-hidden="true"
        >
          {String(number).padStart(2, '0')}
        </div>
        <div className="flex-1 w-px bg-border mt-3" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="pb-10 flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-text-primary mb-2 tracking-tight">{title}</h3>
        <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  )
}
