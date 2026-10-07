export default function PhotoBlock({
  src,
  caption,
}) {
  return (
    <figure className="photo-block">
      <div className="photo-frame">
        <img
          src={src}
          alt=""
          loading="lazy"
        />
      </div>

      {caption && (
        <figcaption>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}