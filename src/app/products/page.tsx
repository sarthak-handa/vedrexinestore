import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our complete range: PU Foam Sheets, EVA Sheets, EPE Foam Rolls, Spring Mattress, Sofa Cushions, Rubber Adhesives, Insole Sheets, Toe Puff & Ping Pong Sheets.',
};

const products = [
  {
    id: 'pu-foam-sheets',
    name: 'PU Foam Sheets',
    category: 'Foam',
    shortDesc: 'High-density polyurethane foam for furniture, packaging & industrial use.',
    longDesc: 'Our PU foam sheets are manufactured with precision to deliver consistent density and durability. Available in various grades from soft to high-density, suitable for sofa interiors, mattress toppers, industrial packaging, and more. Customizable in thickness from 5mm to 200mm.',
    specs: ['Density: 16–40 kg/m³', 'Thickness: 5–200mm', 'Width: Up to 2m', 'Available in rolls & sheets'],
    uses: ['Furniture & Upholstery', 'Packaging', 'Acoustic Insulation', 'Medical Bedding'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    badge: 'Best Seller',
    color: 'from-amber-900/30 to-transparent',
  },
  {
    id: 'eva-sheets',
    name: 'EVA Sheets',
    category: 'Footwear',
    shortDesc: 'Ethylene-vinyl acetate foam for insoles, sandals & cushioning.',
    longDesc: 'EVA (Ethylene Vinyl Acetate) sheets offer exceptional cushioning, lightweight properties, and resistance to UV radiation and chemicals. Ideal for footwear manufacturers, sports equipment makers, and protective gear producers.',
    specs: ['Density: 25–80 kg/m³', 'Hardness: 20–70 Shore C', 'Colors: All custom colors', 'Anti-slip surface available'],
    uses: ['Shoe Insoles', 'Sandal Outsoles', 'Sports Mats', 'Protective Pads'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    badge: 'Premium',
    color: 'from-blue-900/30 to-transparent',
  },
  {
    id: 'epe-foam-sheets',
    name: 'EPE Foam Sheets',
    category: 'Packaging',
    shortDesc: 'Expanded polyethylene for superior protective packaging.',
    longDesc: 'Expanded Polyethylene (EPE) foam sheets are lightweight, flexible, and waterproof, making them ideal for protective packaging of fragile items including electronics, glassware, ceramics, and precision instruments.',
    specs: ['Density: 15–30 kg/m³', 'Thickness: 2–50mm', 'Color: White/Custom', 'Moisture resistant'],
    uses: ['Electronics Packaging', 'Export Packing', 'Fragile Goods', 'Cold Chain'],
    image: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=800&q=80',
    badge: '',
    color: 'from-green-900/30 to-transparent',
  },
  {
    id: 'epe-foam-rolls',
    name: 'EPE Foam Rolls',
    category: 'Packaging',
    shortDesc: 'Continuous EPE foam rolls for high-volume packaging lines.',
    longDesc: 'EPE foam rolls provide the same protective properties as sheets but in a continuous roll format, perfect for automated packaging lines, wrapping, and cushioning applications in warehouses and factories.',
    specs: ['Width: 0.5m–2m', 'Roll lengths: 50m–500m', 'Thickness: 1–30mm', 'UV stabilized'],
    uses: ['Automated Packing Lines', 'Furniture Wrapping', 'Transit Protection', 'Surface Protection'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    badge: '',
    color: 'from-teal-900/30 to-transparent',
  },
  {
    id: 'spring-mattress',
    name: 'Spring Mattress',
    category: 'Bedding',
    shortDesc: 'Premium quality bonnell and pocket spring mattresses.',
    longDesc: 'We supply complete spring mattress assemblies and components for mattress manufacturers. Our spring units feature corrosion-resistant steel springs, high-density foam encasements, and knitted fabric covers for a premium sleep experience.',
    specs: ['Spring count: 200–800', 'Thickness: 6"–12"', 'Sizes: Single to King', 'ISI certified springs'],
    uses: ['Hotels & Hospitality', 'Home Bedding', 'Dormitories', 'Healthcare'],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    badge: 'Popular',
    color: 'from-purple-900/30 to-transparent',
  },
  {
    id: 'sofa-cushions',
    name: 'Sofa Cushions',
    category: 'Furniture',
    shortDesc: 'Custom foam cushions cut to your exact specifications.',
    longDesc: 'We cut and supply custom foam cushions for furniture manufacturers, interior designers, and upholsterers. Available in various densities and grades to match any comfort specification, from budget to premium luxury.',
    specs: ['Any custom shape/size', 'Density: 20–50 kg/m³', 'Fabric wrapping available', 'Fire retardant grades'],
    uses: ['Sofas & Sectionals', 'Dining Chair Seats', 'Headboards', 'Outdoor Furniture'],
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    badge: 'Custom',
    color: 'from-rose-900/30 to-transparent',
  },
  {
    id: 'rubber-adhesives',
    name: 'Rubber Adhesives',
    category: 'Industrial',
    shortDesc: 'High-strength contact cement for leather, foam & footwear.',
    longDesc: 'Our range of rubber-based adhesives provides instant, high-strength bonds for leather, foam, fabric, and synthetic materials. Available in solvent-based and water-based formulations, suitable for footwear factories and upholstery workshops.',
    specs: ['Bond strength: 5–12 kg/cm²', 'Open time: 5–30 min', 'Solvent & water-based', 'Bulk barrels available'],
    uses: ['Shoe Manufacturing', 'Leather Goods', 'Foam Bonding', 'Automotive Interiors'],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    badge: '',
    color: 'from-orange-900/30 to-transparent',
  },
  {
    id: 'insole-sheets',
    name: 'Insole Sheets',
    category: 'Footwear',
    shortDesc: 'Latex, PU and EVA insole sheets for shoe manufacturing.',
    longDesc: 'Premium insole sheet materials in latex foam, PU, and EVA for footwear manufacturers. Available in multiple thicknesses, hardnesses, and surface treatments including perforated, embossed, and fabric-laminated options.',
    specs: ['Materials: Latex/PU/EVA', 'Thickness: 2–15mm', 'Fabric lamination available', 'Antibacterial treatment'],
    uses: ['Sports Shoes', 'Casual Footwear', 'Orthopedic Insoles', 'Safety Boots'],
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80',
    badge: '',
    color: 'from-cyan-900/30 to-transparent',
  },
  {
    id: 'toe-puff-sheets',
    name: 'Toe Puff Sheets',
    category: 'Footwear',
    shortDesc: 'Thermoplastic toe puff materials for structured shoe caps.',
    longDesc: 'Toe puff sheets provide structural rigidity and shape retention to the toe cap area of shoes. Our thermoplastic toe puff materials are heat-activatable, easy to process, and available in varying stiffness levels.',
    specs: ['Activation temp: 60–80°C', 'Thickness: 0.8–2.5mm', 'Stiffness: Soft/Medium/Hard', 'Solvent-activated available'],
    uses: ['Formal Shoes', 'Safety Footwear', 'Sports Shoes', 'Children Shoes'],
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80',
    badge: '',
    color: 'from-indigo-900/30 to-transparent',
  },
  {
    id: 'ping-pong-sheets',
    name: 'Ping Pong Sheets',
    category: 'Footwear',
    shortDesc: 'Micro-cellular rubber sheets for outsoles and midsoles.',
    longDesc: 'Ping pong (microcellular rubber) sheets are lightweight, cushioning, and abrasion-resistant. Used extensively in footwear outsoles, flip-flop bases, and general-purpose cushioning applications requiring a balance of comfort and durability.',
    specs: ['Density: 200–600 kg/m³', 'Thickness: 3–20mm', 'Colors: All available', 'High abrasion resistance'],
    uses: ['Chappal/Sandal Soles', 'Flip Flop Bases', 'Cushioned Mats', 'Insoles'],
    image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&q=80',
    badge: '',
    color: 'from-yellow-900/30 to-transparent',
  },
];

const categories = ['All', 'Foam', 'Footwear', 'Packaging', 'Bedding', 'Furniture', 'Industrial'];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full glass-gold border border-gold-500/20">
            <span className="text-gold-400 font-mono text-xs tracking-[0.2em] uppercase">Product Catalogue</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-light mb-6">
            <span className="text-silver-gradient">10 Premium</span>
            <br />
            <span className="text-gold-gradient italic">Products</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto font-light">
            Industrial-grade foam, EVA, mattress components and adhesives for manufacturers across India.
          </p>
        </div>
      </section>

      {/* Category filters — static for SSR */}
      <section className="sticky top-16 z-50 py-4 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <div
              key={cat}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-mono cursor-pointer transition-all duration-300 ${
                cat === 'All'
                  ? 'bg-gold-500 text-dark-950 font-semibold'
                  : 'glass border border-white/10 text-white/60 hover:border-gold-500/30 hover:text-white'
              }`}
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {products.map((p, i) => (
            <div
              key={p.id}
              id={p.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              {/* Image */}
              <div className={`relative h-72 md:h-96 rounded-3xl overflow-hidden ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color}`} />
                {p.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-400 text-xs font-mono">
                    {p.badge}
                  </div>
                )}
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full glass text-white/60 text-xs font-mono">
                  {p.category}
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="text-gold-500/60 font-mono text-xs tracking-widest uppercase mb-3">{p.category}</div>
                <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">
                  {p.name}
                </h2>
                <p className="text-white/60 text-base leading-relaxed mb-6">{p.longDesc}</p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {p.specs.map((spec, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-white/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                      {spec}
                    </div>
                  ))}
                </div>

                {/* Uses */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.uses.map((use, j) => (
                    <span key={j} className="px-3 py-1 rounded-full glass-gold border border-gold-500/20 text-gold-400 text-xs font-mono">
                      {use}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-dark-950 font-semibold hover:from-gold-500 hover:to-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/20 magnetic"
                >
                  Get Pricing
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
