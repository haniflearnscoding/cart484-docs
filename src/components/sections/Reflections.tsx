import { SectionWrapper } from '@/components/layout/SectionWrapper'

const reflections = [
  {
    title: 'ProBlind compliance is harder than it looks.',
    body: 'The v4 standard specifies not just stroke widths but a full tactile hierarchy — minimum clearances, relief heights, symbol vocabularies. Our first two prototypes violated the standard in ways that were invisible on screen. It was only by submitting to Vytautas for review that we understood how far "looks like a map" is from "works as a tactile map." This is not a critique of the standard — it is what makes the standard valuable.',
  },
  {
    title: 'Every BLV user\'s needs are different.',
    body: 'Daud\'s feedback shaped every iteration. But Daud is one person with one specific visual profile, one familiarity with the campus, one navigation strategy. The system we built works for him; it may not work without modification for a student with a different residual vision profile, a different cane technique, or a different starting point. Accessibility is not a checkbox — it is a dialogue.',
  },
  {
    title: 'The pipeline is the product.',
    body: 'We originally imagined the deliverable as a physical map. By Week 11 we understood that the SVG pipeline — the reproducible, open-source process for converting campus GeoJSON into ProBlind-compliant tactile assets — was the more durable contribution. Physical maps degrade, get lost, and go out of date when construction changes. A maintained pipeline, uploaded to ProBlind, lets any future student or advisor generate a current map on demand.',
  },
]

export function Reflections() {
  return (
    <SectionWrapper id="reflections" ariaLabel="Reflections">
      <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
        Reflections
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-12">
        Three lessons that outlasted the prototypes
      </h2>

      <div className="space-y-12 max-w-3xl">
        {reflections.map((r, i) => (
          <div key={i} className="grid grid-cols-[auto_1fr] gap-6 items-start">
            <span
              className="text-xs font-mono text-text-muted mt-1.5 w-6"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="text-lg font-semibold text-accent mb-3 leading-snug">
                {r.title}
              </h3>
              <p className="text-base leading-relaxed text-text-secondary">{r.body}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
