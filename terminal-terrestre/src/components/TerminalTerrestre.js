import React, { useState, useEffect } from 'react';
import data from '../data';
import RutaSelector from './RutaSelector';
import RutaDetalles from './RutaDetalles';
import DetallePasajes from './DetallePasajes';
import '../styles/Asientos.css';

const TerminalTerrestre = () => {
    const [empresas, setEmpresas] = useState(data.empresas);
    const [selectedRuta, setSelectedRuta] = useState(null);
    const [selectedAsientos, setSelectedAsientos] = useState([]);

    const handleToggleAsiento = (asientoId) => {
        if (selectedAsientos.includes(asientoId)) {
            setSelectedAsientos(selectedAsientos.filter(id => id !== asientoId));
        } else {
            setSelectedAsientos([...selectedAsientos, asientoId]);
        }
    };

    useEffect(() => {
        if (selectedRuta) {
            const rutaActualizada = empresas
                .flatMap(empresa => empresa.rutas)
                .find(r => r.id === selectedRuta.id);
            setSelectedRuta(rutaActualizada);
        }
    }, [empresas, selectedRuta]);

    const handleReserve = () => {
        const confirmed = window.confirm('¿Deseas confirmar la reserva de los asientos seleccionados?');
        if (confirmed) {
            setEmpresas(prevEmpresas =>
                prevEmpresas.map(empresa =>
                    empresa.rutas.some(r => r.id === selectedRuta.id)
                        ? {
                              ...empresa,
                              rutas: empresa.rutas.map(ruta =>
                                  ruta.id === selectedRuta.id
                                      ? {
                                            ...ruta,
                                            asientos: ruta.asientos.map(asiento =>
                                                selectedAsientos.includes(asiento.id)
                                                    ? { ...asiento, ocupado: true }
                                                    : asiento
                                            )
                                        }
                                      : ruta
                              )
                          }
                        : empresa
                )
            );
            setSelectedAsientos([]);
            window.alert('¡Reserva confirmada!');
        }
    };

    const calculateTotalCost = () => {
        return selectedAsientos.reduce((total, asientoId) => {
            const asiento = selectedRuta.asientos.find(a => a.id === asientoId);
            return total + asiento.costo;
        }, 0);
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Terminal Terrestre</h1>
            <RutaSelector empresas={empresas} onSelectRuta={setSelectedRuta} />
            {selectedRuta && (
                <div>
                    <RutaDetalles ruta={selectedRuta} onToggleAsiento={handleToggleAsiento} selectedAsientos={selectedAsientos} />
                </div>
            )}
            {selectedRuta && (
                <div className="row mt-3">
                    <div className="col-md-6">
                        <DetallePasajes selectedAsientos={selectedAsientos} ruta={selectedRuta} />
                    </div>
                    <div className="col-md-6 text-center">
                        <h4>Total: S/{calculateTotalCost()}</h4>
                        <button className="btn btn-success" style={{ width: '120px', height: '40px' }} onClick={handleReserve}>Reservar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TerminalTerrestre;
