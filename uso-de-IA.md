IA utilizada: Gemini 3.6 Thinking

prompt: Hola!, necesito te pongas en el papel de un desarrollador experto de frontend, priorizando accesibilidad y gran calidad. Necesito me ayudes a seguir un wireframe para la creación de mi portafolio en react, apoyando Mi desarrollo, no entregando el proyecto completado. Sumado al wireframe tengo una pauta por fases para realizar mi portafolio, observala y necesito me apoyes paso a paso (me encuentro en la fase 5) #entregando la guía paso a paso y captura del wireframe

resultado:
Para abordar la Fase 5 (Contenido de las páginas), trabajaremos secuencialmente en las tres vistas indicadas: Inicio.jsx, SobreMi.jsx y Habilidades.jsx. El objetivo de esta fase es estructurar el contenido real (sin lorem ipsum) garantizando semántica HTML correcta y una jerarquía de encabezados accesible.

Step 1: Página de Inicio (src/pages/Inicio.jsx)
En esta página presentarás tu perfil y un botón de llamada a la acción (CTA).

Criterios de accesibilidad e implementación:
<h1> único: Debe contener la presentación principal (nombre y rol).

Navegación accesible con Link: Para navegar internamente sin recargar la página, se usa <Link to="..."> de react-router-dom. No uses <a href>.

JavaScript
import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <section aria-labelledby="titulo-inicio">
      <h1 id="titulo-inicio">
        Hola, soy <span className="highlight">[Tu Nombre]</span>
      </h1>
      <p className="role">[Tu Rol, ej: Desarrollador/a Frontend en formación]</p>

      <p className="description">
        [Escribe una frase breve de bienvenida que defina tu enfoque profesional o pasión]
      </p>

      <Link to="/sobre-mi" className="btn-primary">
        Explorar portafolio
      </Link>
    </section>
  );
}
Step 2: Página Sobre mí (src/pages/SobreMi.jsx)
Esta sección describe tu contexto académico, metas y áreas de interés.

Criterios de accesibilidad e implementación:
Uso de listas semánticas: Los intereses deben ir dentro de elementos <ul> y <li> para que los lectores de pantalla anuncien correctamente el número de elementos.

Subencabezados: Usa <h2> para subdividir las secciones dentro de la página.

JavaScript
export default function SobreMi() {
  return (
    <article className="sobre-mi-container">
      <h1>Sobre mí</h1>

      <section>
        <h2>Mi Formación y Objetivos</h2>
        <p>
          [Escribe qué estudias actualmente, qué tecnologías te apasionan y hacia dónde quieres dirigir tu carrera profesional.]
        </p>
      </section>

      <section>
        <h2>Áreas de Interés</h2>
        <ul>
          <li>[Interés 1, ej: Accesibilidad Web (a11y)]</li>
          <li>[Interés 2, ej: Desarrollo de Interfaces en React]</li>
          <li>[Interés 3, ej: Diseño de Experiencia de Usuario (UX)]</li>
        </ul>
      </section>
    </article>
  );
}
Step 3: Página de Habilidades (src/pages/Habilidades.jsx)
Para las habilidades utilizaremos un arreglo de objetos recorrido con .map(), lo que facilita el mantenimiento del código.

Criterios de accesibilidad e implementación:
Propiedad key única: Asigna como key un identificador único (evita usar el índice del arreglo si la lista puede cambiar).

Estructura legible: Organiza las habilidades y las herramientas en dos listas independientes con sus respectivos subencabezados <h2>.

JavaScript
const HABILIDADES = [
  { id: 'html-css', nombre: 'HTML5 & CSS3', nivel: 'Avanzado' },
  { id: 'js', nombre: 'JavaScript (ES6+)', nivel: 'Intermedio' },
  { id: 'react', nombre: 'React', nivel: 'Intermedio' },
  // Agrega tus habilidades aquí
];

const HERRAMIENTAS = ['Git', 'GitHub', 'VS Code', 'Figma'];

export default function Habilidades() {
  return (
    <section>
      <h1>Habilidades y Herramientas</h1>

      <section>
        <h2>Competencias Técnicas</h2>
        <ul className="skills-grid">
          {HABILIDADES.map((habilidad) => (
            <li key={habilidad.id} className="skill-card">
              <h3>{habilidad.nombre}</h3>
              <p>Nivel: <span>{habilidad.nivel}</span></p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Herramientas de Trabajo</h2>
        <ul className="tools-list">
          {HERRAMIENTAS.map((herramienta, index) => (
            <li key={`herramienta-${index}`}>
              {herramienta}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
Pasos de verificación antes de registrar cambios
Prueba de navegación: Haz clic en el botón "Explorar" en Inicio y confirma que te redirige sin recargar la pantalla.

Consola del navegador (F12): Verifica que no exista la advertencia Warning: Each child in a list should have a unique "key" prop.

Jerarquía HTML: Comprueba que en cada página exista solo un <h1>.

Registro en Git (Commit de la Fase 5)
Una vez completado y verificado el código en tu navegador, ejecuta estos comandos en la terminal:

Bash
git add .
git commit -m "feat: contenido de Inicio, Sobre mi y Habilidades"
git push
Completa el código con tus datos reales en estos tres archivos. ¿Lograste renderizarlos sin errores en pantalla antes de pasar a la Fase 6 (TarjetaProyecto con Props)?

prompt: ya pasé al paso 6

resultado:
Para la Fase 6 (Componente reutilizable con props: TarjetaProyecto), dividiremos el trabajo en dos partes: la creación del componente hijo reutilizable y su consumo en la página Proyectos.jsx.   
DOCX
+ 1

Paso 1: Crear src/components/TarjetaProyecto.jsx
Este componente recibirá las propiedades (props) de cada proyecto.   
DOCX

Criterios de accesibilidad y buenas prácticas:
Enlaces externos seguros: Al usar target="_blank", agregamos obligatoriamente rel="noopener noreferrer" para evitar riesgos de seguridad y rendimiento (tabnabbing).   
DOCX

Contexto en lectores de pantalla: Si hay varios enlaces que dicen "Ver proyecto", un usuario de lector de pantalla no sabrá a cuál se refiere. Usamos aria-label para darle un contexto explícito indicando el título del proyecto y que se abrirá en una nueva pestaña.

Manejo de casos borde: Si un proyecto no tiene enlace, mostramos una indicación clara en lugar de romper la interfaz o renderizar un enlace sin destino.   
DOCX

JavaScript
export default function TarjetaProyecto({ titulo, descripcion, enlace }) {
  return (
    <article className="card-proyecto">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>

      {enlace ? (
        <a
          href={enlace}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver proyecto ${titulo} en GitHub (se abre en nueva pestaña)`}
        >
          Ver proyecto
        </a>
      ) : (
        <p className="sin-enlace">Repositorio no disponible</p>
      )}
    </article>
  );
}
Paso 2: Consumir el componente en src/pages/Proyectos.jsx
Ahora importamos el componente, definimos los datos de tus proyectos en un arreglo de objetos y los recorremos con .map().   
DOCX

JavaScript
import TarjetaProyecto from '../components/TarjetaProyecto';

const PROYECTOS = [
  {
    id: 'proyecto-1',
    titulo: 'Mini Portafolio React',
    descripcion: 'Proyecto personal desarrollado con React, Vite y React Router.',
    enlace: 'https://github.com/TU-USUARIO/mini-portafolio'
  },
  {
    id: 'proyecto-2',
    titulo: 'Aplicación de Tareas',
    descripcion: 'Gestor de tareas interactivo creado para practicar estado en React.',
    enlace: 'https://github.com/TU-USUARIO/todo-app'
  }
];

export default function Proyectos() {
  return (
    <section aria-labelledby="titulo-proyectos">
      <h1 id="titulo-proyectos">Mis Proyectos</h1>

      <div className="proyectos-grid">
        {PROYECTOS.map((proyecto) => (
          <TarjetaProyecto
            key={proyecto.id}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            enlace={proyecto.enlace}
          />
        ))}
      </div>
    </section>
  );
}
(Recuerda reemplazar TU-USUARIO por tu usuario real de GitHub).   
DOCX

Verificación de la Fase 6
Prueba de props: Cambia temporalmente el titulo de uno de los objetos en el arreglo PROYECTOS y guarda el archivo. Comprueba que el cambio se refleje inmediatamente en la tarjeta correspondiente en el navegador.   
DOCX

Consola limpia: Asegúrate de que no haya ninguna advertencia relacionada con la propiedad key.   
DOCX

Comprobación de enlace: Haz clic en "Ver proyecto" y confirma que abra la pestaña externa correctamente.

Registro en Git (Commit de la Fase 6)
Una vez verificado que las tarjetas renderizan sin errores en /proyectos, ejecuta en tu terminal:   
DOCX

Bash
git add .
git commit -m "feat: página Proyectos con TarjetaProyecto"
git push
¿Lograste ver las tarjetas con sus props en pantalla? Avísame si te aparece algún aviso de ESLint para solucionarlo antes de pasar a la Fase 7 (Formulario de contacto con estado).

prompt: pasé al 7 

resultado:
La Fase 7 (Formulario de contacto con estado) es el módulo más exigente de la pauta. Para mantener el código limpio y accesible, implementaremos tres estados con useState: uno para los campos del formulario, otro para los mensajes de error y un tercero para la confirmación de envío.   Paso 1: Crear el componente src/components/FormularioContacto.jsxCriterios de accesibilidad y buenas prácticas:Vinculación <label> e <input>: Usamos htmlFor e id idénticos para asociar cada etiqueta con su campo correspondiente.   Atributo noValidate: Desactiva la validación por defecto del navegador para renderizar nuestros propios mensajes estilizados y accesibles.   Atributos ARIA de accesibilidad (WCAG 2.2):aria-invalid: Notifica a los lectores de pantalla si un campo contiene un error.aria-describedby: Enlaza el input con el elemento <span> que contiene su mensaje de error.role="alert": Anuncia dinámicamente los errores y el mensaje de confirmación cuando aparecen en pantalla.JavaScriptimport { useState } from 'react';

export default function FormularioContacto() {
  // 1. Estado para capturar los datos de los campos
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  // 2. Estado para los mensajes de error
  const [errores, setErrores] = useState({});

  // 3. Estado para la confirmación de envío
  const [enviado, setEnviado] = useState(false);

  // Manejador único onChange utilizando el atributo 'name' del input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función de validación
  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    }

    if (!formData.correo.trim()) {
      nuevosErrores.correo = 'El correo electrónico es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      nuevosErrores.correo = 'Ingresa un formato de correo válido (ej: usuario@dominio.com).';
    }

    if (!formData.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje no puede estar vacío.';
    }

    return nuevosErrores;
  };

  // Manejador de submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página

    const erroresDetectados = validarFormulario();

    if (Object.keys(erroresDetectados).length > 0) {
      setErrores(erroresDetectados);
      setEnviado(false);
    } else {
      setErrores({});
      setEnviado(true);
      // Limpiar los campos tras un envío exitoso
      setFormData({ nombre: '', correo: '', mensaje: '' });
    }
  };

  return (
    <div className="formulario-container">
      {enviado && (
        <p className="mensaje-exito" role="alert">
          ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            aria-invalid={!!errores.nombre}
            aria-describedby={errores.nombre ? 'error-nombre' : undefined}
          />
          {errores.nombre && (
            <span id="error-nombre" className="error-text" role="alert">
              {errores.nombre}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            aria-invalid={!!errores.correo}
            aria-describedby={errores.correo ? 'error-correo' : undefined}
          />
          {errores.correo && (
            <span id="error-correo" className="error-text" role="alert">
              {errores.correo}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            value={formData.mensaje}
            onChange={handleChange}
            aria-invalid={!!errores.mensaje}
            aria-describedby={errores.mensaje ? 'error-mensaje' : undefined}
          />
          {errores.mensaje && (
            <span id="error-mensaje" className="error-text" role="alert">
              {errores.mensaje}
            </span>
          )}
        </div>

        <button type="submit" className="btn-submit">
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}
Paso 2: Renderizar en src/pages/Contacto.jsxImporta el componente recién creado en la vista de contacto:   JavaScriptimport FormularioContacto from '../components/FormularioContacto';

export default function Contacto() {
  return (
    <section aria-labelledby="titulo-contacto">
      <h1 id="titulo-contacto">Contacto</h1>
      <p>¿Tienes alguna consulta o propuesta? Puedes escribirme mediante el siguiente formulario:</p>
      <FormularioContacto />
    </section>
  );
}
Pruebas de verificación obligatoriasRealiza los siguientes tres escenarios de prueba en tu navegador antes de guardar cambios:   Campos vacíos: Haz clic en "Enviar mensaje" sin escribir nada. Deben aparecer los tres mensajes de error.   Formato de correo inválido: Escribe tu nombre, en correo pon sólo hola y escribe un mensaje. Al presionar enviar, solo el campo de correo debe mostrar error.   Datos correctos: Completa los 3 campos adecuadamente y envía. Debe aparecer el mensaje de éxito en verde y limpiarse los campos.   Registro en Git (Commit de la Fase 7)Una vez completadas y validadas las tres pruebas:   Bashgit add .
git commit -m "feat: formulario de contacto con validacion"
git push
¿Pudiste probar los tres casos de validación en pantalla sin inconvenientes? Cuando estés listo, continuamos con la Fase 8 (Estilos en CSS).

prompt: me gustaría para la estilización algo inspirado en el wireframe pero con color de fondo blanco y azul marino para footer y la navbar

resultado:

:root {
  --bg-main: #f8fafc;
  --bg-surface: #ffffff;
  --border-color: #e2e8f0;
  --navy-dark: #0f172a;
  --navy-hover: #1e293b;
  --navy-light-active: #38bdf8;
  --text-primary: #0f172a;
  --text-muted: #475569;
  --text-light: #ffffff;
  --text-light-muted: #cbd5e1;
  --color-error: #dc2626;
  --color-success: #16a34a;
  --max-width: 1000px;
  --radius: 8px;
  --font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  background-color: var(--bg-main);
  color: var(--text-primary);
  font-family: var(--font-family);
  line-height: 1.6;
}

#root {
  min-height: 100vh;
}

.page-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-main {
  flex: 1;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
}

.panel {
  background: #edf2f7;
  border: 1px solid #dfe7f1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
}

.panel__body {
  padding: 1.5rem;
}

.panel__subtitle {
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.site-header {
  width: 100%;
  background-color: var(--navy-dark);
  color: var(--text-light);
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.18);
}

.site-header__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1.15rem 1.5rem;
  display: flex;
  align-items: center;
  min-height: 90px;
}

.site-header__nav {
  width: 100%;
}

.site-header__list {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

.site-header__link {
  color: var(--text-light-muted);
  text-decoration: none;
  font-weight: 600;
  padding: 0.7rem 0.95rem;
  border-radius: var(--radius);
  transition: all 0.2s ease;
  display: inline-block;
}

.site-header__link:hover {
  color: var(--text-light);
  background-color: rgba(255, 255, 255, 0.1);
}

.site-header__link--active {
  color: var(--text-light);
  font-weight: 700;
  border-bottom: 2px solid var(--navy-light-active);
}

footer {
  width: 100%;
  background-color: var(--navy-dark);
  color: var(--text-light-muted);
  text-align: center;
  padding: 1.1rem 1rem;
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
}

h1 {
  font-size: 2.25rem;
  margin-bottom: 1rem;
  color: var(--navy-dark);
}

h2 {
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--navy-dark);
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--navy-dark);
}

.projects__grid,
.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
  list-style: none;
  padding: 0;
}

.project-card,
.skills__item {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.skills__tools {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.skills__tool {
  background-color: #e2e8f0;
  color: var(--text-primary);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-weight: 500;
  font-size: 0.9rem;
}

.contact-form {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  padding: 2rem;
  border-radius: var(--radius);
  max-width: 650px;
  margin-top: 1.5rem;
}

.contact-form__group {
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.contact-form__label {
  font-weight: 600;
  color: var(--navy-dark);
}

.contact-form__field {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  background-color: var(--bg-main);
  color: var(--text-primary);
  font-family: inherit;
  font-size: 1rem;
}

.contact-form__field[aria-invalid="true"] {
  border-color: var(--color-error);
}

.contact-form__error {
  color: var(--color-error);
  font-size: 0.875rem;
}

.contact-form__success {
  background-color: rgba(22, 163, 74, 0.1);
  color: var(--color-success);
  border: 1px solid var(--color-success);
  padding: 1rem;
  border-radius: var(--radius);
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.button,
.project-card__link {
  display: inline-block;
  background-color: var(--navy-dark);
  color: var(--text-light);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  align-self: flex-start;
  margin-top: 1rem;
}

.button:hover,
.project-card__link:hover,
.button:focus-visible,
.project-card__link:focus-visible {
  background-color: var(--navy-hover);
}

:focus-visible {
  outline: 3px solid var(--navy-light-active);
  outline-offset: 2px;
}

@media (max-width: 640px) {
  .site-header__list {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
}