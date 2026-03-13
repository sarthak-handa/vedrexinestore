'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { HiArrowRight, HiPhone } from 'react-icons/hi';

const HeroScene = dynamic(() => import('@/components/3d/HeroScene').then(m => ({ default: m.HeroScene })), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />,
});

const words = ['Quality', 'Precision', 'Excellence', 'Innovation', 'Durability'];

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 100);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 60);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-60">
        <HeroScene />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-transparent to-dark-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950/60 via-transparent to-dark-950/60" />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-gold mb-8 border border-gold-500/20"
        >
          <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-gold-400 text-sm font-mono tracking-wider">Est. 1967 • Karol Bagh, New Delhi</span>
          <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.9] mb-6">
            <span className="text-silver-gradient block">
              Crafting
            </span>
            <span className="text-gold-gradient block italic">
              {displayed}
              <span className="animate-pulse text-gold-400">|</span>
            </span>
            <span className="text-silver-gradient block">
              Since 1967
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/50 text-lg md:text-xl font-body font-light max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Delhi&apos;s most trusted supplier of premium foam sheets, EVA materials, 
          spring mattresses & industrial adhesives — serving manufacturers for over 57 years.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/products"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-dark-950 font-semibold text-base hover:from-gold-500 hover:to-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/25 hover:shadow-gold-500/50 hover:scale-105 magnetic"
          >
            Explore Products
            <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <a
            href="tel:01125720328"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl glass border border-white/10 hover:border-gold-500/30 text-white font-medium text-base transition-all duration-300 hover:bg-gold-500/5 magnetic"
          >
            <HiPhone className="text-gold-400" />
            Call Us Now
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs font-mono tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-500/50 to-transparent relative overflow-hidden">
            <div className="w-full bg-gold-500 animate-[scrollDot_2s_ease-in-out_infinite]" 
                 style={{ height: '40%', animation: 'scrollDot 2s ease-in-out infinite' }} />
          </div>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-8 w-px h-24 bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute top-24 right-8 w-px h-24 bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <style>{`
        @keyframes scrollDot {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(250%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
