import { useEffect, useRef, useState } from "react";
import { ChoiceType } from "./types";
import Graph from "./GraphClass/Graph";

const GamePage = ({ choices }: { choices: ChoiceType[] }) => {
  const [choiceA, setChoiceA] = useState("");
  const [choiceB, setChoiceB] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isContinue, setIsContinue] = useState(true);
  const graphObject = useRef(
    new Graph(setChoiceA, setChoiceB, isContinue, setIsContinue)
  ).current;
  useEffect(() => {
    graphObject.setUpNodes(choices);
    graphObject.gameSetup();
    setIsLoading(false);
  }, []);

  const handleChoiceA = () => {
    graphObject.gameContinue(choiceA, choiceB);
    console.log(graphObject);
  };

  const handleChoiceB = () => {
    graphObject.gameContinue(choiceB, choiceA);
    console.log(graphObject);
  };

  const getURLfromName = (choiceName: string) => {
    return choices.reduce((acc, element) => {
      if (element.choiceName === choiceName) {
        acc = element.url;
      }
      return acc;
    }, "NOT FOUND");
  };
  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div className="bg-red-950 max-w-sm m-auto min-h-screen">
          {isContinue ? (
            <>
              {" "}
              {choices.map((choice, index) => (
                <h1 key={index}>{choice.choiceName}</h1>
              ))}
              <hr></hr>
              <div onClick={handleChoiceA} className="choiceA cursor-pointer">
                <p key={"choiceA"}>{choiceA}</p>
                <p>URL : {getURLfromName(choiceA)}</p>
              </div>
              <div onClick={handleChoiceB} className="choiceB cursor-pointer">
                <p key={"choiceB"}>{choiceB}</p>
                <p>URL : {getURLfromName(choiceB)}</p>
              </div>
            </>
          ) : (
            <h1>Game Ended!</h1>
          )}
        </div>
      )}
    </>
  );
};

export default GamePage;
