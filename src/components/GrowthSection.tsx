const features = [
  { icon: '🎓', label: 'Share Your Expertise' },
  { icon: '💸', label: 'Monetize Your Passion' },
  { icon: '⚡', label: 'Flexibility and Autonomy' },
  { icon: '🌐', label: 'Build a Community' },
];

const avatarColors = [
  'bg-violet-500', 'bg-pink-500', 'bg-cyan-500',
  'bg-orange-500', 'bg-emerald-500', 'bg-blue-500', 'bg-rose-500',
];

export default function GrowthSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Background glows */}
      <div className="glow-orb absolute top-[-100px] left-[-200px] w-[700px] h-[700px] bg-violet-900/15 pointer-events-none" />
      <div className="glow-orb absolute bottom-[-100px] right-[-200px] w-[600px] h-[600px] bg-cyan-900/10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-[120px]">

        {/* ─── Part 1: Your Path to Growth ─── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          {/* Left text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/25 bg-purple-500/8 mb-6">
              <span className="text-xs text-purple-300 font-medium uppercase tracking-widest">Why ByteSpace</span>
            </div>
            <h2 className="text-[40px] lg:text-[50px] font-black text-white leading-tight mb-6">
              Your Path to{' '}
              <span className="gradient-text">Professional Growth</span>{' '}
              Starts Here!
            </h2>
            <p className="text-white/55 text-[16px] leading-relaxed mb-8 max-w-[480px]">
              Explore our curated selection of courses tailored to enhance your capabilities
              and accelerate your career journey. Whether you are looking to sharpen specific
              skills, gain industry expertise, or embark on a new career path entirely, we
              have the resources you need.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-10">
              {[
                { value: '12K', label: 'Students' },
                { value: '70+', label: 'Courses' },
                { value: '16', label: 'Creators' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-[38px] font-black gradient-text leading-none">{s.value}</div>
                  <div className="text-white/45 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: course card stack */}
          <div className="relative h-[480px] flex items-center justify-center">
            <div className="glow-orb absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-600/10 rounded-3xl" />

            {/* Stacked cards */}
            <div className="relative w-full max-w-[420px]">
              {/* Back card (decorative) */}
              <div className="absolute top-4 left-4 right-4 h-[380px] glass-card rounded-2xl opacity-40" />

              {/* Front card */}
              <div className="relative glass-card rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="h-[190px] bg-gradient-to-br from-violet-900/80 to-purple-700/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center text-3xl">📚</div>
                </div>
                <div className="p-5">
                  <div className="text-white font-bold text-[16px] mb-1">Learn Figma from Basic</div>
                  <div className="text-white/40 text-sm mb-4">by purepearl studio</div>
                  <div className="flex items-center justify-between">
                    <span className="text-violet-400 font-black text-[20px]">$25<span className="text-white/30 text-xs font-normal">/lifetime</span></span>
                    <div className="flex items-center gap-1">
                      <span className="text-white font-bold">4.5</span>
                      <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning Progress float card */}
              <div className="absolute top-[-20px] right-[-50px] glass-card rounded-2xl p-4 w-[180px] border border-cyan-500/20 shadow-2xl">
                <div className="text-xs text-white/50 mb-2">Learning Progress</div>
                <div className="text-[34px] font-black text-white leading-none">55%</div>
                <div className="mt-2 h-2 bg-white/10 rounded-full">
                  <div className="progress-bar h-full w-[55%] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Part 2: Create & Manage ─── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: dashboard mockup */}
          <div className="relative h-[480px] flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[460px]">
              <div className="glow-orb absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-violet-600/10 rounded-3xl" />

              {/* Main image card */}
              <div className="relative glass-card rounded-3xl overflow-hidden border border-cyan-500/20 p-1">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-[#0a0a0f] h-[340px] flex flex-col p-5 gap-4">
                  {/* Revenue card */}
                  <div className="glass-card rounded-xl p-4 border border-white/8">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="text-xs text-white/40">Total Revenue</div>
                        <div className="text-[9px] text-white/25">July 1–28</div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold">+12$</span>
                    </div>
                    <div className="text-2xl font-black text-white">$120.29</div>
                    <div className="mt-2 h-1.5 bg-white/8 rounded-full">
                      <div className="progress-bar h-full w-[72%] rounded-full" />
                    </div>
                  </div>

                  {/* Year to date */}
                  <div className="glass-card rounded-xl p-4 border border-white/8 w-[48%]">
                    <div className="text-xs text-white/40">Year to Date</div>
                    <div className="text-[9px] text-white/25 mb-2">2023</div>
                    <div className="text-xl font-black text-white">$1,200.38</div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold mt-1 inline-block">+12$</span>
                  </div>
                </div>
              </div>

              {/* Happy students float */}
              <div className="absolute bottom-[-15px] right-[-20px] glass-card rounded-2xl p-4 w-[220px] border border-purple-500/20 shadow-2xl">
                <div className="text-xs text-white/50 mb-1">Happy Students</div>
                <div className="flex items-center gap-1 mb-3">
                  <span className="text-sm text-white/70">4.5 (240)</span>
                  <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="flex items-center avatar-stack">
                  {avatarColors.map((c, i) => (
                    <div key={i} className={`avatar w-8 h-8 rounded-full ${c} border-2 border-[#12121a] flex items-center justify-center text-xs font-bold text-white`}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                  <div className="avatar w-8 h-8 rounded-full bg-white/10 border-2 border-[#12121a] flex items-center justify-center text-[10px] font-bold text-white ml-[-12px]">
                    2K+
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right text */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/8 mb-6">
              <span className="text-xs text-cyan-300 font-medium uppercase tracking-widest">For Creators</span>
            </div>
            <h2 className="text-[40px] lg:text-[50px] font-black text-white leading-tight mb-6">
              Create &amp; Manage{' '}
              <span className="gradient-text">Courses Easily.</span>
            </h2>
            <p className="text-white/55 text-[16px] leading-relaxed mb-8">
              ByteSpace supports individuals or entities in the creation, publication,
              and administration of educational courses.
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-4">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-600/20 flex items-center justify-center text-lg flex-shrink-0 border border-white/8 group-hover:border-purple-500/40 transition-all">
                    {f.icon}
                  </div>
                  <span className="text-white/70 text-[16px] group-hover:text-white transition-colors">{f.label}</span>
                  <svg className="w-4 h-4 text-white/20 group-hover:text-purple-400 ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
