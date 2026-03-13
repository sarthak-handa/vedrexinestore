'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiLocationMarker, HiClock, HiMail, HiArrowRight, HiCheckCircle } from 'react-icons/hi';

const products = [
  'PU Foam Sheets', 'EVA Sheets', 'EPE Foam Sheets', 'EPE Foam Rolls',
  'Spring Mattress', 'Sofa Cushions', 'Rubber Adhesives', 'Insole Sheets',
  'Toe Puff Sheets', 'Ping Pong Sheets', 'Other / Multiple',
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', product: '', quantity: '', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setSubmitted(true), 800);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full glass-gold border border-gold-500/20">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-gold-400 font-mono text-xs tracking-[0.2em] uppercase">Get In Touch</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-light mb-6">
            <span className="text-silver-gradient">Let&apos;s</span>
            <br />
            <span className="text-gold-gradient italic">Connect</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto font-light">
            Request a quote, ask about bulk pricing, or simply visit us at Karol Bagh, New Delhi.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Info cards */}
              {[
                {
                  icon: <HiPhone className="text-gold-400 text-xl" />,
                  label: 'Phone',
                  value: '011-25720328',
                  sub: 'Mon–Sat, 9AM–7PM',
                  href: 'tel:01125720328',
                },
                {
                  icon: <HiLocationMarker className="text-gold-400 text-xl" />,
                  label: 'Address',
                  value: '5888/4 Dev Nagar, Karol Bagh',
                  sub: 'New Delhi – 110005',
                  href: 'https://maps.google.com/?q=Karol+Bagh+New+Delhi',
                },
                {
                  icon: <HiClock className="text-gold-400 text-xl" />,
                  label: 'Business Hours',
                  value: 'Monday – Saturday',
                  sub: '9:00 AM – 7:00 PM',
                  href: null,
                },
                {
                  icon: <HiMail className="text-gold-400 text-xl" />,
                  label: 'Quick Contact',
                  value: 'Walk-in Welcome',
                  sub: 'Wholesale & Retail',
                  href: null,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 glass rounded-2xl p-6 border border-white/5 hover:border-gold-500/30 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-xl glass-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-gold-400/60 text-xs font-mono tracking-widest uppercase mb-1">{item.label}</div>
                        <div className="text-white font-semibold group-hover:text-gold-300 transition-colors duration-300">{item.value}</div>
                        <div className="text-white/40 text-sm">{item.sub}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 glass rounded-2xl p-6 border border-white/5">
                      <div className="w-12 h-12 rounded-xl glass-gold flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-gold-400/60 text-xs font-mono tracking-widest uppercase mb-1">{item.label}</div>
                        <div className="text-white font-semibold">{item.value}</div>
                        <div className="text-white/40 text-sm">{item.sub}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Map embed placeholder */}
              <div className="relative h-48 rounded-2xl overflow-hidden glass border border-white/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4!2d77.1928!3d28.6517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d036b06fef00d%3A0x92f4b5b46dd3b7b1!2sKarol%20Bagh%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ved Rexine Store location map"
                />
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="glass-gold rounded-3xl p-8 md:p-10 border border-gold-500/15 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />

                {submitted ? (
                  <div className="text-center py-12">
                    <HiCheckCircle className="text-green-400 text-6xl mx-auto mb-4" />
                    <h3 className="font-display text-3xl text-white mb-2">Thank You!</h3>
                    <p className="text-white/60">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-2">
                        Request a <span className="text-gold-gradient italic">Quote</span>
                      </h2>
                      <p className="text-white/40 text-sm font-mono">Fill in the details below for bulk pricing</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-gold-400/60 text-xs font-mono tracking-widest uppercase mb-2 block">Name *</label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            placeholder="Your full name"
                            className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-gold-500/50 text-white placeholder-white/30 outline-none transition-all duration-300 bg-transparent text-sm"
                          />
                        </div>
                        <div>
                          <label className="text-gold-400/60 text-xs font-mono tracking-widest uppercase mb-2 block">Phone *</label>
                          <input
                            type="tel"
                            required
                            value={form.phone}
                            onChange={e => setForm({ ...form, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-gold-500/50 text-white placeholder-white/30 outline-none transition-all duration-300 bg-transparent text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-gold-400/60 text-xs font-mono tracking-widest uppercase mb-2 block">Email</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-gold-500/50 text-white placeholder-white/30 outline-none transition-all duration-300 bg-transparent text-sm"
                        />
                      </div>

                      <div>
                        <label className="text-gold-400/60 text-xs font-mono tracking-widest uppercase mb-2 block">Product Interested In *</label>
                        <select
                          required
                          value={form.product}
                          onChange={e => setForm({ ...form, product: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-gold-500/50 text-white outline-none transition-all duration-300 bg-dark-800 text-sm"
                        >
                          <option value="" className="bg-dark-800">Select a product</option>
                          {products.map(p => (
                            <option key={p} value={p} className="bg-dark-800">{p}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-gold-400/60 text-xs font-mono tracking-widest uppercase mb-2 block">Quantity / Volume</label>
                        <input
                          type="text"
                          value={form.quantity}
                          onChange={e => setForm({ ...form, quantity: e.target.value })}
                          placeholder="e.g. 100 sheets, 500 kg, 50 rolls"
                          className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-gold-500/50 text-white placeholder-white/30 outline-none transition-all duration-300 bg-transparent text-sm"
                        />
                      </div>

                      <div>
                        <label className="text-gold-400/60 text-xs font-mono tracking-widest uppercase mb-2 block">Message / Specifications</label>
                        <textarea
                          rows={4}
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          placeholder="Describe your requirements — density, thickness, application, delivery location..."
                          className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-gold-500/50 text-white placeholder-white/30 outline-none transition-all duration-300 bg-transparent text-sm resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-dark-950 font-bold text-base hover:from-gold-500 hover:to-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/25 hover:shadow-gold-500/50 group magnetic"
                      >
                        Send Enquiry
                        <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                      </button>

                      <p className="text-white/25 text-xs text-center font-mono">
                        We respond within 24 hours on business days
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
