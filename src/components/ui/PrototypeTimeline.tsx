import { PROTOTYPES } from '@/lib/prototypes'
import { PrototypeCard } from './PrototypeCard'

export function PrototypeTimeline() {
  return (
    <ol
      aria-label="Prototype iteration log"
      className="grid grid-cols-1 lg:grid-cols-2 gap-6"
    >
      {PROTOTYPES.map((proto) => (
        <li key={proto.slug}>
          <PrototypeCard proto={proto} />
        </li>
      ))}
    </ol>
  )
}
