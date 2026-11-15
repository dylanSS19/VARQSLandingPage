# VARQS Landing Page

Sitio web de **VARQS Studio**, estudio de diseño arquitectónico residencial. El objetivo es presentar los proyectos de forma visual y elegante, y facilitar que clientes interesados en diseño arquitectónico se pongan en contacto.

> 🚧 Proyecto en desarrollo.

## Tecnologías

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- JavaScript
- ESLint

## Requisitos previos

- [Node.js](https://nodejs.org/) (versión LTS reciente)
- npm (viene incluido con Node.js)
- Git

## Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/dylanSS19/VARQSLandingPage.git

# 2. Entrar a la carpeta del proyecto
cd VARQSLandingPage

# 3. Instalar las dependencias
npm install
```

## Uso

```bash
# Servidor de desarrollo (http://localhost:5173)
npm run dev
```

## Scripts disponibles

| Comando           | Descripción                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con recarga en vivo |
| `npm run build`   | Genera la versión optimizada para producción en `dist/` |
| `npm run preview` | Sirve localmente la versión generada con `build`     |
| `npm run lint`    | Revisa el código con ESLint                          |

## Estructura del proyecto

```
VARQSLandingPage/
├── public/            # Archivos estáticos (favicon, imágenes públicas)
├── src/
│   ├── assets/        # Imágenes, íconos y otros recursos
│   ├── App.jsx        # Componente principal
│   ├── App.css        # Estilos del componente principal
│   ├── index.css      # Estilos globales
│   └── main.jsx       # Punto de entrada de la aplicación
├── eslint.config.js   # Configuración de ESLint
├── index.html         # Plantilla HTML base
├── package.json       # Dependencias y scripts
└── vite.config.js     # Configuración de Vite
```

## Flujo de trabajo

1. Crear una rama nueva a partir de `main` para cada cambio (por ejemplo `feature/seccion-proyectos`).
2. Hacer commits con mensajes claros que describan qué se cambió.
3. Abrir un Pull Request hacia `main` para revisión antes de fusionar.

## Equipo

- **DeringSS** — Desarrollo general
- **Dylan** ([@dylanSS19](https://github.com/dylanSS19)) — Arquitectura de sistemas y despliegues