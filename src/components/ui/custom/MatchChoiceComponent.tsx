import { ChoiceComparePropsType } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { useState } from "react";

const MatchChoiceComponent = ({
  choice,
  onClick,
  img,
  id,
  ranking,
}: ChoiceComparePropsType) => {
  const [loadStatus, setLoadStatus] = useState("");
  const handleLoadStatusUpdate = (status: string): void => {
    setLoadStatus(status);
  };

  const borderColor = () => {
    if (ranking == 1) {
      return "bg-gradient-to-b from-yellow-400 via-orange-100 to-orange-200";
    } else if (ranking == 2) {
      return "bg-gradient-to-b from-blue-200 via-blue-100 to-gray-400 ";
    } else if (ranking == 3) {
      return "bg-gradient-to-b from-orange-900 to-yellow-800";
    } else {
      return "bg-gradient-to-b from-yellow-100 via-blue-100 to-blue-200";
    }
  };
  return (
    <div
      className={`${borderColor()} ${
        id === "choiceA" ? "animate-slide-in-a" : "animate-slide-in-b"
      } min-h-32 min-w-32 p-2 flex justify-center items-center rounded-full z-10 hover:scale-125 cursor-pointer transition-all duration-500`}
    >
      <div
        className={`relative    rounded-full  ${
          loadStatus === "loading" ? "hidden " : ""
        } `}
      >
        <Avatar className="flex justify-center items-center">
          <AvatarImage
            onClick={onClick}
            src={img}
            className={`${loadStatus === "loading" ? "hidden " : ""}  ${
              ranking == 1
                ? "h-36 w-36"
                : ranking == 2
                ? "h-32 w-32"
                : "h-32 w-32 "
            }
            
             rounded-full `}
            onLoadingStatusChange={(status) => {
              handleLoadStatusUpdate(status);
            }}
          />
          <AvatarFallback
            onClick={onClick}
            className={`${loadStatus === "loading" ? "hidden " : ""} ${
              ranking == 1
                ? "h-32 w-32"
                : ranking == 2
                ? "h-32 w-32"
                : "h-32 w-32"
            }
              rounded-full `}
          >{`${choice.slice(0, 2).toUpperCase()}`}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default MatchChoiceComponent;
