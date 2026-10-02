'use client';

interface CourseCardProps {
  title: string;
  author: string;
  level: string;
  price: string;
  rating: number;
  students: string;
  gradient: string;
  icon: string;
}

const avatarColors = ['#7c3aed','#ec4899','#06b6d4','#f97316'];

export default function CourseCard({ title, author, level, price, rating, icon, students }: CourseCardProps) {
  return (
    <div style={{
      background:'rgba(255,255,255,0.04)',
      border:'1px solid rgba(255,255,255,0.08)',
      borderRadius:'20px', overflow:'hidden',
      backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)',
      transition:'all 0.3s ease',
      cursor:'pointer',
    }}
      onMouseOver={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(-4px)';
        el.style.borderColor = 'rgba(124,58,237,0.35)';
        el.style.boxShadow = '0 20px 60px rgba(124,58,237,0.15)';
      }}
      onMouseOut={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(0)';
        el.style.borderColor = 'rgba(255,255,255,0.08)';
        el.style.boxShadow = 'none';
      }}
    >
      {/* Thumbnail */}
      <div style={{
        height:'185px',
        background:'linear-gradient(135deg,rgba(88,28,220,0.65),rgba(6,182,212,0.35))',
        display:'flex', alignItems:'center', justifyContent:'center',
        position:'relative'
      }}>
        <div style={{
          width:'60px', height:'60px', borderRadius:'16px',
          background:'rgba(255,255,255,0.15)', backdropFilter:'blur(8px)',
          display:'flex', alignItems:'center', justifyContent:'center', fontSize:'26px'
        }}>{icon}</div>
        {/* level badge */}
        <div style={{
          position:'absolute', top:'12px', left:'12px',
          padding:'3px 10px', borderRadius:'999px',
          background:'rgba(0,0,0,0.45)', backdropFilter:'blur(8px)',
          fontSize:'11px', color:'rgba(255,255,255,0.85)', fontWeight:500,
          border:'1px solid rgba(255,255,255,0.12)'
        }}>{level}</div>
      </div>

      {/* Body */}
      <div style={{ padding:'20px' }}>
        <h3 style={{ color:'#fff', fontWeight:700, fontSize:'15px', lineHeight:1.4, marginBottom:'4px' }}>
          {title}
        </h3>
        <p style={{ color:'rgba(255,255,255,0.38)', fontSize:'12px', marginBottom:'16px' }}>{author}</p>

        {/* Students + Rating */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'16px' }}>
          <div style={{ display:'flex', alignItems:'center' }}>
            {avatarColors.map((bg,i) => (
              <div key={i} style={{
                width:'26px', height:'26px', borderRadius:'50%', background:bg,
                border:'2px solid #12121a', marginLeft: i===0?0:'-7px',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'9px', fontWeight:700, color:'#fff'
              }}>{String.fromCharCode(65+i)}</div>
            ))}
            <div style={{
              width:'26px', height:'26px', borderRadius:'50%',
              background:'rgba(255,255,255,0.12)',
              border:'2px solid #12121a', marginLeft:'-7px',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:'8px', fontWeight:700, color:'#fff'
            }}>{students}</div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:'3px' }}>
            <span style={{ color:'#fff', fontWeight:700, fontSize:'14px' }}>{rating}</span>
            <span style={{ color:'#fbbf24', fontSize:'14px' }}>★</span>
          </div>
        </div>

        {/* Price + CTA */}
        <div style={{
          display:'flex', alignItems:'center', justifyContent:'space-between',
          paddingTop:'14px', borderTop:'1px solid rgba(255,255,255,0.06)'
        }}>
          <div>
            <span style={{ color:'#a855f7', fontWeight:900, fontSize:'20px' }}>{price}</span>
            <span style={{ color:'rgba(255,255,255,0.3)', fontSize:'11px' }}>/lifetime</span>
          </div>
          <button style={{
            padding:'7px 16px', borderRadius:'999px', fontSize:'12px', fontWeight:600,
            background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.10)',
            color:'rgba(255,255,255,0.80)', cursor:'pointer', transition:'all 0.2s'
          }}
            onMouseOver={e => {
              (e.currentTarget as HTMLElement).style.background='rgba(124,58,237,0.7)';
              (e.currentTarget as HTMLElement).style.borderColor='#7c3aed';
              (e.currentTarget as HTMLElement).style.color='#fff';
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.07)';
              (e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.10)';
              (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.80)';
            }}
          >Enroll Now</button>
        </div>
      </div>
    </div>
  );
}
