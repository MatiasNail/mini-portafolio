export default function TarjetaProyecto({ titulo, descripcion, enlace}) {
    return (
        <article className="card-proyecto">
            <h3>{titulo}</h3>
            <p>{descripcion}</p>

            {enlace ? (
                <a href={enlace} target="_blank" rel="noopener noreferrer" aria-label={`Ver proyecto ${titulo} en GitHub (se abre en nueva pestaña)`}>
                    Ver proyecto
                </a>
            ) : (
                <p className="sin-enlace">Repositorio no disponible</p>
            )}
        </article>
    );
}