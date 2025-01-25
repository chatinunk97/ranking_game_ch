import { useState } from "react";
import InputPage from "./InputPage";
import GamePage from "./GamePage";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [choices, setChoices] = useState([
    { choiceName: "a", img: "pizza JPG" },
    { choiceName: "b", img: "sushi JPG" },
    { choiceName: "c", img: "pasta JPG" },
    { choiceName: "d", img: "takoyaki JPG" },
  ]);
  return (
    <div className="min-w-min max-w-sm m-auto min-h-screen bg-white">
      {isStart && choices.length > 1 ? (
        <GamePage choices={choices} setIsStart={setIsStart} />
      ) : (
        <InputPage
          setIsStart={setIsStart}
          choices={choices}
          setChoices={setChoices}
        />
      )}
    </div>
  );
}

export default App;
