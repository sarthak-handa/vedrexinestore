'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiPhone, HiArrowRight } from 'react-icons/hi';

export function CTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-gold-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="glass-gold rounded-3xl p-14 md:p-20 border border-gold-500/15 relative overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gold-500/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gold-500/5 blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold-500/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-gold-400 font-mono text-xs tracking-wider">Available Mon–Sat</span>
            </div>

            <h2 className="font-display text-5xl md:text-7xl font-light mb-6 leading-tight">
              <span className="text-silver-gradient">Ready to</span>
              <br />
              <span className="text-gold-gradient italic">Work Together?</span>
            </h2>

            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto font-light">
              Get bulk pricing, custom specifications, and fast delivery from Delhi&apos;s most trusted foam supplier since 1967.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-dark-950 font-bold text-base hover:from-gold-500 hover:to-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50 hover:scale-105 magnetic"
              >
                Request a Quote
                <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <a
                href="tel:01125720328"
                className="group flex items-center justify-center gap-3 px-10 py-4 rounded-xl glass border border-gold-500/20 hover:border-gold-500/50 text-white font-medium text-base transition-all duration-300 hover:bg-gold-500/5 magnetic"
              >
                <HiPhone className="text-gold-400 group-hover:scale-110 transition-transform duration-300" />
                011-25720328
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/30 text-sm font-mono">
              <span>📍 Karol Bagh, New Delhi 110005</span>
              <span className="hidden sm:block w-px h-4 bg-white/10" />
              <span>⏰ Mon–Sat: 9AM–7PM</span>
              <span className="hidden sm:block w-px h-4 bg-white/10" />
              <span>🏆 Since 1967</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
