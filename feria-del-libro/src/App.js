import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LibroList from './components/LibroList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Feria del Libro</h1>
            </header>
            <main>
                <LibroList />
            </main>
        </div>
    );
}

export default App;
