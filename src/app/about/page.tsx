import type { Metadata } from 'next';
import Image from 'next/image';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Ved Rexine Store, established in 1967 in Karol Bagh, Delhi. Over 57 years of excellence in foam, EVA, mattress and adhesive supply.',
};

const milestones = [
  { year: '1967', title: 'Founded', desc: 'Started as a small foam and rexine supplier in Karol Bagh, New Delhi.' },
  { year: '1980', title: 'Expansion', desc: 'Expanded product line to include EVA sheets and footwear materials.' },
  { year: '1995', title: 'Industrial Growth', desc: 'Became a key supplier to major furniture and mattress manufacturers in NCR.' },
  { year: '2005', title: 'New Products', desc: 'Added EPE foam rolls, rubber adhesives and specialized shoe materials.' },
  { year: '2015', title: 'Modernization', desc: 'Upgraded storage and logistics for faster, larger-volume deliveries.' },
  { year: '2024', title: 'Today', desc: 'Serving 5000+ clients across India, maintaining the same family values and quality standards.' },
];

const values = [
  { icon: '🏆', title: 'Quality First', desc: 'Every product is tested to meet the highest industrial standards before reaching our clients.' },
  { icon: '🤝', title: 'Trusted Partnerships', desc: 'Over 57 years of building lasting relationships with manufacturers across India.' },
  { icon: '⚡', title: 'Fast Delivery', desc: 'Efficient logistics from our Karol Bagh warehouse to your factory floor.' },
  { icon: '💡', title: 'Expert Guidance', desc: 'Our experienced team helps you select the right material for your specific application.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full glass-gold border border-gold-500/20">
            <span className="text-gold-400 font-mono text-xs tracking-[0.2em] uppercase">Our Story</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-light mb-6">
            <span className="text-silver-gradient">Established</span>
            <br />
            <span className="text-gold-gradient italic">Since 1967</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl font-light leading-relaxed">
            For over five decades, Ved Rexine Store has been the backbone of Delhi&apos;s manufacturing sector — supplying premium foam, EVA, mattress and adhesive materials with unwavering quality.
          </p>
        </div>
      </section>

      {/* Story + Image */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="line-decoration" />
                <span className="text-gold-400 font-mono text-xs tracking-[0.3em] uppercase">Who We Are</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
                <span className="text-silver-gradient">Delhi&apos;s Most</span>
                <br />
                <span className="text-gold-gradient italic">Trusted Supplier</span>
              </h2>
              <div className="space-y-4 text-white/60 font-light leading-relaxed">
                <p>
                  Founded in 1967 by a visionary entrepreneur in the heart of Karol Bagh, New Delhi, 
                  Ved Rexine Store began as a modest supplier of foam and rexine materials to local 
                  furniture craftsmen.
                </p>
                <p>
                  Over decades, we grew alongside Delhi&apos;s booming manufacturing ecosystem — expanding 
                  our product range to serve footwear factories, mattress brands, packaging companies 
                  and automotive suppliers across North India.
                </p>
                <p>
                  Today, with over 5,000 active clients and a portfolio spanning 10+ product categories, 
                  we remain a family-driven enterprise committed to the same values: quality materials, 
                  honest pricing, and relationships that last generations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                  alt="Industrial foam manufacturing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-gold border border-gold-500/20 rounded-2xl p-6">
                <div className="font-display text-5xl font-light text-gold-gradient">57+</div>
                <div className="text-white/60 text-sm font-mono">Years of Excellence</div>
              </div>
              <div className="absolute -top-6 -right-6 glass-gold border border-gold-500/20 rounded-2xl p-6">
                <div className="font-display text-5xl font-light text-gold-gradient">5K+</div>
                <div className="text-white/60 text-sm font-mono">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-light mb-4">
              <span className="text-silver-gradient">Our</span>{' '}
              <span className="text-gold-gradient italic">Core Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="glass rounded-2xl p-8 border border-white/5 hover:border-gold-500/20 transition-all duration-500 group hover:-translate-y-2">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display text-xl font-medium text-white group-hover:text-gold-400 transition-colors duration-300 mb-3">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-light mb-4">
              <span className="text-silver-gradient">Our</span>{' '}
              <span className="text-gold-gradient italic">Journey</span>
            </h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-gold-500/20 to-transparent" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={i} className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold-500 border-2 border-dark-900 shadow-lg shadow-gold-500/50" />
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] glass rounded-xl p-6 border border-white/5 hover:border-gold-500/20 transition-all duration-300 ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="text-gold-400 font-mono text-sm mb-1">{m.year}</div>
                    <h3 className="font-display text-xl font-medium text-white mb-2">{m.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
