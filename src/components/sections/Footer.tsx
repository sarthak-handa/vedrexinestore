import Link from 'next/link';
import { HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';

const products = [
  'PU Foam Sheets', 'EVA Sheets', 'EPE Foam Sheets', 'EPE Foam Rolls',
  'Spring Mattress', 'Sofa Cushions', 'Rubber Adhesives', 'Insole Sheets',
  'Toe Puff Sheets', 'Ping Pong Sheets',
];

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/industries', label: 'Industries' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="relative bg-dark-900 border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-gold-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-600 to-gold-800 flex items-center justify-center border border-gold-500/30">
                <span className="text-white font-display font-bold text-xl">V</span>
              </div>
              <div>
                <div className="text-white font-display font-semibold text-xl">Ved Rexine Store</div>
                <div className="text-gold-500/60 text-[10px] font-mono tracking-[0.2em] uppercase">Est. 1967</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Delhi&apos;s most trusted supplier of premium foam sheets, EVA materials, mattresses, 
              and footwear components for over five decades.
            </p>
            <div className="flex items-center gap-2 text-gold-500/60 text-xs font-mono">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open Mon–Sat, 9AM–7PM
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-400 font-mono text-xs tracking-[0.2em] uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-gold-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold-500/0 group-hover:bg-gold-500/100 transition-all duration-300 inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-gold-400 font-mono text-xs tracking-[0.2em] uppercase mb-6">Products</h4>
            <ul className="space-y-2">
              {products.slice(0, 7).map((p) => (
                <li key={p}>
                  <Link
                    href="/products"
                    className="text-white/50 hover:text-gold-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold-500/0 group-hover:bg-gold-500/100 transition-all duration-300 inline-block" />
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-400 font-mono text-xs tracking-[0.2em] uppercase mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:01125720328" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg glass-gold flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-gold-500/50 transition-colors duration-300">
                    <HiPhone className="text-gold-400 text-sm" />
                  </div>
                  <div>
                    <div className="text-white/30 text-xs font-mono mb-0.5">Phone</div>
                    <div className="text-white/70 text-sm group-hover:text-gold-400 transition-colors duration-300">
                      011-25720328
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg glass-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HiLocationMarker className="text-gold-400 text-sm" />
                  </div>
                  <div>
                    <div className="text-white/30 text-xs font-mono mb-0.5">Address</div>
                    <div className="text-white/70 text-sm leading-relaxed">
                      5888/4 Dev Nagar,<br />
                      Karol Bagh, New Delhi 110005
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg glass-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HiClock className="text-gold-400 text-sm" />
                  </div>
                  <div>
                    <div className="text-white/30 text-xs font-mono mb-0.5">Hours</div>
                    <div className="text-white/70 text-sm">
                      Mon – Sat: 9AM – 7PM<br />
                      <span className="text-white/40">Sunday: Closed</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-white/5 py-4 mb-8 overflow-hidden">
          <div className="flex whitespace-nowrap">
            <div className="marquee flex gap-8 text-white/15 text-sm font-mono tracking-widest uppercase">
              {Array(4).fill([
                'PU Foam Sheets', '•', 'EVA Sheets', '•', 'Spring Mattress', '•',
                'Sofa Cushions', '•', 'Rubber Adhesives', '•', 'Insole Sheets', '•',
                'EPE Foam Rolls', '•', 'Toe Puff Sheets', '•',
              ]).flat().map((text, i) => (
                <span key={i}>{text}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/25 text-xs font-mono">
            © {new Date().getFullYear()} Ved Rexine Store. All rights reserved. Since 1967.
          </div>
          <div className="flex items-center gap-6 text-white/25 text-xs">
            <Link href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link href="/sitemap.xml" className="hover:text-gold-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
