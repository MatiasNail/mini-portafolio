import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <section aria-labelledby="titulo-inicio">
        <h1 id="titulo-inicio">
            Hola, soy Matias!
        </h1>
        <p>Desarrollador de Frontend</p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus sed dolores accusantium incidunt quia non eaque nihil animi minus cupiditate, molestiae dolor officiis odit, pariatur fugit voluptas voluptates quibusdam? Quae!
        </p>

        <Link to="/sobre-mi" className="btn-primary">
        Explorar portafolio
        </Link>
    </section>
  );
}