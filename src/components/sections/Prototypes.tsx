import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { PrototypeTimeline } from '@/components/ui/PrototypeTimeline'

export function Prototypes() {
  return (
    <SectionWrapper id="prototypes" ariaLabel="Prototypes">
      <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
        Prototypes
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-4">
        Six prototypes, tested with the person who needed them
      </h2>
      <p className="text-base leading-relaxed text-text-secondary max-w-2xl mb-12">
        We built and tested six versions of the map across thirteen weeks. Each one was evaluated
        by Daud — the student the map was designed for — and reviewed against tactile map
        standards. Every version changed something based on what we heard.
      </p>

      <PrototypeTimeline />
    </SectionWrapper>
  )
}
