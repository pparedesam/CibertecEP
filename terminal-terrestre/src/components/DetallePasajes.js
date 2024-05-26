import React from 'react';

const DetallePasajes = ({ selectedAsientos, ruta }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">Asientos Seleccionados</h5>
                {selectedAsientos.length === 0 ? (
                    <p>No hay asientos seleccionados</p>
                ) : (
                    <ul className="list-group">
                        {selectedAsientos.map(asientoId => {
                            const asiento = ruta.asientos.find(a => a.id === asientoId);
                            return (
                                <li key={asiento.id} className="list-group-item">
                                    Asiento {asiento.id} - {asiento.tipo} - S/{asiento.costo}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default DetallePasajes;
