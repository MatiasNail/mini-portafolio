import FormularioContacto from "../components/FormularioContacto";

export default function Contacto() {
  return (
    <section className="panel" aria-labelledby="titulo-contacto">
      <div className="panel__body">
        <h1 id="titulo-contacto">Contacto</h1>
        <p>Si tienes alguna duda o propuesta me puedes contactar mediante el siguiente formulario:</p>
        <FormularioContacto />
      </div>
    </section>
  );
}