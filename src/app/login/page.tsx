import Link from 'next/link';

export default function LoginPage() {
  return (
    <main style={{
      minHeight:'100vh', background:'#0a0a0f', display:'flex',
      alignItems:'center', justifyContent:'center', padding:'40px 16px',
      position:'relative', overflow:'hidden',
      backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
      backgroundSize:'120px 120px',
    }}>
      {/* glows */}
      <div style={{ position:'absolute', top:'-180px', left:'-100px', width:'500px', height:'500px',
        borderRadius:'50%', background:'rgba(124,58,237,0.20)', filter:'blur(90px)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-140px', right:'-100px', width:'420px', height:'420px',
        borderRadius:'50%', background:'rgba(6,182,212,0.12)', filter:'blur(80px)', pointerEvents:'none' }} />

      <div style={{ width:'100%', maxWidth:'420px', position:'relative', zIndex:1 }}>

        {/* Logo */}
        <Link href="/" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', textDecoration:'none', marginBottom:'36px' }}>
          <svg width="30" height="33" viewBox="0 0 32 35" fill="none">
            <path d="M16 0L31 8.5V26.5L16 35L1 26.5V8.5L16 0Z" fill="url(#llg)"/>
            <path d="M10 14h6a3 3 0 010 6h-6v-6zm0 0V10h5a2 2 0 010 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <defs>
              <linearGradient id="llg" x1="0" y1="0" x2="32" y2="35" gradientUnits="userSpaceOnUse">
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
            <h1 style={{ fontSize:'26px', fontWeight:900, color:'#fff', marginBottom:'6px' }}>Welcome back</h1>
            <p style={{ color:'rgba(255,255,255,0.42)', fontSize:'14px' }}>Sign in to continue your learning journey</p>
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
              }}
                onMouseOver={e => (e.currentTarget as HTMLElement).style.opacity='0.85'}
                onMouseOut={e => (e.currentTarget as HTMLElement).style.opacity='1'}
              >{btn.label}</button>
            ))}
          </div>

          {/* Divider */}
          <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'24px' }}>
            <div style={{ flex:1, height:'1px', background:'rgba(255,255,255,0.07)' }} />
            <span style={{ color:'rgba(255,255,255,0.28)', fontSize:'11px', whiteSpace:'nowrap' }}>or continue with email</span>
            <div style={{ flex:1, height:'1px', background:'rgba(255,255,255,0.07)' }} />
          </div>

          {/* Form */}
          <form style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
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

            <div>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'7px' }}>
                <label style={{ color:'rgba(255,255,255,0.55)', fontSize:'13px', fontWeight:500 }}>Password</label>
                <Link href="#" style={{ color:'#a855f7', fontSize:'12px', textDecoration:'none' }}>Forgot password?</Link>
              </div>
              <input type="password" placeholder="••••••••" style={{
                width:'100%', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.10)',
                borderRadius:'12px', padding:'12px 16px', color:'#fff', fontSize:'14px',
                outline:'none', transition:'border-color 0.2s', boxSizing:'border-box'
              }}
                onFocus={e => (e.currentTarget as HTMLElement).style.borderColor='rgba(124,58,237,0.55)'}
                onBlur={e => (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.10)'}
              />
            </div>

            <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
              <input type="checkbox" id="rem" style={{ width:'16px', height:'16px', accentColor:'#7c3aed', cursor:'pointer' }} />
              <label htmlFor="rem" style={{ color:'rgba(255,255,255,0.45)', fontSize:'13px', cursor:'pointer' }}>Remember me for 30 days</label>
            </div>

            <button type="submit" style={{
              width:'100%', padding:'14px', borderRadius:'12px', fontSize:'15px', fontWeight:700,
              background:'linear-gradient(135deg,#7c3aed,#6d28d9)', color:'#fff',
              border:'none', cursor:'pointer', marginTop:'4px',
              boxShadow:'0 6px 24px rgba(124,58,237,0.35)', transition:'all 0.2s'
            }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.transform='scale(1.02)'; }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.transform='scale(1)'; }}
            >Sign In</button>
          </form>

          <p style={{ textAlign:'center', color:'rgba(255,255,255,0.38)', fontSize:'13px', marginTop:'20px' }}>
            Don&apos;t have an account?{' '}
            <Link href="/signup" style={{ color:'#a855f7', textDecoration:'none', fontWeight:600 }}>Create one free</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
