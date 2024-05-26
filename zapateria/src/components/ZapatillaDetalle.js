import React from 'react';
import { useParams } from 'react-router-dom';

const ZapatillaDetalle = ({ tienda }) => {
    let { zapatillaId } = useParams();
    const zapatilla = tienda.zapatillas.find(z => z.id === parseInt(zapatillaId));

    if (!zapatilla) {
        return <h3>Zapatilla no encontrada</h3>;
    }

    return (
        <div className="card">
            <div className="card-header">
                {zapatilla.nombre}
            </div>
            <div className="card-body">
                <p>Descripción: {zapatilla.descripcion}</p>
                <p>Precio: S/{zapatilla.precio}</p>
                <p>Valoración: {zapatilla.valoracion}</p>
                <img src={zapatilla.imagen} alt={zapatilla.nombre} className="img-fluid" />
            </div>
        </div>
    );
};

export default ZapatillaDetalle;
