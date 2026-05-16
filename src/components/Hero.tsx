import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-white">
      {/* Split hero — text left, visual right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[520px] items-stretch">
          {/* Left: text */}
          <div className="flex flex-col justify-center py-20 pr-0 lg:pr-16">
            <span className="inline-block text-[#2a7a4b] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Cooling Tower Manufacturer — Malaysia
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0d2a4a] leading-tight mb-6">
              Industrial Cooling Solutions{' '}
              <span className="text-[#2a7a4b]">Built for Performance</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
              BHL Asia Acme Sdn Bhd designs, manufactures, and supplies high-efficiency cooling towers for power plants,
              industrial facilities, and commercial projects across Southeast Asia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#contact"
                className="bg-[#2a7a4b] hover:bg-[#226040] text-white font-semibold px-7 py-3.5 rounded text-center transition-colors text-sm"
              >
                Speak to an Expert
              </Link>
              <Link
                href="#products"
                className="border border-[#0d2a4a] text-[#0d2a4a] hover:bg-[#0d2a4a] hover:text-white font-semibold px-7 py-3.5 rounded text-center transition-colors text-sm"
              >
                View Services
              </Link>
            </div>

            {/* Quick links — mirrors the reference's bottom nav links */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-gray-100 pt-6">
              {[
                { label: 'What is a Cooling Tower?', href: '#products' },
                { label: 'Request a Quotation', href: '#contact' },
                { label: 'Maintenance & Retrofit', href: '#products' },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-xs text-[#2a7a4b] font-medium hover:underline"
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>

          {/* Right: visual panel */}
          <div className="hidden lg:flex bg-[#daeef8] items-center justify-center relative overflow-hidden">
            {/* Geometric cooling tower schematic */}
            <div className="relative flex flex-col items-center justify-center w-full h-full py-12 px-8">
              <svg
                viewBox="0 0 320 360"
                className="w-64 h-64 text-[#0d2a4a] opacity-80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                {/* Tower body */}
                <path d="M60 300 L40 80 L160 60 L280 80 L260 300 Z" strokeLinejoin="round" />
                {/* Fill media grid */}
                <line x1="60" y1="200" x2="260" y2="200" />
                <line x1="55" y1="220" x2="265" y2="220" />
                <line x1="50" y1="240" x2="270" y2="240" />
                <line x1="100" y1="200" x2="100" y2="260" />
                <line x1="140" y1="200" x2="140" y2="260" />
                <line x1="180" y1="200" x2="180" y2="260" />
                <line x1="220" y1="200" x2="220" y2="260" />
                {/* Fan housing top */}
                <ellipse cx="160" cy="80" rx="60" ry="18" />
                {/* Fan blades */}
                <line x1="160" y1="62" x2="160" y2="98" />
                <line x1="142" y1="68" x2="178" y2="92" />
                <line x1="142" y1="92" x2="178" y2="68" />
                {/* Water spray lines */}
                <path d="M100 160 Q120 175 100 190" strokeDasharray="4 3" />
                <path d="M130 155 Q150 170 130 185" strokeDasharray="4 3" />
                <path d="M160 152 Q180 167 160 182" strokeDasharray="4 3" />
                <path d="M190 155 Q210 170 190 185" strokeDasharray="4 3" />
                <path d="M220 160 Q240 175 220 190" strokeDasharray="4 3" />
                {/* Air intake louvres */}
                <line x1="40" y1="260" x2="60" y2="260" />
                <line x1="38" y1="275" x2="60" y2="270" />
                <line x1="260" y1="260" x2="280" y2="260" />
                <line x1="260" y1="270" x2="282" y2="275" />
                {/* Basin */}
                <rect x="45" y="295" width="230" height="20" rx="2" />
                {/* Water outlet pipe */}
                <rect x="140" y="315" width="40" height="30" />
                <line x1="140" y1="345" x2="100" y2="345" />
                <line x1="100" y1="330" x2="100" y2="360" />
              </svg>

              <p className="text-[#0d2a4a] font-semibold text-sm mt-4 tracking-wide opacity-70">
                Induced Draft Cooling Tower
              </p>

              {/* Decorative grid overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(#0d2a4a 1px, transparent 1px), linear-gradient(90deg, #0d2a4a 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-[#0d2a4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: '20+', label: 'Years of Experience' },
            { value: '500+', label: 'Projects Completed' },
            { value: '8', label: 'Industries Served' },
            { value: 'ISO', label: 'Certified Quality' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-[#2a7a4b]">{stat.value}</p>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
