import Image from 'next/image'

export function Hero() {
  return (
    <section id="hero" aria-label="Hero" className="bg-[#0d0d0d]">
      <div className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 max-w-5xl mx-auto">
        {/* Course tag */}
        <p className="text-xs font-mono text-[#6a6a6a] mb-8 tracking-widest uppercase">
          CART 484 — Collaborative Interaction Design &nbsp;·&nbsp; Winter 2026
        </p>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-none text-[#f0f0f0] mb-6">
          Concordia Campus<br />
          <span className="text-[#e8d5b7]">Tactile Maps</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#a8a8a8] leading-relaxed max-w-2xl mb-10">
          A tactile wayfinding system for blind and low-vision students at Concordia
          University&apos;s SGW Campus — co-designed with the people who navigate it every day.
        </p>

        <hr className="border-[#2a2a2a] mb-8 max-w-2xl" />

        {/* Meta row */}
        <div className="flex flex-col sm:flex-row gap-8 mb-10">
          <div>
            <p className="text-xs font-mono text-[#6a6a6a] uppercase tracking-widest mb-2">Team</p>
            <ul className="space-y-1" aria-label="Project team">
              {['Catherine Zaloshnja', 'Suchetha Thyamagundlam', 'Hanif Hashim'].map((name) => (
                <li key={name} className="text-sm text-[#a8a8a8]">
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-mono text-[#6a6a6a] uppercase tracking-widest mb-2">
              Partner
            </p>
            <p className="text-sm text-[#a8a8a8]">ACSD — Concordia University</p>
          </div>
          <div>
            <p className="text-xs font-mono text-[#6a6a6a] uppercase tracking-widest mb-2">
              Source
            </p>
            <a
              href="https://github.com/haniflearnscoding/cart484-tactileMaps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View project source on GitHub (opens in new tab)"
              className="text-sm text-[#e8d5b7] hover:text-[#f0f0f0] transition-colors underline underline-offset-4"
            >
              github.com/haniflearnscoding
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="max-w-2xl rounded-sm overflow-hidden border border-[#2a2a2a]">
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
      </div>
    </section>
  )
}
