const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: 'SM',
    avatarBg: 'bg-gradient-to-br from-violet-500 to-purple-700',
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    rating: 5,
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: 'JL',
    avatarBg: 'bg-gradient-to-br from-cyan-500 to-teal-700',
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    rating: 5,
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: 'AB',
    avatarBg: 'bg-gradient-to-br from-rose-500 to-pink-700',
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="testimonials">
      <div className="glow-orb absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-violet-800/12 pointer-events-none" />
      <div className="glow-orb absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-cyan-800/10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-[120px]">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/25 bg-amber-500/8 mb-5">
              <span className="text-xs text-amber-300 font-medium uppercase tracking-widest">Testimonials</span>
            </div>
            <h2 className="text-[40px] lg:text-[50px] font-black text-white leading-tight">
              Discover What Our{' '}
              <span className="gradient-text">Community</span>{' '}
              Is Saying
            </h2>
          </div>
          <p className="text-white/50 text-[16px] leading-relaxed lg:mb-2">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 flex flex-col gap-5 hover:border-purple-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/15 group"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/65 text-[15px] leading-relaxed flex-1 italic group-hover:text-white/80 transition-colors">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/6">
                <div className={`w-12 h-12 rounded-full ${t.avatarBg} flex items-center justify-center text-sm font-bold text-white flex-shrink-0 shadow-lg`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-[15px]">{t.name}</div>
                  <div className="text-white/40 text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
