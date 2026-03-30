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

const SOCIAL = [
  { label: 'Instagram', href: 'https://instagram.com/ravion.az' },
  { label: 'TikTok', href: 'https://tiktok.com/@ravion.az' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { getTotalItems, openCart } = useCartStore()
  const total = getTotalItems()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '16px 40px' : '24px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.4s',
        background: scrolled || menuOpen ? 'rgba(10,8,6,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '0.5px solid var(--border)' : 'none',
      }}>

        {/* Logo */}
        <Link href="/" style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontSize: '22px', fontWeight: 300, letterSpacing: '0.25em',
          color: 'var(--cream)', textDecoration: 'none', zIndex: 1,
          flexShrink: 0,
        }}>
          RAVI<span style={{ color: 'var(--gold)' }}>O</span>N
        </Link>

        {/* Desktop menu */}
        <ul style={{
          display: 'flex', gap: '36px', listStyle: 'none', margin: 0, padding: 0
        }} className="desktop-nav">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} style={{
                fontSize: '11px', letterSpacing: '0.15em',
                textTransform: 'uppercase', color: 'var(--text-mid)', textDecoration: 'none',
                transition: 'color 0.3s',
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-mid)')}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sağ tərəf */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
          <button onClick={openCart} style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--text-mid)', background: 'none', border: 'none', cursor: 'none',
            transition: 'color 0.3s',
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-mid)')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span className="desktop-nav">Səbət</span>
            {total > 0 && (
              <span style={{
                width: '18px', height: '18px', borderRadius: '50%',
                background: 'var(--gold)', color: 'var(--black)',
                fontSize: '10px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontWeight: 500,
              }}>
                {total}
              </span>
            )}
          </button>

          {/* Hamburger — yalnız mobil */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none', cursor: 'none',
              padding: '4px', flexDirection: 'column',
              gap: '5px', alignItems: 'center', justifyContent: 'center',
            }}>
            <span style={{
              display: 'block', width: '22px', height: '0.5px',
              background: 'var(--cream)', transition: 'all 0.3s',
              transform: menuOpen ? 'rotate(45deg) translateY(5px)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '0.5px',
              background: 'var(--cream)', transition: 'all 0.3s',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: '22px', height: '0.5px',
              background: 'var(--cream)', transition: 'all 0.3s',
              transform: menuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* Mobil tam ekran menyu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 99, background: 'rgba(10,8,6,0.99)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '36px',
        }}>
          <div style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: '14px', letterSpacing: '0.3em', color: 'var(--gold)',
            textTransform: 'uppercase', marginBottom: '8px',
          }}>
            RAVI<span style={{ color: 'var(--cream)' }}>O</span>N
          </div>

          {links.map((l) => (
            <Link key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '36px', fontWeight: 300,
                letterSpacing: '0.1em', color: 'var(--cream)', textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cream)')}>
              {l.label}
            </Link>
          ))}

          <button onClick={() => { openCart(); setMenuOpen(false) }}
            style={{
              marginTop: '8px', fontSize: '11px', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--gold)',
              background: 'none', border: '0.5px solid var(--gold)',
              padding: '12px 32px', cursor: 'none',
            }}>
            Səbət {total > 0 && `(${total})`}
          </button>

          {/* Sosial medialar */}
          <div style={{ display: 'flex', gap: '24px', marginTop: '8px' }}>
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{
                  fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
