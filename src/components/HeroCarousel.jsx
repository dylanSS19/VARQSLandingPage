import { useCallback, useEffect, useRef, useState } from 'react'

const slides = [
  {
    id: 1,
    title: 'Diseño 1',
    subtitle: 'Reemplazar por el nombre y una frase corta del proyecto',
    image: null,
    bg: 'bg-varqs-navy',
  },
  {
    id: 2,
    title: 'Diseño 2',
    subtitle: 'Reemplazar por el nombre y una frase corta del proyecto',
    image: null,
    bg: 'bg-slate-700',
  },
  {
    id: 3,
    title: 'Diseño 3',
    subtitle: 'Reemplazar por el nombre y una frase corta del proyecto',
    image: null,
    bg: 'bg-slate-600',
  },
]

const INTERVAL_MS = 6000

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
    if (diff < 0) {
      next()
    } else {
      prev()
    }
  }

  return (
    <section
      id="inicio"
      aria-roledescription="carousel"
      aria-label="Diseños destacados"
      className="relative h-[70vh] min-h-[105] w-full overflow-hidden bg-varqs-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-in-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} de ${total}`}
            aria-hidden={index !== current}
            className={`relative h-full w-full shrink-0 ${slide.bg}`}
          >
            {slide.image && (
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-varqs-navy/50" />

            <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 sm:px-12 lg:px-20">
              <h2 className="text-3xl font-bold text-white sm:text-5xl">
                {slide.title}
              </h2>
              <p className="mt-3 max-w-xl text-base text-white/80 sm:text-lg">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Diseño anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-varqs-navy/60 p-3 text-white transition-colors hover:bg-varqs-mint hover:text-varqs-navy focus-visible:outline-2 focus-visible:outline-varqs-mint sm:left-6"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Diseño siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-varqs-navy/60 p-3 text-white transition-colors hover:bg-varqs-mint hover:text-varqs-navy focus-visible:outline-2 focus-visible:outline-varqs-mint sm:right-6"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Ir al diseño ${index + 1}`}
            aria-current={index === current}
            className={`h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-varqs-mint ${
              index === current
                ? 'w-8 bg-varqs-mint'
                : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
