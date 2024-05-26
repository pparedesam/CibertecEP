import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [libros, setLibros] = useState([]);
  const [nombre, setNombre] = useState('');
  const [genero, setGenero] = useState('');
  const [autor, setAutor] = useState('');
  const [precio, setPrecio] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/libros')
      .then(response => setLibros(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddLibro = () => {
    const ids = libros.map(libro => parseInt(libro.id, 10));
    const nuevoId = ids.length ? Math.max(...ids) + 1 : 1;

    const nuevoLibro = {
      id: nuevoId.toString(),
      nombre,
      genero,
      autor,
      precio
    };

    axios.post('http://localhost:5000/libros', nuevoLibro)
      .then(response => {
        setLibros([...libros, response.data]);
        setNombre('');
        setGenero('');
        setAutor('');
        setPrecio('');
      })
      .catch(error => console.error(error));
  };

  const handleDeleteLibro = (id) => {
    axios.delete(`http://localhost:5000/libros/${id}`)
      .then(() => setLibros(libros.filter(libro => libro.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="container">
    
      <h2>Lista de Libros</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Género</th>
            <th>Autor</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {libros.map(libro => (
            <tr key={libro.id}>
              <td>{libro.id}</td>
              <td>{libro.nombre}</td>
              <td>{libro.genero}</td>
              <td>{libro.autor}</td>
              <td>{libro.precio}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDeleteLibro(libro.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Registrar Nuevo Libro</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" value={nombre} onChange={e => setNombre(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Género</label>
          <input type="text" className="form-control" value={genero} onChange={e => setGenero(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Autor</label>
          <input type="text" className="form-control" value={autor} onChange={e => setAutor(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input type="text" className="form-control" value={precio} onChange={e => setPrecio(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAddLibro}>Agregar Libro</button>
      </form>
    </div>
  );
};

export default App;
