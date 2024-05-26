import React, { useState } from 'react';
import PeliculaMayorValoracion from './PeliculaMayorValoracion';
import PeliculaEstreno from './PeliculaEstreno';

const PanelAnuncio = () => {
    const [isPaused, setIsPaused] = useState(false); 
    const pausar = () => {
        setIsPaused(true);
    };

    const continuar = () => {
        setIsPaused(false);
    };

    return (
        <main className="container mt-4">
           
            <div className="row">
                <PeliculaMayorValoracion isPaused={isPaused} />
                <PeliculaEstreno isPaused={isPaused} />
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-danger me-2" onClick={pausar} disabled={isPaused}>Pausar</button>
                <button className="btn btn-success" onClick={continuar} disabled={!isPaused}>Continuar</button>
            </div>
            
        </main>
    );
};

export default PanelAnuncio;
