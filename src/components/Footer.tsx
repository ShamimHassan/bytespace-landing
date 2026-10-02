import Link from 'next/link';

const BROWSE  = ['Featured Courses','Featured Categories','Business','IT','Design','Development','Marketing','Photography','Finance','Sport'];
const PLATFORM = ['Become a Creator','Affiliate Program','Contact','Help','About'];
const CONNECT  = ['Twitter / X','LinkedIn','Instagram','YouTube','Discord'];

export default function Footer() {
  return (
    <footer style={{ background:'#060609', borderTop:'1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth:'1280px', margin:'0 auto', padding:'64px 40px 0' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:'64px', marginBottom:'48px', flexWrap:'wrap' }}>

          {/* ── Left: brand + newsletter ── */}
          <div style={{ maxWidth:'480px' }}>
            <Link href="/" style={{ display:'inline-flex', alignItems:'center', gap:'10px', textDecoration:'none', marginBottom:'12px' }}>
              <svg width="30" height="33" viewBox="0 0 32 35" fill="none">
                <path d="M16 0L31 8.5V26.5L16 35L1 26.5V8.5L16 0Z" fill="url(#fg)"/>
                <path d="M10 14h6a3 3 0 010 6h-6v-6zm0 0V10h5a2 2 0 010 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="fg" x1="0" y1="0" x2="32" y2="35" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7c3aed"/><stop offset="1" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
              </svg>
              <span style={{ fontSize:'20px', fontWeight:800, color:'#fff', letterSpacing:'-0.02em' }}>ByteSpace</span>
            </Link>

            <p style={{ color:'rgba(255,255,255,0.40)', fontSize:'14px', lineHeight:1.7, marginBottom:'24px' }}>
              Stay up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* email input */}
            <div style={{ display:'flex', gap:'10px', marginBottom:'10px' }}>
              <div style={{
                flex:1, display:'flex', alignItems:'center', gap:'10px',
                background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.10)',
                borderRadius:'999px', padding:'0 18px', height:'48px'
              }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.28)" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    flex:1, background:'transparent', border:'none', outline:'none',
                    color:'#fff', fontSize:'14px'
                  }}
                />
              </div>
              <button style={{
                padding:'0 22px', borderRadius:'999px', fontSize:'14px', fontWeight:700,
                background:'linear-gradient(135deg,#7c3aed,#6d28d9)', color:'#fff',
                border:'none', cursor:'pointer', whiteSpace:'nowrap', height:'48px',
                boxShadow:'0 4px 16px rgba(124,58,237,0.35)', transition:'all 0.2s'
              }}
                onMouseOver={e => (e.currentTarget as HTMLElement).style.transform='scale(1.04)'}
                onMouseOut={e => (e.currentTarget as HTMLElement).style.transform='scale(1)'}
              >Subscribe</button>
            </div>
            <p style={{ color:'rgba(255,255,255,0.22)', fontSize:'11px', lineHeight:1.6 }}>
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* ── Right: nav columns ── */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'40px' }}>
            {[
              { heading:'Browse',   links: BROWSE },
              { heading:'Platform', links: PLATFORM },
              { heading:'Connect',  links: CONNECT },
            ].map(col => (
              <div key={col.heading}>
                <h4 style={{ color:'#fff', fontWeight:700, fontSize:'14px', marginBottom:'20px' }}>{col.heading}</h4>
                <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'10px' }}>
                  {col.links.map(l => (
                    <li key={l}>
                      <Link href="#" style={{
                        color:'rgba(255,255,255,0.40)', fontSize:'13px', textDecoration:'none',
                        transition:'color 0.2s', display:'inline-block'
                      }}
                        onMouseOver={e => (e.currentTarget as HTMLElement).style.color='#fff'}
                        onMouseOut={e => (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.40)'}
                      >{l}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'12px',
          padding:'20px 0', borderTop:'1px solid rgba(255,255,255,0.06)'
        }}>
          <p style={{ color:'rgba(255,255,255,0.28)', fontSize:'13px' }}>
            © 2024 ByteSpace. All rights reserved.
          </p>
          <div style={{ display:'flex', gap:'24px' }}>
            {['Privacy Policy','Terms of Service','Cookies Settings'].map(l => (
              <Link key={l} href="#" style={{
                color:'rgba(255,255,255,0.28)', fontSize:'13px', textDecoration:'none', transition:'color 0.2s'
              }}
                onMouseOver={e => (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.65)'}
                onMouseOut={e => (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.28)'}
              >{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
