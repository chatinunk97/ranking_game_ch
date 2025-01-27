import { useEffect, useRef, useState } from "react";
import { ChoiceType, ResultType } from "../lib/types";
import Graph from "../GraphClass/Graph";
import ResultPage from "./ResultPage";
import MatchChoiceComponent from "../components/ui/mycomponent/MatchChoiceComponent";
import { ListRestart, Sparkles } from "lucide-react";

const GamePage = ({
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

  const handleChoiceA = () => {
    graphObject.current.gameContinue(choiceA, choiceB);
  };

  const handleChoiceB = () => {
    graphObject.current.gameContinue(choiceB, choiceA);
  };

  const getImgFromName = (choiceName: string) => {
    return choices.reduce((acc, element) => {
      if (element.choiceName === choiceName) {
        acc = element.img;
      }
      return acc;
    }, "NOT FOUND");
  };

  return (
    <div className=" h-screen">
      {isLoading ? (
        <></>
      ) : (
        <div className="relative flex flex-col items-center justify-between gap-3  w-full pt-3  h-5/6 overflow-hidden">
          {isContinue ? (
            <>
              <svg
                className="absolute -translate-x-24 translate-y-20 scale-125"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <defs>
                  <linearGradient
                    id="orangeToYellow"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#FF4500" />
                    <stop offset="100%" stop-color="#FFD700" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#orangeToYellow)"
                  d="M35.6,-46.5C47.3,-40.5,58.8,-31.7,65.9,-19.2C73,-6.7,75.7,9.4,71.9,24C68,38.7,57.7,51.9,44.6,61.2C31.5,70.5,15.8,75.9,-1.4,77.8C-18.6,79.8,-37.2,78.3,-44.7,67.2C-52.1,56,-48.4,35.3,-52.9,18C-57.4,0.8,-70,-13,-70.9,-27C-71.9,-41,-61.2,-55.3,-47.4,-60.6C-33.6,-66,-16.8,-62.6,-2.4,-59.2C11.9,-55.8,23.9,-52.6,35.6,-46.5Z"
                  transform="translate(100 100)"
                />
              </svg>
              <svg
                className="absolute translate-x-36 translate-y-20 scale-125"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <defs>
                  <linearGradient
                    id="purpleToBlue"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#800080" />
                    <stop offset="100%" stop-color="#0000FF" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#purpleToBlue)"
                  d="M35.6,-46.5C47.3,-40.5,58.8,-31.7,65.9,-19.2C73,-6.7,75.7,9.4,71.9,24C68,38.7,57.7,51.9,44.6,61.2C31.5,70.5,15.8,75.9,-1.4,77.8C-18.6,79.8,-37.2,78.3,-44.7,67.2C-52.1,56,-48.4,35.3,-52.9,18C-57.4,0.8,-70,-13,-70.9,-27C-71.9,-41,-61.2,-55.3,-47.4,-60.6C-33.6,-66,-16.8,-62.6,-2.4,-59.2C11.9,-55.8,23.9,-52.6,35.6,-46.5Z"
                  transform="translate(100 100)"
                />
              </svg>
              <div className=" gap-5 w-full h-full flex justify-between">
                <MatchChoiceComponent
                  choice={choiceA}
                  id="choiceA"
                  key="choiceA"
                  onClick={handleChoiceA}
                  img={getImgFromName(choiceA)}
                ></MatchChoiceComponent>
                <MatchChoiceComponent
                  choice={choiceB}
                  id="choiceB"
                  key="choiceB"
                  onClick={handleChoiceB}
                  img={getImgFromName(choiceB)}
                ></MatchChoiceComponent>
              </div>
            </>
          ) : (
            <ResultPage getImgFromName={getImgFromName} result={result} />
          )}
        </div>
      )}
      <div className="sticky bottom-0 h-1/6 flex justify-between px-5  gap-7 items-center">
        <div className="border-[#714D8B] border-2 p-2 rounded-full">
          <Sparkles color="#714D8B " size={60} strokeWidth={1} />
        </div>
        <div
          onClick={() => {
            setIsStart(false);
          }}
          className="border-[#714D8B] border-2 p-2 rounded-full"
        >
          <ListRestart color="#714D8B " size={60} strokeWidth={1} />
        </div>
        <div className="border-[#714D8B] border-2 p-2 rounded-full">
          <ListRestart color="#714D8B " size={60} strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};

export default GamePage;
