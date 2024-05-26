import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tiendas from './components/Tiendas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
    <Router>
        <div className="container">
            <Routes>
                <Route path="/" element={<Tiendas />} />
                <Route path="/tiendas/*" element={<Tiendas />} />
            </Routes>
        </div>
    </Router>
);

export default App;
