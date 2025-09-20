
import { useParams } from "react-router-dom";

const mockProperties = [
  { id: 1, title: "Casa en el centro", location: "Ciudad", price: 120000, type: "Casa", image: "https://via.placeholder.com/600x400" },
  { id: 2, title: "Departamento moderno", location: "Barrio Norte", price: 90000, type: "Departamento", image: "https://via.placeholder.com/600x400" },
  { id: 3, title: "Chalet con jardín", location: "Suburbios", price: 150000, type: "Chalet", image: "https://via.placeholder.com/600x400" }
];

export default function PropertyDetail() {
  const { id } = useParams();
  const property = mockProperties.find((p) => p.id === parseInt(id));

  if (!property) return <p>Propiedad no encontrada</p>;

  return (
    <div className="property-detail">
      <img src={property.image} alt={property.title} />
      <h2>{property.title}</h2>
      <p>{property.location}</p>
      <p>{property.type}</p>
      <p>${property.price.toLocaleString()}</p>
    </div>
  );
}
