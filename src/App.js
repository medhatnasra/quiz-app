import "./App.css";
import { useEffect, useState } from "react";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { QuizContext } from "./Helpers/QuizContext";

function App() {
  const [GameState, setGameState] = useState("menu");
  const [Score, setScore] = useState(0);
  const [Error, setError] = useState(false);

  useEffect(() => {
  }, [Score]);



  return (
    <>
      <h1 className="title">QuizApp</h1>
      <div
        className="app"
        style={
          Error
            ? {
                background:
                  "linear-gradient(to right top, #142c47, rgba(148, 4, 4,.3))",
              }
            : {}
        }
      >
        <QuizContext.Provider
          value={{ GameState, setGameState, Score, setScore, setError, Error }}
        >
          {GameState === "menu" && <MainMenu  />}
          {GameState === "quiz" && <Quiz />}
          {GameState === "end" && <EndScreen />}
        </QuizContext.Provider>
      </div>
    </>
  );
}

export default App;
