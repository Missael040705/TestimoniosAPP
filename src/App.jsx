import React, { useState } from 'react';
import testimonios from './data/data';
import './components/styles.css';

// Nota: Testimonial y Controls se crearán en las tareas siguientes
// Por ahora, usamos un marcador de posición para validar la estructura.

function App() {
  const [index, setIndex] = useState(0);
  const { nombre, cargo, texto, foto } = testimonios[index];

  return (
    <main>
      <section className="card">
        <h2>Sección de Testimonios</h2>
        {/* Aquí irá <Testimonial item={testimonios[index]} /> */}
        <div className="img-container">
          <img src={foto} alt={nombre} />
        </div>
        <h3>{nombre}</h3>
        <p style={{color: 'gray'}}>{cargo}</p>
        <p>"{texto}"</p>

        {/* Aquí irá <Controls /> */}
        <div className="controls">
          <button>Anterior</button>
          <button>Siguiente</button>
          <button>Aleatorio</button>
        </div>
      </section>
    </main>
  );
}

export default App;