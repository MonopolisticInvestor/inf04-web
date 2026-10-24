import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const isOnMain = (useLocation().pathname == "/" ? true : false);
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <span className={isOnMain ? "active" : ""}>Galeria zdjęć</span>
          </NavLink>

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