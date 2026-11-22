import { useState } from 'react'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

const cta = { label: 'Agenda una llamada', href: '#contacto' }

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-varqs-navy">
      <nav
        aria-label="Principal"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 md:grid md:grid-cols-[1fr_auto_1fr]"
      >
        <a href="#inicio" aria-label="VARQS Studio, ir al inicio" className="justify-self-start">
          <img src="/VARQS.png" alt="VARQS Studio" className="h-14 w-auto" />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/90 transition-colors hover:text-varqs-mint focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-varqs-mint"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={cta.href}
          className="group hidden items-center gap-2 justify-self-end text-sm font-semibold text-varqs-mint transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-varqs-mint md:inline-flex"
        >
          {cta.label}
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
          >
            →
          </span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="rounded p-2 text-varqs-mint focus-visible:outline-2 focus-visible:outline-varqs-mint md:hidden"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="border-t border-white/10 px-6 pb-4 md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm text-white/90 hover:text-varqs-mint"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={cta.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-semibold text-varqs-mint"
            >
              {cta.label} →
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}