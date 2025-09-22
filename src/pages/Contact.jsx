
import useForm from "../hooks/useForm";

export default function Contact() {
  const initialValues = { nombre: "", email: "", mensaje: "" };

  const validate = (values) => {
    let errors = {};
    if (!values.nombre.trim()) errors.nombre = "El nombre es obligatorio";
    if (!values.email.trim()) {
      errors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "El email no es válido";
    }
    if (!values.mensaje.trim()) errors.mensaje = "El mensaje no puede estar vacío";
    return errors;
  };

  const onSubmit = (values) => {
    console.log("Formulario enviado:", values);
    alert("Formulario de contacto enviado ✅");
  };

  const { form, errors, handleChange, handleSubmit } = useForm(initialValues, validate, onSubmit);

  return (
    <div className="page">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            className={errors.nombre ? "error-input" : ""}
          />
          {errors.nombre && <p className="error">{errors.nombre}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label>Mensaje:</label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            className={errors.mensaje ? "error-input" : ""}
          />
          {errors.mensaje && <p className="error">{errors.mensaje}</p>}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
