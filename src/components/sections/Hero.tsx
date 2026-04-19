import Image from 'next/image'
import { SectionWrapper } from '@/components/layout/SectionWrapper'

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 max-w-5xl mx-auto"
    >
      {/* Course tag */}
      <p className="text-xs font-mono text-text-muted mb-8 tracking-widest uppercase">
        CART 484 — Collaborative Interaction Design &nbsp;·&nbsp; Winter 2026
      </p>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-none text-text-primary mb-6">
        Concordia Campus<br />
        <span className="text-accent">Tactile Maps</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mb-10">
        A tactile wayfinding system for blind and low-vision students at Concordia
        University&apos;s SGW Campus — co-designed with the people who navigate it every day.
      </p>

      <hr className="border-border mb-8 max-w-2xl" />

      {/* Meta row */}
      <div className="flex flex-col sm:flex-row gap-8 mb-10">
        <div>
          <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-2">Team</p>
          <ul className="space-y-1" aria-label="Project team">
            {['Catherine Zaloshnja', 'Suchetha Thyamagundlam', 'Hanif Hashim'].map((name) => (
              <li key={name} className="text-sm text-text-secondary">
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
            Partner
          </p>
          <p className="text-sm text-text-secondary">ACSD — Concordia University</p>
        </div>
        <div>
          <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
            Source
          </p>
          <a
            href="https://github.com/haniflearnscoding/cart484-tactileMaps"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View project source on GitHub (opens in new tab)"
            className="text-sm text-accent hover:text-text-primary transition-colors underline underline-offset-4"
          >
            github.com/haniflearnscoding
          </a>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-2xl rounded-sm overflow-hidden border border-border">
        <Image
          src="/cart484-docs/images/campus-map-dark.png"
          alt="Two dark-background maps of Concordia's SGW campus showing building footprints in cyan with key buildings highlighted in pink, yellow, and blue — the pipeline's SVG output."
          width={2048}
          height={1325}
          className="w-full h-auto"
          priority
          sizes="(min-width: 1024px) 672px, 100vw"
        />
      </div>
    </section>
  )
}
