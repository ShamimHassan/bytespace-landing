export default function CTASection() {
  return (
    <section style={{
      padding:'112px 0', position:'relative', overflow:'hidden',
      backgroundImage:
        'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
      backgroundSize:'120px 120px', backgroundColor:'#0a0a0f'
    }}>
      {/* glows */}
      <div style={{ position:'absolute', top:'-150px', left:'-150px', width:'500px', height:'500px',
        borderRadius:'50%', background:'rgba(124,58,237,0.18)', filter:'blur(90px)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-150px', right:'-150px', width:'500px', height:'500px',
        borderRadius:'50%', background:'rgba(6,182,212,0.12)', filter:'blur(80px)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
        width:'800px', height:'300px', borderRadius:'50%',
        background:'rgba(88,28,220,0.14)', filter:'blur(70px)', pointerEvents:'none' }} />

      <div style={{ maxWidth:'1280px', margin:'0 auto', padding:'0 40px', position:'relative', zIndex:1 }}>
        <div style={{ maxWidth:'820px', margin:'0 auto', textAlign:'center' }}>

          {/* badge */}
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'8px',
            padding:'6px 16px', borderRadius:'999px', marginBottom:'32px',
            border:'1px solid rgba(124,58,237,0.35)', background:'rgba(124,58,237,0.12)'
          }}>
            <span style={{ color:'#fbbf24', fontSize:'14px' }}>★</span>
            <span style={{ fontSize:'13px', color:'#c4b5fd', fontWeight:600 }}>Join 10,000+ Creators Worldwide</span>
          </div>

          <h2 style={{ fontSize:'clamp(36px,5vw,58px)', fontWeight:900, color:'#fff', lineHeight:1.1, marginBottom:'24px' }}>
            Unlock Your Potential as a{' '}
            <span className="gradient-text">Creator</span>{' '}
            with ByteSpace
          </h2>

          <p style={{ color:'rgba(255,255,255,0.52)', fontSize:'17px', lineHeight:1.75, marginBottom:'40px', maxWidth:'720px', margin:'0 auto 40px' }}>
            Experience the collaboration of numerous creators and an expanding selection of courses.
            Register now and become a part of a community comprising over 10,000 local and international
            creators. Utilize our Course Editor and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>

          {/* CTA buttons */}
          <div style={{ display:'flex', justifyContent:'center', gap:'16px', flexWrap:'wrap', marginBottom:'48px' }}>
            <button style={{
              padding:'16px 36px', borderRadius:'999px', fontSize:'16px', fontWeight:700,
              background:'linear-gradient(135deg,#7c3aed,#6d28d9)', color:'#fff',
              border:'none', cursor:'pointer', transition:'all 0.2s',
              boxShadow:'0 8px 32px rgba(124,58,237,0.40)'
            }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.transform='scale(1.05)'; (e.currentTarget as HTMLElement).style.boxShadow='0 12px 40px rgba(124,58,237,0.55)'; }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.transform='scale(1)'; (e.currentTarget as HTMLElement).style.boxShadow='0 8px 32px rgba(124,58,237,0.40)'; }}
            >Join as Creator</button>
            <button style={{
              padding:'16px 36px', borderRadius:'999px', fontSize:'16px', fontWeight:600,
              background:'transparent', border:'1px solid rgba(255,255,255,0.15)',
              color:'rgba(255,255,255,0.68)', cursor:'pointer', transition:'all 0.2s'
            }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(124,58,237,0.5)'; (e.currentTarget as HTMLElement).style.color='#fff'; }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.15)'; (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.68)'; }}
            >Learn More →</button>
          </div>

          {/* Trust indicators */}
          <div style={{ display:'flex', justifyContent:'center', gap:'40px', flexWrap:'wrap' }}>
            {[{icon:'🔒',text:'Secure Platform'},{icon:'✨',text:'Free to Start'},{icon:'🌍',text:'Global Reach'}].map(item => (
              <div key={item.text} style={{ display:'flex', alignItems:'center', gap:'8px', color:'rgba(255,255,255,0.35)', fontSize:'13px' }}>
                <span>{item.icon}</span><span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
