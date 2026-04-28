import { useEffect, useState } from "react";
import testimonios from "./data/data";
import "./components/styles.css";
import Testimonial from "./components/Testimonial"; // Módulo testimonial
import Controls from "./components/Controls"; // Controles de siguiente/anterior

function App() {
  const [index, setIndex] = useState(0);
  const total = testimonios.length;

  const handlePrev = () => {
    if (total === 0) return;
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    if (total === 0) return;
    setIndex((prev) => (prev + 1) % total);
  };

  const handleRandom = () => {
    if (total <= 1) return;
    setIndex((prev) => {
      let next = prev;
      while (next === prev) {
        next = Math.floor(Math.random() * total);
      }
      return next;
    });
  };

  useEffect(() => {
    if (total <= 1) return undefined;
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [total]);

  return (
    <main>
      <section className="card">
        <h2>Sección de Testimonios</h2>

        {total === 0 ? (
          <p className="testimonial-text">No hay testimonios disponibles.</p>
        ) : (
          <Testimonial item={testimonios[index]} />
        )}

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
