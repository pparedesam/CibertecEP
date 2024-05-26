import React, { useEffect, useState } from 'react';
import peliculas from '../data';
import '../styles/styles.css'

const PeliculaMayorValoracion = ({ isPaused }) => {
    const [pelicula, setPelicula] = useState(null);
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        const categorias = ['accion', 'comedia', 'terror'];
        const mejoresValoraciones = categorias.map(categoria =>
            peliculas[categoria].sort((a, b) => b.valoracion - a.valoracion)[0]
        );

        const actualizarMayorValoracion = () => {
            setPelicula(mejoresValoraciones[indice % mejoresValoraciones.length]);
            setIndice(prevIndice => prevIndice + 1);
        };

        setPelicula(mejoresValoraciones[indice % mejoresValoraciones.length]);

        let valoracionId;
        if (!isPaused) {
            valoracionId = setInterval(actualizarMayorValoracion, 4000);
        }

        return () => clearInterval(valoracionId);
    }, [isPaused, indice]);

    return (
        <div className="col-md-6">
            <h2>Película con Mayor Valoración</h2>
            {pelicula && (
                <div className="card mb-3">
                <div className="card-header bg-primary text-white">
                    {pelicula.nombre}
                </div>
                <div className="card-body">
                    <p>{pelicula.descripcion}</p>
                    <p>País: {pelicula.pais}</p>
                    <p>Valoración: {pelicula.valoracion}</p>
                    <img src={pelicula.imagen} className="card-img-top" alt={pelicula.nombre} />
                </div>
            </div>
            )}
        </div>
    );
};

export default PeliculaMayorValoracion;
