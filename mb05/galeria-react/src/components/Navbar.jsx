function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a href="/" className="navbar-brand">Galeria podróży</a>

          <ul className="navbar-nav d-flex gap-2">
            <li href="#gallery">Galeria</li>
            <li href="#categories">Kategorie</li>
            <li href="#contact">Kontakt</li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;