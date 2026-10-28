import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre-mi">
              Sobre mí
            </NavLink>
          </li>
          <li>
            <NavLink to="/habilidades">
              Habilidades
            </NavLink>
          </li>
          <li>
            <NavLink to="/proyectos">
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto">
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}