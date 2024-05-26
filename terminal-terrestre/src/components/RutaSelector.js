import React, { useState, useEffect } from 'react';

const RutaSelector = ({ empresas, onSelectRuta }) => {
    const [empresaSeleccionada, setEmpresaSeleccionada] = useState("");
    const [origen, setOrigen] = useState("");
    const [destino, setDestino] = useState("");
    const [destinosDisponibles, setDestinosDisponibles] = useState([]);

    useEffect(() => {
        if (origen) {
            const destinos = empresas.find(e => e.nombre === empresaSeleccionada)
                ?.rutas.filter(r => r.origen === origen)
                .map(r => r.destino) || [];
            setDestinosDisponibles(destinos);
        } else {
            setDestinosDisponibles([]);
        }
    }, [origen, empresaSeleccionada, empresas]);

    const handleSelect = () => {
        const ruta = empresas.find(e => e.nombre === empresaSeleccionada)
            ?.rutas.find(r => r.origen === origen && r.destino === destino);
        if (ruta) onSelectRuta(ruta);
    };

    return (
        <div className="selector-container ">
            <select className="form-select" onChange={(e) => setEmpresaSeleccionada(e.target.value)} value={empresaSeleccionada}>
                <option value="">Seleccionar Empresa</option>
                {empresas.map((empresa, index) => (
                    <option key={index} value={empresa.nombre}>{empresa.nombre}</option>
                ))}
            </select>
            <select className="form-select " onChange={(e) => setOrigen(e.target.value)} value={origen} disabled={!empresaSeleccionada}>
                <option value="">Desde</option>
                {Array.from(new Set(empresas.find(e => e.nombre === empresaSeleccionada)?.rutas.map(r => r.origen)))
                    .map((origen, index) => (
                        <option key={index} value={origen}>{origen}</option>
                    ))}
            </select>
            <select className="form-select " onChange={(e) => setDestino(e.target.value)} value={destino} disabled={!origen}>
                <option value="">Hacia</option>
                {destinosDisponibles.map((destino, index) => (
                    <option key={index} value={destino}>{destino}</option>
                ))}
            </select>
            <button className="btn btn-primary " onClick={handleSelect} disabled={!origen || !destino}>Buscar</button>
        </div>
    );
};

export default RutaSelector;
