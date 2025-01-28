import MatchPage from "./MatchPage";
import InputPage from "./InputPage";
import useChoices from "@/hooks/global/useChoices";
import { useState } from "react";

const GamePage = () => {
  const { choices } = useChoices();
  const [isStart, setIsStart] = useState(false);

  return (
    <div className="w-full h-full">
      {isStart && choices.length > 1 ? (
        <MatchPage choices={choices} setIsStart={setIsStart} />
      ) : (
        <InputPage setIsStart={setIsStart} />
      )}
    </div>
  );
};

export default GamePage;
