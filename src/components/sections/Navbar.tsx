'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/industries', label: 'Industries' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-gold-500/30 group-hover:border-gold-500/70 transition-all duration-300">
              <Image
                src="/logo.jpg"
                alt="Ved Rexine Store"
                fill
                sizes="40px"
                priority
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-white font-display font-semibold text-lg leading-tight group-hover:text-gold-400 transition-colors duration-300">
                Ved Rexine
              </div>
              <div className="text-gold-500/60 text-[10px] font-mono tracking-[0.2em] uppercase">
                Since 1967
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-body font-medium tracking-wide transition-all duration-300 rounded-lg group ${
                  pathname === link.href
                    ? 'text-gold-400'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg glass-gold"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="absolute inset-0 rounded-lg glass-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-gold-600 to-gold-500 text-dark-950 font-semibold text-sm hover:from-gold-500 hover:to-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 magnetic"
            >
              Get Quote
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 glass rounded-lg flex items-center justify-center text-gold-400 hover:text-gold-300 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[999] lg:hidden"
          >
            <div className="absolute inset-0 bg-dark-950/95 backdrop-blur-xl" />
            <div className="relative h-full flex flex-col items-center justify-center gap-8">
              <div className="absolute top-6 right-6">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gold-400"
                >
                  <HiX size={20} />
                </button>
              </div>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className={`text-4xl font-display font-light tracking-wide transition-colors duration-300 ${
                      pathname === link.href ? 'text-gold-400' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Link
                  href="/contact"
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-dark-950 font-semibold tracking-wide"
                >
                  Get Quote
                </Link>
              </motion.div>
              <div className="absolute bottom-8 text-white/30 text-sm font-mono">
                01125720328
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
