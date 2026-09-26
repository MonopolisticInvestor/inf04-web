function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a href="/" className="navbar-brand">Galeria podróży</a>

          <ul className="navbar-nav d-flex gap-2">
            <li><a href="#gallery">Galeria</a></li>
            <li><a href="#categories">Kategorie</a></li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;