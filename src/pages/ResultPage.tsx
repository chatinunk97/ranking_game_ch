import MyChoiceComparingComponent from "../components/ui/custom/MatchChoiceComponent";
import gold from "../assets/gold.svg";
import silver from "../assets/silver.svg";
import bronze from "../assets/bronze.svg";
import { ResultType } from "../lib/types";
import JSConfetti from "js-confetti";
import { useEffect } from "react";
import TrackerPopup from "@/components/ui/custom/TrackerPopup";
const ResultPage = ({
  result,
  getImgFromName,
  isTrackerOpen,
  trackerData,
  isRankingOpen,
}: {
  result: ResultType;
  getImgFromName: (choiceName: string) => string;
  isTrackerOpen: boolean;
  trackerData: string[] | [];
  isRankingOpen: boolean;
}) => {
  result.sort((a, b) => b.wins - a.wins);
  useEffect(() => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸"],
    });
  }, []);

  return (
    <div className="relative h-full w-full flex justify-center items-center">
      <div className="grid grid-cols-2 w-full font-dynapuff text-white">
        <div className="text-xl flex-col flex w-full h-ull justify-center items-center col-span-2">
          <MyChoiceComparingComponent
            choice={result[0].key}
            img={getImgFromName(result[0].key)}
            ranking={1}
          ></MyChoiceComparingComponent>
          <img src={gold} className="w-12"></img>
          <div className=" ">{result[0].key}</div>
          <div className=" flex justify-center rounded-full px-4 py-2 w-24 bg-gradient-to-br from-purple-400  via-yellow-500 to-purple-500">
            {/* {result[0].wins} */}#1
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-center ">
          {" "}
          <MyChoiceComparingComponent
            choice={result[1].key}
            img={getImgFromName(result[1].key)}
            ranking={2}
          ></MyChoiceComparingComponent>{" "}
          <img src={silver} className="w-8"></img>
          <div>{result[1].key}</div>
          <div className="flex justify-center rounded-full px-2 py-1 w-24 bg-gradient-to-br from-purple-200  via-gray-400 to-purple-200">
            {/* {result[1].wins} */} #2
          </div>
        </div>
        {result.length > 2 ? (
          <div className="relative flex flex-col justify-center items-center ">
            {" "}
            <div>
              <MyChoiceComparingComponent
                choice={result[2].key}
                img={getImgFromName(result[2].key)}
                ranking={3}
              ></MyChoiceComparingComponent>{" "}
            </div>
            <img src={bronze} className="w-8"></img>
            <div>{result[2].key}</div>
            <div className="flex justify-center rounded-full px-2 py-1 w-24 bg-gradient-to-br from-purple-200  via-amber-950 to-purple-200">
              {/* {result[1].wins} */} #3
            </div>
          </div>
        ) : (
          <></>
        )}

        <TrackerPopup
          isTrackerOpen={isTrackerOpen}
          trackerData={trackerData}
          type="graph"
        />

        <TrackerPopup
          isTrackerOpen={isRankingOpen}
          type="ranking"
          result={result}
        />
      </div>
    </div>
  );
};

export default ResultPage;
