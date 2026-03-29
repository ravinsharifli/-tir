'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  CartItem,
  PackagingTier,
  PackagingOption,
  DeliveryTier,
  DeliveryOption,
  PACKAGING_OPTIONS,
  DELIVERY_OPTIONS,
} from '@/lib/types'

interface CustomerInfo {
  name: string
  phone: string
  address: string
  giftCardMessage?: string
}

interface CartStore {
  items: CartItem[]
  delivery: DeliveryTier
  isOpen: boolean
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (perfumeId: string, ml: number, packaging: PackagingTier) => void
  updateQuantity: (perfumeId: string, ml: number, packaging: PackagingTier, qty: number) => void
  setDelivery: (d: DeliveryTier) => void
  openCart: () => void
  closeCart: () => void
  clearCart: () => void
  getTotalItems: () => number
  getSubtotal: () => number
  getPackagingTotal: () => number
  getDeliveryPrice: () => number
  getGrandTotal: () => number
  buildWhatsAppMessage: (info: CustomerInfo) => string
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      delivery: 'standard' as DeliveryTier,
      isOpen: false,

      addItem: (newItem) => {
        const { items } = get()
        const existing = items.find(
          (i) => i.perfumeId === newItem.perfumeId && i.ml === newItem.ml && i.packaging === newItem.packaging
        )
        if (existing) {
          set({ items: items.map((i) => i.perfumeId === newItem.perfumeId && i.ml === newItem.ml && i.packaging === newItem.packaging ? { ...i, quantity: i.quantity + 1 } : i) })
        } else {
          set({ items: [...items, { ...newItem, quantity: 1 }] })
        }
      },

      removeItem: (perfumeId, ml, packaging) =>
        set({ items: get().items.filter((i) => !(i.perfumeId === perfumeId && i.ml === ml && i.packaging === packaging)) }),

      updateQuantity: (perfumeId, ml, packaging, qty) => {
        if (qty <= 0) { get().removeItem(perfumeId, ml, packaging); return }
        set({ items: get().items.map((i) => i.perfumeId === perfumeId && i.ml === ml && i.packaging === packaging ? { ...i, quantity: qty } : i) })
      },

      setDelivery: (delivery) => set({ delivery }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      clearCart: () => set({ items: [], delivery: 'standard' as DeliveryTier }),

      getTotalItems: () => get().items.reduce((s, i) => s + i.quantity, 0),
      getSubtotal: () => get().items.reduce((s, i) => s + i.pricePerMl * i.ml * i.quantity, 0),
      getPackagingTotal: () => get().items.reduce((s, i) => s + i.packagingPrice * i.quantity, 0),
      getDeliveryPrice: () => DELIVERY_OPTIONS.find((d: DeliveryOption) => d.id === get().delivery)?.price ?? 0,
      getGrandTotal: () => { const s = get(); return s.getSubtotal() + s.getPackagingTotal() + s.getDeliveryPrice() },

      buildWhatsAppMessage: (info) => {
        const { items, delivery } = get()
        const dOpt = DELIVERY_OPTIONS.find((d: DeliveryOption) => d.id === delivery)
        let msg = `🌹 *PARFUMER — Yeni Sifariş*\n\n`
        msg += `*Müştəri:*\nAd: ${info.name}\nTelefon: ${info.phone}\nÜnvan: ${info.address}\n`
        if (info.giftCardMessage) msg += `Hədiyyə kartı: ${info.giftCardMessage}\n`
        msg += `\n*Sifariş:*\n`
        items.forEach((item: CartItem, idx: number) => {
          const pOpt = PACKAGING_OPTIONS.find((p: PackagingOption) => p.id === item.packaging)
          msg += `\n${idx + 1}. ${item.brand} — ${item.perfumeName}\n`
          msg += `   ${item.ml}ml × ${item.quantity} | ${(item.pricePerMl * item.ml * item.quantity).toFixed(2)} ₼\n`
          msg += `   Qablaşdırma: ${pOpt?.name} (+${(item.packagingPrice * item.quantity).toFixed(2)} ₼)\n`
        })
        const dp = get().getDeliveryPrice()
        msg += `\n*Çatdırılma:* ${dOpt?.name} (${dOpt?.days}) — ${dp === 0 ? 'Pulsuz' : dp + ' ₼'}\n`
        msg += `\n💰 *Ümumi: ${get().getGrandTotal().toFixed(2)} ₼*\n`
        msg += `\n_Ödəniş kartla həyata keçirilir._`
        return encodeURIComponent(msg)
      },
    }),
    { name: 'parfumer-cart', partialize: (s) => ({ items: s.items, delivery: s.delivery }) }
  )
)