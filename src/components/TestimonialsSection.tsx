const TESTIMONIALS = [
  {
    name:'Sarah M.', role:'Enthusiastic Learner', initials:'SM',
    grad:'linear-gradient(135deg,#7c3aed,#6d28d9)',
    quote:'"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    stars:5,
  },
  {
    name:'James L.', role:'Lifelong Learner', initials:'JL',
    grad:'linear-gradient(135deg,#06b6d4,#0891b2)',
    quote:'"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    stars:5,
  },
  {
    name:'Alex B.', role:'Inspired Creator', initials:'AB',
    grad:'linear-gradient(135deg,#f43f5e,#be185d)',
    quote:'"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    stars:5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ padding:'96px 0', position:'relative', background:'#0a0a0f', overflow:'hidden' }}>
      {/* glows */}
      <div style={{ position:'absolute', top:'-100px', right:'-100px', width:'600px', height:'600px',
        borderRadius:'50%', background:'rgba(124,58,237,0.10)', filter:'blur(80px)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-100px', left:'-100px', width:'500px', height:'500px',
        borderRadius:'50%', background:'rgba(6,182,212,0.08)', filter:'blur(80px)', pointerEvents:'none' }} />

      <div style={{ maxWidth:'1280px', margin:'0 auto', padding:'0 40px' }}>

        {/* Header */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'48px', alignItems:'flex-end', marginBottom:'56px' }}>
          <div>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:'8px',
              padding:'5px 14px', borderRadius:'999px', marginBottom:'16px',
              border:'1px solid rgba(245,158,11,0.28)', background:'rgba(245,158,11,0.10)'
            }}>
              <span style={{ fontSize:'11px', color:'#fcd34d', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase' }}>Testimonials</span>
            </div>
            <h2 style={{ fontSize:'clamp(30px,3.5vw,50px)', fontWeight:900, color:'#fff', lineHeight:1.12 }}>
              Discover What Our{' '}
              <span className="gradient-text">Community</span>{' '}
              Is Saying
            </h2>
          </div>
          <p style={{ color:'rgba(255,255,255,0.48)', fontSize:'15px', lineHeight:1.75 }}>
            At ByteSpace, our vibrant community of learners and creators is at the heart of
            what we do. Hear directly from those who have experienced the transformative
            journey of learning and creating on our platform.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'24px' }}>
          {TESTIMONIALS.map((t,i) => (
            <div key={i} style={{
              background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)',
              borderRadius:'20px', padding:'28px',
              display:'flex', flexDirection:'column', gap:'20px',
              backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)',
              transition:'all 0.3s'
            }}
              onMouseOver={e => {
                (e.currentTarget as HTMLElement).style.borderColor='rgba(124,58,237,0.28)';
                (e.currentTarget as HTMLElement).style.transform='translateY(-3px)';
                (e.currentTarget as HTMLElement).style.boxShadow='0 16px 48px rgba(0,0,0,0.35)';
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.08)';
                (e.currentTarget as HTMLElement).style.transform='translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow='none';
              }}
            >
              {/* stars */}
              <div style={{ display:'flex', gap:'3px' }}>
                {Array.from({length:t.stars}).map((_,j) => (
                  <span key={j} style={{ color:'#fbbf24', fontSize:'15px' }}>★</span>
                ))}
              </div>
              {/* quote */}
              <p style={{ color:'rgba(255,255,255,0.62)', fontSize:'14px', lineHeight:1.8, flex:1, fontStyle:'italic' }}>
                {t.quote}
              </p>
              {/* author */}
              <div style={{ display:'flex', alignItems:'center', gap:'12px', paddingTop:'16px', borderTop:'1px solid rgba(255,255,255,0.06)' }}>
                <div style={{
                  width:'46px', height:'46px', borderRadius:'50%', background:t.grad,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'14px', fontWeight:700, color:'#fff', flexShrink:0,
                  boxShadow:'0 4px 16px rgba(0,0,0,0.35)'
                }}>{t.initials}</div>
                <div>
                  <div style={{ color:'#fff', fontWeight:600, fontSize:'15px' }}>{t.name}</div>
                  <div style={{ color:'rgba(255,255,255,0.38)', fontSize:'12px', marginTop:'2px' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
