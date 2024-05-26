import React from 'react';
import '../styles/styles.css'; 

const Peliculas = ({ peliculas }) => (
  <main className="container mt-4">
    <div className="row">
      <div className="col-md-4">
        <h2>Películas de Acción</h2>
        {peliculas.accion.map(pelicula => (
          <div className="card mb-3" key={pelicula.id}>
            <img src={pelicula.imagen} className="card-img-top" alt={pelicula.nombre} />
            <div className="card-header bg-primary text-white">
              <span className="card-title">{pelicula.nombre}</span>
            </div>
            <div className="card-body">
              <p className="card-text">{pelicula.descripcion}</p>
              <p className="card-text">País: {pelicula.pais}</p>
              <p className="card-text">Valoración: {pelicula.valoracion}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="col-md-4">
        <h2>Películas de Comedia</h2>
        {peliculas.comedia.map(pelicula => (
          <div className="card mb-3" key={pelicula.id}>
            <img src={pelicula.imagen} className="card-img-top" alt={pelicula.nombre} />
            <div className="card-header bg-primary text-white">
              <span className="card-title">{pelicula.nombre}</span>
            </div>
            <div className="card-body">
              <p className="card-text">{pelicula.descripcion}</p>
              <p className="card-text">País: {pelicula.pais}</p>
              <p className="card-text">Valoración: {pelicula.valoracion}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="col-md-4">
        <h2>Películas de Terror</h2>
        {peliculas.terror.map(pelicula => (
          <div className="card mb-3" key={pelicula.id}>
            <img src={pelicula.imagen} className="card-img-top" alt={pelicula.nombre} />
            <div className="card-header bg-primary text-white">
              <span className="card-title">{pelicula.nombre}</span>
            </div>
            <div className="card-body">
              <p className="card-text">{pelicula.descripcion}</p>
              <p className="card-text">País: {pelicula.pais}</p>
              <p className="card-text">Valoración: {pelicula.valoracion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default Peliculas;
