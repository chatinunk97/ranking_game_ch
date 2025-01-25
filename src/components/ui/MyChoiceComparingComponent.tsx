import { ChoiceComparePropsType } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const MyChoiceComparingComponent = ({
  choice,
  onClick,
  img,
}: ChoiceComparePropsType) => {
  return (
    <div className=" z-10 flex-1 justify-center flex">
      <div className="relative w-full h-full cursor-pointer" onClick={onClick}>
        <Avatar className=" flex justify-center items-center">
          <AvatarImage src={img} className="w-32 h-32 rounded-full border-8" />
          <AvatarFallback className="text-2xl w-32 h-32">{`${choice
            .slice(0, 2)
            .toUpperCase()}`}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default MyChoiceComparingComponent;
