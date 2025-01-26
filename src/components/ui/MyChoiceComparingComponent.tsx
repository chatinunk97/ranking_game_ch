import { ChoiceComparePropsType } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { useState } from "react";

const MyChoiceComparingComponent = ({
  choice,
  onClick,
  img,
  id,
}: ChoiceComparePropsType) => {
  const [loadStatus, setLoadStatus] = useState("");
  const handleLoadStatusUpdate = (status: string): void => {
    setLoadStatus(status);
  };
  return (
    <div className=" z-10 flex-1 justify-center flex">
      <div className="relative w-full h-full">
        <Avatar className="flex justify-center items-center">
          <AvatarImage
            onClick={onClick}
            src={img}
            className={` ${
              id === "choiceA" ? "animate-slide-in-a" : "animate-slide-in-b"
            }  w-32 h-32 rounded-full border-8 cursor-pointer hover:scale-125 transition-all duration-500`}
            onLoadingStatusChange={(status) => {
              handleLoadStatusUpdate(status);
            }}
          />
          <AvatarFallback
            onClick={onClick}
            className={`${loadStatus === "loading" ? "hidden " : ""} ${
              id === "choiceA" ? "animate-slide-in-a" : "animate-slide-in-b"
            }  w-32 h-32 rounded-full border-8 cursor-pointer hover:scale-125 transition-all duration-500`}
          >{`${choice.slice(0, 2).toUpperCase()}`}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default MyChoiceComparingComponent;
