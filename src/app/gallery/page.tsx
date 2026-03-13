import type { Metadata } from 'next';
import Image from 'next/image';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse our gallery of foam products, manufacturing processes, and materials at Ved Rexine Store, Karol Bagh, New Delhi.',
};

// 48 images across categories
const galleryItems = [
  // Foam
  { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', alt: 'PU foam sofa interior', category: 'Foam' },
  { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80', alt: 'Sofa cushion foam', category: 'Furniture' },
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80', alt: 'Spring mattress', category: 'Mattress' },
  { src: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=800&q=80', alt: 'EPE packaging foam', category: 'Packaging' },
  { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80', alt: 'Footwear EVA material', category: 'Footwear' },
  { src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80', alt: 'Industrial adhesive', category: 'Industrial' },
  { src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80', alt: 'Sports shoe insole', category: 'Footwear' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'Packaging materials', category: 'Packaging' },
  { src: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80', alt: 'Shoe sole material', category: 'Footwear' },
  { src: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&q=80', alt: 'Athletic footwear material', category: 'Footwear' },
  { src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80', alt: 'Automotive foam application', category: 'Automotive' },
  { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80', alt: 'Sports equipment foam', category: 'Sports' },
  { src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80', alt: 'Healthcare foam mattress', category: 'Healthcare' },
  { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', alt: 'Construction insulation', category: 'Construction' },
  { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80', alt: 'Interior foam seating', category: 'Furniture' },
  { src: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&q=80', alt: 'Industrial warehouse foam', category: 'Industrial' },
  { src: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80', alt: 'Mattress production', category: 'Mattress' },
  { src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80', alt: 'Bed and bedding foam', category: 'Mattress' },
  { src: 'https://images.unsplash.com/photo-1489528792647-46ec39027556?w=800&q=80', alt: 'Exercise foam mat', category: 'Sports' },
  { src: 'https://images.unsplash.com/photo-1484981138541-3d074aa97716?w=800&q=80', alt: 'Modern sofa furniture', category: 'Furniture' },
  { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80', alt: 'Cushion upholstery', category: 'Furniture' },
  { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', alt: 'Foam sheet industrial', category: 'Foam' },
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80', alt: 'Mattress comfort layer', category: 'Mattress' },
  { src: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=800&q=80', alt: 'Foam packaging protection', category: 'Packaging' },
];

const categories = ['All', 'Foam', 'Footwear', 'Furniture', 'Mattress', 'Packaging', 'Industrial', 'Sports', 'Automotive'];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full glass-gold border border-gold-500/20">
            <span className="text-gold-400 font-mono text-xs tracking-[0.2em] uppercase">Visual Showcase</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-light mb-6">
            <span className="text-silver-gradient">Product</span>
            <br />
            <span className="text-gold-gradient italic">Gallery</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto font-light">
            A visual journey through our product range, materials, and industry applications.
          </p>
        </div>
      </section>

      {/* Category filters */}
      <div className="sticky top-16 z-50 py-4 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-3 overflow-x-auto">
          {categories.map((cat, i) => (
            <div
              key={cat}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 ${
                i === 0
                  ? 'bg-gold-500 text-dark-950 font-semibold'
                  : 'glass border border-white/10 text-white/60 hover:border-gold-500/30 hover:text-white cursor-pointer'
              }`}
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* Masonry grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="break-inside-avoid relative overflow-hidden rounded-xl group cursor-pointer"
              >
                <div
                  className="relative w-full overflow-hidden rounded-xl"
                  style={{ paddingBottom: `${50 + (i % 4) * 20}%` }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Overlay info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                    <div className="text-white text-sm font-medium mb-1">{item.alt}</div>
                    <div className="text-gold-400 text-xs font-mono">{item.category}</div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-full glass text-white/60 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
