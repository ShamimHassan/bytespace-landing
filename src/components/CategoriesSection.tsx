'use client';

const CATS = [
  { name:'Design',       icon:'🎨', courses:200, accent:'rgba(124,58,237,0.25)' },
  { name:'Development',  icon:'💻', courses:350, accent:'rgba(6,182,212,0.20)' },
  { name:'IT & Software',icon:'🖥️', courses:180, accent:'rgba(59,130,246,0.20)' },
  { name:'Business',     icon:'📈', courses:140, accent:'rgba(245,158,11,0.20)' },
  { name:'Marketing',    icon:'📣', courses:120, accent:'rgba(244,63,94,0.20)' },
  { name:'Photography',  icon:'📷', courses:95,  accent:'rgba(16,185,129,0.20)' },
];

const TAGS = [
  'Digital Illustration','Film & Video','Crafts','Freelance & Entrepreneurship',
  'Graphic Design','Photography','Productivity','Web Development','Data Science',
  'Cooking','Music','Drawing & Painting','Marketing','Animation','Social Media',
  'UI/UX Design','Creative Marketing',
];

export default function CategoriesSection() {
  return (
    <section id="categories" style={{ padding:'96px 0', position:'relative', background:'#0a0a0f' }}>
      {/* glow */}
      <div style={{ position:'absolute', right:'-100px', top:'200px', width:'500px', height:'500px',
        borderRadius:'50%', background:'rgba(6,182,212,0.08)', filter:'blur(80px)', pointerEvents:'none' }} />

      <div style={{ maxWidth:'1280px', margin:'0 auto', padding:'0 40px' }}>

        {/* Header row */}
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:'48px', flexWrap:'wrap', gap:'16px' }}>
          <div>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:'8px',
              padding:'5px 14px', borderRadius:'999px', marginBottom:'12px',
              border:'1px solid rgba(6,182,212,0.28)', background:'rgba(6,182,212,0.10)'
            }}>
              <span style={{ fontSize:'11px', color:'#67e8f9', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase' }}>Categories</span>
            </div>
            <h2 style={{ fontSize:'clamp(32px,4vw,50px)', fontWeight:900, color:'#fff', lineHeight:1.1 }}>
              Featured <span className="gradient-text">Categories</span>
            </h2>
            <p style={{ color:'rgba(255,255,255,0.48)', fontSize:'15px', marginTop:'10px', maxWidth:'460px' }}>
              Innovative Paths to Knowledge — explore every field that matters.
            </p>
          </div>
          <button style={{
            padding:'12px 24px', borderRadius:'999px', fontSize:'14px', fontWeight:600,
            background:'transparent', border:'1px solid rgba(255,255,255,0.12)',
            color:'rgba(255,255,255,0.60)', cursor:'pointer', transition:'all 0.2s'
          }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(124,58,237,0.5)'; (e.currentTarget as HTMLElement).style.color='#fff'; }}
            onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.12)'; (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.60)'; }}
          >View More →</button>
        </div>

        {/* Category cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:'16px', marginBottom:'64px' }}>
          {CATS.map(cat => (
            <button key={cat.name} style={{
              background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)',
              borderRadius:'18px', padding:'24px 16px',
              display:'flex', flexDirection:'column', alignItems:'center', gap:'12px',
              cursor:'pointer', transition:'all 0.3s'
            }}
              onMouseOver={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = cat.accent;
                el.style.borderColor = 'rgba(124,58,237,0.35)';
                el.style.transform = 'translateY(-3px)';
                el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)';
              }}
              onMouseOut={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(255,255,255,0.04)';
                el.style.borderColor = 'rgba(255,255,255,0.08)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width:'56px', height:'56px', borderRadius:'16px',
                background: cat.accent, display:'flex', alignItems:'center',
                justifyContent:'center', fontSize:'24px', transition:'transform 0.2s'
              }}>{cat.icon}</div>
              <div style={{ textAlign:'center' }}>
                <div style={{ color:'#fff', fontWeight:600, fontSize:'13px' }}>{cat.name}</div>
                <div style={{ color:'rgba(255,255,255,0.35)', fontSize:'11px', marginTop:'2px' }}>{cat.courses} courses</div>
              </div>
            </button>
          ))}
        </div>

        {/* Tag cloud */}
        <div style={{ borderTop:'1px solid rgba(255,255,255,0.06)', paddingTop:'48px' }}>
          <p style={{ textAlign:'center', fontSize:'11px', letterSpacing:'0.16em', textTransform:'uppercase',
            color:'rgba(255,255,255,0.3)', marginBottom:'24px', fontWeight:500 }}>
            Explore Diverse Learning Paths at Bytespace
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'10px', justifyContent:'center' }}>
            {TAGS.map(tag => (
              <button key={tag} style={{
                padding:'8px 16px', borderRadius:'999px', fontSize:'13px', fontWeight:500,
                border:'1px solid rgba(255,255,255,0.10)', color:'rgba(255,255,255,0.50)',
                background:'transparent', cursor:'pointer', transition:'all 0.2s'
              }}
                onMouseOver={e => {
                  (e.currentTarget as HTMLElement).style.borderColor='rgba(124,58,237,0.45)';
                  (e.currentTarget as HTMLElement).style.color='#c4b5fd';
                  (e.currentTarget as HTMLElement).style.background='rgba(124,58,237,0.08)';
                }}
                onMouseOut={e => {
                  (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.10)';
                  (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.50)';
                  (e.currentTarget as HTMLElement).style.background='transparent';
                }}
              >{tag}</button>
            ))}
            <button style={{
              padding:'8px 16px', borderRadius:'999px', fontSize:'13px', fontWeight:600,
              border:'1px dashed rgba(124,58,237,0.40)', color:'#a855f7',
              background:'transparent', cursor:'pointer'
            }}>+ More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
