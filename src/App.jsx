import { useState } from "react";
import "./App.css";

import Opening from "./components/Opening";
import PhotoJourney from "./components/PhotoJourney";
import BirthdayReveal from "./components/BirthdayReveal";

import { journey } from "./content/journey";

function App() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const startJourney = () => {
    setStarted(true);

    setTimeout(() => {
      document
        .getElementById("journey")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 50);
  };

  const finishJourney = () => {
    setFinished(true);

    setTimeout(() => {
      document
        .getElementById("birthday")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  };

  return (
    <main>
      {!started && (
        <Opening
          data={journey.opening}
          onBegin={startJourney}
        />
      )}

      {started && (
        <>
          <section id="journey">
            <PhotoJourney
              slides={journey.slides}
              onFinish={finishJourney}
            />
          </section>

          {finished && (
            <section id="birthday">
              <BirthdayReveal data={journey.final} />
            </section>
          )}
        </>
      )}
    </main>
  );
}

export default App;