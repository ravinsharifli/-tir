import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Haqqımızda',
  description: 'Parfumer — Bakıda ilk lüks qramla ətir mağazası. Bizim hekayəmiz.',
}

export default function HaqqimızdaPage() {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--black)' }}>
      {/* Header */}
      <div style={{ padding: '80px 60px 80px', maxWidth: '800px' }}>
        <span style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <span style={{ display: 'block', width: '40px', height: '0.5px', background: 'var(--gold)' }} />
          Bizim hekayəmiz
        </span>
        <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 300, lineHeight: 1.0, marginBottom: '32px' }}>
          Haqqımızda
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 2, color: 'var(--text-mid)', marginBottom: '24px' }}>
          Parfumer — Bakıda ilk lüks qramla ətir mağazasıdır. Dünyanın ən seçkin ətir evlərindən gətirilən ətirlər, sənin qiymətinə.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 2, color: 'var(--text-mid)', marginBottom: '24px' }}>
          Biz inanırıq ki, hər insan lüks ətir hissi yaşamalıdır. Buna görə minimum 15ml-dən başlayan sifarişlərlə, sevdiyin ətiri tam flakon almadan sına bilərsən.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 2, color: 'var(--text-mid)' }}>
          Gəlirimizin 5%-i xeyriyyəyə ayrılır — küçə heyvanlarının qorunması, tələbələrin təhsil haqqı və ehtiyac sahiblərinin dəstəklənməsi.
        </p>
      </div>

      {/* Stats */}
      <div style={{ borderTop: '0.5px solid var(--border)', borderBottom: '0.5px solid var(--border)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {[
          { num: '100+', label: 'Lüks ətir' },
          { num: '15ml', label: 'Minimum sifariş' },
          { num: '5%', label: 'Xeyriyyəyə' },
        ].map((stat, i) => (
          <div key={i} style={{ padding: '60px', borderRight: i < 2 ? '0.5px solid var(--border)' : 'none', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '56px', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>{stat.num}</div>
            <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '12px' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Xeyriyyə */}
      <div id="xeyriyye" style={{ padding: '100px 60px', maxWidth: '800px' }}>
        <span style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <span style={{ display: 'block', width: '40px', height: '0.5px', background: 'var(--gold)' }} />
          Sosial Məsuliyyət
        </span>
        <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '32px' }}>
          Hər sifarişin <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>5%-i</em> xeyriyyəyə gedir
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', marginTop: '48px' }}>
          {[
            { icon: '🐾', title: 'Küçə Heyvanları', desc: 'Bakı küçələrindəki heyvanların qidalandırılması və müalicəsi.' },
            { icon: '📚', title: 'Tələbə Təhsili', desc: 'Ehtiyaclı tələbələrin təhsil haqqının ödənilməsinə dəstək.' },
            { icon: '🤝', title: 'Ehtiyac Sahibləri', desc: 'Aztəminatlı ailələrə aylıq ərzaq və maliyyə dəstəyi.' },
          ].map((item) => (
            <div key={item.title} style={{ padding: '40px 32px', background: 'var(--surface)', border: '0.5px solid var(--border)' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{item.icon}</div>
              <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '20px', fontWeight: 300, marginBottom: '12px' }}>{item.title}</div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.8 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}