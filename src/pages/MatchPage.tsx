import { useEffect, useRef, useState } from "react";
import { ChoiceType, ResultType } from "../lib/types";
import { ListRestart, Waypoints, Pause, Medal } from "lucide-react";
import Graph from "../GraphClass/Graph";
import ResultPage from "./ResultPage";
import MatchChoiceDisplayer from "@/components/ui/custom/MatchChoiceDisplayer";
import BlobBackground from "@/components/ui/custom/BlobBackground";
import TrackerPopup from "@/components/ui/custom/TrackerPopup";

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
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [isRankingOpen, setIsRankingOpen] = useState(false);
  const [trackerData, setTrackerData] = useState<string[] | []>([]);
  const [result, setResult] = useState<ResultType | []>([]);
  const graphObject = useRef(
    new Graph(setChoiceA, setChoiceB, isContinue, setIsContinue, setResult)
  );
  useEffect(() => {
    graphObject.current.setUpNodes(choices);
    graphObject.current.gameSetup();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setTrackerData(graphObject.current.gamePrintResult());
  }, [choiceA, choiceB]);

  const getImgFromName = (choiceName: string) => {
    return choices.reduce((acc, element) => {
      if (element.choiceName === choiceName) {
        acc = element.img;
      }
      return acc;
    }, "NOT FOUND");
  };
  return (
    <div className="relative h-[100dvh] flex flex-col">
      {isLoading ? (
        <></>
      ) : (
        <div className="relative flex flex-col items-center justify-between  py-5 flex-grow overflow-hidden">
          {isContinue ? (
            <>
              <div className="relative flex justify-center items-center w-full h-screen overflow-hidden">
                <BlobBackground />
                <MatchChoiceDisplayer
                  graphObject={graphObject.current}
                  choiceA={choiceA}
                  choiceB={choiceB}
                  getImgFromName={getImgFromName}
                />
              </div>
              <TrackerPopup
                isTrackerOpen={isTrackerOpen}
                trackerData={trackerData}
                type="graph"
              />
            </>
          ) : (
            <ResultPage
              getImgFromName={getImgFromName}
              result={result}
              isTrackerOpen={isTrackerOpen}
              trackerData={trackerData}
              isRankingOpen={isRankingOpen}
            />
          )}
        </div>
      )}
      <div className="sticky bottom-0 flex justify-between p-3 gap-7 items-center">
        <div
          onClick={() => {
            setIsRankingOpen(false);
            setIsTrackerOpen((e) => !e);
          }}
          className="border-white border-2 p-2 rounded-full"
        >
          <Waypoints color="white" size={40} strokeWidth={1} />
        </div>
        <div className="border-white border-2 p-2 rounded-full">
          {isContinue ? (
            <Pause
              onClick={() => {
                setResult(graphObject.current.gameGetResult());
                setIsContinue(false);
              }}
              color="white"
              size={40}
              strokeWidth={1}
            />
          ) : (
            <Medal
              onClick={() => {
                setIsTrackerOpen(false);
                setIsRankingOpen((e) => !e);
              }}
              color="white"
              size={40}
              strokeWidth={1}
            ></Medal>
          )}
        </div>
        <div className="border-white border-2 p-2 rounded-full">
          <ListRestart
            onClick={() => {
              setIsStart(false);
            }}
            color="white"
            size={40}
            strokeWidth={1}
          />
        </div>
      </div>
    </div>
  );
};

export default MatchPage;
