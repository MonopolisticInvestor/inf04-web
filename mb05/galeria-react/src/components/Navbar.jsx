import { Link } from "react-router-dom";

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to="/" className="navbar-brand">Galeria zdjęć</Link>

          <ul className="navbar-nav d-flex flex-row gap-2">
            <li><Link to="/#gallery">Galeria</Link></li>
            <li><Link to="/#categories">Kategorie</Link></li>
            <li><Link to="/dodaj">Dodaj zdjęcie</Link></li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;