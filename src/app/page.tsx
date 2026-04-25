import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Clients } from '@/components/sections/Clients'
import { TheMap } from '@/components/sections/TheMap'
import { Prototypes } from '@/components/sections/Prototypes'
import { Team } from '@/components/sections/Team'

export default function Page() {
  return (
    <main id="main-content" tabIndex={-1} className="outline-none">
      <Hero />
      <Problem />
      <Clients />
      <TheMap />
      <Prototypes />
      <Team />
    </main>
  )
}
