
import useForm from "../hooks/useForm";

export default function Register() {
  const initialValues = { nombre: "", email: "", password: "", confirmPassword: "" };

  const validate = (values) => {
    let errors = {};
    if (!values.nombre.trim()) errors.nombre = "El nombre es obligatorio";
    if (!values.email.trim()) {
      errors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "El email no es válido";
    }
    if (!values.password.trim()) {
      errors.password = "La contraseña es obligatoria";
    } else if (values.password.length < 6) {
      errors.password = "Debe tener al menos 6 caracteres";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }
    return errors;
  };

  const onSubmit = (values) => {
    console.log("Usuario registrado:", values);
    alert("Registro exitoso 🎉");
  };

  const { form, errors, handleChange, handleSubmit } = useForm(initialValues, validate, onSubmit);

  return (
    <div className="page">
      <h1>Registro de Usuario</h1>
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
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className={errors.password ? "error-input" : ""}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? "error-input" : ""}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
