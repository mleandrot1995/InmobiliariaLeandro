
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/propiedades">Propiedades</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}
