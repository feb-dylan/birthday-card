import { useEffect, useState } from "react";
import "./PhotoJourney.css";

function PhotoJourney({ slides, onFinish }) {
  const [current, setCurrent] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const slide = slides[current];
  const total = slides.length;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight" || event.key === "Enter") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        previousSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [current, isChanging]);

  const changeSlide = (nextIndex) => {
    if (isChanging) return;

    setIsChanging(true);

    setTimeout(() => {
      setCurrent(nextIndex);
      setIsChanging(false);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 450);
  };

  const nextSlide = () => {
    if (current === total - 1) {
      onFinish();
      return;
    }

    changeSlide(current + 1);
  };

  const previousSlide = () => {
    if (current === 0) return;

    changeSlide(current - 1);
  };

  return (
    <section
      className={`memory-section ${
        isChanging ? "memory-changing" : ""
      }`}
    >
      <div className="memory-container">

        {/* =========================
            NUMBER
        ========================== */}
        <div className="memory-counter">
          <span className="memory-current">
            {String(current + 1).padStart(2, "0")}
          </span>

          <span className="memory-total">
            / {String(total).padStart(2, "0")}
          </span>
        </div>


        {/* =========================
            PHOTO CARD
        ========================== */}
        <div className="memory-photo-card">
          <img
            src={slide.image}
            alt={slide.heading || "Memory"}
          />
        </div>


        {/* =========================
            TEXT SECTION
        ========================== */}
        <div className="memory-info">

          <div className="memory-label">
            {slide.mood === "funny"
              ? "A LITTLE MOMENT"
              : "OURS"}
          </div>

          <h2 className="memory-heading">
            {slide.heading}
          </h2>


          {/* TEXT BOX */}
          <div className="memory-text-box">
            <p>
              {slide.text}
            </p>
          </div>


          {/* =========================
              CONTINUE BUTTON
          ========================== */}
          <button
            className="memory-continue"
            onClick={nextSlide}
            type="button"
          >
            <span>
              {slide.button || "CONTINUE"}
            </span>

            <span className="memory-arrow">
              →
            </span>
          </button>

        </div>


        {/* =========================
            BOTTOM NAVIGATION
        ========================== */}
        <div className="memory-navigation">

          <button
            className="memory-back"
            onClick={previousSlide}
            disabled={current === 0}
            type="button"
          >
            ← BACK
          </button>


          <div className="memory-progress">
            <div
              className="memory-progress-fill"
              style={{
                width: `${((current + 1) / total) * 100}%`,
              }}
            />
          </div>


          <span className="memory-hint">
            KEEP GOING
          </span>

        </div>

      </div>
    </section>
  );
}
export default PhotoJourney; 