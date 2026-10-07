function BirthdayReveal({ data }) {
  return (
    <section className="birthday-reveal">
      <div className="birthday-image birthday-image-main">
        <img src={data.image} alt="" />
      </div>

      <div className="birthday-overlay" />

      <div className="birthday-content">
        <p className="birthday-eyebrow">{data.eyebrow}</p>

        <h2>{data.title}</h2>

        <div className="birthday-divider">
          <span />
          <span />
          <span />
        </div>

        <p className="birthday-text">{data.text}</p>
      </div>

      <div className="birthday-second-image">
        <img src={data.secondImage} alt="" />
      </div>
    </section>
  );
}

export default BirthdayReveal;