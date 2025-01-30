import { ResultType } from "@/lib/types";
import { Expand } from "lucide-react";
import { useState } from "react";

const TrackerPopup = ({
  isTrackerOpen,
  trackerData,
  type,
  result,
}: {
  isTrackerOpen: boolean;
  trackerData?: string[] | [];
  type: string;
  result?: ResultType;
}) => {
  const [isGraphFull, setIsGraphFull] = useState(false);
  return (
    <div
      className={`${isTrackerOpen ? "h-full p-2" : "h-0 p-0"}  
      ${isGraphFull ? "max-h-full" : "max-h-40"}
       transition-all  duration-500 flex flex-col gap-2 absolute bottom-0 bg-white/90 w-full overflow-scroll no-scrollbar  font-dynapuff z-50`}
    >
      {type === "graph" ? (
        <>
          <div className="bg-black rounded-full p-1 flex justify-start  gap-2 bg-gradient-to-b from-purple-300 via-blue-300 to-blue-400 text-white ">
            <div className="px-2">Graph Adjacency list tracker </div>
            <div className=" flex-1 flex justify-end px-4">
              <Expand
                onClick={() => {
                  setIsGraphFull((e) => !e);
                }}
              ></Expand>
            </div>
          </div>
          <div className=" font-mono flex flex-col gap-2">
            {trackerData?.map((e,i) => {
              return (
                <div key={i} className="bg-white/50 p-2 rounded-md shadow-md text-black">
                  <div className="font-bold font-sans">
                    {e.split(">")[0].split(" -")[0]}
                  </div>
                  {e}
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="relative rounded-full p-1 flex justify-center items-center  gap-2 bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 text-white ">
            Ranking
            <div className="absolute right-0 px-3">
              <Expand
                onClick={() => {
                  setIsGraphFull((e) => !e);
                }}
              ></Expand>
            </div>
          </div>
          <div className=" font-mono flex flex-col gap-2 p-2 px-3">
            {result?.map((e, i) => {
              return (
                <div key={i} className="flex justify-between bg-white/50 p-2 rounded-md shadow-md text-black">
                  <div># {i + 1}</div>
                  <div className="font-bold">{e.key}</div>
                  <div>{e.wins} Points</div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default TrackerPopup;
