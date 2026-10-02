'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[120px] h-[80px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 32 35" fill="none" className="w-full h-full">
              <path
                d="M16 0L31 8.5V26.5L16 35L1 26.5V8.5L16 0Z"
                fill="url(#logoGrad)"
              />
              <path
                d="M10 14h6a3 3 0 010 6h-6v-6zm0 0V10h5a2 2 0 010 4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="35" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7c3aed" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="text-[22px] font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
            ByteSpace
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Courses', 'Creators'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="nav-link text-[15px] text-white/70 hover:text-white transition-colors font-medium"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/login"
            className="text-[15px] text-white/70 hover:text-white transition-colors font-medium"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2.5 rounded-full text-[15px] font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:scale-105 active:scale-95"
          >
            Join Us
          </Link>
          {/* Search icon */}
          <button className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-purple-500/50 hover:bg-white/5 transition-all">
            <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden w-9 h-9 flex flex-col gap-1.5 items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0f]/98 backdrop-blur-xl border-t border-white/10 px-8 py-6 flex flex-col gap-5">
          {['Home', 'Courses', 'Creators'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="text-white/70 hover:text-white text-lg font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="flex gap-4 pt-2 border-t border-white/10">
            <Link href="/login" className="flex-1 text-center py-3 rounded-full border border-white/20 text-white/80 hover:bg-white/5 transition-all">
              Sign In
            </Link>
            <Link href="/signup" className="flex-1 text-center py-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold hover:from-violet-500 hover:to-purple-500 transition-all">
              Join Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
