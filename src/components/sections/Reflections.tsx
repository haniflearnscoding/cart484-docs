import { SectionWrapper } from '@/components/layout/SectionWrapper'

const reflections = [
  {
    title: 'A map that looks right can still be unreadable.',
    body: 'Tactile maps follow specific standards for line thickness, spacing, and symbols — rules that are invisible on a screen. Our first two prototypes looked correct but violated those standards in ways we only caught when a specialist reviewed them. Getting it right meant learning the difference between "looks like a map" and "works as a tactile map."',
  },
  {
    title: 'Accessibility means designing for one person, then asking again.',
    body: "Daud's feedback shaped every version of the map. But Daud is one person — with his own visual profile, his own familiarity with the campus, his own way of navigating. What worked for him may not work without changes for someone else. Accessibility isn't a box to check; it's an ongoing conversation with the people who actually use what you make.",
  },
  {
    title: 'The real product was the process, not the object.',
    body: 'We started thinking our deliverable was a physical map. By the end we understood that the more lasting contribution was the open-source tool that generates the map — because physical objects get lost and go out of date when construction changes. A tool that anyone can run means the map can be updated whenever the campus changes.',
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
