import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <nav className="site-header__inner" aria-label="Navegación principal">
        <ul className="site-header__list">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'site-header__link site-header__link--active' : 'site-header__link'
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre-mi"
              className={({ isActive }) =>
                isActive ? 'site-header__link site-header__link--active' : 'site-header__link'
              }
            >
              Sobre mí
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/habilidades"
              className={({ isActive }) =>
                isActive ? 'site-header__link site-header__link--active' : 'site-header__link'
              }
            >
              Habilidades
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/proyectos"
              className={({ isActive }) =>
                isActive ? 'site-header__link site-header__link--active' : 'site-header__link'
              }
            >
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive ? 'site-header__link site-header__link--active' : 'site-header__link'
              }
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}