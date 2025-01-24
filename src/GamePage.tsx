import { useEffect, useRef, useState } from "react";
import { ChoiceType, ResultType } from "./types";
import Graph from "./GraphClass/Graph";
import ResultPage from "./ResultPage";

const GamePage = ({ choices }: { choices: ChoiceType[] }) => {
  const [choiceA, setChoiceA] = useState("");
  const [choiceB, setChoiceB] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isContinue, setIsContinue] = useState(true);
  const [result, setResult] = useState<ResultType | []>([]);
  const graphObject = useRef(
    new Graph(setChoiceA, setChoiceB, isContinue, setIsContinue, setResult)
  );
  useEffect(() => {
    graphObject.current.setUpNodes(choices);
    graphObject.current.gameSetup();
    setIsLoading(false);
  }, []);

  const handleChoiceA = () => {
    graphObject.current.gameContinue(choiceA, choiceB);
  };

  const handleChoiceB = () => {
    graphObject.current.gameContinue(choiceB, choiceA);
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
            <ResultPage result={result} />
          )}
        </div>
      )}
    </>
  );
};

export default GamePage;
