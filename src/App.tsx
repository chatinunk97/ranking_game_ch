import { useState } from "react";
import "./App.css";
import InputPage from "./InputPage";
import GamePage from "./GamePage";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [choices, setChoices] = useState([
    { choiceName: "a", url: "pizza JPG" },
    { choiceName: "b", url: "sushi JPG" },
    { choiceName: "c", url: "pasta JPG" },
    { choiceName: "d", url: "takoyaki JPG" },
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
