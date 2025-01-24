import { useEffect, useRef, useState } from "react";
import { ChoiceType, ResultType } from "./types";
import Graph from "./GraphClass/Graph";
import ResultPage from "./ResultPage";
import MyChoiceComparingComponent from "./components/ui/MyChoiceComparingComponent";

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
    console.log("AAA");
    graphObject.current.gameContinue(choiceA, choiceB);
  };

  const handleChoiceB = () => {
    console.log("BBB");
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
        <div className="bg-gradient-to-b from-white via-purple-200 to-red-200 min-w-min max-w-sm m-auto min-h-screen flex flex-col gap-2">
          {isContinue ? (
            <>
              <hr></hr>
              <MyChoiceComparingComponent
                choice={choiceA}
                key="choiceA"
                onClick={handleChoiceA}
                url={getURLfromName(choiceA)}
              />
              <MyChoiceComparingComponent
                choice={choiceB}
                key="choiceB"
                onClick={handleChoiceB}
                url={getURLfromName(choiceB)}
              />
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
