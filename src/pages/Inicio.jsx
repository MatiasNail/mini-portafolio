import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <section className="panel" aria-labelledby="titulo-inicio">
      <div className="panel__body">
        <h1 id="titulo-inicio" className="panel__title">
          Hola, soy Matias!
        </h1>
        <p className="panel__subtitle">Desarrollador de Frontend</p>
        <p>
            Bienvenido/a a mi Portafolio. Aqui puedes encontrar mis proyectos y conocer más de mi.
        </p>
        <Link to="/sobre-mi" className="button button--primary">
          Explorar portafolio
        </Link>
      </div>
    </section>
  );
}