import { useState } from "react";

export default function FormularioContacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        mensaje: ''
    });

    const [errores, setErrores] = useState({});

    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validarFormulario = () => {
        const nuevosErrores = {};

        if (!formData.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio.';
        }

        if (!formData.correo.trim()) {
            nuevosErrores.correo = 'El correo electrónico es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
            nuevosErrores.correo = 'Ingresa un formato de correo válido (ej: usuario@dominio.com).';
        }

        if (!formData.mensaje.trim()) {
            nuevosErrores.mensaje = 'El mensaje no puede estar vacío.';
        }

        return nuevosErrores;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const erroresDetectados = validarFormulario();

        if (Object.keys(erroresDetectados).length > 0) {
            setErrores(erroresDetectados);
            setEnviado(false);
        } else {
            setErrores({});
            setEnviado(true);
            setFormData({ nombre: '', correo: '', mensaje: '' });
        }
    };

    return (
        <div className="contact-form">
            {enviado && (
                <p className="contact-form__success" role="alert">
                    ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.
                </p>
            )}

            <form onSubmit={handleSubmit} noValidate>
                <div className="contact-form__group">
                    <label htmlFor="nombre" className="contact-form__label">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="contact-form__field"
                        aria-invalid={!!errores.nombre}
                        aria-describedby={errores.nombre ? 'error-nombre' : undefined}
                    />
                    {errores.nombre && (
                        <span id="error-nombre" className="contact-form__error" role="alert">
                            {errores.nombre}
                        </span>
                    )}
                </div>

                <div className="contact-form__group">
                    <label htmlFor="correo" className="contact-form__label">Correo electrónico:</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        className="contact-form__field"
                        aria-invalid={!!errores.correo}
                        aria-describedby={errores.correo ? 'error-correo' : undefined}
                    />
                    {errores.correo && (
                        <span id="error-correo" className="contact-form__error" role="alert">
                            {errores.correo}
                        </span>
                    )}
                </div>

                <div className="contact-form__group">
                    <label htmlFor="mensaje" className="contact-form__label">Mensaje:</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="5"
                        value={formData.mensaje}
                        onChange={handleChange}
                        className="contact-form__field"
                        aria-invalid={!!errores.mensaje}
                        aria-describedby={errores.mensaje ? 'error-mensaje' : undefined}
                    />
                    {errores.mensaje && (
                        <span id="error-mensaje" className="contact-form__error" role="alert">
                            {errores.mensaje}
                        </span>
                    )}
                </div>

                <button type="submit" className="button button--primary contact-form__submit">
                    Enviar mensaje
                </button>
            </form>
        </div>
    );
}