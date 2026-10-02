interface CourseCardProps {
  title: string;
  author: string;
  level: string;
  price: string;
  rating: number;
  students: string;
  gradient: string;
  icon: string;
}

export default function CourseCard({
  title,
  author,
  level,
  price,
  rating,
  students,
  gradient,
  icon,
}: CourseCardProps) {
  const avatarColors = ['bg-violet-500', 'bg-pink-500', 'bg-cyan-500', 'bg-orange-500'];

  return (
    <div className="glass-card rounded-2xl overflow-hidden group hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 hover:-translate-y-1">
      {/* Thumbnail */}
      <div className={`h-[185px] ${gradient} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20" />
        <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-3xl shadow-lg">
          {icon}
        </div>
        {/* Level badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-xs text-white/90 font-medium border border-white/15">
          {level}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white font-semibold text-[16px] leading-snug mb-1 line-clamp-2 group-hover:text-purple-200 transition-colors">
          {title}
        </h3>
        <p className="text-white/40 text-[13px] mb-4">{author}</p>

        <div className="flex items-center justify-between">
          {/* Students */}
          <div className="flex items-center gap-0 avatar-stack">
            {avatarColors.map((color, i) => (
              <div
                key={i}
                className={`avatar w-7 h-7 rounded-full ${color} border-2 border-[#12121a] flex items-center justify-center text-[10px] font-bold text-white`}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
            <div className="ml-[-10px] w-7 h-7 rounded-full bg-white/10 border-2 border-[#12121a] flex items-center justify-center text-[9px] font-bold text-white">
              {students}
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <span className="text-white font-bold text-[15px]">{rating}</span>
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/6">
          <div className="flex items-baseline gap-1">
            <span className="text-violet-400 font-black text-[20px]">{price}</span>
            <span className="text-white/35 text-[12px]">/lifetime</span>
          </div>
          <button className="px-4 py-2 rounded-full text-[13px] font-semibold text-white bg-white/8 hover:bg-purple-600/80 border border-white/10 hover:border-purple-500 transition-all">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
