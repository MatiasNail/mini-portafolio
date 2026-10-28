export default function TarjetaProyecto({ titulo, descripcion, enlace }) {
    return (
        <article className="project-card">
            <h3 className="project-card__title">{titulo}</h3>
            <p className="project-card__description">{descripcion}</p>

            {enlace ? (
                <a
                    href={enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    aria-label={`Ver proyecto ${titulo} en GitHub (se abre en nueva pestaña)`}
                >
                    Ver proyecto
                </a>
            ) : (
                <p className="project-card__status">Repositorio no disponible</p>
            )}
        </article>
    );
}