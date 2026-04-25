import Image from 'next/image'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { PipelineStep } from '@/components/ui/PipelineStep'

export function TheMap() {
  return (
    <SectionWrapper id="the-map" ariaLabel="The Map">
      <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
        The Outcome
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-4">
        What we made
      </h2>
      <p className="text-base leading-relaxed text-text-secondary max-w-2xl mb-16">
        Our final deliverable is a tactile map of the Hall Building to Guy-Concordia metro
        corridor — the highest-priority route for blind and low-vision students on campus.
        It comes in two forms: a 3D-printed physical map you can hold and read with your
        fingers, and a digital version that pairs with the ProBlind audio reader so students
        can hear room names and directions as they touch the surface.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* How it was made */}
        <div>
          <PipelineStep
            number={1}
            title="Starting from campus data"
            description="We used OpenStreetMap — the same open map data behind many navigation apps — to get accurate building outlines, footpaths, and entrance locations for the SGW campus. This meant the map is based on real geometry, not hand-drawn estimates."
          >
            <div className="rounded-sm overflow-hidden border border-border">
              <Image
                src="/cart484-docs/images/campus-map-dark.png"
                alt="Two dark-background map views of SGW campus, with cyan building outlines and key campus buildings highlighted in pink and yellow."
                width={2048}
                height={1325}
                className="w-full h-auto"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </PipelineStep>

          <PipelineStep
            number={2}
            title="Simplified for fingers, not eyes"
            description="A map designed for vision has too much detail for touch — small corners and fine lines blur together under a fingertip. We simplified the geometry so every shape is large enough to feel distinct, without losing the overall layout."
          />

          <PipelineStep
            number={3}
            title="Following tactile map standards"
            description="Tactile maps follow specific rules about line thickness, spacing, and symbols — just like road signs follow visual standards. We used the ProBlind Standard to make sure our map would be readable by anyone trained on tactile systems, not just familiar with our specific version."
          >
            <div className="rounded-sm overflow-hidden border border-border bg-white">
              <Image
                src="/cart484-docs/images/svg-probind-detailed.png"
                alt="Tactile map of the Hall Building floor plan: black outlines on white, with dotted paths and textured fills showing the auditorium, corridor, and metro entry."
                width={1623}
                height={1142}
                className="w-full h-auto"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </PipelineStep>

          <PipelineStep
            number={4}
            title="Adding audio descriptions"
            description="The finished map was imported into the ProBlind platform. When a student touches a spot on the embossed surface, they hear an audio description — room names, directions, or landmarks. The map works on its own, but the audio layer makes it navigable in real time."
          >
            <div className="rounded-sm overflow-hidden border border-border">
              <Image
                src="/cart484-docs/images/tactonom-screenshot.jpg"
                alt="Screenshot of the ProBlind web editor showing the Hall Building map with interactive touch regions and audio playback controls."
                width={1280}
                height={720}
                className="w-full h-auto"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </PipelineStep>
        </div>

        {/* Final map image */}
        <div className="lg:sticky lg:top-12">
          <figure>
            <div className="rounded-sm overflow-hidden border border-border bg-white">
              <Image
                src="/cart484-docs/images/svg-probind-white.png"
                alt="Final tactile map of the Passage to Hall route — a clean floor plan showing the Hall Building, underground corridor, and metro entry, with consistent line weights and labeled key points."
                width={2048}
                height={1448}
                className="w-full h-auto"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <figcaption className="mt-3 text-xs font-mono text-text-muted">
              Final map — Hall Building to Guy-Concordia metro, ready for 3D printing or
              embossing
            </figcaption>
          </figure>
        </div>
      </div>
    </SectionWrapper>
  )
}
