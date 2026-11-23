import AboutUsImage from '../assets/CASA_PACIFICO.jpg'

const VALUES = [
  {
    title: 'Diseño con propósito',
    text: 'Transformamos ideas y referencias en espacios coherentes y bien resueltos.',
  },
  {
    title: 'Acompañamiento constante',
    text: 'Reuniones de seguimiento semanales durante todo el proceso.',
  },
  {
    title: 'Visión integral',
    text: 'Del anteproyecto a los planos constructivos, permisos y presupuesto de obra.',
  },
]

export default function AboutUs({
  image = AboutUsImage,
  imageAlt = 'Espacio de trabajo de VARQS Studio',
}) {
  return (
    <section id="nosotros" className="scroll-mt-20 bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 lg:gap-24 lg:py-24">
        <img
          src={image}
          alt={imageAlt}
          className="aspect-square w-full rounded-sm object-cover"
        />

        <div className="max-w-xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-varqs-navy">
            Sobre el estudio
          </p>

          <h2
            tabIndex={0}
            className="relative mb-6 inline-block text-balance pb-2 text-3xl font-bold leading-tight text-varqs-navy outline-none after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-varqs-mint after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none sm:text-4xl lg:text-5xl"
          >
            Quiénes somos
          </h2>

          <p className="text-sm leading-7 text-varqs-navy/80">
            Somos Antonio y Gabriel, dos Arquitectos graduados de la Universidad
            de Costa Rica. Nos especializamos en diseño residencial desde cero
            para viviendas entre 50&nbsp;m² y 400&nbsp;m², con propuestas
            contemporáneas que equilibran funcionalidad, estética y viabilidad
            constructiva. Nuestro enfoque combina arquitectura tropical y
            minimalista, adaptando cada proyecto a la realidad económica y
            necesidades de quienes lo habitan.
          </p>

          <ul className="mt-10 grid gap-6 border-t border-varqs-navy/15 pt-8">
            {VALUES.map(({ title, text }) => (
              <li
                key={title}
                className="origin-left cursor-default border-l-4 border-varqs-mint pl-5 transition-transform duration-300 ease-out hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
              >
                <h3 className="mb-1 text-sm font-bold text-varqs-navy">
                  {title}
                </h3>
                <p className="text-sm leading-6 text-varqs-navy/60">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}