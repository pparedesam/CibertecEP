import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Portal de Cine</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/peliculas">Películas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/panel-anuncio">Panel de Anuncio</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Menu;
