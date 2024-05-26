import React, { useEffect, useState } from 'react';
import peliculas from '../data';
import '../styles/anuncio.css'

const PeliculaEstreno = ({ isPaused }) => {
    const [pelicula, setPelicula] = useState(null);
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        const peliculasEstreno = Object.values(peliculas).flat().filter(pelicula => pelicula.estreno);

        const actualizarEstreno = () => {
            setPelicula(peliculasEstreno[indice % peliculasEstreno.length]);
            setIndice(prevIndice => prevIndice + 1);
        };

        // Cargar la primera película al montar el componente
        setPelicula(peliculasEstreno[indice % peliculasEstreno.length]);

        let estrenoId;
        if (!isPaused) {
            estrenoId = setInterval(actualizarEstreno, 2000);
        }

        return () => clearInterval(estrenoId);
    }, [isPaused, indice]);

    return (
        <div className="col-md-6">
            <h2>Película de Estreno</h2>
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

export default PeliculaEstreno;
