
import { Link } from "react-router-dom";

const mockProperties = [
  { id: 1, title: "Casa en el centro", price: 120000, location: "Ciudad", image: "https://imgar.zonapropcdn.com/avisos/1/00/56/98/75/85/720x532/1995947639.jpg?isFirstImage=true" },
  { id: 2, title: "Departamento moderno", price: 95000, location: "Playa", image: "https://cdn.prod.website-files.com/61e9b342b016364181c41f50/62a014dd84797690c528f25e_38.jpg" },
  { id: 3, title: "Chalet con jardín", price: 180000, location: "Montaña", image: "https://theconcretehome.com/wp-content/uploads/2025/06/Chalet-TCH-Milan-2025-DIURNO02-3000x-view0004-1024x576.webp" },
];

export default function Home() {
  return (
    <div className="home-page">
      <h1>Inmobiliaria</h1>
      <div className="properties-list">
        {mockProperties.map((property) => (
          <div key={property.id} className="card">
            <img src={property.image} alt={property.title} />
            <h2>{property.title}</h2>
            <p>{property.location}</p>
            <p>${property.price.toLocaleString()}</p>
            <Link to={`/properties/${property.id}`} className="btn">
              Ver Detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
