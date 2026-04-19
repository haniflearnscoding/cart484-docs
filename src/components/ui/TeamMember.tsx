import type { TeamMember } from '@/lib/team'

function Monogram({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
  return (
    <div
      aria-hidden="true"
      className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center text-lg font-semibold text-text-secondary flex-shrink-0"
    >
      {initials}
    </div>
  )
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <figure className="flex flex-col gap-4">
      <Monogram name={member.name} />
      <figcaption>
        <h3 className="text-base font-semibold text-text-primary leading-tight">{member.name}</h3>
        <p className="text-xs font-mono text-accent mt-0.5 mb-2">{member.role}</p>
        <p className="text-sm leading-relaxed text-text-secondary">{member.bio}</p>
      </figcaption>
    </figure>
  )
}
