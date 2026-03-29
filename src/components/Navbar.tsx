"use client";

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'

const links = [
  { href: '/kisi', label: 'Kişi' },
  { href: '/xanim', label: 'Xanım' },
  { href: '/unisex', label: 'Unisex' },
  { href: '/hediyye', label: 'Hədiyyə Qutuları' },
  { href: '/haqqimizda', label: 'Haqqımızda' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { getTotalItems, openCart } = useCartStore()
  const total = getTotalItems()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '16px 60px' : '28px 60px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all 0.4s',
      background: scrolled ? 'rgba(10,8,6,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '0.5px solid var(--border)' : 'none',
    }}>
      <Link href="/" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '22px', fontWeight: 300, letterSpacing: '0.2em', color: 'var(--cream)', textDecoration: 'none' }}>
        PARFU<span style={{ color: 'var(--gold)' }}>M</span>ER
      </Link>

      <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', margin: 0, padding: 0 }}>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-mid)', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-mid)')}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <button onClick={openCart} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-mid)', background: 'none', border: 'none', cursor: 'none' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-mid)')}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
        Səbət
        {total > 0 && (
          <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'var(--gold)', color: 'var(--black)', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 500 }}>
            {total}
          </span>
        )}
      </button>
    </nav>
  )
}