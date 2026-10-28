# Mini Portafolio en React

Proyecto de portafolio web personal desarrollado con React y Vite, enfocado en semántica HTML, accesibilidad web (WCAG 2.2 AA) y diseño adaptativo según wireframe con paleta de color azul marino y fondo claro.

## Secciones del Portafolio

1. **Inicio (`/`):** Presentación personal, rol profesional, llamado a la acción hacia la sección Sobre Mí y tarjetas destacadas.
2. **Sobre mí (`/sobre-mi`):** Información sobre formación académica, metas profesionales y áreas de interés.
3. **Habilidades (`/habilidades`):** Listado dinámico de competencias técnicas y herramientas de desarrollo renderizadas con `.map()`.
4. **Proyectos (`/proyectos`):** Muestra de proyectos integrados mediante el componente reutilizable `TarjetaProyecto`.
5. **Contacto (`/contacto`):** Formulario controlado con captura de estado, validación de campos (nombre, correo y mensaje) y avisos de confirmación o error accesibles.

## Requisitos e Instalación

### Requisitos previos
* Node.js (v20.19+ o v22.12+)
* npm

### Instalación
1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/TU-USUARIO/mini-portafolio.git](https://github.com/TU-USUARIO/mini-portafolio.git)
   cd mini-portafolio

2. Instalar dependencias:
 npm install

3. Ejecución del proyecto: 
 en tu terminal debes de ejecutar "npm run dev" para correrlo en local

4.Estructura de carpetas
mini-portafolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── FormularioContacto.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   └── TarjetaProyecto.jsx
│   ├── pages/
│   │   ├── Contacto.jsx
│   │   ├── Habilidades.jsx
│   │   ├── Inicio.jsx
│   │   ├── Proyectos.jsx
│   │   └── SobreMi.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── README.md
├── uso_ia.md
└── vite.config.js

5.Rutas de la Aplicación

/  Inicio.jsx	Pantalla principal con llamado a la acción.

/sobre-mi	SobreMi.jsx	Información de trasfondo académico e intereses.

/habilidades	Habilidades.jsx	Mapeo de habilidades y herramientas técnicas.

/proyectos	Proyectos.jsx	Mapeo de tarjetas reutilizables de proyectos.

/contacto	Contacto.jsx	Formulario con validación de estado y accesibilidad.

6. Dificultades:

-Tiempo ajustado
-Falta de experiencia con React
-Pobre manejo del tiempo