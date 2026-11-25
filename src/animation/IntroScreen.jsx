import { useCallback, useEffect, useRef, useState } from 'react'

const LOGO_SRC = '/Logo horizontal verde.png'

const HOLD_MS = 900 
const MOVE_MS = 2400 
const FADE_MS = 400 
const TURNS = 1 
const EASE = 'cubic-bezier(0.76, 0, 0.24, 1)'

export default function IntroScreen({ onFinish }) {
  const logoRef = useRef(null)
  const measuredRef = useRef(false)
  const [phase, setPhase] = useState('loading') 
  const [start, setStart] = useState({ x: 0, y: 0, scale: 1 })

  const measure = useCallback(() => {
    const logo = logoRef.current
    if (!logo || measuredRef.current) return
    const rect = logo.getBoundingClientRect()
    if (rect.width === 0) return
    measuredRef.current = true

    const startWidth = Math.min(window.innerWidth * 0.6, 340)
    setStart({
      x: window.innerWidth / 2 - (rect.left + rect.width / 2),
      y: window.innerHeight / 2 - (rect.top + rect.height / 2),
      scale: startWidth / rect.width,
    })
    setPhase('hold')
  }, [])

  useEffect(() => {
    const logo = logoRef.current
    if (logo?.complete && logo.naturalWidth > 0) measure()
  }, [measure])

  useEffect(() => {
    const id = setTimeout(
      () => setPhase((p) => (p === 'loading' ? 'fade' : p)),
      4000,
    )
    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    if (phase === 'hold') {
      const id = setTimeout(() => setPhase('move'), HOLD_MS)
      return () => clearTimeout(id)
    }
    if (phase === 'move') {
      const id = setTimeout(() => setPhase('fade'), MOVE_MS)
      return () => clearTimeout(id)
    }
    if (phase === 'fade') {
      const id = setTimeout(onFinish, FADE_MS)
      return () => clearTimeout(id)
    }
    return undefined
  }, [phase, onFinish])

  const shrunk = phase === 'move' || phase === 'fade'

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-x-0 top-0 z-100 border-b border-white/10 bg-varqs-navy ${
        phase === 'fade' ? 'pointer-events-none' : ''
      }`}
      style={{
        height: shrunk ? 'calc(4.5rem + 1px)' : '100dvh',
        opacity: phase === 'fade' ? 0 : 1,
        transition: `height ${MOVE_MS}ms ${EASE}, opacity ${FADE_MS}ms ease`,
      }}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center px-6">
        <img
          ref={logoRef}
          src={LOGO_SRC}
          alt=""
          onLoad={measure}
          onError={() => setPhase('fade')}
          className="h-14 w-auto will-change-transform"
          style={{
            opacity: phase === 'loading' ? 0 : 1,
            transform: shrunk
              ? `translate(0px, 0px) scale(1) rotate(${TURNS * 360}deg)`
              : `translate(${start.x}px, ${start.y}px) scale(${start.scale}) rotate(0deg)`,
            transition: shrunk ? `transform ${MOVE_MS}ms ${EASE}` : 'none',
          }}
        />
      </div>
    </div>
  )
}