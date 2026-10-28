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