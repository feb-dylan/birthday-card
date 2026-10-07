export default function StorySection({ id, data }) {
  return (
    <section
      id={id}
      className="story-section ours-section"
    >
      <div className="story-container">
        <p className="eyebrow">
          {data.label}
        </p>

        <h2>{data.title}</h2>

        <div className="story-paragraphs">
          {data.paragraphs.map(
            (paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            )
          )}
        </div>
      </div>
    </section>
  );
}