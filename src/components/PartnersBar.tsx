export default function PartnersBar() {
  const partners = [
    { name: 'Google', icon: 'G' },
    { name: 'Microsoft', icon: 'M' },
    { name: 'Adobe', icon: 'Ai' },
    { name: 'Figma', icon: 'F' },
    { name: 'Notion', icon: 'N' },
  ];

  return (
    <section className="border-y border-white/6 bg-white/[0.02] py-12">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[120px]">
        <p className="text-center text-sm text-white/35 mb-8 uppercase tracking-widest font-medium">
          Trusted by learners from world-class companies
        </p>
        <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2.5 opacity-40 hover:opacity-70 transition-opacity cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-white font-black text-sm group-hover:bg-purple-500/30 transition-colors">
                {p.icon}
              </div>
              <span className="text-white text-[17px] font-semibold tracking-tight">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
