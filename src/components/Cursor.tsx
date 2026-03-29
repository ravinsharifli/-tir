'use client'
import { useEffect, useRef, useState } from 'react'

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const onMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
      setVisible(true)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    const handleEnter = (el: Element) => {
      const tag = el.tagName.toLowerCase()
      const classList = el.className?.toString() || ''
      if (classList.includes('btn-gold')) {
        setLabel('AL')
      } else if (tag === 'a') {
        setLabel('BAX')
      } else if (tag === 'button') {
        setLabel('OK')
      } else {
        setLabel('')
      }
    }

    const handleLeave = () => setLabel('')

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    const attachListeners = () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.addEventListener('mouseenter', () => handleEnter(el))
        el.addEventListener('mouseleave', handleLeave)
      })
    }

    attachListeners()

    const observer = new MutationObserver(attachListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.3s',
        opacity: visible ? 1 : 0,
      }}
    >
      {label ? (
        // Mətn modu — hover-da
        <div style={{
          background: 'var(--gold)',
          color: 'var(--black)',
          fontSize: '9px',
          fontWeight: 500,
          letterSpacing: '0.25em',
          padding: '8px 14px',
          fontFamily: 'var(--font-montserrat), sans-serif',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          {label}
        </div>
      ) : (
        // Normal mod — qızıl xaç
        <div style={{ position: 'relative', width: '20px', height: '20px' }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: '0.5px',
            background: 'var(--gold)',
            transform: 'translateY(-50%)',
          }} />
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '0.5px',
            background: 'var(--gold)',
            transform: 'translateX(-50%)',
          }} />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            background: 'var(--gold)',
          }} />
        </div>
      )}
    </div>
  )
}