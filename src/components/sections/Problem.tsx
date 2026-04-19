import Image from 'next/image'
import { SectionWrapper } from '@/components/layout/SectionWrapper'

const problems = [
  {
    title: 'No tactile wayfinding system',
    body: 'No standardized tactile map exists for the SGW campus. Students relying on mobility canes or residual vision must navigate entirely from memory, verbal instruction, or unreliable digital audio systems — none of which scale to new routes, new buildings, or disrupted layouts.',
  },
  {
    title: 'The underground corridor is a maze',
    body: 'The RESO tunnel connecting the Hall Building to Guy-Concordia metro is one of the primary commute routes on campus. It is chronically crowded, frequently reconfigured by construction hoardings, and offers no tactile directional cues between the metro exit and building entrances.',
  },
  {
    title: 'Construction makes every map temporary',
    body: 'Above-ground construction at SGW creates temporary obstacles — fencing, relocated pathways, new surfaces — that invalidate any mental map a student builds over time. A system that cannot be updated is worse than no system at all.',
  },
]

export function Problem() {
  return (
    <SectionWrapper id="problem" ariaLabel="The Problem">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-6">
            Navigating SGW without a map
          </h2>
          <p className="text-base leading-relaxed text-text-secondary mb-10">
            Students with blindness or low vision navigating Concordia&apos;s Sir George Williams
            campus face a wayfinding environment not designed for them. Three specific problems
            emerged from our research.
          </p>

          <div className="space-y-8">
            {problems.map((p, i) => (
              <div key={p.title} className="flex gap-4">
                <span
                  className="text-xs font-mono text-text-muted mt-1 w-6 flex-shrink-0"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-text-primary mb-1">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-12">
          <figure>
            <div className="rounded-sm overflow-hidden border border-border bg-white">
              <Image
                src="/cart484-docs/images/floorplan-reference.png"
                alt="Scanned architectural floor plan of the Hall Building ground floor, showing the lobby, auditorium, and the corridor connecting to the metro below the building."
                width={662}
                height={654}
                className="w-full h-auto"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <figcaption className="mt-2 text-xs font-mono text-text-muted">
              Hall Building floor plan — the primary navigation target for our user research
            </figcaption>
          </figure>
        </div>
      </div>
    </SectionWrapper>
  )
}
