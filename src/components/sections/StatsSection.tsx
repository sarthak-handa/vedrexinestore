'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { value: 57, suffix: '+', label: 'Years of Excellence', icon: '🏆' },
  { value: 10, suffix: '+', label: 'Product Categories', icon: '📦' },
  { value: 5000, suffix: '+', label: 'Happy Clients', icon: '🤝' },
  { value: 100, suffix: '%', label: 'Quality Assured', icon: '✨' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = duration / value;
    const timer = setInterval(() => {
      start += Math.ceil(value / 60);
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 bg-dark-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-8 text-center border border-white/5 hover:border-gold-500/20 transition-all duration-500 group-hover:-translate-y-2">
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="font-display text-5xl md:text-6xl font-light text-gold-gradient mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/50 text-sm font-mono tracking-wide">{stat.label}</div>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
