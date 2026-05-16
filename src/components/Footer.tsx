import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#060f1a] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/bhl-logo.png" alt="BHL Asia Acme" width={48} height={48} className="object-contain" />
              <div>
                <p className="text-white font-semibold text-sm">BHL Asia Acme</p>
                <p className="text-[11px] text-gray-500">Sdn Bhd</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Cooling tower manufacturer and supplier serving industrial and commercial sectors across Malaysia and
              Southeast Asia.
            </p>
            <p className="text-xs text-gray-600 mt-4">SSM Reg. No. XXXXXXXX-X</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">Products</h4>
            <ul className="space-y-2 text-sm">
              {['FRP Cooling Tower', 'Crossflow Tower', 'Counterflow Tower', 'Closed Circuit Cooler', 'Spare Parts', 'Maintenance Services'].map((item) => (
                <li key={item}>
                  <Link href="#products" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">Industries</h4>
            <ul className="space-y-2 text-sm">
              {['MEP Contractors', 'Property Developers', 'Power Plants', 'Production Factories', 'Food & Beverage', 'Plastic Industry', 'Chiller Manufacturers', 'SME Owners'].map((item) => (
                <li key={item}>
                  <Link href="#industries" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-0.5">Address</p>
                <p>No. XX, Jalan Perindustrian XX,<br />Shah Alam, 40150 Selangor</p>
              </li>
              <li>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-0.5">Phone</p>
                <a href="tel:+60123027321" className="hover:text-white transition-colors">+6012-302 7321</a>
              </li>
              <li>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-0.5">Email</p>
                <a href="mailto:sales@bhl-asia.com" className="hover:text-white transition-colors block">sales@bhl-asia.com</a>
                <a href="mailto:sslaw@bhl-asia.com" className="hover:text-white transition-colors block mt-0.5">sslaw@bhl-asia.com</a>
              </li>
              <li>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-0.5">Hours</p>
                <p>Mon–Fri 8:30am–5:30pm<br />Sat 8:30am–1:00pm</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a2a3a] mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} BHL Asia Acme Sdn Bhd. All rights reserved.</p>
          <p className="text-gray-600">Cooling Tower Manufacturer · Malaysia</p>
        </div>
      </div>
    </footer>
  );
}
