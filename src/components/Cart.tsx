'use client'

import { useState } from 'react'
import { useCartStore } from '@/store/cartStore'
import { CartItem } from '@/lib/types'

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '994558603040'

export function Cart() {
  const {
    items, isOpen, closeCart, removeItem,
    updateQuantity, getGrandTotal, clearCart,
  } = useCartStore()

  const [step, setStep] = useState<'cart' | 'checkout'>('cart')
  const [form, setForm] = useState({ name: '', phone: '', address: '', note: '' })
  const [errors, setErrors] = useState({ name: false, phone: false, address: false })

  const handleOrder = () => {
    const newErrors = {
      name: !form.name.trim(),
      phone: !form.phone.trim(),
      address: !form.address.trim(),
    }
    setErrors(newErrors)
    if (newErrors.name || newErrors.phone || newErrors.address) return

    let msg = '🌹 *RAVION — Yeni Sifariş*\n\n'
    msg += `*Müştəri:*\n`
    msg += `Ad: ${form.name}\n`
    msg += `Telefon: ${form.phone}\n`
    msg += `Ünvan: ${form.address}\n`
    if (form.note) msg += `Qeyd: ${form.note}\n`
    msg += `\n*Sifariş:*\n`
    items.forEach((item, i) => {
      msg += `\n${i + 1}. ${item.brand} — ${item.perfumeName}\n`
      msg += `   ${item.ml}ml × ${item.quantity} — ${(item.pricePerMl * item.ml * item.quantity).toFixed(2)} ₼\n`
    })
    msg += `\n💰 *Ümumi: ${getGrandTotal().toFixed(2)} ₼*`

    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank')
    clearCart()
    closeCart()
    setStep('cart')
    setForm({ name: '', phone: '', address: '', note: '' })
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        style={{ position: 'fixed', inset: 0, background: 'rgba(10,8,6,0.75)', zIndex: 200, backdropFilter: 'blur(4px)' }}
      />

      {/* Panel */}
      <div style={{
        position: 'fixed', right: 0, top: 0, bottom: 0,
        width: '480px', maxWidth: '100vw',
        background: 'var(--deep)', borderLeft: '0.5px solid var(--border)',
        zIndex: 201, display: 'flex', flexDirection: 'column',
      }}>

        {/* Header */}
        <div style={{ padding: '32px 40px 24px', borderBottom: '0.5px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '24px', fontWeight: 300 }}>
            {step === 'cart' ? 'Səbət' : 'Sifarişi Tamamla'}
          </h2>
          <button onClick={closeCart} style={{ background: 'none', border: 'none', color: 'var(--text-mid)', fontSize: '20px', cursor: 'none' }}>✕</button>
        </div>

        {/* Boş səbət */}
        {items.length === 0 && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', color: 'var(--text-muted)' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <p style={{ fontSize: '13px', letterSpacing: '0.06em' }}>Səbət boşdur</p>
          </div>
        )}

        {/* ADDIM 1 — Səbət */}
        {step === 'cart' && items.length > 0 && (
          <>
            <div style={{ flex: 1, overflowY: 'auto', padding: '24px 40px' }}>
              {items.map((item: CartItem, i: number) => (
                <div key={i} style={{ display: 'flex', gap: '16px', padding: '20px 0', borderBottom: '0.5px solid var(--border)' }}>
                  {/* Şüşə ikonu */}
                  <div style={{ width: '56px', height: '72px', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '0.5px solid var(--border)' }}>
                    <svg width="24" height="40" viewBox="0 0 28 48" fill="none">
                      <rect x="6" y="14" width="16" height="30" rx="2" fill="#211c15" stroke="#c9a96e" strokeWidth="0.5" />
                      <rect x="10" y="6" width="8" height="10" rx="1" fill="#211c15" stroke="#c9a96e" strokeWidth="0.5" />
                      <rect x="8" y="2" width="12" height="6" rx="1" fill="#c9a96e" />
                    </svg>
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '4px' }}>{item.brand}</div>
                    <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '17px', marginBottom: '6px' }}>{item.perfumeName}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                      {item.ml}ml
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      {/* Miqdar */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <button
                          onClick={() => updateQuantity(item.perfumeId, item.ml, item.packaging, item.quantity - 1)}
                          style={{ width: '28px', height: '28px', border: '0.5px solid var(--border)', background: 'none', color: 'var(--cream)', cursor: 'none', fontSize: '16px' }}>
                          −
                        </button>
                        <span style={{ fontSize: '14px', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.perfumeId, item.ml, item.packaging, item.quantity + 1)}
                          style={{ width: '28px', height: '28px', border: '0.5px solid var(--border)', background: 'none', color: 'var(--cream)', cursor: 'none', fontSize: '16px' }}>
                          +
                        </button>
                      </div>

                      {/* Qiymət */}
                      <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '18px', color: 'var(--gold)' }}>
                        {(item.pricePerMl * item.ml * item.quantity).toFixed(2)} ₼
                      </div>
                    </div>
                  </div>

                  {/* Sil */}
                  <button
                    onClick={() => removeItem(item.perfumeId, item.ml, item.packaging)}
                    style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'none', alignSelf: 'flex-start', paddingTop: '4px', fontSize: '16px' }}>
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Ümumi və davam et */}
            <div style={{ padding: '24px 40px 40px', borderTop: '0.5px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '20px', fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '20px' }}>
                <span>Ümumi</span>
                <span style={{ color: 'var(--gold)' }}>{getGrandTotal().toFixed(2)} ₼</span>
              </div>
              <button onClick={() => setStep('checkout')} className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                Sifarişi Tamamla →
              </button>
            </div>
          </>
        )}

        {/* ADDIM 2 — Checkout */}
        {step === 'checkout' && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '28px 40px 40px' }}>
            <button
              onClick={() => setStep('cart')}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '12px', letterSpacing: '0.1em', cursor: 'none', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              ← Geri
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

              {/* Ad */}
              <div>
                <input
                  type="text"
                  placeholder="Ad Soyad *"
                  value={form.name}
                  onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: false }) }}
                  className="input-luxury"
                  style={{ width: '100%', border: `0.5px solid ${errors.name ? 'rgba(255,80,80,0.5)' : 'var(--border)'}` }}
                />
                {errors.name && <div style={{ fontSize: '10px', color: 'rgba(255,80,80,0.8)', marginTop: '4px', letterSpacing: '0.08em' }}>Ad mütləqdir</div>}
              </div>

              {/* Telefon */}
              <div>
                <input
                  type="tel"
                  placeholder="Telefon (+994...) *"
                  value={form.phone}
                  onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: false }) }}
                  className="input-luxury"
                  style={{ width: '100%', border: `0.5px solid ${errors.phone ? 'rgba(255,80,80,0.5)' : 'var(--border)'}` }}
                />
                {errors.phone && <div style={{ fontSize: '10px', color: 'rgba(255,80,80,0.8)', marginTop: '4px', letterSpacing: '0.08em' }}>Telefon mütləqdir</div>}
              </div>

              {/* Ünvan */}
              <div>
                <input
                  type="text"
                  placeholder="Çatdırılma ünvanı *"
                  value={form.address}
                  onChange={(e) => { setForm({ ...form, address: e.target.value }); setErrors({ ...errors, address: false }) }}
                  className="input-luxury"
                  style={{ width: '100%', border: `0.5px solid ${errors.address ? 'rgba(255,80,80,0.5)' : 'var(--border)'}` }}
                />
                {errors.address && <div style={{ fontSize: '10px', color: 'rgba(255,80,80,0.8)', marginTop: '4px', letterSpacing: '0.08em' }}>Ünvan mütləqdir</div>}
              </div>

              {/* Əlavə qeyd */}
              <textarea
                placeholder="Əlavə qeyd (istəyə görə)"
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                className="input-luxury"
                rows={2}
                style={{ width: '100%', border: '0.5px solid var(--border)', resize: 'none' }}
              />

              {/* Sifariş xülasəsi */}
              <div style={{ padding: '16px', border: '0.5px solid var(--border)', background: 'rgba(201,169,110,0.03)', marginTop: '4px' }}>
                <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>
                  Sifariş Xülasəsi
                </div>
                {items.map((item: CartItem, i: number) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    <span>{item.brand} {item.perfumeName} {item.ml}ml ×{item.quantity}</span>
                    <span>{(item.pricePerMl * item.ml * item.quantity).toFixed(2)} ₼</span>
                  </div>
                ))}
                <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: '10px', marginTop: '10px', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '18px' }}>
                  <span>Ümumi</span>
                  <span style={{ color: 'var(--gold)' }}>{getGrandTotal().toFixed(2)} ₼</span>
                </div>
              </div>

              {/* Məlumat */}
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.8, padding: '12px 16px', border: '0.5px solid var(--border)' }}>
                Sifarişi WhatsApp üzərindən göndərəcəksiniz. Ödəniş məlumatları sizinlə əlaqə saxlandıqdan sonra bildiriləcək.
              </div>

              {/* Göndər */}
              <button onClick={handleOrder} className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '4px' }}>
                WhatsApp-da Sifarişi Göndər →
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}