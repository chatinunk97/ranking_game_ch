import { useState } from "react";
import InputPage from "./InputPage";
import GamePage from "./GamePage";
import { ChoiceType } from "./types";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [choices, setChoices] = useState<[] | ChoiceType[]>([]);
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
