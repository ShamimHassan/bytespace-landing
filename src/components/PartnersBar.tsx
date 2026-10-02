'use client';

const partners = [
  { name: 'Google',    icon: 'G', color: '#4285F4' },
  { name: 'Microsoft', icon: 'M', color: '#00A4EF' },
  { name: 'Adobe',     icon: 'Ai', color: '#FF0000' },
  { name: 'Figma',     icon: 'F', color: '#F24E1E' },
  { name: 'Notion',    icon: 'N', color: '#ffffff' },
];

export default function PartnersBar() {
  return (
    <section style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(255,255,255,0.015)',
      padding: '48px 0',
    }}>
      <div style={{ maxWidth:'1280px', margin:'0 auto', padding:'0 40px' }}>
        <p style={{
          textAlign:'center', fontSize:'11px', letterSpacing:'0.18em',
          textTransform:'uppercase', color:'rgba(255,255,255,0.3)',
          marginBottom:'32px', fontWeight:500
        }}>
          Trusted by learners from world-class companies
        </p>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:'48px', flexWrap:'wrap' }}>
          {partners.map(p => (
            <div key={p.name} style={{
              display:'flex', alignItems:'center', gap:'10px',
              opacity:0.4, cursor:'pointer', transition:'opacity 0.2s'
            }}
              onMouseOver={e => ((e.currentTarget as HTMLElement).style.opacity='0.75')}
              onMouseOut={e => ((e.currentTarget as HTMLElement).style.opacity='0.4')}
            >
              <div style={{
                width:'34px', height:'34px', borderRadius:'8px',
                background:'rgba(255,255,255,0.1)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'13px', fontWeight:900, color:p.color
              }}>{p.icon}</div>
              <span style={{ color:'#fff', fontSize:'17px', fontWeight:700, letterSpacing:'-0.01em' }}>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
