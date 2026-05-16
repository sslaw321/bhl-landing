const testimonials = [
  {
    name: 'Ahmad Firdaus',
    role: 'Senior M&E Engineer',
    company: 'Konsortium MEP Sdn Bhd',
    quote:
      'BHL supplied our cooling towers for a 500-unit mixed development in Shah Alam. Delivery was on schedule, the units performed to spec from day one, and their team was hands-on during commissioning. Highly recommended for M&E contractors.',
  },
  {
    name: 'Lim Chee Keong',
    role: 'Maintenance Manager',
    company: 'Bestfoods Manufacturing Sdn Bhd',
    quote:
      'We switched to BHL closed-loop fluid coolers for our processing line three years ago. Zero contamination issues, running cost is lower, and their service team responds within 24 hours whenever we call. Worth every ringgit.',
  },
  {
    name: 'Rajendran Pillai',
    role: 'Project Director',
    company: 'Pacific Power Development Bhd',
    quote:
      'Our power plant needed replacement towers with minimal downtime. BHL engineered a custom crossflow solution, delivered in 8 weeks, and handled the installation supervision. Professional outfit with deep technical knowledge.',
  },
  {
    name: 'Tan Siew Ling',
    role: 'Operations Director',
    company: 'Plastikraft Industries Sdn Bhd',
    quote:
      'Injection moulding process heat is brutal on cooling equipment. BHL units have been running 24/7 for two years with no major issues. The FRP body holds up better than our old steel towers ever did.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#e07b39] text-sm font-semibold tracking-widest uppercase">Client Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d2a4a] mt-2">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#e07b39]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-[#0d2a4a] text-sm">{t.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
