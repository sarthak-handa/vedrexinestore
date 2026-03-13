'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const industries = [
  {
    name: 'Footwear Manufacturing',
    description: 'EVA, insole sheets, toe puff, ping pong sheets & adhesives for shoe brands.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    icon: '👟',
    count: '500+ clients',
  },
  {
    name: 'Furniture & Upholstery',
    description: 'High-density PU foam for sofas, chairs, headboards & cushion manufacturing.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    icon: '🛋️',
    count: '300+ clients',
  },
  {
    name: 'Bedding & Mattress',
    description: 'Spring mattresses, memory foam cores & polyurethane layers for manufacturers.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    icon: '🛏️',
    count: '200+ clients',
  },
  {
    name: 'Packaging Industry',
    description: 'EPE foam sheets & rolls for fragile goods, electronics & export packaging.',
    image: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=800&q=80',
    icon: '📦',
    count: '400+ clients',
  },
  {
    name: 'Automotive',
    description: 'Acoustic foam panels, seat cushion materials & dashboard padding solutions.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    icon: '🚗',
    count: '100+ clients',
  },
  {
    name: 'Sports & Recreation',
    description: 'High-impact EVA & foam for gym mats, sports equipment & protective gear.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    icon: '⚽',
    count: '150+ clients',
  },
];

export function IndustriesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-32 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

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
            <span className="text-gold-400 font-mono text-xs tracking-[0.3em] uppercase">Industries Served</span>
            <div className="line-decoration" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-light mb-6">
            <span className="text-silver-gradient">Powering</span>{' '}
            <span className="text-gold-gradient italic">Many Sectors</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto font-body font-light">
            From footwear to furniture, packaging to automotive — our materials are everywhere.
          </p>
        </motion.div>

        {/* Industries grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="relative group rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent" />
                
                {/* Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl glass flex items-center justify-center text-2xl">
                  {industry.icon}
                </div>

                {/* Client count badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-gold border border-gold-500/30 text-gold-400 text-xs font-mono">
                  {industry.count}
                </div>
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl font-medium text-white group-hover:text-gold-400 transition-colors duration-300 mb-2">
                  {industry.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                  {industry.description}
                </p>
              </div>

              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gold-500/20 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
