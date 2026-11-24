import { useCallback, useEffect, useRef, useState } from 'react'
import Casa1 from '../assets/CASA UVITA EXTERNA.png'
import Casa2 from '../assets/CASA_UVITA.jpg'
import Casa3 from '../assets/OASIS_SERENO.jpg'

const slides = [
  { id: 1, src: Casa1, caption: 'Casa Uvita Externa / Concepto' },
  { id: 2, src: Casa2, caption: 'Casa Uvita / Concepto' },
  { id: 3, src: Casa3, caption: 'Oasis Sereno / Concepto' },
]

const INTERVAL_MS = 6000

const pad = (number) => String(number).padStart(2, '0')

function Chevron({ direction }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-4"
    >
      <path d={direction === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
    </svg>
  )
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)
  const total = slides.length

  const next = useCallback(() => setCurrent((i) => (i + 1) % total), [total])
  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + total) % total),
    [total],
  )

  useEffect(() => {
    if (paused) return undefined
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduceMotion) return undefined
    const id = setInterval(next, INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused, next, current])

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return
    const diff = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(diff) < 50) return
    if (diff < 0) next()
    else prev()
  }

  return (
    <section
      id="inicio"
      aria-roledescription="carousel"
      aria-label="Proyectos destacados"
      className="relative h-[calc(100svh-4.5rem)] min-h-150 w-full overflow-hidden bg-varqs-navy text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <img
          key={slide.id}
          src={slide.src}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-linear-to-r from-varqs-navy/80 via-varqs-navy/35 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-varqs-navy/70 via-transparent to-varqs-navy/30" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6">
        <div className="flex flex-1 flex-col justify-center py-12">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-widest text-varqs-mint">
            VARQS Studio  /  Arquitectura
          </p>

          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            CONSULTORÍA EN ARQUITECTURA
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
            VARQS Studio acompaña cada decisión desde la idea inicial hasta la preparación técnica del proyecto
          </p>

          <a
            href="#contacto"
            className="group mt-10 inline-flex w-fit items-center gap-3 bg-varqs-red px-7 py-3.5 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-varqs-mint"
          >
            Solicitar una consulta
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
            >
              →
            </span>
          </a>

          <p className="mt-4 text-xs text-white/70">
            Consultoría de diseño · No construimos
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/20 py-5">
          <span
            className="text-xs font-semibold tracking-wider text-varqs-mint"
            aria-hidden="true"
          >
            {pad(current + 1)} / {pad(total)}
          </span>

          <p
            aria-live="polite"
            className="text-[11px] uppercase tracking-wider text-white/80"
          >
            <span className="sr-only">
              Diapositiva {current + 1} de {total}:{' '}
            </span>
            {slides[current].caption}
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Proyecto anterior"
              className="rounded-full border border-white/30 p-1.5 text-white transition-colors hover:border-varqs-mint hover:text-varqs-mint focus-visible:outline-2 focus-visible:outline-varqs-mint"
            >
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Proyecto siguiente"
              className="rounded-full border border-white/30 p-1.5 text-white transition-colors hover:border-varqs-mint hover:text-varqs-mint focus-visible:outline-2 focus-visible:outline-varqs-mint"
            >
              <Chevron direction="right" />
            </button>
          </div>

          <a
            href="#nosotros"
            className="ml-auto text-[11px] font-semibold uppercase tracking-widest text-white transition-colors hover:text-varqs-mint focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-varqs-mint"
          >
            Explora el estudio <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}