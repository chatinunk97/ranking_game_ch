import { useState } from "react";
import "./App.css";
import InputPage from "./InputPage";
import GamePage from "./GamePage";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [choices, setChoices] = useState([
    { choiceName: "pizza", url: "pizza JPG" },
    { choiceName: "sushi", url: "sushi JPG" },
    { choiceName: "pasta", url: "pasta JPG" },
    { choiceName: "takoyaki", url: "takoyaki JPG" },
  ]);

  return (
    <>
      {isStart && choices.length > 1 ? (
        <GamePage choices={choices} />
      ) : (
        <InputPage
          setIsStart={setIsStart}
          choices={choices}
          setChoices={setChoices}
        />
      )}
    </>
  );
}

export default App;
