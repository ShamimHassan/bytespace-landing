'use client';

import { useState } from 'react';
import CourseCard from './CourseCard';

const TABS = ['Featured','Music','Drawing & Painting','Marketing','Animation','Social Media','UI/UX Design'];

const COURSES = [
  { title:'Learn Figma from Basic',                 author:'by purepearl studio', level:'Beginner', price:'$25', rating:4.5, students:'26+', gradient:'', icon:'🎨', tab:'UI/UX Design' },
  { title:'Build Digital Asset',                    author:'by purepearl studio', level:'Beginner', price:'$25', rating:4.5, students:'26+', gradient:'', icon:'💎', tab:'Featured' },
  { title:'The Power of Big Data',                  author:'by purepearl studio', level:'Beginner', price:'$25', rating:4.5, students:'26+', gradient:'', icon:'📊', tab:'Featured' },
  { title:'Balancing Productivity and Self-Care',   author:'by purepearl studio', level:'Beginner', price:'$25', rating:4.5, students:'26+', gradient:'', icon:'🧘', tab:'Featured' },
  { title:'Mastering Money Management',             author:'by purepearl studio', level:'Beginner', price:'$25', rating:4.5, students:'26+', gradient:'', icon:'💰', tab:'Marketing' },
  { title:'From Idea to Startup Success',           author:'by purepearl studio', level:'Beginner', price:'$25', rating:4.5, students:'26+', gradient:'', icon:'🚀', tab:'Featured' },
];

export default function CoursesSection() {
  const [active, setActive] = useState('Featured');
  const shown = COURSES.filter(c => active === 'Featured' || c.tab === active);
  const display = shown.length ? shown : COURSES;

  return (
    <section id="courses" style={{ padding:'96px 0', position:'relative', background:'#0a0a0f' }}>
      {/* glow */}
      <div style={{ position:'absolute', top:0, left:'-200px', width:'600px', height:'400px',
        borderRadius:'50%', background:'rgba(124,58,237,0.08)', filter:'blur(80px)', pointerEvents:'none' }} />

      <div style={{ maxWidth:'1280px', margin:'0 auto', padding:'0 40px' }}>

        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:'56px' }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'8px',
            padding:'5px 14px', borderRadius:'999px', marginBottom:'16px',
            border:'1px solid rgba(124,58,237,0.28)', background:'rgba(124,58,237,0.10)'
          }}>
            <span style={{ fontSize:'11px', color:'#c4b5fd', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase' }}>Our Courses</span>
          </div>
          <h2 style={{ fontSize:'clamp(34px,4vw,52px)', fontWeight:900, color:'#fff', lineHeight:1.1, marginBottom:'16px' }}>
            Discover Your Passion,<br />
            <span className="gradient-text">Build Your Skills</span>
          </h2>
          <p style={{ color:'rgba(255,255,255,0.50)', fontSize:'16px', maxWidth:'620px', margin:'0 auto', lineHeight:1.7 }}>
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display:'flex', gap:'8px', flexWrap:'wrap', justifyContent:'center', marginBottom:'40px' }}>
          {TABS.map(tab => (
            <button key={tab} onClick={() => setActive(tab)} style={{
              padding:'9px 20px', borderRadius:'999px', fontSize:'13px', fontWeight:600,
              cursor:'pointer', transition:'all 0.2s',
              background: active===tab ? 'linear-gradient(135deg,#7c3aed,#6d28d9)' : 'transparent',
              color: active===tab ? '#fff' : 'rgba(255,255,255,0.50)',
              border: active===tab ? '1px solid transparent' : '1px solid rgba(255,255,255,0.10)',
              boxShadow: active===tab ? '0 4px 16px rgba(124,58,237,0.35)' : 'none',
            }}
              onMouseOver={e => { if(active!==tab)(e.currentTarget as HTMLElement).style.color='#fff'; }}
              onMouseOut={e => { if(active!==tab)(e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.50)'; }}
            >{tab}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px,1fr))', gap:'24px' }}>
          {display.map((c,i) => <CourseCard key={i} {...c} />)}
        </div>

        {/* View All */}
        <div style={{ textAlign:'center', marginTop:'48px' }}>
          <button style={{
            padding:'14px 36px', borderRadius:'999px', fontSize:'15px', fontWeight:600,
            background:'transparent', border:'1px solid rgba(255,255,255,0.15)',
            color:'rgba(255,255,255,0.65)', cursor:'pointer', transition:'all 0.2s'
          }}
            onMouseOver={e => {
              (e.currentTarget as HTMLElement).style.borderColor='rgba(124,58,237,0.5)';
              (e.currentTarget as HTMLElement).style.color='#fff';
              (e.currentTarget as HTMLElement).style.background='rgba(124,58,237,0.08)';
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.15)';
              (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.65)';
              (e.currentTarget as HTMLElement).style.background='transparent';
            }}
          >View All Courses →</button>
        </div>
      </div>
    </section>
  );
}
