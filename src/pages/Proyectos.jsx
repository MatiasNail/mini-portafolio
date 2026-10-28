import TarjetaProyecto from "../components/TarjetaProyecto";

const PROYECTOS = [
    {
        id: 'proyecto-1',
        titulo: 'Mini Portafolio React',
        descripcion: 'proyecto personal desarrollado con React, Vite y React Router',
        enlace: 'https://github.com/MatiasNail/mini-portafolio.git'
    },
    {
        id: 'proyecto-2',
        titulo: 'Mini Portafolio Web',
        descripcion: 'proyecto web desarrollado con HTML y CSS ',
        enlace: 'https://github.com/ICINF1107-2026/Web01Matias.git'
    },
    {
        id: 'proyecto-3',
        titulo: 'Mi Serie Favorita',
        descripcion: 'proyecto web para practicar HTML y CSS',
        enlace: 'https://github.com/MatiasNail/P-gina-serie-fav.git'
    },
        {
        id: 'proyecto-4',
        titulo: 'Plantilla React Desplegada',
        descripcion: 'Despliegue de plantilla react como primer acercamiento a la tecnologia',
        enlace: 'https://github.com/ICINF1107-2026/matias-sesion-13.git'
    }
];

export default function Proyectos() {
  return (
    <section aria-labelledby="titulo-proyectos">
        <h1 id="titulo-proyectos">Mis Proyectos</h1>

        <div className="proyectos-grid">
            {PROYECTOS.map((proyecto) => (
                <TarjetaProyecto key={proyecto.id} titulo={proyecto.titulo} descripcion={proyecto.descripcion} enlace={proyecto.enlace}/>
        ))}
        </div>
    </section>
  );
}