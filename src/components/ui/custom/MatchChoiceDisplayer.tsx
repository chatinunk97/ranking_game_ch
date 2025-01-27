import MatchChoiceComponent from "./MatchChoiceComponent";
import { MatchDisplayerPropsType } from "@/lib/types";

const MatchChoiceDisplayer = ({
  graphObject,
  choiceA,
  choiceB,
  getImgFromName,
}: MatchDisplayerPropsType) => {
  const handleChoiceA = () => {
    graphObject.gameContinue(choiceA, choiceB);
  };

  const handleChoiceB = () => {
    graphObject.gameContinue(choiceB, choiceA);
  };

  return (
    <div className=" gap-5 w-full h-full flex justify-between items-center px-4">
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
  );
};

export default MatchChoiceDisplayer;
