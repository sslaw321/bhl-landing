import Link from 'next/link';
import HeroSlider from './HeroSlider';

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

          {/* Right: image slider */}
          <div className="hidden lg:block relative overflow-hidden">
            <HeroSlider />
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
