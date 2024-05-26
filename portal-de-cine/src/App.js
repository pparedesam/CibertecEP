
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import PaginaNoEncontrada from './components/PaginaNoEncontrada';
import peliculas from './data';
import Peliculas from './components/Peliculas';
import PanelAnuncio from './components/PanelAnuncio';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peliculas" element={<Peliculas peliculas={peliculas} />} />
        <Route path="/panel-anuncio" element={<PanelAnuncio peliculas={peliculas} />} />
        <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
    </Router>
  );
}

export default App;
