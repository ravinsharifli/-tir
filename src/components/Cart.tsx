'use client'

import { useState } from 'react'
import { useCartStore } from '@/store/cartStore'
import { PACKAGING_OPTIONS, DELIVERY_OPTIONS, DeliveryTier, CartItem, PackagingOption, DeliveryOption } from '@/lib/types'

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '994501234567'

export function Cart() {
  const {
    items, delivery, isOpen, closeCart, removeItem,
    updateQuantity, setDelivery, getSubtotal,
    getPackagingTotal, getDeliveryPrice, getGrandTotal,
    buildWhatsAppMessage, clearCart,
  } = useCartStore()

  const [step, setStep] = useState<'cart' | 'checkout'>('cart')
  const [form, setForm] = useState({ name: '', phone: '', address: '', giftCardMessage: '' })

  const handleOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      alert('Zəhmət olmasa bütün məlumatları doldurun.')
      return
    }
    window.open(`https://wa.me/${WA}?text=${buildWhatsAppMessage(form)}`, '_blank')
    clearCart()
    closeCart()
    setStep('cart')
    setForm({ name: '', phone: '', address: '', giftCardMessage: '' })
  }

  if (!isOpen) return null

  return (
    <>
      <div onClick={closeCart} style={{ position: 'fixed', inset: 0, background: 'rgba(10,8,6,0.75)', zIndex: 200, backdropFilter: 'blur(4px)' }} />
      <div style={{ position: 'fixed', right: 0, top: 0, bottom: 0, width: '460px', background: 'var(--deep)', borderLeft: '0.5px solid var(--border)', zIndex: 201, display: 'flex', flexDirection: 'column' }}>

        <div style={{ padding: '32px 40px 24px', borderBottom: '0.5px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '24px', fontWeight: 300 }}>
            {step === 'cart' ? 'Səbət' : 'Sifariş Məlumatları'}
          </h2>
          <button onClick={closeCart} style={{ background: 'none', border: 'none', color: 'var(--text-mid)', fontSize: '20px', cursor: 'none' }}>✕</button>
        </div>

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

        {step === 'cart' && items.length > 0 && (
          <>
            <div style={{ flex: 1, overflowY: 'auto', padding: '24px 40px' }}>
              {items.map((item: CartItem, i: number) => {
                const pkg = PACKAGING_OPTIONS.find((p: PackagingOption) => p.id === item.packaging)
                return (
                  <div key={i} style={{ display: 'flex', gap: '16px', padding: '20px 0', borderBottom: '0.5px solid var(--border)' }}>
                    <div style={{ width: '64px', height: '80px', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '0.5px solid var(--border)' }}>
                      <svg width="28" height="48" viewBox="0 0 28 48" fill="none">
                        <rect x="6" y="14" width="16" height="30" rx="2" fill="#211c15" stroke="#c9a96e" strokeWidth="0.5" />
                        <rect x="10" y="6" width="8" height="10" rx="1" fill="#211c15" stroke="#c9a96e" strokeWidth="0.5" />
                        <rect x="8" y="2" width="12" height="6" rx="1" fill="#c9a96e" />
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '4px' }}>{item.brand}</div>
                      <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '17px', marginBottom: '4px' }}>{item.perfumeName}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '10px' }}>
                        {item.ml}ml · {pkg?.name}{item.packagingPrice > 0 && ` (+${item.packagingPrice} ₼)`}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <button onClick={() => updateQuantity(item.perfumeId, item.ml, item.packaging, item.quantity - 1)}
                            style={{ width: '28px', height: '28px', border: '0.5px solid var(--border)', background: 'none', color: 'var(--cream)', cursor: 'none', fontSize: '16px' }}>−</button>
                          <span style={{ fontSize: '14px', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.perfumeId, item.ml, item.packaging, item.quantity + 1)}
                            style={{ width: '28px', height: '28px', border: '0.5px solid var(--border)', background: 'none', color: 'var(--cream)', cursor: 'none', fontSize: '16px' }}>+</button>
                        </div>
                        <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '18px', color: 'var(--gold)' }}>
                          {((item.pricePerMl * item.ml + item.packagingPrice) * item.quantity).toFixed(2)} ₼
                        </div>
                      </div>
                    </div>
                    <button onClick={() => removeItem(item.perfumeId, item.ml, item.packaging)}
                      style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'none', alignSelf: 'flex-start', paddingTop: '4px' }}>✕</button>
                  </div>
                )
              })}

              <div style={{ marginTop: '28px' }}>
                <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Çatdırılma</div>
                {DELIVERY_OPTIONS.map((opt: DeliveryOption) => (
                  <div key={opt.id} onClick={() => setDelivery(opt.id as DeliveryTier)}
                    style={{ padding: '14px 16px', border: `0.5px solid ${delivery === opt.id ? 'var(--gold)' : 'var(--border)'}`, marginBottom: '8px', cursor: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: delivery === opt.id ? 'rgba(201,169,110,0.05)' : 'transparent', transition: 'all 0.2s' }}>
                    <div>
                      <div style={{ fontSize: '13px', marginBottom: '2px' }}>{opt.name}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{opt.days} · {opt.description}</div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '16px', color: opt.price === 0 ? 'var(--gold)' : 'var(--cream)' }}>
                      {opt.price === 0 ? 'Pulsuz' : `${opt.price} ₼`}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '24px 40px 40px', borderTop: '0.5px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <span>Ara cəm</span><span>{getSubtotal().toFixed(2)} ₼</span>
              </div>
              {getPackagingTotal() > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                  <span>Qablaşdırma</span><span>{getPackagingTotal().toFixed(2)} ₼</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <span>Çatdırılma</span>
                <span>{getDeliveryPrice() === 0 ? 'Pulsuz' : `${getDeliveryPrice()} ₼`}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '16px', borderTop: '0.5px solid var(--border)', marginBottom: '24px', fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '20px' }}>
                <span>Ümumi</span>
                <span style={{ color: 'var(--gold)' }}>{getGrandTotal().toFixed(2)} ₼</span>
              </div>
              <button onClick={() => setStep('checkout')} className="btn-gold" style={{ width: '100%', textAlign: 'center' }}>
                Sifarişi Tamamla
              </button>
            </div>
          </>
        )}

        {step === 'checkout' && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '32px 40px 40px' }}>
            <button onClick={() => setStep('cart')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '12px', letterSpacing: '0.1em', cursor: 'none', marginBottom: '28px' }}>
              ← Geri
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { key: 'name', label: 'Ad Soyad', type: 'text' },
                { key: 'phone', label: 'Telefon (+994...)', type: 'tel' },
                { key: 'address', label: 'Çatdırılma ünvanı', type: 'text' },
              ].map((f) => (
                <input key={f.key} type={f.type} placeholder={f.label}
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="input-luxury" />
              ))}

              {items.some((i: CartItem) => i.packaging === 'luxury') && (
                <>
                  <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                    Hədiyyə Kartı Yazısı (seçimə görə)
                  </div>
                  <textarea placeholder="Məsələn: Doğum günün mübarək..."
                    value={form.giftCardMessage}
                    onChange={(e) => setForm({ ...form, giftCardMessage: e.target.value })}
                    className="input-luxury" rows={3} style={{ resize: 'none' }} />
                </>
              )}

              <div style={{ padding: '16px', border: '0.5px solid var(--border)' }}>
                <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>
                  Sifariş Xülasəsi
                </div>
                {items.map((item: CartItem, i: number) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    <span>{item.brand} {item.perfumeName} {item.ml}ml ×{item.quantity}</span>
                    <span>{((item.pricePerMl * item.ml + item.packagingPrice) * item.quantity).toFixed(2)} ₼</span>
                  </div>
                ))}
                <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: '10px', marginTop: '10px', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '18px' }}>
                  <span>Ümumi</span>
                  <span style={{ color: 'var(--gold)' }}>{getGrandTotal().toFixed(2)} ₼</span>
                </div>
              </div>

              <div style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.8, padding: '12px 16px', border: '0.5px solid var(--border)', background: 'rgba(201,169,110,0.03)' }}>
                💳 Sifarişi WhatsApp üzərindən təsdiqləyib ödəniş məlumatlarını alacaqsınız.
              </div>

              <button onClick={handleOrder} className="btn-gold" style={{ width: '100%', textAlign: 'center' }}>
                WhatsApp-da Sifarişi Göndər →
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
