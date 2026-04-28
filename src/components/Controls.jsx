const Controls = ({ onPrev, onNext, onRandom }) => {
  return (
    <div className="controls">
      <button
        onClick={onPrev}
        className="btn-control"
        aria-label="Ver testimonio anterior"
      >
        Anterior
      </button>

      <button
        onClick={onNext}
        className="btn-control"
        aria-label="Ver siguiente testimonio"
      >
        Siguiente
      </button>

      <button
        onClick={onRandom}
        className="btn-random"
        aria-label="Ver testimonio aleatorio"
      >
        ¡Sorpréndeme! (Aleatorio)
      </button>
    </div>
  );
};

export default Controls;
