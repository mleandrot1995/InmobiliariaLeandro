
import useForm from "../hooks/useForm";

export default function AddProperty() {
  const initialValues = {
    title: "",
    description: "",
    price: "",
    location: "",
    rooms: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    image: "",
    available: true,
  };

  const validate = (values) => {
    let errors = {};
    if (!values.title.trim()) errors.title = "El título es obligatorio";
    if (!values.description.trim()) errors.description = "La descripción es obligatoria";
    if (!values.price || Number(values.price) <= 0) errors.price = "El precio debe ser mayor a 0";
    if (!values.location.trim()) errors.location = "La ubicación es obligatoria";
    if (values.area && Number(values.area) <= 0) errors.area = "El área debe ser mayor a 0";
    if (values.image && !/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(values.image)) {
      errors.image = "Debe ser una URL válida de imagen";
    }
    return errors;
  };

  const onSubmit = (values) => {
    fetch("https://68cca15b716562cf5077f884.mockapi.io/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Propiedad agregada con éxito 🎉");
        console.log("Nueva propiedad:", data);
      })
      .catch((err) => console.error("Error al crear propiedad:", err));
  };

  const { form, errors, handleChange, handleSubmit } = useForm(initialValues, validate, onSubmit);

  return (
    <div className="page">
      <h1>Agregar nueva propiedad</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className={errors.title ? "error-input" : ""}
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>

        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className={errors.description ? "error-input" : ""}
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className={errors.price ? "error-input" : ""}
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>

        <div>
          <label>Ubicación:</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            className={errors.location ? "error-input" : ""}
          />
          {errors.location && <p className="error">{errors.location}</p>}
        </div>

        <div>
          <label>Ambientes:</label>
          <input type="number" name="rooms" value={form.rooms} onChange={handleChange} />
        </div>

        <div>
          <label>Dormitorios:</label>
          <input type="number" name="bedrooms" value={form.bedrooms} onChange={handleChange} />
        </div>

        <div>
          <label>Baños:</label>
          <input type="number" name="bathrooms" value={form.bathrooms} onChange={handleChange} />
        </div>

        <div>
          <label>Área (m²):</label>
          <input
            type="number"
            name="area"
            value={form.area}
            onChange={handleChange}
            className={errors.area ? "error-input" : ""}
          />
          {errors.area && <p className="error">{errors.area}</p>}
        </div>

        <div>
          <label>URL de la imagen:</label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            className={errors.image ? "error-input" : ""}
          />
          {errors.image && <p className="error">{errors.image}</p>}
        </div>

        <button type="submit">Agregar propiedad</button>
      </form>
    </div>
  );
}
