import React, { useState } from "react";
import testimonios from "./data/data";
import "./components/styles.css";
import Testimonial from "./components/Testimonial"; // Módulo testimonial
import Controls from "./components/Controls"; // Controles de siguiente/anterior

function App() {
  const [index, setIndex] = useState(0);

  // Funciones temporales para probar la conexión
  const handlePrev = () => console.log("Click en Anterior");
  const handleNext = () => console.log("Click en Siguiente");
  const handleRandom = () => console.log("Click en Aleatorio");

  return (
    <main>
      <section className="card">
        <h2>Sección de Testimonios</h2>

        {/* Usamos el componente Testimonial pasando el objeto actual por props */}
        {<Testimonial item={testimonios[index]} />}

        {/* 2. Pasar las funciones como props */}
        <Controls
          onPrev={handlePrev}
          onNext={handleNext}
          onRandom={handleRandom}
        />
      </section>
    </main>
  );
}

export default App;
