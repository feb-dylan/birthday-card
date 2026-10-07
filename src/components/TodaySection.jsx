export default function TodaySection({ data }) {
  return (
    <section className="today-section">
      <div className="today-inner">
        <p className="eyebrow today-eyebrow">
          {data.label}
        </p>

        <h2>{data.title}</h2>

        <div className="today-text">
          {data.paragraphs.map(
            (paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            )
          )}
        </div>

        <div className="today-divider" />
      </div>
    </section>
  );
}