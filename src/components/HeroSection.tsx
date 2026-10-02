'use client';

import { useState } from 'react';
import Image from 'next/image';

const avatarColors = [
  'bg-violet-500', 'bg-pink-500', 'bg-cyan-500',
  'bg-orange-500', 'bg-emerald-500', 'bg-blue-500', 'bg-rose-500',
];

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative min-h-screen grid-bg overflow-hidden flex flex-col">
      {/* Background glow orbs */}
      <div className="glow-orb absolute top-[-200px] left-[10%] w-[600px] h-[600px] bg-violet-700/20" />
      <div className="glow-orb absolute top-[200px] right-[-100px] w-[500px] h-[500px] bg-cyan-600/10" />
      <div className="glow-orb absolute bottom-0 left-[40%] w-[800px] h-[400px] bg-purple-900/30" />

      <div className="relative z-10 flex-1 flex flex-col justify-center pt-[80px]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-[120px] w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-80px)]">

            {/* LEFT: Text content */}
            <div className="flex flex-col gap-8 py-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 w-fit">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-sm text-purple-300 font-medium">200+ Courses Available</span>
              </div>

              {/* Headline */}
              <h1 className="text-[52px] lg:text-[64px] font-black leading-[1.08] tracking-tight">
                <span className="text-white">Get Access to </span>
                <span className="gradient-text">Hundreds</span>
                <br />
                <span className="text-white">Courses </span>
                <span className="gradient-text">Available</span>
              </h1>

              <p className="text-[17px] text-white/60 leading-relaxed max-w-[520px]">
                Unlock your creativity, gain valuable knowledge, and grow your business
                with our wide range of courses from world-class creators.
              </p>

              {/* Search Bar */}
              <div className="flex items-center gap-3 max-w-[560px]">
                <div className="flex-1 flex items-center gap-3 bg-white/5 border border-white/12 rounded-full px-5 py-3.5 focus-within:border-purple-500/60 focus-within:bg-white/8 transition-all">
                  <svg className="w-5 h-5 text-white/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Course, topic, creator…"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-white/35 text-[15px] outline-none"
                  />
                </div>
                <button className="px-7 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-[15px] hover:from-violet-500 hover:to-purple-500 transition-all shadow-lg shadow-purple-900/40 hover:shadow-purple-900/60 hover:scale-105 active:scale-95 flex-shrink-0">
                  Search
                </button>
              </div>

              {/* Popular tags */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-white/40">Popular:</span>
                {['UI/UX Design', 'Web Dev', 'Data Science', 'Marketing'].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium border border-white/12 text-white/60 hover:border-purple-500/50 hover:text-purple-300 hover:bg-purple-500/10 transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-10 pt-2">
                {[
                  { value: '12K+', label: 'Students' },
                  { value: '70+', label: 'Courses' },
                  { value: '16', label: 'Creators' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[28px] font-black text-white">{stat.value}</div>
                    <div className="text-sm text-white/50 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Visual cards */}
            <div className="hidden lg:flex relative h-[600px] items-center justify-center">
              {/* Main course image placeholder */}
              <div className="relative w-[480px] h-[460px]">
                {/* Glow behind card */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-cyan-600/20 rounded-3xl blur-2xl" />

                {/* Main card */}
                <div className="relative glass-card rounded-3xl overflow-hidden w-[380px] h-[400px] mx-auto float-anim">
                  <div className="w-full h-[220px] bg-gradient-to-br from-violet-900/60 via-purple-800/40 to-cyan-900/60 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-xl">
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-white font-bold text-lg">UI/UX Design Masterclass</div>
                    <div className="text-white/50 text-sm mt-1">by purepearl studio</div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-violet-400 font-black text-xl">$25</span>
                      <div className="flex items-center gap-1">
                        <span className="text-amber-400 font-semibold text-sm">4.5</span>
                        <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Learning Progress card */}
                <div className="absolute top-[60px] right-[-30px] glass-card rounded-2xl p-4 w-[190px] shadow-2xl border border-purple-500/20">
                  <div className="text-xs text-white/50 mb-2">Learning Progress</div>
                  <div className="text-[36px] font-black text-white leading-none">55%</div>
                  <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="progress-bar h-full w-[55%] transition-all duration-1000" />
                  </div>
                </div>

                {/* Happy Students card */}
                <div className="absolute bottom-[20px] left-[-20px] glass-card rounded-2xl p-4 w-[230px] shadow-2xl border border-cyan-500/20">
                  <div className="text-xs text-white/50 mb-1">Happy Students</div>
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="text-sm text-white/70">4.5 (240)</span>
                    <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="avatar-stack flex items-center">
                    {avatarColors.map((color, i) => (
                      <div key={i} className={`avatar w-8 h-8 rounded-full ${color} flex items-center justify-center text-xs font-bold text-white`}>
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                    <div className="avatar w-8 h-8 rounded-full bg-white/15 border-2 border-[#0a0a0f] flex items-center justify-center text-xs font-bold text-white ml-[-12px]">
                      2K+
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute top-[-10px] left-[30px] glass-card rounded-xl px-4 py-2.5 border border-white/10">
                  <div className="text-sm font-semibold text-white">UI/UX Design</div>
                  <div className="text-xs text-white/50 mt-0.5">200 Courses • 1000+ Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
