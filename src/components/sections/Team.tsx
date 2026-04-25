import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { TeamMemberCard } from '@/components/ui/TeamMember'
import { TEAM } from '@/lib/team'

export function Team() {
  return (
    <SectionWrapper id="team" ariaLabel="Team">
      <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">Team</p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-12">
        Who made this
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
        {TEAM.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>

      {/* Footer credits */}
      <div className="border-t border-border pt-10">
        <p className="text-xs font-mono text-text-muted">
          CART 484 — Collaborative Interaction Design &nbsp;·&nbsp; Winter 2026
          &nbsp;·&nbsp; Concordia University, Montréal
        </p>
        <p className="text-xs font-mono text-text-muted mt-1">
          Made in partnership with ACSD.{' '}
          <a
            href="https://github.com/haniflearnscoding/cart484-tactileMaps"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on GitHub (opens in new tab)"
            className="text-accent hover:text-text-primary transition-colors underline underline-offset-4"
          >
            Source on GitHub
          </a>
        </p>
      </div>
    </SectionWrapper>
  )
}
