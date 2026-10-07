export default function BirthdaySection({
  data,
}) {
  return (
    <section className="birthday-section">
      <div className="birthday-inner">
        <p className="eyebrow">
          {data.label}
        </p>

        <h2>{data.title}</h2>

        <div className="birthday-text">
          {data.paragraphs.map(
            (paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            )
          )}
        </div>

        <div className="birthday-symbol">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}