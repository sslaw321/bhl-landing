const services = [
  {
    title: 'Cooling Tower Retrofit',
    desc: 'Upgrade your existing cooling tower without full replacement. We assess, redesign, and replace ageing components — fill media, fan systems, drift eliminators, and structure — to restore peak thermal performance and extend equipment life.',
    specs: ['Fill Media Replacement', 'Fan & Motor Upgrade', 'Structural Refurbishment', 'Performance Testing'],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Custom Made Cooling Tower',
    desc: 'Not every project fits a catalogue. We engineer cooling towers to your exact thermal load, site dimensions, noise limits, and water quality requirements — from single-cell FRP units to large multi-cell structures.',
    specs: ['Thermal Sizing to Spec', 'Custom Footprint & Height', 'Material Selection', 'Full Engineering Documentation'],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'New Cooling Tower',
    desc: 'Supply and installation of new FRP, crossflow, or counterflow cooling towers for commercial, industrial, and power plant applications. Factory-direct pricing with full technical support from selection through commissioning.',
    specs: ['FRP / Crossflow / Counterflow', '10 RT – 3,000 RT Capacity', 'Supply & Installation', 'Commissioning Support'],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-[#2a7a4b] text-sm font-semibold tracking-widest uppercase">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d2a4a] mt-2">
            What We Do
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl">
            From new installations to full retrofits, BHL Asia Acme delivers cooling tower solutions tailored to your
            project scope and budget.
          </p>
        </div>

        {/* Horizontal cards — reference style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex gap-6 border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-[#0d2a4a] transition-all bg-white"
            >
              {/* Icon block */}
              <div className="flex-shrink-0 w-20 h-20 bg-[#daeef8] rounded-lg flex items-center justify-center text-[#0d2a4a]">
                {s.icon}
              </div>

              {/* Content */}
              <div className="min-w-0">
                <h3 className="text-base font-bold text-[#0d2a4a] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{s.desc}</p>
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                  {s.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2a7a4b] flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* "Speak to an Expert" card — mirrors reference CTA card */}
          <div className="flex gap-6 border border-[#0d2a4a] rounded-lg p-6 bg-[#0d2a4a] items-center">
            <div className="flex-shrink-0 w-20 h-20 bg-[#1a3d5c] rounded-lg flex items-center justify-center text-white">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Not sure what you need?</h3>
              <p className="text-gray-300 text-sm mb-4">Speak to our engineers — we&apos;ll help you select the right solution for your application.</p>
              <a
                href="#contact"
                className="inline-block bg-[#2a7a4b] hover:bg-[#226040] text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
              >
                Speak to an Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
