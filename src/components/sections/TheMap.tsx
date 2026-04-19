import Image from 'next/image'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { PipelineStep } from '@/components/ui/PipelineStep'

export function TheMap() {
  return (
    <SectionWrapper id="the-map" ariaLabel="The Map">
      <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
        The Map
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-4">
        From OpenStreetMap to fingertips
      </h2>
      <p className="text-base leading-relaxed text-text-secondary max-w-2xl mb-16">
        We built a five-stage pipeline that converts raw OpenStreetMap data into
        ProBlind Standard v4 compliant SVG exports — ready to print, emboss, or integrate into a
        Tactonom audio reader. Every stage runs client-side in the browser; no server required.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Pipeline steps */}
        <div>
          <PipelineStep
            number={1}
            title="Data Sourcing"
            description="OpenStreetMap GeoJSON export of the SGW campus area. The dataset contains 3,675 features including buildings, footways, streets, and entrance centroids — every pedestrian-navigable element on and around campus."
          >
            <div className="rounded-sm overflow-hidden border border-border">
              <Image
                src="/cart484-docs/images/campus-map-dark.png"
                alt="Two dark-background map views of SGW campus, with cyan building outlines and key campus buildings highlighted in pink and yellow — the pipeline's SVG output at the campus scale."
                width={2048}
                height={1325}
                className="w-full h-auto"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </PipelineStep>

          <PipelineStep
            number={2}
            title="Geometric Simplification"
            description="A Douglas-Peucker algorithm reduces vertex count by ~41% at 2m tolerance, removing sub-fingertip architectural detail while preserving building shapes and pedestrian path topology. The result is a map a finger can read, not just an eye."
          />

          <PipelineStep
            number={3}
            title="Tactile Styling — ProBlind Standard v4"
            description="Each feature class receives specific stroke weights and symbols from the ProBlind v4 specification: buildings at 0.8mm solid, paths at 0.8mm dashed, entrances as 1mm radius circles. A minimum 3mm clearance between parallel lines prevents tactile masking."
          >
            <div className="rounded-sm overflow-hidden border border-border bg-white">
              <Image
                src="/cart484-docs/images/svg-probind-detailed.png"
                alt="ProBlind Standard v4 SVG output: a white-background floor plan of the Hall Building and corridor with black outlines, dotted paths, and cross-hatch texture fills as specified by the tactile standard."
                width={1623}
                height={1142}
                className="w-full h-auto"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </PipelineStep>

          <PipelineStep
            number={4}
            title="Tactonom + Audio Integration"
            description="The exported SVG is imported into the Tactonom editor, which overlays an interactive touchscreen layer. Students touch the embossed surface; audio descriptions of room names and turn-by-turn wayfinding instructions are triggered by contact points. The Braille title and QR code link to the audio guide."
          >
            <div className="rounded-sm overflow-hidden border border-border">
              <Image
                src="/cart484-docs/images/tactonom-screenshot.jpg"
                alt="Screenshot of the Tactonom web editor showing the 'Passage to Hall Map' SVG imported into the platform, with interactive regions and audio playback controls visible."
                width={1280}
                height={720}
                className="w-full h-auto"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </PipelineStep>
        </div>

        {/* Final SVG display */}
        <div className="lg:sticky lg:top-12">
          <figure>
            <div className="rounded-sm overflow-hidden border border-border bg-white">
              <Image
                src="/cart484-docs/images/svg-probind-white.png"
                alt="Final ProBlind Standard v4 compliant SVG of the Passage to Hall Map — a white-background floor plan showing the Hall Building, corridor, and metro entry with all features correctly weighted and labeled."
                width={2048}
                height={1448}
                className="w-full h-auto"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <figcaption className="mt-3 text-xs font-mono text-text-muted">
              Final SVG output — ProBlind Standard v4 compliant, A4 landscape, ready for
              embossing or Tactonom import
            </figcaption>
          </figure>
        </div>
      </div>
    </SectionWrapper>
  )
}
