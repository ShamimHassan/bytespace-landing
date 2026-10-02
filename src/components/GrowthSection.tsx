const FEATURES = [
  { icon:'🎓', label:'Share Your Expertise' },
  { icon:'💸', label:'Monetize Your Passion' },
  { icon:'⚡', label:'Flexibility and Autonomy' },
  { icon:'🌐', label:'Build a Community' },
];

const AVATAR_COLORS = ['#7c3aed','#ec4899','#06b6d4','#f97316','#10b981','#3b82f6','#f43f5e'];

export default function GrowthSection() {
  return (
    <section id="about" style={{ padding:'96px 0', position:'relative', background:'#0a0a0f', overflow:'hidden' }}>
      {/* glows */}
      <div style={{ position:'absolute', top:'-100px', left:'-200px', width:'700px', height:'700px',
        borderRadius:'50%', background:'rgba(124,58,237,0.10)', filter:'blur(90px)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-100px', right:'-200px', width:'600px', height:'600px',
        borderRadius:'50%', background:'rgba(6,182,212,0.07)', filter:'blur(80px)', pointerEvents:'none' }} />

      <div style={{ maxWidth:'1280px', margin:'0 auto', padding:'0 40px' }}>

        {/* ─── Part 1: Your Path ─── */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'center', marginBottom:'120px' }}>

          {/* Left text */}
          <div>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:'8px',
              padding:'5px 14px', borderRadius:'999px', marginBottom:'20px',
              border:'1px solid rgba(124,58,237,0.28)', background:'rgba(124,58,237,0.10)'
            }}>
              <span style={{ fontSize:'11px', color:'#c4b5fd', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase' }}>Why ByteSpace</span>
            </div>
            <h2 style={{ fontSize:'clamp(30px,3.5vw,48px)', fontWeight:900, color:'#fff', lineHeight:1.12, marginBottom:'20px' }}>
              Your Path to{' '}
              <span className="gradient-text">Professional Growth</span>{' '}
              Starts Here!
            </h2>
            <p style={{ color:'rgba(255,255,255,0.54)', fontSize:'16px', lineHeight:1.75, marginBottom:'36px', maxWidth:'460px' }}>
              Explore our curated selection of courses tailored to enhance your capabilities
              and accelerate your career journey. Whether you are looking to sharpen specific
              skills or embark on a new career path entirely, we have the resources you need.
            </p>
            {/* Stats */}
            <div style={{ display:'flex', gap:'48px' }}>
              {[{v:'12K',l:'Students'},{v:'70+',l:'Courses'},{v:'16',l:'Creators'}].map(s => (
                <div key={s.l}>
                  <div className="gradient-text" style={{ fontSize:'40px', fontWeight:900, lineHeight:1 }}>{s.v}</div>
                  <div style={{ color:'rgba(255,255,255,0.42)', fontSize:'13px', marginTop:'4px' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right card visual */}
          <div style={{ position:'relative', height:'440px', display:'flex', alignItems:'center', justifyContent:'center' }}>
            {/* back card */}
            <div style={{
              position:'absolute', top:'16px', left:'16px', right:'16px', bottom:'0',
              background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.06)',
              borderRadius:'22px'
            }} />
            {/* front card */}
            <div style={{
              position:'relative', width:'100%', maxWidth:'360px',
              background:'rgba(255,255,255,0.05)', border:'1px solid rgba(124,58,237,0.22)',
              borderRadius:'22px', overflow:'hidden',
              backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)'
            }}>
              <div style={{ height:'185px', background:'linear-gradient(135deg,rgba(88,28,220,0.7),rgba(6,182,212,0.3))',
                display:'flex', alignItems:'center', justifyContent:'center' }}>
                <div style={{ width:'60px', height:'60px', borderRadius:'16px', background:'rgba(255,255,255,0.15)',
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:'26px' }}>📚</div>
              </div>
              <div style={{ padding:'20px' }}>
                <div style={{ color:'#fff', fontWeight:700, fontSize:'15px', marginBottom:'4px' }}>Learn Figma from Basic</div>
                <div style={{ color:'rgba(255,255,255,0.40)', fontSize:'12px', marginBottom:'14px' }}>by purepearl studio</div>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <div><span style={{ color:'#a855f7', fontWeight:900, fontSize:'20px' }}>$25</span><span style={{ color:'rgba(255,255,255,0.28)', fontSize:'11px' }}>/lifetime</span></div>
                  <div style={{ display:'flex', alignItems:'center', gap:'3px' }}><span style={{ color:'#fff', fontWeight:700 }}>4.5</span><span style={{ color:'#fbbf24' }}>★</span></div>
                </div>
              </div>
            </div>

            {/* Progress float */}
            <div style={{
              position:'absolute', top:'30px', right:'-20px',
              background:'rgba(255,255,255,0.06)', border:'1px solid rgba(6,182,212,0.25)',
              borderRadius:'16px', padding:'16px', width:'175px',
              backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)',
              boxShadow:'0 8px 32px rgba(0,0,0,0.5)'
            }}>
              <div style={{ fontSize:'11px', color:'rgba(255,255,255,0.42)', marginBottom:'6px' }}>Learning Progress</div>
              <div style={{ fontSize:'36px', fontWeight:900, color:'#fff', lineHeight:1 }}>55%</div>
              <div style={{ marginTop:'10px', height:'5px', background:'rgba(255,255,255,0.10)', borderRadius:'999px', overflow:'hidden' }}>
                <div style={{ width:'55%', height:'100%', background:'linear-gradient(90deg,#7c3aed,#a855f7,#06b6d4)', borderRadius:'999px' }} />
              </div>
            </div>
          </div>
        </div>

        {/* ─── Part 2: Create & Manage ─── */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'center' }}>

          {/* Left dashboard mockup */}
          <div style={{ position:'relative', height:'460px', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <div style={{
              width:'100%', maxWidth:'420px',
              background:'rgba(255,255,255,0.04)', border:'1px solid rgba(6,182,212,0.20)',
              borderRadius:'22px', overflow:'hidden',
              backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)',
              padding:'6px'
            }}>
              <div style={{ background:'linear-gradient(135deg,#0d0d18,#111122)', borderRadius:'18px', padding:'20px', display:'flex', flexDirection:'column', gap:'14px' }}>
                {/* Revenue card */}
                <div style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'14px', padding:'16px' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'10px' }}>
                    <div>
                      <div style={{ fontSize:'11px', color:'rgba(255,255,255,0.38)' }}>Total Revenue</div>
                      <div style={{ fontSize:'9px', color:'rgba(255,255,255,0.22)', marginTop:'1px' }}>July 1–28</div>
                    </div>
                    <span style={{ padding:'3px 8px', borderRadius:'999px', background:'rgba(16,185,129,0.18)', color:'#34d399', fontSize:'10px', fontWeight:700 }}>+12$</span>
                  </div>
                  <div style={{ fontSize:'26px', fontWeight:900, color:'#fff' }}>$120.29</div>
                  <div style={{ marginTop:'10px', height:'4px', background:'rgba(255,255,255,0.08)', borderRadius:'999px', overflow:'hidden' }}>
                    <div style={{ width:'72%', height:'100%', background:'linear-gradient(90deg,#7c3aed,#06b6d4)', borderRadius:'999px' }} />
                  </div>
                </div>
                {/* YTD + students row */}
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }}>
                  <div style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'14px', padding:'14px' }}>
                    <div style={{ fontSize:'10px', color:'rgba(255,255,255,0.38)' }}>Year to Date</div>
                    <div style={{ fontSize:'9px', color:'rgba(255,255,255,0.22)', marginBottom:'6px' }}>2023</div>
                    <div style={{ fontSize:'18px', fontWeight:900, color:'#fff' }}>$1,200.38</div>
                    <span style={{ padding:'2px 7px', borderRadius:'999px', background:'rgba(16,185,129,0.18)', color:'#34d399', fontSize:'9px', fontWeight:700, marginTop:'6px', display:'inline-block' }}>+12$</span>
                  </div>
                  <div style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(124,58,237,0.20)', borderRadius:'14px', padding:'14px' }}>
                    <div style={{ fontSize:'10px', color:'rgba(255,255,255,0.38)', marginBottom:'8px' }}>Happy Students</div>
                    <div style={{ display:'flex', alignItems:'center', gap:'3px', marginBottom:'8px' }}>
                      <span style={{ fontSize:'12px', color:'rgba(255,255,255,0.65)' }}>4.5</span>
                      <span style={{ color:'#fbbf24', fontSize:'11px' }}>★</span>
                    </div>
                    <div style={{ display:'flex' }}>
                      {AVATAR_COLORS.slice(0,4).map((bg,i) => (
                        <div key={i} style={{ width:'20px', height:'20px', borderRadius:'50%', background:bg,
                          border:'1.5px solid #0d0d18', marginLeft: i===0?0:'-5px',
                          fontSize:'7px', fontWeight:700, color:'#fff',
                          display:'flex', alignItems:'center', justifyContent:'center' }}>
                          {String.fromCharCode(65+i)}
                        </div>
                      ))}
                      <div style={{ width:'20px', height:'20px', borderRadius:'50%', background:'rgba(255,255,255,0.12)',
                        border:'1.5px solid #0d0d18', marginLeft:'-5px',
                        fontSize:'6px', fontWeight:700, color:'#fff',
                        display:'flex', alignItems:'center', justifyContent:'center' }}>2K+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right text */}
          <div>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:'8px',
              padding:'5px 14px', borderRadius:'999px', marginBottom:'20px',
              border:'1px solid rgba(6,182,212,0.28)', background:'rgba(6,182,212,0.10)'
            }}>
              <span style={{ fontSize:'11px', color:'#67e8f9', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase' }}>For Creators</span>
            </div>
            <h2 style={{ fontSize:'clamp(30px,3.5vw,48px)', fontWeight:900, color:'#fff', lineHeight:1.12, marginBottom:'20px' }}>
              Create &amp; Manage{' '}
              <span className="gradient-text">Courses Easily.</span>
            </h2>
            <p style={{ color:'rgba(255,255,255,0.52)', fontSize:'16px', lineHeight:1.75, marginBottom:'32px' }}>
              ByteSpace supports individuals or entities in the creation, publication,
              and administration of educational courses.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
              {FEATURES.map(f => (
                <div key={f.label} style={{
                  display:'flex', alignItems:'center', gap:'16px',
                  padding:'14px 16px', borderRadius:'14px',
                  border:'1px solid rgba(255,255,255,0.07)',
                  background:'rgba(255,255,255,0.03)',
                  transition:'all 0.2s', cursor:'default'
                }}
                  onMouseOver={e => {
                    (e.currentTarget as HTMLElement).style.borderColor='rgba(124,58,237,0.35)';
                    (e.currentTarget as HTMLElement).style.background='rgba(124,58,237,0.07)';
                  }}
                  onMouseOut={e => {
                    (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.03)';
                  }}
                >
                  <span style={{ fontSize:'20px' }}>{f.icon}</span>
                  <span style={{ color:'rgba(255,255,255,0.72)', fontSize:'15px', fontWeight:500 }}>{f.label}</span>
                  <span style={{ marginLeft:'auto', color:'rgba(255,255,255,0.25)', fontSize:'16px' }}>›</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
