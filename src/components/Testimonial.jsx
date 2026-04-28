const Testimonial = ({ item }) => {
  // Desestructuración de las propiedades del testimonio
  const { nombre, cargo, texto, foto } = item;

  return (
    <article className="testimonial-content">
      <div className="img-container">
        <img src={foto} alt={nombre} />
      </div>
      <h3 className="testimonial-name">{nombre}</h3>
      <p className="testimonial-role">{cargo}</p>
      <p className="testimonial-text">"{texto}"</p>
    </article>
  );
};

export default Testimonial;
