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
  image = '/AboutUs.png',
  logo = '/VARQS.png',
}) {
  return (
    <section
      id="nosotros"
      className="grid scroll-mt-20 bg-white md:min-h-[80vh] md:grid-cols-[36%_1fr]"
    >
      {/* Image + brand bar */}
      <div className="flex flex-col">
        <img
          src={image}
          alt="Antonio y Gabriel, arquitectos fundadores de VARQS Studio"
          className="h-80 w-full object-cover md:h-auto md:min-h-0 md:flex-1"
        />
        <div className="flex h-24 items-center justify-center bg-varqs-navy">
          <img
            src={logo}
            alt="VARQS Studio"
            className="h-14 w-auto max-w-[80%] object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex max-w-3xl flex-col justify-center px-6 py-12 sm:px-12 lg:px-20">
        <h2
          tabIndex={0}
          className="relative mb-5 inline-block self-start pb-2 text-3xl 
          font-bold text-varqs-navy outline-none after:absolute after:bottom-0 
          after:left-0 after:h-0.75 after:w-full after:origin-center 
          after:scale-x-0 after:rounded-full 
          after:bg-varqs-mint after:transition-transform 
          after:duration-500 after:ease-out hover:after:scale-x-100 
          focus-visible:after:scale-x-100 motion-reduce:after:transition-none 
          sm:text-4xl"
        >
          Quiénes somos
        </h2>

        <p className="mb-9 text-sm leading-7 text-varqs-navy/80 md:text-justify">
          Somos Antonio y Gabriel, dos Arquitectos graduados de la Universidad de
          Costa Rica. Nos especializamos en diseño residencial desde cero para
          viviendas entre 50&nbsp;m² y 400&nbsp;m², con propuestas
          contemporáneas que equilibran funcionalidad, estética y viabilidad
          constructiva. Nuestro enfoque combina arquitectura tropical y
          minimalista, adaptando cada proyecto a la realidad económica y
          necesidades de quienes lo habitan.
        </p>

        <ul className="grid gap-6">
          {VALUES.map(({ title, text }) => (
            <li key={title} className="border-l-4 border-varqs-mint pl-5">
              <h3 className="mb-1 text-base font-semibold text-varqs-navy">
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