'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    height: '78px', display: 'flex', alignItems: 'center',
    transition: 'all 0.3s ease',
    background: scrolled ? 'rgba(10,10,15,0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
    boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.3)' : 'none',
  };

  return (
    <>
      <nav style={navStyle}>
        <div style={{ maxWidth:'1280px', margin:'0 auto', padding:'0 40px', width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between' }}>

          {/* Logo */}
          <Link href="/" style={{ display:'flex', alignItems:'center', gap:'10px', textDecoration:'none' }}>
            <svg width="32" height="35" viewBox="0 0 32 35" fill="none">
              <path d="M16 0L31 8.5V26.5L16 35L1 26.5V8.5L16 0Z" fill="url(#ng)"/>
              <path d="M10 14h6a3 3 0 010 6h-6v-6zm0 0V10h5a2 2 0 010 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <defs>
                <linearGradient id="ng" x1="0" y1="0" x2="32" y2="35" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7c3aed"/><stop offset="1" stopColor="#06b6d4"/>
                </linearGradient>
              </defs>
            </svg>
            <span style={{ fontSize:'22px', fontWeight:800, color:'#fff', letterSpacing:'-0.02em' }}>ByteSpace</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex" style={{ gap:'32px', alignItems:'center' }}>
            {[{label:'Home',href:'/'},{label:'Courses',href:'#courses'},{label:'Creators',href:'#about'}].map(item => (
              <Link key={item.label} href={item.href} className="nav-link"
                style={{ color:'rgba(255,255,255,0.65)', fontSize:'15px', fontWeight:500, textDecoration:'none', transition:'color 0.2s' }}
                onMouseOver={e => (e.currentTarget.style.color='#fff')}
                onMouseOut={e => (e.currentTarget.style.color='rgba(255,255,255,0.65)')}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth buttons */}
          <div className="hidden md:flex" style={{ gap:'20px', alignItems:'center' }}>
            <Link href="/login"
              style={{ color:'rgba(255,255,255,0.65)', fontSize:'15px', fontWeight:500, textDecoration:'none', transition:'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color='#fff')}
              onMouseOut={e => (e.currentTarget.style.color='rgba(255,255,255,0.65)')}
            >Sign In</Link>
            <Link href="/signup" style={{
              padding:'10px 22px', borderRadius:'999px', fontSize:'14px', fontWeight:700,
              background:'linear-gradient(135deg,#7c3aed,#6d28d9)', color:'#fff',
              textDecoration:'none', transition:'all 0.2s',
              boxShadow:'0 4px 20px rgba(124,58,237,0.35)'
            }}
              onMouseOver={e => { e.currentTarget.style.transform='scale(1.04)'; e.currentTarget.style.boxShadow='0 6px 28px rgba(124,58,237,0.5)'; }}
              onMouseOut={e => { e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.boxShadow='0 4px 20px rgba(124,58,237,0.35)'; }}
            >Join Us</Link>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background:'none', border:'none', cursor:'pointer', display:'flex', flexDirection:'column', gap:'5px', padding:'4px' }}
            aria-label="Menu"
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display:'block', width:'22px', height:'2px', background:'#fff', borderRadius:'2px',
                transition:'all 0.3s',
                transform: mobileOpen ? (i===0?'rotate(45deg) translateY(7px)':i===1?'scaleX(0)':'rotate(-45deg) translateY(-7px)') : 'none',
                opacity: mobileOpen && i===1 ? 0 : 1
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position:'fixed', top:'78px', left:0, right:0, zIndex:49,
          background:'rgba(10,10,15,0.98)', backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)',
          borderBottom:'1px solid rgba(255,255,255,0.08)',
          padding:'24px 40px 32px', display:'flex', flexDirection:'column', gap:'20px'
        }}>
          {[{label:'Home',href:'/'},{label:'Courses',href:'#courses'},{label:'Creators',href:'#about'}].map(item => (
            <Link key={item.label} href={item.href}
              style={{ color:'rgba(255,255,255,0.70)', fontSize:'18px', fontWeight:500, textDecoration:'none' }}
              onClick={() => setMobileOpen(false)}
            >{item.label}</Link>
          ))}
          <div style={{ display:'flex', gap:'12px', paddingTop:'12px', borderTop:'1px solid rgba(255,255,255,0.08)' }}>
            <Link href="/login" style={{
              flex:1, textAlign:'center', padding:'12px', borderRadius:'999px',
              border:'1px solid rgba(255,255,255,0.15)', color:'rgba(255,255,255,0.75)',
              textDecoration:'none', fontSize:'15px', fontWeight:500
            }}>Sign In</Link>
            <Link href="/signup" style={{
              flex:1, textAlign:'center', padding:'12px', borderRadius:'999px',
              background:'linear-gradient(135deg,#7c3aed,#6d28d9)', color:'#fff',
              textDecoration:'none', fontSize:'15px', fontWeight:700
            }}>Join Us</Link>
          </div>
        </div>
      )}
    </>
  );
}
