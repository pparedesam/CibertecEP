import React from 'react';
import '../styles/Asientos.css';

const Asientos = ({ asientos, onToggle, selectedAsientos }) => {
    return (
        <div className="d-flex flex-wrap">
            {asientos.map(asiento => (
                <button
                    key={asiento.id}
                    className={`btn m-1 ${asiento.ocupado ? 'btn-danger' : selectedAsientos.includes(asiento.id) ? 'btn-success' : 'btn-primary'}`}
                    onClick={() => onToggle(asiento.id)}
                    disabled={asiento.ocupado}
                    style={{ width: '50px', height: '50px' }}
                >
                    {asiento.id}
                </button>
            ))}
        </div>
    );
};

export default Asientos;
