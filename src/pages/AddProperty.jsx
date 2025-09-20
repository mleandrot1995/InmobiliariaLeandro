
import React, { useState } from "react";

export default function AddProperty() {
  const [form, setForm] = useState({
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://68cca15b716562cf5077f884.mockapi.io/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Propiedad agregada con éxito 🎉");
        console.log("Nueva propiedad:", data);
      })
      .catch((err) => console.error("Error al crear propiedad:", err));
  };

  return (
    <div className="add-property">
      <h2>Agregar nueva propiedad</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Descripción"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={form.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Ubicación"
          value={form.location}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="rooms"
          placeholder="Ambientes"
          value={form.rooms}
          onChange={handleChange}
        />
        <input
          type="number"
          name="bedrooms"
          placeholder="Dormitorios"
          value={form.bedrooms}
          onChange={handleChange}
        />
        <input
          type="number"
          name="bathrooms"
          placeholder="Baños"
          value={form.bathrooms}
          onChange={handleChange}
        />
        <input
          type="number"
          name="area"
          placeholder="Área (m²)"
          value={form.area}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={form.image}
          onChange={handleChange}
        />
        <button type="submit">Agregar propiedad</button>
      </form>
    </div>
  );
}
