import React from 'react';
import { useParams, Route, Routes, Link } from 'react-router-dom';
import data from '../data';

const ZapatillaDetalle = ({ zapatilla }) => (
    <div className="card">
        <img src={zapatilla.imagen} className="card-img-top" alt={zapatilla.nombre} />
        <div className="card-body">
            <h5 className="card-title">{zapatilla.nombre}</h5>
            <p className="card-text">{zapatilla.descripcion}</p>
            <p className="card-text">Precio: ${zapatilla.precio}</p>
            <p className="card-text">Valoración: {zapatilla.valoracion}</p>
        </div>
    </div>
);

const Zapatillas = () => {
    const { tiendaId } = useParams();
    const tienda = data.tiendas.find(t => t.id === parseInt(tiendaId, 10));

    if (!tienda) {
        return <h3>No se encontró la tienda seleccionada.</h3>;
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <h2>Zapatillas en {tienda.nombre}</h2>
                <div className="list-group">
                    {tienda.zapatillas.map(zapatilla => (
                        <Link
                            to={`${zapatilla.id}`}
                            className="list-group-item list-group-item-action"
                            key={zapatilla.id}
                        >
                            {zapatilla.nombre}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="col-md-6">
                <Routes>
                    <Route
                        path=":zapatillaId"
                        element={<ZapatillaDetalleComponent tienda={tienda} />}
                    />
                    <Route
                        path="/"
                        element={<h3>Selecciona una zapatilla para ver el detalle</h3>}
                    />
                </Routes>
            </div>
        </div>
    );
};

const ZapatillaDetalleComponent = ({ tienda }) => {
    const { zapatillaId } = useParams();
    const zapatilla = tienda.zapatillas.find(z => z.id === parseInt(zapatillaId, 10));

    if (!zapatilla) {
        return <h3>No se encontró la zapatilla seleccionada.</h3>;
    }

    return <ZapatillaDetalle zapatilla={zapatilla} />;
};

export default Zapatillas;
