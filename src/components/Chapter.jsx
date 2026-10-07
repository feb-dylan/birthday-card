import PhotoBlock from "./PhotoBlock";

export default function Chapter({ chapter }) {
  return (
    <section className="chapter">
      <div className="chapter-header">
        <div className="chapter-meta">
          <span className="chapter-number">
            {chapter.number}
          </span>

          <span className="chapter-label">
            {chapter.label}
          </span>
        </div>

        <h2>{chapter.title}</h2>
      </div>

      <div className="chapter-content">
        {chapter.blocks.map(
          (block, index) => {
            if (block.type === "text") {
              return (
                <div
                  className="story-text"
                  key={index}
                >
                  <p>{block.content}</p>
                </div>
              );
            }

            if (block.type === "photo") {
              return (
                <PhotoBlock
                  key={index}
                  src={block.src}
                  caption={block.caption}
                />
              );
            }

            return null;
          }
        )}
      </div>
    </section>
  );
}