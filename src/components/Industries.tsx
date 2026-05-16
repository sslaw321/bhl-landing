const industries = [
  {
    name: 'MEP Contractors',
    desc: 'M&E project supply, technical specs, fast delivery.',
    icon: '🔧',
  },
  {
    name: 'Property Developers',
    desc: 'Commercial & mixed-use HVAC cooling infrastructure.',
    icon: '🏗️',
  },
  {
    name: 'Power Plants',
    desc: 'High-capacity heat rejection for turbine condensers.',
    icon: '⚡',
  },
  {
    name: 'Production Factories',
    desc: 'Process cooling for machinery, compressors, and presses.',
    icon: '🏭',
  },
  {
    name: 'Food & Beverage Industry',
    desc: 'Hygienic closed-loop systems, food-safe compliance.',
    icon: '🍃',
  },
  {
    name: 'Plastic Industry',
    desc: 'Injection moulding and extrusion process cooling.',
    icon: '⚙️',
  },
  {
    name: 'Chiller Manufacturers',
    desc: 'OEM-ready cooling tower integration and bundling.',
    icon: '❄️',
  },
  {
    name: 'SME Owners',
    desc: 'Affordable, right-sized cooling for small operations.',
    icon: '🏢',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#e07b39] text-sm font-semibold tracking-widest uppercase">Industries We Serve</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d2a4a] mt-2">
            Trusted Across Multiple Sectors
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Our cooling towers are deployed in demanding environments across Malaysia and Southeast Asia.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="text-center p-6 rounded-lg bg-gray-50 border border-gray-100 hover:border-[#0d2a4a] hover:bg-[#f0f6ff] transition-all"
            >
              <div className="text-4xl mb-3">{ind.icon}</div>
              <h3 className="font-semibold text-[#0d2a4a] text-sm mb-1">{ind.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
