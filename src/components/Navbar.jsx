import { useState } from 'react'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-varqs-mint/30 bg-varqs-navy">
      <nav
        aria-label="Principal"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6"
      >
        {<img src="/VARQS.png" alt="VARQS Studio" className="h-20 w-auto" />}

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-widest text-white transition-colors hover:text-varqs-mint focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-varqs-mint"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="rounded p-2 text-varqs-mint focus-visible:outline-2 focus-visible:outline-varqs-mint md:hidden"
        >
          <svg
            width="28"
            height="28"
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

      {/* Menú desplegable (celular) */}
      {open && (
        <ul
          id="menu-movil"
          className="border-t border-varqs-mint/30 px-6 pb-4 md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm uppercase tracking-widest text-white hover:text-varqs-mint"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
