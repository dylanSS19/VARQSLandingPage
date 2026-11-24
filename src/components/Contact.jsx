import { useState } from 'react'


const CONTACT = {
  email: 'info@varqsstudio.com',
  whatsapp: '+506 8476 1991',
  whatsappNumber: '50684761991', 
  instagram: '@varqsstudio',
  instagramUrl: 'https://www.instagram.com/varqsstudio',
}

const PROJECT_TYPES = [
  'Vivienda nueva (diseño desde cero)',
  'Otro (cuéntanos en tu mensaje)',
]

const BUDGET_RANGES = [
  'Menos de $50 000',
  '$50 000 – $100 000',
  '$100 000 – $200 000',
  '$200 000 – $400 000',
  'Más de $400 000',
]

const fieldClasses =
  'w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-varqs-navy outline-none transition-colors placeholder:text-varqs-navy/40 focus:border-varqs-mint focus:ring-2 focus:ring-varqs-mint/40'

const selectClasses = `${fieldClasses} appearance-none pr-10 invalid:text-varqs-navy/40 [&>option]:text-varqs-navy`

function Field({ id, label, hint, className = '', children }) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 block text-[11px] font-bold text-varqs-navy"
      >
        {label} *
      </label>
      {children}
      {hint && <p className="mt-2 text-[10px] text-varqs-navy/70">{hint}</p>}
    </div>
  )
}

function SelectField({ id, name, label, hint, placeholder, options, className }) {
  return (
    <Field id={id} label={label} hint={hint} className={className}>
      <div className="relative">
        <select
          id={id}
          name={name}
          required
          defaultValue=""
          className={selectClasses}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-varqs-navy"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </Field>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))

    const message = [
      'Hola VARQS Studio, quiero solicitar una consulta de diseño.',
      '',
      `Nombre: ${data.name}`,
      `Correo: ${data.email}`,
      `Teléfono: ${data.phone}`,
      `Tipo de proyecto: ${data.projectType}`,
      `Inversión estimada: ${data.budget}`,
      `Ubicación del terreno: ${data.location}`,
      '',
      `Sobre el proyecto: ${data.message}`,
    ].join('\n')

    window.open(
      `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )

    form.reset()
    setSent(true)
  }

  return (
    <section
      id="contacto"
      className="scroll-mt-20 bg-neutral-100 px-6 py-16 sm:px-12 lg:px-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
        <div>
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-varqs-navy">
            Inicia tu proyecto
          </p>

          <h2
            tabIndex={0}
            className="relative mb-6 inline-block text-balance pb-2 text-4xl font-bold leading-tight text-varqs-navy outline-none after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-varqs-mint after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none sm:text-5xl"
          >
            Proyectos claros, viables y listos para construir.
          </h2>

          <p className="max-w-sm text-sm leading-6 text-varqs-navy/80">
            Cuéntanos qué tienes en mente. Revisaremos el alcance, la ubicación
            y la inversión prevista para valorar cómo acompañarte.
          </p>

          <div className="mt-10 max-w-sm bg-varqs-mint p-6">
            <p className="mb-3 text-base font-bold text-varqs-navy">
              Diseñamos. No construimos.
            </p>
            <p className="text-xs leading-5 text-varqs-navy">
              La ejecución de obra la realizan constructoras aliadas. VARQS
              Studio da seguimiento mediante inspecciones periódicas.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 text-sm">
            <li>
              <p className="text-[11px] font-bold text-varqs-navy">Correo</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-varqs-navy/80 transition-colors hover:text-varqs-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-varqs-mint"
              >
                {CONTACT.email}
              </a>
            </li>
            <li>
              <p className="text-[11px] font-bold text-varqs-navy">WhatsApp</p>
              <a
                href={`https://wa.me/${CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-varqs-navy/80 transition-colors hover:text-varqs-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-varqs-mint"
              >
                {CONTACT.whatsapp}
              </a>
            </li>
            <li>
              <p className="text-[11px] font-bold text-varqs-navy">Instagram</p>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-varqs-navy/80 transition-colors hover:text-varqs-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-varqs-mint"
              >
                {CONTACT.instagram}
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
          <Field id="name" label="Nombre completo">
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Tu nombre y apellidos"
              className={fieldClasses}
            />
          </Field>

          <Field id="email" label="Correo electrónico">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="nombre@correo.com"
              className={fieldClasses}
            />
          </Field>

          <Field id="phone" label="Teléfono / WhatsApp">
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="+506"
              className={fieldClasses}
            />
          </Field>

          <SelectField
            id="projectType"
            name="projectType"
            label="Tipo de proyecto"
            placeholder="Selecciona una opción"
            options={PROJECT_TYPES}
          />

          <SelectField
            id="budget"
            name="budget"
            label="Inversión estimada (USD)"
            hint="Inversión total prevista. El diseño se cotiza aparte."
            placeholder="Selecciona un rango"
            options={BUDGET_RANGES}
            className="sm:col-span-2"
          />

          <Field
            id="location"
            label="Ubicación del terreno"
            className="sm:col-span-2"
          >
            <input
              id="location"
              name="location"
              type="text"
              required
              placeholder="Provincia, cantón y referencia del sitio"
              className={fieldClasses}
            />
          </Field>

          <Field
            id="message"
            label="Cuéntanos sobre tu proyecto"
            className="sm:col-span-2"
          >
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="¿Qué imaginas para este espacio?"
              className={`${fieldClasses} resize-y`}
            />
          </Field>

          <label className="flex items-start gap-3 text-[11px] leading-5 text-varqs-navy/80 sm:col-span-2">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-0.5 size-4 shrink-0 accent-varqs-navy"
            />
            Acepto que VARQS Studio me contacte sobre mi consulta de diseño y he
            leído la política de privacidad.
          </label>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-varqs-red px-7 py-3.5 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-varqs-mint"
            >
              Solicitar una consulta
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              >
                →
              </span>
            </button>

            {sent && (
              <p role="status" className="mt-4 text-xs font-semibold text-varqs-navy">
                Se abrió WhatsApp con tu mensaje listo para enviar. ¡Gracias por
                escribirnos!
              </p>
            )}

            <p className="mt-4 text-[10px] text-varqs-navy/70">
              * Campos obligatorios. Tu información se usa solo para atender esta
              solicitud.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}