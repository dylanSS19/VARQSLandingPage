const SOCIAL_LINKS = [
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/varqsstudio',
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/varqsstudio',
    },
]

const MENU_LINKS = [
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Estudio', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
]

function FooterLink({ href, external = true, children }) {
    return (
        <a
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-varqs-mint focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-varqs-mint"
        >
            {children}
            <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
            >
                →
            </span>
        </a>
    )
}

function FooterColumn({ title, children }) {
    return (
        <div>
            <h2 className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-varqs-mint">
                {title}
            </h2>
            <ul className="grid gap-3">{children}</ul>
        </div>
    )
}

export default function Footer() {
    return (
        <footer className="bg-varqs-navy px-6 pb-8 pt-16 text-white sm:px-12 lg:px-20">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
                    <div>
                        <a href="#inicio" aria-label="VARQS Studio, ir al inicio">
                            <img src="/Logo horizontal verde.png" alt="VARQS Studio" className="h-14 w-auto" />
                        </a>
                        <p className="mt-8 text-xl font-bold leading-snug">
                            CONSULTORÍA EN
                            <br />
                            ARQUITECTURA
                        </p>
                    </div>

                    <FooterColumn title="Explora el estudio">
                        {MENU_LINKS.map(({ label, href, external }) => (
                            <li key={label}>
                                <FooterLink href={href} external={external}>
                                    {label}
                                </FooterLink>
                            </li>
                        ))}
                    </FooterColumn>

                    <FooterColumn title="Sigue al estudio">
                        {SOCIAL_LINKS.map(({ label, href }) => (
                            <li key={label}>
                                <FooterLink href={href}>{label}</FooterLink>
                            </li>
                        ))}
                    </FooterColumn>
                </div>

                <div className="mt-16 border-t border-white/15 pt-6">
                    <p className="text-center text-[11px] text-white/70">
                        © {new Date().getFullYear()} Estudio VARQS. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}