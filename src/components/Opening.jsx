function Opening({ data, onBegin }) {
  return (
    <section
      className="opening"
      style={{
        backgroundImage: `url(${data.image})`,
      }}
    >
      <div className="opening-overlay" />

      <div className="opening-content">
        <p className="opening-eyebrow">{data.eyebrow}</p>

        <p className="opening-date">{data.date}</p>

        <p>{data.title}</p>

        <p className="opening-subtitle">{data.subtitle}</p>

        <button
          className="opening-button"
          type="button"
          onClick={onBegin}
        >
          BEGIN
          <span>→</span>
        </button>
      </div>

      <div className="opening-scroll">
        <span />
      </div>
    </section>
  );
}

export default Opening;