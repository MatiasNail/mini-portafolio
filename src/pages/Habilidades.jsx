const HABILIDADES = [
    { id: 'html-css', nombre: 'HTML5 y CSS3', nivel: 'avanzado' },
    { id: 'js', nombre: 'JavaScript', nivel: 'intermedio' },
    { id: 'react', nombre: 'React', nivel: 'principiante' }
];

const HERRAMIENTAS = ['Git', 'Github', 'VS Code', 'Figma'];

export default function Habilidades() {
  return (
    <section className="panel">
      <div className="panel__body">
        <h1>Habilidades y Herramientas</h1>

        <section>
          <h2>Tecnologías</h2>
          <ul className="skills__grid">
            {HABILIDADES.map((habilidad) => (
              <li key={habilidad.nombre} className="skills__item">
                <h3>{habilidad.nombre}</h3>
                <p>
                  Nivel: <span>{habilidad.nivel}</span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Herramientas</h2>
          <ul className="skills__tools">
            {HERRAMIENTAS.map((herramienta, index) => (
              <li key={`herramienta-${index}`} className="skills__tool">
                {herramienta}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}