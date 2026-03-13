'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', alt: 'Foam manufacturing', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80', alt: 'Spring mattress' },
  { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', alt: 'Sofa cushion foam' },
  { src: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=600&q=80', alt: 'EPE packaging foam' },
  { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80', alt: 'Footwear EVA sheets' },
  { src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', alt: 'Industrial adhesive' },
];

export function GalleryPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="line-decoration" />
            <span className="text-gold-400 font-mono text-xs tracking-[0.3em] uppercase">Gallery</span>
            <div className="line-decoration" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-light mb-6">
            <span className="text-silver-gradient">Our</span>{' '}
            <span className="text-gold-gradient italic">Showcase</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-3 h-[600px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-xl group ${img.span || ''}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-dark-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-sm font-mono tracking-wide">{img.alt}</span>
              </div>
              <div className="absolute inset-0 border border-gold-500/0 group-hover:border-gold-500/30 transition-colors duration-500 rounded-xl pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-gold-500/30 text-gold-400 hover:bg-gold-500/10 transition-all duration-300 font-medium magnetic"
          >
            View Full Gallery <HiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
