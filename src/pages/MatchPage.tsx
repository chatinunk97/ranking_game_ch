import { useEffect, useMemo, useRef, useState } from "react";
import { ChoiceType, ResultType } from "../lib/types";
import Graph from "../GraphClass/Graph";
import ResultPage from "./ResultPage";
import MatchChoiceDisplayer from "@/components/ui/custom/MatchChoiceDisplayer";
import BlobBackground from "@/components/ui/custom/BlobBackground";
import TrackerPopup from "@/components/ui/custom/TrackerPopup";
import MatchPageFooter from "@/components/ui/custom/MatchPageFooter";

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
    if (isTrackerOpen) {
      setTrackerData(graphObject.current.gamePrintResult());
    }
  }, [isTrackerOpen, choiceA, choiceB]);

  const getImgFromName = useMemo(() => {
    return (choiceName: string) => {
      return choices.reduce((acc, element) => {
        if (element.choiceName === choiceName) {
          acc = element.img;
        }
        return acc;
      }, "NOT FOUND");
    };
  }, [choices]);
  if (isLoading) {
    return null;
  }
  return (
    <div className="relative h-[100dvh] flex flex-col">
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
      <MatchPageFooter
        setIsRankingOpen={setIsRankingOpen}
        setIsTrackerOpen={setIsTrackerOpen}
        isContinue={isContinue}
        setIsContinue={setIsContinue}
        setResult={setResult}
        setIsStart={setIsStart}
        graphObject={graphObject.current}
      />
    </div>
  );
};

export default MatchPage;
