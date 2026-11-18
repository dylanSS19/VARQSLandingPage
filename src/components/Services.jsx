/* Inline icons (lucide style), no extra dependency needed */
function Icon({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-6"
    >
      {children}
    </svg>
  )
}

const SearchIcon = () => (
  <Icon>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </Icon>
)

const PenToolIcon = () => (
  <Icon>
    <path d="M15.7 4.3 19.7 8.3a1 1 0 0 1 0 1.4L17 12.4 11.6 7l2.7-2.7a1 1 0 0 1 1.4 0Z" />
    <path d="m11.6 7-6.3 1.6a1 1 0 0 0-.7.7L3 20l10.7-1.6a1 1 0 0 0 .7-.7L16 11.4" />
    <circle cx="9.5" cy="14.5" r="1.5" />
    <path d="m3 21 5.7-5.7" />
  </Icon>
)

const FileTextIcon = () => (
  <Icon>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6M9 17h6M9 9h2" />
  </Icon>
)

const LayersIcon = () => (
  <Icon>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
    <path d="m3 17.5 9 5 9-5" />
  </Icon>
)

const DollarIcon = () => (
  <Icon>
    <path d="M12 2v20" />
    <path d="M17 6.5C16.2 5.2 14.3 4.5 12 4.5c-2.8 0-5 1.2-5 3.2s2 2.8 5 3.3 5 1.3 5 3.3-2.2 3.2-5 3.2c-2.4 0-4.3-.8-5.1-2.2" />
  </Icon>
)

const CheckCircleIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12.5 2.8 2.8L16 10" />
  </Icon>
)

const SERVICES = [
  {
    title: 'Análisis de sitio',
    text: 'Visita inicial y levantamiento de información del terreno.',
    icon: SearchIcon,
  },
  {
    title: 'Anteproyecto arquitectónico',
    text: 'Diseño conceptual, planos base y visualizaciones 3D.',
    icon: PenToolIcon,
  },
  {
    title: 'Desarrollo técnico',
    text: 'Planos constructivos, eléctricos, mecánicos y estructurales.',
    icon: FileTextIcon,
  },
  {
    title: 'Permisos y trámites',
    text: 'Gestión y acompañamiento en procesos municipales.',
    icon: LayersIcon,
  },
  {
    title: 'Presupuesto de obra',
    text: 'Costos de materiales, mano de obra y subcontratos.',
    icon: DollarIcon,
  },
  {
    title: 'Inspección de obra',
    text: 'Visitas de inspección durante la construcción, ejecutada por constructoras aliadas.',
    icon: CheckCircleIcon,
  },
]

export default function Services() {
  return (
    <section
      id="servicios"
      className="scroll-mt-20 bg-neutral-50 px-6 py-16 sm:px-12 lg:px-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <h2
            tabIndex={0}
            className="relative inline-block pb-2 text-3xl font-bold
            text-varqs-navy outline-none after:absolute after:bottom-0 
            after:left-0 after:h-0.75 after:w-full after:origin-center 
            after:scale-x-0 after:rounded-full 
            after:bg-varqs-mint after:transition-transform 
            after:duration-500 after:ease-out hover:after:scale-x-100 
            focus-visible:after:scale-x-100 motion-reduce:after:transition-none 
            sm:text-4xl"
          >
            Servicios
          </h2>
          <p className="mt-2 text-sm text-varqs-navy/60">
            Lo que ofrecemos en cada proyecto
          </p>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, text, icon: ServiceIcon }) => (
            <li
              key={title}
              className="group flex aspect-square flex-col justify-center 
              rounded-lg bg-white p-7 shadow-sm transition duration-300 
              hover:-translate-y-1.5 hover:shadow-xl hover:shadow-varqs-navy/10 
              motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <span className="mb-5 grid size-13 place-items-center rounded-full bg-varqs-navy text-white transition-colors duration-300 group-hover:bg-varqs-mint group-hover:text-varqs-navy">
                <ServiceIcon />
              </span>
              <h3 className="mb-2 text-base font-semibold text-varqs-navy">
                {title}
              </h3>
              <p className="text-sm leading-6 text-varqs-navy/60">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}