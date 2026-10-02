export default function CTASection() {
  return (
    <section className="py-28 relative overflow-hidden grid-bg">
      {/* Glow orbs */}
      <div className="glow-orb absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-violet-800/20 pointer-events-none" />
      <div className="glow-orb absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-cyan-800/15 pointer-events-none" />
      <div className="glow-orb absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-purple-900/15 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-[120px] relative z-10">
        <div className="max-w-[860px] mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8">
            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm text-purple-300 font-medium">Join 10,000+ Creators Worldwide</span>
          </div>

          <h2 className="text-[44px] lg:text-[58px] font-black text-white leading-tight mb-6">
            Unlock Your Potential as a{' '}
            <span className="gradient-text">Creator</span>{' '}
            with ByteSpace
          </h2>

          <p className="text-white/55 text-[17px] leading-relaxed mb-10 max-w-[760px] mx-auto">
            Experience the collaboration of numerous creators and an expanding selection of courses.
            Register now and become a part of a community comprising over 10,000 local and international
            creators. Utilize our Course Editor and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 text-white font-bold text-[16px] hover:from-violet-500 hover:to-purple-500 transition-all shadow-2xl shadow-purple-900/40 hover:shadow-purple-900/60 hover:scale-105 active:scale-95">
              Join as Creator
            </button>
            <button className="px-8 py-4 rounded-full border border-white/15 text-white/70 font-semibold text-[16px] hover:border-purple-500/50 hover:text-white hover:bg-purple-500/8 transition-all group">
              Learn More
              <svg className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 mt-12 flex-wrap">
            {[
              { icon: '🔒', text: 'Secure Platform' },
              { icon: '✨', text: 'Free to Start' },
              { icon: '🌍', text: 'Global Reach' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/40 text-sm">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
