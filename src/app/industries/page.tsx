import type { Metadata } from 'next';
import Image from 'next/image';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Industries Served',
  description: 'Ved Rexine Store supplies foam, EVA, and adhesive materials to footwear, furniture, packaging, automotive, bedding and sports industries across India.',
};

const industries = [
  {
    name: 'Footwear Manufacturing',
    icon: '👟',
    description: 'From Agra to Kanpur, Delhi to Kolkata — footwear manufacturers rely on our EVA sheets, insole sheets, toe puff, ping pong sheets, and rubber adhesives for daily production runs.',
    products: ['EVA Sheets', 'Insole Sheets', 'Toe Puff Sheets', 'Ping Pong Sheets', 'Rubber Adhesives'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    clients: '500+',
    stat: '#1 choice in NCR',
  },
  {
    name: 'Furniture & Upholstery',
    icon: '🛋️',
    description: 'Delhi\'s furniture belt trusts our high-density PU foam for sofas, chair cushions, back rests and headboards. We supply custom-cut foam in all sizes and densities.',
    products: ['PU Foam Sheets', 'Sofa Cushions', 'High-Density Foam', 'Rubber Adhesives'],
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    clients: '300+',
    stat: '20+ years supply',
  },
  {
    name: 'Mattress & Bedding',
    icon: '🛏️',
    description: 'Leading mattress brands and OEMs source spring units, foam layers, and peripheral materials from us. ISI-certified springs, quality foam toppers and base layers available.',
    products: ['Spring Mattress', 'PU Foam Sheets', 'High-Density Foam', 'Rebonded Foam'],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    clients: '200+',
    stat: 'ISI certified supply',
  },
  {
    name: 'Packaging Industry',
    icon: '📦',
    description: 'E-commerce, electronics, pharma and FMCG companies use our EPE foam sheets and rolls for protective, lightweight and cost-effective packaging solutions.',
    products: ['EPE Foam Sheets', 'EPE Foam Rolls', 'Packaging Blocks'],
    image: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=800&q=80',
    clients: '400+',
    stat: 'Bulk discounts available',
  },
  {
    name: 'Automotive',
    icon: '🚗',
    description: 'Automobile seat manufacturers, dashboard padding suppliers, and acoustic insulation companies rely on our specialized foam grades for OEM and aftermarket applications.',
    products: ['Acoustic Foam', 'PU Foam Sheets', 'EVA Sheets', 'Rubber Adhesives'],
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    clients: '100+',
    stat: 'OEM-grade quality',
  },
  {
    name: 'Sports & Recreation',
    icon: '⚽',
    description: 'Gym mat manufacturers, yoga mat producers, and sports gear companies use our EVA and PU foam for impact-absorbing and comfort applications.',
    products: ['EVA Sheets', 'PU Foam Sheets', 'Ping Pong Sheets'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    clients: '150+',
    stat: 'High-impact grades',
  },
  {
    name: 'Healthcare & Hospitality',
    icon: '🏥',
    description: 'Hospitals, hotels, and healthcare equipment manufacturers need foam with specific properties — antibacterial, fire-retardant, or medical-grade. We supply it all.',
    products: ['Medical-Grade Foam', 'Spring Mattress', 'PU Foam Sheets'],
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80',
    clients: '80+',
    stat: 'FR and antimicrobial',
  },
  {
    name: 'Construction & Interior',
    icon: '🏗️',
    description: 'Interior fit-out contractors and construction firms use our EPE foam for floor protection, acoustic panels, and underlay applications during renovation projects.',
    products: ['EPE Foam Sheets', 'PU Foam Sheets', 'Acoustic Foam'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    clients: '120+',
    stat: 'BIS compliant grades',
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full glass-gold border border-gold-500/20">
            <span className="text-gold-400 font-mono text-xs tracking-[0.2em] uppercase">Industries We Serve</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-light mb-6">
            <span className="text-silver-gradient">Powering</span>
            <br />
            <span className="text-gold-gradient italic">8 Industries</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto font-light">
            From Delhi to every corner of India — our materials are inside products that millions use every day.
          </p>
        </div>
      </section>

      {/* Industries list */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className={`grid lg:grid-cols-2 gap-12 items-center pb-16 border-b border-white/5 last:border-0 ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              {/* Image */}
              <div className={`relative h-72 md:h-80 rounded-3xl overflow-hidden group ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 text-4xl">{ind.icon}</div>
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass-gold border border-gold-500/30 text-gold-400 text-xs font-mono">
                  {ind.clients} clients
                </div>
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full glass text-white/60 text-xs font-mono">
                  {ind.stat}
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="font-display text-4xl font-light text-white mb-4">{ind.name}</h2>
                <p className="text-white/60 text-base leading-relaxed mb-6">{ind.description}</p>
                <div className="mb-6">
                  <div className="text-gold-400/60 font-mono text-xs tracking-widest uppercase mb-3">Products Used</div>
                  <div className="flex flex-wrap gap-2">
                    {ind.products.map((p, j) => (
                      <span key={j} className="px-3 py-1.5 rounded-full glass-gold border border-gold-500/20 text-gold-300 text-sm font-mono">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
