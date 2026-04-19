import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { PrototypeTimeline } from '@/components/ui/PrototypeTimeline'

export function Prototypes() {
  return (
    <SectionWrapper id="prototypes" ariaLabel="Prototypes">
      <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
        Prototypes
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-4">
        Six iterations, one user
      </h2>
      <p className="text-base leading-relaxed text-text-secondary max-w-2xl mb-12">
        Each prototype was evaluated directly with Daud and reviewed by Vytautas, our ProBlind
        Standard advisor. Every iteration changed something real. Expand the feedback panels to
        see what moved us forward.
      </p>

      <PrototypeTimeline />
    </SectionWrapper>
  )
}
