import { MatchPageFooterPropsType } from "@/lib/types";
import { ListRestart, Medal, Pause, Waypoints } from "lucide-react";

const MatchPageFooter = ({
  setIsRankingOpen,
  setIsTrackerOpen,
  isContinue,
  setIsContinue,
  setResult,
  setIsStart,
  graphObject,
}: MatchPageFooterPropsType) => {
  return (
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
              setResult(graphObject.gameGetResult());
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
  );
};

export default MatchPageFooter;
