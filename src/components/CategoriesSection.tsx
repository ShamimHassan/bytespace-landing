const categories = [
  {
    name: 'Design',
    icon: '🎨',
    courses: 200,
    color: 'from-violet-600/20 to-purple-600/10',
    border: 'hover:border-violet-500/40',
    iconBg: 'bg-violet-500/20',
  },
  {
    name: 'Development',
    icon: '💻',
    courses: 350,
    color: 'from-cyan-600/20 to-teal-600/10',
    border: 'hover:border-cyan-500/40',
    iconBg: 'bg-cyan-500/20',
  },
  {
    name: 'IT & Software',
    icon: '🖥️',
    courses: 180,
    color: 'from-blue-600/20 to-indigo-600/10',
    border: 'hover:border-blue-500/40',
    iconBg: 'bg-blue-500/20',
  },
  {
    name: 'Business',
    icon: '📈',
    courses: 140,
    color: 'from-amber-600/20 to-orange-600/10',
    border: 'hover:border-amber-500/40',
    iconBg: 'bg-amber-500/20',
  },
  {
    name: 'Marketing',
    icon: '📣',
    courses: 120,
    color: 'from-rose-600/20 to-pink-600/10',
    border: 'hover:border-rose-500/40',
    iconBg: 'bg-rose-500/20',
  },
  {
    name: 'Photography',
    icon: '📷',
    courses: 95,
    color: 'from-emerald-600/20 to-green-600/10',
    border: 'hover:border-emerald-500/40',
    iconBg: 'bg-emerald-500/20',
  },
];

const tagCloud = [
  'Digital Illustration', 'Film & Video', 'Crafts',
  'Freelance & Entrepreneurship', 'Graphic Design', 'Photography',
  'Productivity', 'Web Development', 'Data Science', 'Cooking',
  'Music', 'Drawing & Painting', 'Marketing', 'Animation',
  'Social Media', 'UI/UX Design', 'Creative Marketing',
];

export default function CategoriesSection() {
  return (
    <section className="py-24 relative" id="categories">
      <div className="glow-orb absolute right-[-100px] top-[200px] w-[500px] h-[500px] bg-cyan-800/10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-[120px]">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/8 mb-4">
              <span className="text-xs text-cyan-300 font-medium uppercase tracking-widest">Categories</span>
            </div>
            <h2 className="text-[42px] lg:text-[52px] font-black text-white leading-tight">
              Featured <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-white/50 text-[16px] mt-3 max-w-[500px]">
              Innovative Paths to Knowledge — explore courses across every field that matters.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-white/12 text-white/60 hover:border-purple-500/50 hover:text-white hover:bg-white/5 transition-all font-medium group">
            View More
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`glass-card ${cat.border} rounded-2xl p-5 flex flex-col items-center gap-3 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className={`w-14 h-14 rounded-2xl ${cat.iconBg} bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <div className="text-center">
                <div className="text-white font-semibold text-sm group-hover:text-purple-200 transition-colors">
                  {cat.name}
                </div>
                <div className="text-white/35 text-xs mt-0.5">{cat.courses} courses</div>
              </div>
            </button>
          ))}
        </div>

        {/* Tag Cloud */}
        <div className="border-t border-white/6 pt-12">
          <p className="text-sm text-white/35 mb-6 uppercase tracking-widest text-center">
            Explore Diverse Learning Paths at Bytespace
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {tagCloud.map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 rounded-full border border-white/10 text-white/50 text-sm hover:border-purple-500/40 hover:text-purple-300 hover:bg-purple-500/8 transition-all"
              >
                {tag}
              </button>
            ))}
            <button className="px-4 py-2 rounded-full border border-dashed border-purple-500/30 text-purple-400 text-sm hover:bg-purple-500/10 transition-all font-medium">
              + More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
