import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Zapatillas from './Zapatillas';
import data from '../data';

const Tiendas = () => {
    const [selectedTienda, setSelectedTienda] = useState('');
    const navigate = useNavigate();

    const handleTiendaChange = (event) => {
        const tiendaId = event.target.value;
        setSelectedTienda(tiendaId);
        navigate(`/tiendas/${tiendaId}`);
    };

    const tiendasOrdenadas = [...data.tiendas].sort((a, b) => b.valoracion - a.valoracion);

    return (
        <div className="container mt-4">
            <h2>Selecciona una tienda</h2>
            <select className="form-select mb-4" value={selectedTienda} onChange={handleTiendaChange}>
                <option value="" disabled>Seleccione tienda</option>
                {tiendasOrdenadas.map(tienda => (
                    <option key={tienda.id} value={tienda.id}>
                        {tienda.nombre}
                    </option>
                ))}
            </select>
            <Routes>
                <Route path="/" element={<h3>Selecciona una tienda para ver las zapatillas</h3>} />
                <Route path=":tiendaId/*" element={<Zapatillas />} />
            </Routes>
        </div>
    );
};

export default Tiendas;
