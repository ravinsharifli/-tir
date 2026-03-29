"use client";

import { Perfume } from '@/lib/types'
import Link from 'next/link'

interface Props {
  perfumes: Perfume[]
  title: string
  subtitle: string
  tag: string
}

export default function PerfumeGrid({ perfumes, title, subtitle, tag }: Props) {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--black)' }}>
      {/* Header */}
      <div style={{ padding: '80px 60px 60px' }}>
        <span style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <span style={{ display: 'block', width: '40px', height: '0.5px', background: 'var(--gold)' }} />
          {tag}
        </span>
        <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 300, lineHeight: 1.0, marginBottom: '16px' }}>
          {title}
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>{subtitle}</p>
      </div>

      {/* Grid */}
      <div style={{ padding: '0 60px 120px' }}>
        {perfumes.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '120px 0' }}>
            <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '24px', fontWeight: 300, color: 'var(--text-muted)', fontStyle: 'italic' }}>
              Tezliklə ətirlər əlavə olunacaq...
            </p>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '16px', letterSpacing: '0.08em' }}>
              Sanity Admin-dən yeni ətir əlavə edə bilərsiniz
            </p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2px' }}>
            {perfumes.map((perfume) => (
              <Link key={perfume._id} href={`/etir/${perfume.slug.current}`} style={{ textDecoration: 'none', display: 'block', background: 'var(--surface)', border: '0.5px solid var(--border)', padding: '40px 32px', transition: 'border-color 0.3s' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}>
                {/* Bottle placeholder */}
                <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', background: 'rgba(201,169,110,0.03)' }}>
                  <svg width="80" height="140" viewBox="0 0 200 340" fill="none">
                    <rect x="40" y="100" width="120" height="215" rx="8" fill="#1a1510" stroke="#c9a96e" strokeWidth="0.5" />
                    <rect x="72" y="60" width="56" height="44" rx="4" fill="#1a1510" stroke="#c9a96e" strokeWidth="0.5" />
                    <rect x="64" y="30" width="72" height="34" rx="4" fill="#c9a96e" />
                    <rect x="52" y="150" width="96" height="120" rx="2" fill="rgba(201,169,110,0.04)" stroke="rgba(201,169,110,0.25)" strokeWidth="0.5" />
                    <text x="100" y="200" fontFamily="Georgia,serif" fontSize="9" fill="#c9a96e" textAnchor="middle" letterSpacing="2">PARFUMER</text>
                  </svg>
                </div>

                <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>{perfume.brand}</div>
                <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '22px', fontWeight: 300, color: 'var(--cream)', marginBottom: '12px' }}>{perfume.name}</div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>{perfume.description}</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '18px', color: 'var(--gold)' }}>
                    {perfume.pricePerMl} ₼/ml
                  </span>
                  {!perfume.inStock && (
                    <span style={{ fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', border: '0.5px solid var(--border)', padding: '4px 8px' }}>
                      Stokda yox
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}