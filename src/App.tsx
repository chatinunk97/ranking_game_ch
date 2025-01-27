import { useState } from "react";
import InputPage from "./pages/InputPage";
import GamePage from "./pages/GamePage";
import { ChoiceType } from "./lib/types";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [choices, setChoices] = useState<[] | ChoiceType[]>([]);
  return (
    <div className="w-full h-full  bg-gradient-to-br from-purple-500 via-purple-900 to-blue-950">
      <div className="min-w-min max-w-sm m-auto min-h-screen">
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
    </div>
  );
}

export default App;
