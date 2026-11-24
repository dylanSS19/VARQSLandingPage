import { useEffect, useRef, useState } from 'react'

import casa1 from '../assets/CASA UVITA EXTERNA.png'
import casa2 from '../assets/CASA_PACIFICO.jpg'
import casa3 from '../assets/OASIS_SERENO.jpg'

const PROJECTS = [
  {
    title: 'Casa Umbral',
    category: 'Residencial / Exploración conceptual',
    image: casa1,
    gallery: [casa1, casa2, casa3],
  },
  {
    title: 'Refugio costero',
    category: 'Residencial / Concepto',
    image: casa2,
    gallery: [casa2, casa1, casa3],
  },
  {
    title: 'Proyecto 3',
    category: 'Residencial / Concepto',
    image: casa3,
    gallery: [casa3, casa1, casa2],
  },
]

function Arrow({ direction }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-5"
    >
      <path d={direction === 'left' ? 'M19 12H5m6-6-6 6 6 6' : 'M5 12h14m-6-6 6 6-6 6'} />
    </svg>
  )
}

const arrowClasses =
  'pointer-events-auto absolute top-1/2 grid size-10 -translate-y-1/2 place-items-center bg-white text-varqs-navy shadow-md transition-colors hover:bg-varqs-mint focus-visible:outline-2 focus-visible:outline-varqs-mint disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white'

const modalArrowClasses =
  'absolute top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center bg-white/90 text-varqs-navy transition-colors hover:bg-varqs-mint focus-visible:outline-2 focus-visible:outline-varqs-mint'

export default function Projects() {
  const [index, setIndex] = useState(0)
  const [openProject, setOpenProject] = useState(null)
  const [photo, setPhoto] = useState(0)
  const dialogRef = useRef(null)
  const lastIndex = PROJECTS.length - 1

  const gallery = openProject ? (openProject.gallery ?? [openProject.image]) : []

  useEffect(() => {
    if (!openProject) return undefined
    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [openProject])

  const openGallery = (project) => {
    setPhoto(0)
    setOpenProject(project)
  }

  const closeGallery = () => dialogRef.current?.close()

  const nextPhoto = () => setPhoto((i) => (i + 1) % gallery.length)
  const prevPhoto = () =>
    setPhoto((i) => (i - 1 + gallery.length) % gallery.length)

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') nextPhoto()
    if (event.key === 'ArrowLeft') prevPhoto()
  }

  const closeOnBackground = (event) => {
    if (event.target === event.currentTarget) closeGallery()
  }

  return (
    <section
      id="proyectos"
      className="scroll-mt-20 bg-white px-6 py-16 sm:px-12 lg:px-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2
            tabIndex={0}
            className="relative inline-block self-start pb-2 text-4xl font-bold leading-tight text-varqs-navy outline-none after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-varqs-navy after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none sm:text-5xl"
          >
            Proyectos
          </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-varqs-navy/80">
            Preparamos planos base, presentaciones y criterios de diseño para 
            validar la dirección del proyecto.
          </p>
        </header>

        <div className="relative [--item:88%] md:[--item:64%]">
          <div className="overflow-hidden">
            <ul
              className="flex gap-4 transition-transform duration-700 ease-in-out motion-reduce:transition-none"
              style={{
                transform: `translateX(calc(${index} * -1 * (var(--item) + 1rem)))`,
              }}
            >
              {PROJECTS.map((project) => (
                <li key={project.title} className="group basis-(--item) shrink-0">
                  <button
                    type="button"
                    onClick={() => openGallery(project)}
                    aria-haspopup="dialog"
                    aria-label={`Ver galería de ${project.title}`}
                    className="block w-full cursor-zoom-in overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-varqs-mint"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="aspect-video w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </button>

                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-wider text-varqs-navy">
                    {project.category}
                  </p>
                  <div className="mt-2 flex items-baseline justify-between gap-4">
                    <h3 className="text-2xl font-bold text-varqs-navy sm:text-3xl">
                      {project.title}
                    </h3>
                    <button
                      type="button"
                      onClick={() => openGallery(project)}
                      aria-haspopup="dialog"
                      className="shrink-0 text-xs font-semibold text-varqs-navy transition-colors hover:text-varqs-mint focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-varqs-mint"
                    >
                      Ver proyecto <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="pointer-events-none absolute left-0 top-0 aspect-video w-(--item)">
            <button
              type="button"
              onClick={() => setIndex((i) => Math.max(i - 1, 0))}
              disabled={index === 0}
              aria-label="Proyecto anterior"
              className={`${arrowClasses} left-3`}
            >
              <Arrow direction="left" />
            </button>
          </div>
          <div className="pointer-events-none absolute right-0 top-0 aspect-video w-(--item)">
            <button
              type="button"
              onClick={() => setIndex((i) => Math.min(i + 1, lastIndex))}
              disabled={index === lastIndex}
              aria-label="Proyecto siguiente"
              className={`${arrowClasses} right-3`}
            >
              <Arrow direction="right" />
            </button>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setOpenProject(null)}
        onKeyDown={handleKeyDown}
        aria-label={openProject ? `Galería de ${openProject.title}` : 'Galería'}
        className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-varqs-navy/95 p-0 text-white backdrop:bg-transparent"
      >
        {openProject && (
          <div
            className="flex h-full flex-col px-4 py-4 sm:px-8"
            onClick={closeOnBackground}
          >
            <div className="flex items-center justify-between gap-4 pb-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-varqs-mint">
                  {openProject.category}
                </p>
                <h3 className="text-xl font-bold sm:text-2xl">
                  {openProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-5">
                <span
                  className="text-xs font-semibold tracking-wider text-varqs-mint"
                  aria-live="polite"
                >
                  {photo + 1} / {gallery.length}
                </span>
                <button
                  type="button"
                  onClick={closeGallery}
                  aria-label="Cerrar galería"
                  className="grid size-10 place-items-center border border-white/30 text-white transition-colors hover:border-varqs-mint hover:text-varqs-mint focus-visible:outline-2 focus-visible:outline-varqs-mint"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                    className="size-5"
                  >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className="relative min-h-0 flex-1"
              onClick={closeOnBackground}
            >
              <img
                src={gallery[photo]}
                alt={`${openProject.title}, foto ${photo + 1} de ${gallery.length}`}
                className="h-full w-full object-contain"
              />

              {gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevPhoto}
                    aria-label="Foto anterior"
                    className={`${modalArrowClasses} left-0 sm:left-2`}
                  >
                    <Arrow direction="left" />
                  </button>
                  <button
                    type="button"
                    onClick={nextPhoto}
                    aria-label="Foto siguiente"
                    className={`${modalArrowClasses} right-0 sm:right-2`}
                  >
                    <Arrow direction="right" />
                  </button>
                </>
              )}
            </div>

            {gallery.length > 1 && (
              <ul className="flex justify-center gap-2 overflow-x-auto pt-4">
                {gallery.map((src, i) => (
                  <li key={`${src}-${i}`} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => setPhoto(i)}
                      aria-label={`Ver foto ${i + 1}`}
                      aria-current={i === photo}
                      className={`block overflow-hidden outline-2 outline-offset-2 transition-opacity focus-visible:outline-varqs-mint ${
                        i === photo
                          ? 'opacity-100 outline-varqs-mint'
                          : 'opacity-50 outline-transparent hover:opacity-100'
                      }`}
                    >
                      <img
                        src={src}
                        alt=""
                        className="h-14 w-20 object-cover sm:h-16 sm:w-24"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </dialog>
    </section>
  )
}