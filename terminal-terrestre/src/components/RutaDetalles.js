import React from 'react';
import Asientos from './Asientos';

const RutaDetalles = ({ ruta, onToggleAsiento, selectedAsientos }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{ruta.origen} - {ruta.destino}</h5>
                <Asientos asientos={ruta.asientos} onToggle={onToggleAsiento} selectedAsientos={selectedAsientos} />
            </div>
        </div>
    );
};

export default RutaDetalles;
