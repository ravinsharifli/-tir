'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { client } from '@/lib/sanity'
import { PERFUME_BY_SLUG_QUERY } from '@/lib/queries'
import { Perfume, PACKAGING_OPTIONS, DELIVERY_OPTIONS } from '@/lib/types'
import { useCartStore } from '@/store/cartStore'
import Link from 'next/link'

const ML_OPTIONS = [15, 30, 50, 100]

export default function EtirPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params?.slug as string

  const [perfume, setPerfume] = useState<Perfume | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedMl, setSelectedMl] = useState(30)
  const [selectedPackaging, setSelectedPackaging] = useState<'standard' | 'premium' | 'luxury'>('standard')
  const [added, setAdded] = useState(false)

  const { addItem } = useCartStore()

  useEffect(() => {
    if (!slug) return
    client.fetch(PERFUME_BY_SLUG_QUERY, { slug }).then((data) => {
      setPerfume(data)
      setLoading(false)
    })
  }, [slug])

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--black)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '24px', fontWeight: 300, color: 'var(--text-muted)', fontStyle: 'italic' }}>
          Yüklənir...
        </div>
      </div>
    )
  }

  if (!perfume) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--black)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
        <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '32px', fontWeight: 300, color: 'var(--text-muted)', fontStyle: 'italic' }}>
          Ətir tapılmadı
        </div>
        <Link href="/" className="btn-gold">Ana Səhifəyə Qayıt</Link>
      </div>
    )
  }

  const packaging = PACKAGING_OPTIONS.find((p) => p.id === selectedPackaging)!
  const totalPrice = (perfume.pricePerMl * selectedMl + packaging.price).toFixed(2)

  const handleAddToCart = () => {
    addItem({
      perfumeId: perfume._id,
      perfumeName: perfume.name,
      brand: perfume.brand,
      ml: selectedMl,
      pricePerMl: perfume.pricePerMl,
      packaging: selectedPackaging,
      packagingPrice: packaging.price,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const genderLabel = perfume.gender === 'kisi' ? 'Kişi' : perfume.gender === 'xanim' ? 'Xanım' : 'Unisex'
  const genderHref = `/${perfume.gender}`

  return (
    <div style={{ minHeight: '100vh', background: 'var(--black)', paddingTop: '100px' }}>

      {/* Breadcrumb */}
      <div style={{ padding: '24px 60px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
        <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
          Ana səhifə
        </Link>
        <span style={{ color: 'var(--border)' }}>—</span>
        <Link href={genderHref} style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
          {genderLabel}
        </Link>
        <span style={{ color: 'var(--border)' }}>—</span>
        <span style={{ color: 'var(--cream)' }}>{perfume.name}</span>
      </div>

      {/* Main content */}
      <div className="etir-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', padding: '0 60px 120px' }}>

        {/* Sol — Şəkil */}
        <div style={{ background: 'var(--surface)', border: '0.5px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '600px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.08) 0%, transparent 70%)' }} />
          <svg className="animate-float" width="200" height="340" viewBox="0 0 200 340" fill="none">
            <rect x="40" y="100" width="120" height="215" rx="8" fill="#1a1510" stroke="#c9a96e" strokeWidth="0.5" />
            <rect x="50" y="110" width="28" height="195" rx="4" fill="white" opacity="0.03" />
            <rect x="72" y="60" width="56" height="44" rx="4" fill="#1a1510" stroke="#c9a96e" strokeWidth="0.5" />
            <rect x="64" y="30" width="72" height="34" rx="4" fill="#c9a96e" />
            <rect x="72" y="38" width="56" height="18" rx="2" fill="#b8935a" />
            <rect x="52" y="150" width="96" height="120" rx="2" fill="rgba(201,169,110,0.04)" stroke="rgba(201,169,110,0.25)" strokeWidth="0.5" />
            <text x="100" y="196" fontFamily="Georgia,serif" fontSize="11" fill="#c9a96e" textAnchor="middle" letterSpacing="4">RAVION</text>
            <line x1="62" y1="203" x2="138" y2="203" stroke="#c9a96e" strokeWidth="0.3" opacity="0.5" />
            <text x="100" y="220" fontFamily="Georgia,serif" fontSize="7" fill="rgba(201,169,110,0.6)" textAnchor="middle" letterSpacing="2">BAKU</text>
            <text x="100" y="240" fontFamily="Georgia,serif" fontSize="8" fill="rgba(201,169,110,0.35)" textAnchor="middle" fontStyle="italic">Eau de Parfum</text>
          </svg>

          {/* Brend badge */}
          <div style={{ position: 'absolute', top: '32px', left: '32px', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', border: '0.5px solid var(--border)', padding: '8px 16px', background: 'rgba(10,8,6,0.8)' }}>
            {perfume.brand}
          </div>

          {!perfume.inStock && (
            <div style={{ position: 'absolute', top: '32px', right: '32px', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', border: '0.5px solid var(--border)', padding: '8px 16px', background: 'rgba(10,8,6,0.8)' }}>
              Stokda yox
            </div>
          )}
        </div>

        {/* Sağ — Məlumat */}
        <div style={{ background: 'var(--card)', border: '0.5px solid var(--border)', padding: '60px', display: 'flex', flexDirection: 'column', gap: '32px' }} className="etir-info">

          {/* Ad və brend */}
          <div>
            <div style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ display: 'block', width: '24px', height: '0.5px', background: 'var(--gold)' }} />
              {perfume.brand} · {genderLabel}
            </div>
            <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, lineHeight: 1.1, marginBottom: '16px' }}>
              {perfume.name}
            </h1>
            {perfume.description && (
              <p style={{ fontSize: '14px', lineHeight: 1.9, color: 'var(--text-mid)' }}>
                {perfume.description}
              </p>
            )}
          </div>

          {/* Notlar */}
          {perfume.notes && (
            <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: '28px' }}>
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>
                Ətr Notları
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {[
                  { label: 'Üst', notes: perfume.notes.top },
                  { label: 'Orta', notes: perfume.notes.middle },
                  { label: 'Baza', notes: perfume.notes.base },
                ].map((group) => (
                  group.notes?.length > 0 && (
                    <div key={group.label}>
                      <div style={{ fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>{group.label}</div>
                      {group.notes.map((note) => (
                        <div key={note} style={{ fontSize: '12px', color: 'var(--text-mid)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--gold-dim)', flexShrink: 0 }} />
                          {note}
                        </div>
                      ))}
                    </div>
                  )
                ))}
              </div>
            </div>
          )}

          {/* Həcm seçimi */}
          <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: '28px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
              Həcm Seç
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {ML_OPTIONS.map((ml) => (
                <button key={ml} onClick={() => setSelectedMl(ml)}
                  style={{
                    padding: '10px 20px',
                    border: `0.5px solid ${selectedMl === ml ? 'var(--gold)' : 'var(--border)'}`,
                    background: selectedMl === ml ? 'rgba(201,169,110,0.1)' : 'transparent',
                    color: selectedMl === ml ? 'var(--gold)' : 'var(--text-muted)',
                    fontSize: '12px', letterSpacing: '0.1em',
                    cursor: 'none', transition: 'all 0.2s',
                    fontFamily: 'var(--font-montserrat), sans-serif',
                  }}>
                  {ml}ml
                </button>
              ))}
            </div>
          </div>

          {/* Qablaşdırma seçimi */}
          <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: '28px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
              Qablaşdırma
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {PACKAGING_OPTIONS.map((pkg) => (
                <button key={pkg.id} onClick={() => setSelectedPackaging(pkg.id)}
                  style={{
                    padding: '14px 20px',
                    border: `0.5px solid ${selectedPackaging === pkg.id ? 'var(--gold)' : 'var(--border)'}`,
                    background: selectedPackaging === pkg.id ? 'rgba(201,169,110,0.05)' : 'transparent',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    cursor: 'none', transition: 'all 0.2s', textAlign: 'left',
                  }}>
                  <div>
                    <div style={{ fontSize: '13px', color: selectedPackaging === pkg.id ? 'var(--cream)' : 'var(--text-mid)', fontFamily: 'var(--font-cormorant), Georgia, serif', marginBottom: '2px' }}>
                      {pkg.name}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{pkg.description}</div>
                  </div>
                  <span style={{ fontSize: '14px', color: 'var(--gold)', fontFamily: 'var(--font-cormorant), Georgia, serif', whiteSpace: 'nowrap', marginLeft: '16px' }}>
                    {pkg.price === 0 ? 'Pulsuz' : `+${pkg.price} ₼`}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Qiymət və səbət */}
          <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px' }}>
                Cəmi qiymət
              </div>
              <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '36px', fontWeight: 300, color: 'var(--gold)' }}>
                {totalPrice} ₼
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                {selectedMl}ml + {packaging.name}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!perfume.inStock}
              className="btn-gold"
              style={{
                opacity: !perfume.inStock ? 0.4 : 1,
                minWidth: '180px', justifyContent: 'center',
                background: added ? 'var(--cream)' : undefined,
                transition: 'all 0.3s',
              }}>
              {added ? '✓ Əlavə edildi' : perfume.inStock ? 'Səbətə Əlavə Et' : 'Stokda Yox'}
            </button>
          </div>

          {/* Çatdırılma */}
          <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: '24px' }}>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {DELIVERY_OPTIONS.map((d) => (
                <div key={d.id} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold-dim)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--text-mid)' }}>{d.name}</div>
                    <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{d.days} · {d.price === 0 ? 'Pulsuz' : `${d.price} ₼`}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ətraflı təsvir */}
      {perfume.longDescription && (
        <div style={{ padding: '80px 60px', borderTop: '0.5px solid var(--border)', background: 'var(--deep)' }}>
          <div style={{ maxWidth: '700px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <span style={{ display: 'block', width: '24px', height: '0.5px', background: 'var(--gold)' }} />
              Ətrli Hekayə
            </span>
            <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '20px', fontWeight: 300, lineHeight: 1.9, color: 'var(--text-mid)', fontStyle: 'italic' }}>
              {perfume.longDescription}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}