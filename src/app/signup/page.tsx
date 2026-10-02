'use client';

import Link from 'next/link';

export default function SignupPage() {
  return (
    <main style={{
      minHeight:'100vh', background:'#0a0a0f', display:'flex',
      alignItems:'center', justifyContent:'center', padding:'40px 16px',
      position:'relative', overflow:'hidden',
      backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
      backgroundSize:'120px 120px',
    }}>
      {/* glows */}
      <div style={{ position:'absolute', top:'-150px', right:'-100px', width:'500px', height:'500px',
        borderRadius:'50%', background:'rgba(6,182,212,0.13)', filter:'blur(90px)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-140px', left:'-100px', width:'480px', height:'480px',
        borderRadius:'50%', background:'rgba(124,58,237,0.18)', filter:'blur(80px)', pointerEvents:'none' }} />

      <div style={{ width:'100%', maxWidth:'460px', position:'relative', zIndex:1 }}>

        {/* Logo */}
        <Link href="/" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', textDecoration:'none', marginBottom:'36px' }}>
          <svg width="30" height="33" viewBox="0 0 32 35" fill="none">
            <path d="M16 0L31 8.5V26.5L16 35L1 26.5V8.5L16 0Z" fill="url(#slg)"/>
            <path d="M10 14h6a3 3 0 010 6h-6v-6zm0 0V10h5a2 2 0 010 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <defs>
              <linearGradient id="slg" x1="0" y1="0" x2="32" y2="35" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7c3aed"/><stop offset="1" stopColor="#06b6d4"/>
              </linearGradient>
            </defs>
          </svg>
          <span style={{ fontSize:'22px', fontWeight:800, color:'#fff', letterSpacing:'-0.02em' }}>ByteSpace</span>
        </Link>

        {/* Card */}
        <div style={{
          background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.09)',
          borderRadius:'24px', padding:'36px',
          backdropFilter:'blur(16px)', WebkitBackdropFilter:'blur(16px)'
        }}>
          <div style={{ textAlign:'center', marginBottom:'28px' }}>
            <h1 style={{ fontSize:'26px', fontWeight:900, color:'#fff', marginBottom:'6px' }}>Create your account</h1>
            <p style={{ color:'rgba(255,255,255,0.42)', fontSize:'14px' }}>Join 12,000+ learners growing with ByteSpace</p>
          </div>

          {/* Social buttons */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginBottom:'24px' }}>
            {[
              { label:'Google', bg:'rgba(66,133,244,0.15)', border:'rgba(66,133,244,0.30)' },
              { label:'GitHub', bg:'rgba(255,255,255,0.06)', border:'rgba(255,255,255,0.12)' },
            ].map(btn => (
              <button key={btn.label} style={{
                display:'flex', alignItems:'center', justifyContent:'center', gap:'8px',
                padding:'11px', borderRadius:'12px', fontSize:'14px', fontWeight:500,
                background:btn.bg, border:`1px solid ${btn.border}`,
                color:'rgba(255,255,255,0.75)', cursor:'pointer', transition:'all 0.2s'
              }}>{btn.label}</button>
            ))}
          </div>

          {/* Divider */}
          <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'24px' }}>
            <div style={{ flex:1, height:'1px', background:'rgba(255,255,255,0.07)' }} />
            <span style={{ color:'rgba(255,255,255,0.28)', fontSize:'11px', whiteSpace:'nowrap' }}>or sign up with email</span>
            <div style={{ flex:1, height:'1px', background:'rgba(255,255,255,0.07)' }} />
          </div>

          {/* Form */}
          <form style={{ display:'flex', flexDirection:'column', gap:'16px' }}>

            {/* Name row */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }}>
              {[{id:'fn',label:'First name',ph:'John'},{id:'ln',label:'Last name',ph:'Doe'}].map(f => (
                <div key={f.id}>
                  <label style={{ display:'block', color:'rgba(255,255,255,0.55)', fontSize:'13px', marginBottom:'7px', fontWeight:500 }}>{f.label}</label>
                  <input type="text" placeholder={f.ph} style={{
                    width:'100%', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.10)',
                    borderRadius:'12px', padding:'11px 14px', color:'#fff', fontSize:'14px',
                    outline:'none', boxSizing:'border-box', transition:'border-color 0.2s'
                  }}
                    onFocus={e => (e.currentTarget as HTMLElement).style.borderColor='rgba(124,58,237,0.55)'}
                    onBlur={e => (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.10)'}
                  />
                </div>
              ))}
            </div>

            {/* Email */}
            <div>
              <label style={{ display:'block', color:'rgba(255,255,255,0.55)', fontSize:'13px', marginBottom:'7px', fontWeight:500 }}>Email address</label>
              <input type="email" placeholder="you@example.com" style={{
                width:'100%', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.10)',
                borderRadius:'12px', padding:'12px 16px', color:'#fff', fontSize:'14px',
                outline:'none', transition:'border-color 0.2s', boxSizing:'border-box'
              }}
                onFocus={e => (e.currentTarget as HTMLElement).style.borderColor='rgba(124,58,237,0.55)'}
                onBlur={e => (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.10)'}
              />
            </div>

            {/* Password */}
            <div>
              <label style={{ display:'block', color:'rgba(255,255,255,0.55)', fontSize:'13px', marginBottom:'7px', fontWeight:500 }}>Password</label>
              <input type="password" placeholder="Create a strong password" style={{
                width:'100%', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.10)',
                borderRadius:'12px', padding:'12px 16px', color:'#fff', fontSize:'14px',
                outline:'none', transition:'border-color 0.2s', boxSizing:'border-box', marginBottom:'8px'
              }}
                onFocus={e => (e.currentTarget as HTMLElement).style.borderColor='rgba(124,58,237,0.55)'}
                onBlur={e => (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.10)'}
              />
              {/* strength bar */}
              <div style={{ display:'flex', gap:'4px' }}>
                {[1,2,3,4].map(i => (
                  <div key={i} style={{
                    flex:1, height:'3px', borderRadius:'999px',
                    background: i<=1 ? '#ef4444' : 'rgba(255,255,255,0.08)'
                  }} />
                ))}
              </div>
              <p style={{ color:'rgba(255,255,255,0.25)', fontSize:'11px', marginTop:'5px' }}>Use 8+ characters with letters, numbers &amp; symbols</p>
            </div>

            {/* Role picker */}
            <div>
              <label style={{ display:'block', color:'rgba(255,255,255,0.55)', fontSize:'13px', marginBottom:'10px', fontWeight:500 }}>I want to join as</label>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px' }}>
                {[
                  {val:'learner', title:'Learner', sub:'Access courses'},
                  {val:'creator', title:'Creator', sub:'Publish courses'},
                ].map(r => (
                  <label key={r.val} style={{
                    display:'flex', alignItems:'center', gap:'10px',
                    padding:'12px 14px', borderRadius:'12px', cursor:'pointer',
                    border:'1px solid rgba(255,255,255,0.10)',
                    background:'rgba(255,255,255,0.03)', transition:'all 0.2s'
                  }}>
                    <input type="radio" name="role" value={r.val}
                      defaultChecked={r.val==='learner'}
                      style={{ accentColor:'#7c3aed', width:'15px', height:'15px', cursor:'pointer' }} />
                    <div>
                      <div style={{ color:'#fff', fontSize:'13px', fontWeight:600 }}>{r.title}</div>
                      <div style={{ color:'rgba(255,255,255,0.32)', fontSize:'11px' }}>{r.sub}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div style={{ display:'flex', alignItems:'flex-start', gap:'10px' }}>
              <input type="checkbox" id="terms" style={{ width:'15px', height:'15px', marginTop:'1px', accentColor:'#7c3aed', cursor:'pointer', flexShrink:0 }} />
              <label htmlFor="terms" style={{ color:'rgba(255,255,255,0.42)', fontSize:'13px', lineHeight:1.6, cursor:'pointer' }}>
                I agree to the{' '}
                <Link href="#" style={{ color:'#a855f7', textDecoration:'none' }}>Terms of Service</Link>
                {' '}and{' '}
                <Link href="#" style={{ color:'#a855f7', textDecoration:'none' }}>Privacy Policy</Link>
              </label>
            </div>

            <button type="submit" style={{
              width:'100%', padding:'14px', borderRadius:'12px', fontSize:'15px', fontWeight:700,
              background:'linear-gradient(135deg,#7c3aed,#6d28d9)', color:'#fff',
              border:'none', cursor:'pointer', marginTop:'4px',
              boxShadow:'0 6px 24px rgba(124,58,237,0.35)', transition:'all 0.2s'
            }}
              onMouseOver={e => (e.currentTarget as HTMLElement).style.transform='scale(1.02)'}
              onMouseOut={e => (e.currentTarget as HTMLElement).style.transform='scale(1)'}
            >Create Account — It&apos;s Free</button>
          </form>

          <p style={{ textAlign:'center', color:'rgba(255,255,255,0.38)', fontSize:'13px', marginTop:'20px' }}>
            Already have an account?{' '}
            <Link href="/login" style={{ color:'#a855f7', textDecoration:'none', fontWeight:600 }}>Sign in</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
