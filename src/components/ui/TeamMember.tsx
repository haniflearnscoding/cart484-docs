import type { TeamMember } from '@/lib/team'

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <figure className="flex flex-col gap-2 border-t-2 border-accent pt-5">
      <figcaption>
        <h3 className="text-base font-semibold text-text-primary leading-tight">{member.name}</h3>
        <p className="text-xs font-mono text-text-muted mt-0.5 mb-3">{member.role}</p>
        <p className="text-sm leading-relaxed text-text-secondary">{member.bio}</p>
      </figcaption>
    </figure>
  )
}
