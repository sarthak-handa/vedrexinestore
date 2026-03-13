'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Ramesh Gupta',
    role: 'Footwear Manufacturer, Agra',
    text: 'We have been sourcing EVA sheets and insole materials from Ved Rexine Store for over 12 years. Their quality is unmatched and delivery is always on time.',
    stars: 5,
  },
  {
    name: 'Sunil Mehta',
    role: 'Furniture Maker, Delhi',
    text: 'The PU foam quality they supply is excellent. Our sofa business has grown because customers love the feel of the cushions. Highly recommended.',
    stars: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Interior Designer, Noida',
    text: 'For custom sofa foam and upholstery materials, there is no better supplier in Delhi. Professional service and great pricing.',
    stars: 5,
  },
  {
    name: 'Ajay Verma',
    role: 'Mattress Manufacturer, Gurgaon',
    text: 'Spring mattress components from Ved Rexine are top notch. We have reduced our material costs by 15% while improving quality.',
    stars: 5,
  },
];

export function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} className="relative py-32 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="line-decoration" />
            <span className="text-gold-400 font-mono text-xs tracking-[0.3em] uppercase">Testimonials</span>
            <div className="line-decoration" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light">
            <span className="text-silver-gradient">What Clients</span>{' '}
            <span className="text-gold-gradient italic">Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {/* Active testimonial */}
          <div className="glass-gold rounded-3xl p-10 md:p-14 mb-8 relative overflow-hidden border border-gold-500/15">
            <div className="absolute top-6 left-10 text-8xl font-display text-gold-500/10 leading-none select-none">&ldquo;</div>
            <p className="text-white/80 text-xl md:text-2xl font-display font-light italic leading-relaxed mb-8 relative z-10">
              {testimonials[active].text}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-600 to-gold-800 flex items-center justify-center font-display font-bold text-lg text-white">
                {testimonials[active].name[0]}
              </div>
              <div>
                <div className="text-white font-semibold">{testimonials[active].name}</div>
                <div className="text-gold-500/60 text-sm font-mono">{testimonials[active].role}</div>
              </div>
              <div className="ml-auto flex gap-1">
                {[...Array(testimonials[active].stars)].map((_, i) => (
                  <span key={i} className="text-gold-400 text-lg">★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? 'w-8 h-2 bg-gold-500'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail row */}
          <div className="grid grid-cols-4 gap-3 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`p-4 rounded-xl text-left transition-all duration-300 ${
                  i === active ? 'glass-gold border border-gold-500/30' : 'glass border border-white/5 hover:border-gold-500/15'
                }`}
              >
                <div className={`text-sm font-semibold mb-0.5 transition-colors duration-300 ${i === active ? 'text-gold-400' : 'text-white/60'}`}>
                  {t.name}
                </div>
                <div className="text-white/30 text-xs font-mono truncate">{t.role.split(',')[0]}</div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
