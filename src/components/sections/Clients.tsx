import { SectionWrapper } from '@/components/layout/SectionWrapper'

function ClientCard({
  id,
  name,
  role,
  children,
}: {
  id: string
  name: string
  role: string
  children: React.ReactNode
}) {
  return (
    <article
      aria-labelledby={`client-${id}-name`}
      className="bg-surface border border-border rounded-sm p-8 border-l-2 border-l-accent"
    >
      <h3
        id={`client-${id}-name`}
        className="text-xl font-semibold text-text-primary tracking-tight mb-1"
      >
        {name}
      </h3>
      <p className="text-xs font-mono text-text-muted mb-5">{role}</p>
      {children}
    </article>
  )
}

export function Clients() {
  return (
    <SectionWrapper id="clients" ariaLabel="Our Clients">
      <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
        Our Clients
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-12">
        Designed with, not for
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ClientCard
          id="acsd"
          name="ACSD"
          role="Accessibility Centre for Students with Disabilities — Concordia University"
        >
          <p className="text-sm leading-relaxed text-text-secondary mb-3">
            Concordia&apos;s ACSD connects students with disabilities to academic accommodations and
            accessibility services. For our project, ACSD served as the institutional client and
            primary quality arbiter — validating that our maps met standards students actually
            depend on.
          </p>
          <p className="text-sm leading-relaxed text-text-secondary">
            Their guidance shaped the scope: the Hall Building corridor to Guy-Concordia metro was the
            highest-priority route, used daily by students who rely on the underground connection to
            avoid outdoor construction and weather.
          </p>
        </ClientCard>

        <ClientCard id="daud" name="Daud" role="Primary user — low-vision student, SGW campus">
          <p className="text-sm leading-relaxed text-text-secondary mb-3">
            Daud is a low-vision student who navigates the Hall Building daily. He has residual
            vision that allows him to perceive light and movement but not read standard signage at a
            distance. His most consistent challenge: independently navigating from the Hall Building
            lobby to the underground tunnel and onwards to Guy-Concordia.
          </p>
          <p className="text-sm leading-relaxed text-text-secondary">
            Daud was our co-designer throughout. He evaluated every prototype iteration — not as a
            test subject, but as the person whose daily navigation was on the line. His feedback
            directly reshaped each version.
          </p>
        </ClientCard>
      </div>
    </SectionWrapper>
  )
}
