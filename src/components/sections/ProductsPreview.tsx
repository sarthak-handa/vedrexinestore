'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

const products = [
  {
    name: 'PU Foam Sheets',
    category: 'Foam',
    description: 'High-density polyurethane foam for furniture, packaging & industrial applications.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    tag: 'Best Seller',
  },
  {
    name: 'EVA Sheets',
    category: 'Footwear',
    description: 'Ethylene-vinyl acetate foam for insoles, sandals & cushioning applications.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    tag: 'Premium',
  },
  {
    name: 'EPE Foam Sheets',
    category: 'Packaging',
    description: 'Expanded polyethylene for superior protective packaging solutions.',
    image: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=600&q=80',
    tag: '',
  },
  {
    name: 'Spring Mattress',
    category: 'Bedding',
    description: 'Premium quality spring mattresses for hotels, homes and institutions.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    tag: 'Popular',
  },
  {
    name: 'Rubber Adhesives',
    category: 'Industrial',
    description: 'High-strength bonding solutions for leather, foam & footwear manufacturing.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
    tag: '',
  },
  {
    name: 'Sofa Cushions',
    category: 'Furniture',
    description: 'Custom foam cushions for sofas, chairs and upholstered furniture.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    tag: 'Custom',
  },
];

export function ProductsPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-gold-900/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="line-decoration" />
            <span className="text-gold-400 font-mono text-xs tracking-[0.3em] uppercase">Our Products</span>
            <div className="line-decoration" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-light mb-6">
            <span className="text-silver-gradient">Premium</span>{' '}
            <span className="text-gold-gradient italic">Materials</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto font-body font-light">
            Industrial-grade foam, EVA, mattresses & adhesives trusted by thousands of manufacturers.
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
              <Link href="/products" className="block group product-card rounded-2xl overflow-hidden glass border border-white/5 hover:border-gold-500/20">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
                  
                  {product.tag && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-400 text-xs font-mono">
                      {product.tag}
                    </div>
                  )}
                  
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full glass text-white/50 text-xs font-mono">
                    {product.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-medium text-white group-hover:text-gold-400 transition-colors duration-300 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    Learn more <HiArrowRight />
                  </div>
                </div>

                {/* Bottom border animation */}
                <div className="h-px bg-gradient-to-r from-transparent via-gold-500/0 to-transparent group-hover:via-gold-500/50 transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-gold-500/30 text-gold-400 hover:bg-gold-500/10 transition-all duration-300 font-medium magnetic"
          >
            View All 10 Products
            <HiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
