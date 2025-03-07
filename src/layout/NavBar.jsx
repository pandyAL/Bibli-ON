import Reaact from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBarHome() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">BibliOn</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav__link" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav__link" to="/about">Acerca de</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav__ink" to="/contact">Contacto</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav__link" to="/books">Libros</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav__link" to="/rented">Alquilados</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default NavBarHome;

