export default function FinalChapter({
  data,
}) {
  return (
    <section className="final-section">
      <div className="final-image-wrapper">
        <img
          src={data.image}
          alt=""
          loading="lazy"
        />

        <div className="final-image-overlay" />
      </div>

      <div className="final-content">
        <p className="eyebrow">
          {data.eyebrow}
        </p>

        <h2>{data.title}</h2>

        <p className="final-message">
          {data.text}
        </p>

        <div className="final-line" />
      </div>
    </section>
  );
}