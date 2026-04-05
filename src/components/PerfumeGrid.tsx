"use client";

import { Perfume } from '@/lib/types'
import { urlFor } from '@/lib/sanity'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  perfumes: Perfume[]
  title: string
  subtitle: string
  tag: string
}

const genderLabel = (gender: string) => {
  if (gender === 'kisi') return 'Kişi'
  if (gender === 'xanim') return 'Xanım'
  return 'Unisex'
}

export default function PerfumeGrid({ perfumes, title, subtitle, tag }: Props) {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--black)' }}>
      <div style={{ padding: '80px 60px 60px' }} className="section-pad-inner">
        <span style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <span style={{ display: 'block', width: '40px', height: '0.5px', background: 'var(--gold)' }} />
          {tag}
        </span>
        <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(48px, 6vw, 80px)', fontWeight: 300, lineHeight: 1.0, marginBottom: '16px' }}>
          {title}
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>{subtitle}</p>
      </div>

      <div style={{ padding: '0 60px 120px' }} className="section-pad">
        {perfumes.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '120px 0' }}>
            <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '24px', fontWeight: 300, color: 'var(--text-muted)', fontStyle: 'italic' }}>
              Tezliklə ətirlər əlavə olunacaq...
            </p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2px' }}>
            {perfumes.map((perfume) => {
              const minPrice = perfume.sizes?.length > 0
                ? Math.min(...perfume.sizes.map(s => s.price))
                : null

              return (
                <Link key={perfume._id} href={`/etir/${perfume.slug.current}`}
                  style={{ textDecoration: 'none', display: 'block', background: 'var(--surface)', border: '0.5px solid var(--border)', transition: 'border-color 0.3s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-hover)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}>

                  {/* Şəkil */}
                  <div style={{ height: '280px', position: 'relative', background: 'rgba(201,169,110,0.03)', overflow: 'hidden' }}>
                    {perfume.mainImage ? (
                      <Image
                        src={urlFor(perfume.mainImage).width(400).height(280).fit('crop').url()}
                        alt={perfume.name}
                        fill
                        style={{ objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="80" height="140" viewBox="0 0 200 340" fill="none">
                          <rect x="40" y="100" width="120" height="215" rx="8" fill="#1a1510" stroke="#c9a96e" strokeWidth="0.5" />
                          <rect x="72" y="60" width="56" height="44" rx="4" fill="#1a1510" stroke="#c9a96e" strokeWidth="0.5" />
                          <rect x="64" y="30" width="72" height="34" rx="4" fill="#c9a96e" />
                          <text x="100" y="200" fontFamily="Georgia,serif" fontSize="9" fill="#c9a96e" textAnchor="middle" letterSpacing="2">RAVION</text>
                        </svg>
                      </div>
                    )}

                    {/* Kateqoriya badge */}
                    <div style={{ position: 'absolute', bottom: '12px', left: '12px', fontSize: '8px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', border: '0.5px solid rgba(201,169,110,0.3)', padding: '3px 8px', background: 'rgba(10,8,6,0.7)' }}>
                      {genderLabel(perfume.gender)}
                    </div>

                    {!perfume.inStock && (
                      <div style={{ position: 'absolute', top: '12px', right: '12px', fontSize: '8px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', border: '0.5px solid var(--border)', padding: '3px 8px', background: 'rgba(10,8,6,0.8)' }}>
                        Stokda yox
                      </div>
                    )}
                  </div>

                  {/* Məlumat */}
                  <div style={{ padding: '24px 28px' }}>
                    <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>
                      {perfume.brand}
                    </div>
                    <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '20px', fontWeight: 300, color: 'var(--cream)', marginBottom: '8px' }}>
                      {perfume.name}
                    </div>
                    {perfume.description && (
                      <p style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
                        {perfume.description.length > 70 ? perfume.description.slice(0, 70) + '...' : perfume.description}
                      </p>
                    )}

                    {/* Ölçülər */}
                    {perfume.sizes?.length > 0 && (
                      <div style={{ display: 'flex', gap: '6px', marginBottom: '16px', flexWrap: 'wrap' }}>
                        {perfume.sizes.map((s) => (
                          <span key={s.ml} style={{ fontSize: '10px', letterSpacing: '0.08em', color: s.inStock ? 'var(--text-mid)' : 'var(--text-muted)', border: '0.5px solid var(--border)', padding: '3px 8px', textDecoration: s.inStock ? 'none' : 'line-through' }}>
                            {s.ml}ml
                          </span>
                        ))}
                      </div>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '18px', color: 'var(--gold)' }}>
                        {minPrice !== null ? `${minPrice} ₼-dən` : ''}
                      </span>
                      <span style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        Bax
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}