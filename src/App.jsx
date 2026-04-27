import React, { useState } from "react";
import testimonios from "./data/data";
import "./components/styles.css";
import Testimonial from "./components/Testimonial"; // Nuevo componente

function App() {
  const [index, setIndex] = useState(7);

  return (
    <main>
      <section className="card">
        <h2>Sección de Testimonios</h2>

        {/* Usamos el componente Testimonial pasando el objeto actual por props */}
        {<Testimonial item={testimonios[index]} />}

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
