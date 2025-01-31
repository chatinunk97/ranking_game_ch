import ChoiceComponent from "./ChoiceComponent";
import { ChoiceAction, ChoiceType, CounterActionType } from "@/lib/types";

const ChoiceListComponent = ({
  choices,
  dispatch,
}: {
  choices: ChoiceType[];
  dispatch: React.Dispatch<ChoiceAction>;
}) => {
  //Functions Updating the choice
  const handleDelete = (i: number) =>
    dispatch({ type: CounterActionType.REMOVE, payload: i });

  const handleUpdateImage = (choiceObject: ChoiceType) => {
    dispatch({ type: CounterActionType.UPDATE, payload: choiceObject });
  };
  return (
    <ul
      className="h-full gap-1 grid grid-cols-2 max-w-96 overflow-y-auto p-6 pb-28 w-full rounded-3xl no-scrollbar"
      style={{
        maskImage:
          "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 10%)",
      }}
    >
      {choices.map((choice, index) => (
        <ChoiceComponent
          key={index}
          choice={choice}
          handleUpdateImage={handleUpdateImage}
          index={index}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ChoiceListComponent;
