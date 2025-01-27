import { useEffect, useRef, useState } from "react";
import { ChoiceType, ResultType } from "../lib/types";
import { ListRestart, Sparkles } from "lucide-react";
import Graph from "../GraphClass/Graph";
import ResultPage from "./ResultPage";
import MatchChoiceDisplayer from "@/components/ui/custom/MatchChoiceDisplayer";
import BlobBackground from "@/components/ui/custom/BlobBackground";

const MatchPage = ({
  choices,
  setIsStart,
}: {
  choices: ChoiceType[];
  setIsStart: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
  const getImgFromName = (choiceName: string) => {
    return choices.reduce((acc, element) => {
      if (element.choiceName === choiceName) {
        acc = element.img;
      }
      return acc;
    }, "NOT FOUND");
  };
  return (
    <div className="relative h-screen flex flex-col">
      {isLoading ? (
        <></>
      ) : (
        <div className="flex flex-col items-center justify-between gap-3 w-full py-5 flex-grow overflow-hidden">
          {isContinue ? (
            <div className="flex justify-center items-center w-full h-full">
              <BlobBackground />
              <MatchChoiceDisplayer
                graphObject={graphObject.current}
                choiceA={choiceA}
                choiceB={choiceB}
                getImgFromName={getImgFromName}
              />
            </div>
          ) : (
            <ResultPage getImgFromName={getImgFromName} result={result} />
          )}
        </div>
      )}
      <div className="sticky bottom-0 flex justify-between p-3 gap-7 items-center">
        <div className="border-white border-2 p-2 rounded-full">
          <Sparkles color="white" size={40} strokeWidth={1} />
        </div>
        <div
          onClick={() => {
            setIsStart(false);
          }}
          className="border-white border-2 p-2 rounded-full"
        >
          <ListRestart color="white" size={40} strokeWidth={1} />
        </div>
        <div className="border-white border-2 p-2 rounded-full">
          <ListRestart color="white" size={40} strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};

export default MatchPage;
