import { client } from '@/lib/sanity'
import { GIFT_BOXES_QUERY } from '@/lib/queries'
import { GiftBox } from '@/lib/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hədiyyə Qutuları',
  description: 'Xüsusi anlar üçün lüks hədiyyə qutuları. Sevdiklərinizə unutulmaz hədiyyə.',
}

export default async function HediyyePage() {
  const giftBoxes: GiftBox[] = await client.fetch(GIFT_BOXES_QUERY)

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--black)' }}>
      <div style={{ padding: '80px 60px 60px' }}>
        <span style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <span style={{ display: 'block', width: '40px', height: '0.5px', background: 'var(--gold)' }} />
          12 set
        </span>
        <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 300, lineHeight: 1.0, marginBottom: '16px' }}>
          Hədiyyə Qutuları
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>Xüsusi anlar üçün</p>
      </div>

      <div style={{ padding: '0 60px 120px' }}>
        {giftBoxes.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '120px 0' }}>
            <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '24px', fontWeight: 300, color: 'var(--text-muted)', fontStyle: 'italic' }}>
              Tezliklə hədiyyə qutuları əlavə olunacaq...
            </p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2px' }}>
            {giftBoxes.map((box) => (
              <div key={box._id} style={{ background: 'var(--surface)', border: '0.5px solid var(--border)', padding: '48px 40px' }}>
                <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', background: 'rgba(201,169,110,0.03)' }}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="0.5">
                    <path d="M20 12v10H4V12" />
                    <path d="M22 7H2v5h20V7z" />
                    <path d="M12 22V7" />
                    <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
                    <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
                  </svg>
                </div>
                <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '24px', fontWeight: 300, color: 'var(--cream)', marginBottom: '12px' }}>{box.name}</div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>{box.description}</p>
                <ul style={{ listStyle: 'none', marginBottom: '32px' }}>
                  {box.includes.map((item) => (
                    <li key={item} style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold-dim)', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '22px', color: 'var(--gold)' }}>
                    {box.price} ₼
                  </span>
                  <button style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', background: 'var(--gold)', color: 'var(--black)', border: 'none', padding: '12px 24px', cursor: 'pointer' }}>
                    Sifariş Et
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}