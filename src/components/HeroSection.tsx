'use client';

import { useState } from 'react';
import Link from 'next/link';

const avatarColors = ['#7c3aed','#ec4899','#06b6d4','#f97316','#10b981','#3b82f6','#f43f5e'];

export default function HeroSection() {
  const [query, setQuery] = useState('');

  return (
    <section
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{
        background: '#0a0a0f',
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '120px 120px',
      }}
    >
      {/* Glow orbs */}
      <div style={{
        position:'absolute', top:'-180px', left:'5%',
        width:'640px', height:'640px', borderRadius:'50%',
        background:'rgba(124,58,237,0.18)', filter:'blur(90px)', pointerEvents:'none'
      }} />
      <div style={{
        position:'absolute', top:'300px', right:'-80px',
        width:'500px', height:'500px', borderRadius:'50%',
        background:'rgba(6,182,212,0.10)', filter:'blur(80px)', pointerEvents:'none'
      }} />
      <div style={{
        position:'absolute', bottom:'-60px', left:'38%',
        width:'700px', height:'300px', borderRadius:'50%',
        background:'rgba(88,28,220,0.22)', filter:'blur(70px)', pointerEvents:'none'
      }} />

      <div className="relative z-10 flex-1 flex flex-col justify-center" style={{ paddingTop:'80px' }}>
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center" style={{ minHeight:'calc(100vh - 80px)', paddingTop:'40px', paddingBottom:'40px' }}>

            {/* ── LEFT ── */}
            <div className="flex flex-col gap-7">
              {/* badge */}
              <div style={{
                display:'inline-flex', alignItems:'center', gap:'8px',
                padding:'6px 16px', borderRadius:'999px',
                border:'1px solid rgba(124,58,237,0.35)',
                background:'rgba(124,58,237,0.12)', width:'fit-content'
              }}>
                <span style={{ width:8, height:8, borderRadius:'50%', background:'#a855f7', display:'inline-block', animation:'pulse 2s infinite' }} />
                <span style={{ fontSize:'13px', color:'#c4b5fd', fontWeight:600 }}>200+ Courses Available</span>
              </div>

              {/* headline */}
              <h1 style={{ fontSize:'clamp(42px,5vw,68px)', fontWeight:900, lineHeight:1.08, letterSpacing:'-0.02em' }}>
                <span style={{ color:'#fff' }}>Get Access to </span>
                <span className="gradient-text">Hundreds</span>
                <br />
                <span style={{ color:'#fff' }}>Courses </span>
                <span className="gradient-text">Available</span>
              </h1>

              <p style={{ fontSize:'17px', color:'rgba(255,255,255,0.58)', lineHeight:1.7, maxWidth:'520px' }}>
                Unlock your creativity, gain valuable knowledge, and grow your business
                with our wide range of courses from world-class creators.
              </p>

              {/* search bar */}
              <div style={{ display:'flex', gap:'10px', maxWidth:'560px' }}>
                <div style={{
                  flex:1, display:'flex', alignItems:'center', gap:'10px',
                  background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.12)',
                  borderRadius:'999px', padding:'0 20px', height:'52px'
                }}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.35)" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="M21 21l-4.35-4.35"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Course, topic, creator…"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    style={{ flex:1, background:'transparent', border:'none', outline:'none', color:'#fff', fontSize:'15px' }}
                  />
                </div>
                <button style={{
                  padding:'0 28px', borderRadius:'999px', border:'none', cursor:'pointer',
                  background:'linear-gradient(135deg,#7c3aed,#6d28d9)',
                  color:'#fff', fontWeight:700, fontSize:'15px',
                  boxShadow:'0 4px 24px rgba(124,58,237,0.35)',
                  transition:'all 0.2s', whiteSpace:'nowrap', height:'52px'
                }}
                  onMouseOver={e => (e.currentTarget.style.transform='scale(1.04)')}
                  onMouseOut={e => (e.currentTarget.style.transform='scale(1)')}
                >
                  Search
                </button>
              </div>

              {/* popular tags */}
              <div style={{ display:'flex', alignItems:'center', gap:'8px', flexWrap:'wrap' }}>
                <span style={{ fontSize:'13px', color:'rgba(255,255,255,0.35)' }}>Popular:</span>
                {['UI/UX Design','Web Dev','Data Science','Marketing'].map(t => (
                  <button key={t} style={{
                    padding:'4px 12px', borderRadius:'999px', fontSize:'12px', fontWeight:500,
                    border:'1px solid rgba(255,255,255,0.12)', color:'rgba(255,255,255,0.55)',
                    background:'transparent', cursor:'pointer', transition:'all 0.2s'
                  }}
                    onMouseOver={e => { e.currentTarget.style.borderColor='rgba(168,85,247,0.5)'; e.currentTarget.style.color='#c4b5fd'; }}
                    onMouseOut={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.12)'; e.currentTarget.style.color='rgba(255,255,255,0.55)'; }}
                  >{t}</button>
                ))}
              </div>

              {/* stats */}
              <div style={{ display:'flex', gap:'40px', paddingTop:'8px' }}>
                {[{v:'12K+',l:'Students'},{v:'70+',l:'Courses'},{v:'16',l:'Creators'}].map(s => (
                  <div key={s.l}>
                    <div style={{ fontSize:'30px', fontWeight:900, color:'#fff' }}>{s.v}</div>
                    <div style={{ fontSize:'13px', color:'rgba(255,255,255,0.45)', marginTop:'2px' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT ── */}
            <div className="hidden lg:flex" style={{ position:'relative', height:'580px', alignItems:'center', justifyContent:'center' }}>

              {/* main course card */}
              <div className="float-anim" style={{
                position:'relative', width:'340px',
                background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.10)',
                borderRadius:'24px', overflow:'hidden',
                backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)'
              }}>
                {/* thumbnail */}
                <div style={{
                  height:'200px',
                  background:'linear-gradient(135deg,rgba(88,28,220,0.7),rgba(6,182,212,0.4))',
                  display:'flex', alignItems:'center', justifyContent:'center'
                }}>
                  <div style={{
                    width:'64px', height:'64px', borderRadius:'16px',
                    background:'rgba(255,255,255,0.15)', backdropFilter:'blur(8px)',
                    display:'flex', alignItems:'center', justifyContent:'center', fontSize:'28px'
                  }}>📚</div>
                </div>
                {/* card body */}
                <div style={{ padding:'20px' }}>
                  <div style={{ color:'#fff', fontWeight:700, fontSize:'16px', marginBottom:'4px' }}>UI/UX Design Masterclass</div>
                  <div style={{ color:'rgba(255,255,255,0.45)', fontSize:'13px', marginBottom:'16px' }}>by purepearl studio</div>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    <div>
                      <span style={{ color:'#a855f7', fontWeight:900, fontSize:'22px' }}>$25</span>
                      <span style={{ color:'rgba(255,255,255,0.3)', fontSize:'12px' }}>/lifetime</span>
                    </div>
                    <div style={{ display:'flex', alignItems:'center', gap:'4px' }}>
                      <span style={{ color:'#fff', fontWeight:700 }}>4.5</span>
                      <span style={{ color:'#fbbf24', fontSize:'16px' }}>★</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning Progress card */}
              <div style={{
                position:'absolute', top:'60px', right:'-20px',
                background:'rgba(255,255,255,0.06)', border:'1px solid rgba(6,182,212,0.25)',
                borderRadius:'16px', padding:'16px', width:'180px',
                backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)',
                boxShadow:'0 8px 32px rgba(0,0,0,0.4)'
              }}>
                <div style={{ fontSize:'11px', color:'rgba(255,255,255,0.45)', marginBottom:'6px' }}>Learning Progress</div>
                <div style={{ fontSize:'38px', fontWeight:900, color:'#fff', lineHeight:1 }}>55%</div>
                <div style={{ marginTop:'10px', height:'6px', background:'rgba(255,255,255,0.1)', borderRadius:'999px', overflow:'hidden' }}>
                  <div style={{ width:'55%', height:'100%', background:'linear-gradient(90deg,#7c3aed,#a855f7,#06b6d4)', borderRadius:'999px' }} />
                </div>
              </div>

              {/* Happy Students card */}
              <div style={{
                position:'absolute', bottom:'30px', left:'-30px',
                background:'rgba(255,255,255,0.06)', border:'1px solid rgba(124,58,237,0.25)',
                borderRadius:'16px', padding:'16px', width:'220px',
                backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)',
                boxShadow:'0 8px 32px rgba(0,0,0,0.4)'
              }}>
                <div style={{ fontSize:'11px', color:'rgba(255,255,255,0.45)', marginBottom:'4px' }}>Happy Students</div>
                <div style={{ display:'flex', alignItems:'center', gap:'6px', marginBottom:'10px' }}>
                  <span style={{ fontSize:'13px', color:'rgba(255,255,255,0.65)' }}>4.5 (240)</span>
                  <span style={{ color:'#fbbf24' }}>★</span>
                </div>
                <div style={{ display:'flex', alignItems:'center' }}>
                  {avatarColors.map((bg, i) => (
                    <div key={i} style={{
                      width:'30px', height:'30px', borderRadius:'50%', background:bg,
                      border:'2px solid #0a0a0f', marginLeft: i === 0 ? 0 : '-8px',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      fontSize:'11px', fontWeight:700, color:'#fff'
                    }}>
                      {String.fromCharCode(65+i)}
                    </div>
                  ))}
                  <div style={{
                    width:'30px', height:'30px', borderRadius:'50%', background:'rgba(255,255,255,0.15)',
                    border:'2px solid #0a0a0f', marginLeft:'-8px',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:'9px', fontWeight:700, color:'#fff'
                  }}>2K+</div>
                </div>
              </div>

              {/* Category badge */}
              <div style={{
                position:'absolute', top:'-5px', left:'20px',
                background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.10)',
                borderRadius:'12px', padding:'10px 16px',
                backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)'
              }}>
                <div style={{ color:'#fff', fontWeight:600, fontSize:'13px' }}>UI/UX Design</div>
                <div style={{ color:'rgba(255,255,255,0.40)', fontSize:'11px', marginTop:'2px' }}>200 Courses • 1000+ Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
