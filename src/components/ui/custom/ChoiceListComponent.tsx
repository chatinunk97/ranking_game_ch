import ChoiceComponent from "./ChoiceComponent";
import { ChoiceType } from "@/lib/types";

const ChoiceListComponent = ({
  choices,
  setChoices,
}: {
  choices: ChoiceType[];
  setChoices: React.Dispatch<React.SetStateAction<ChoiceType[]>>;
}) => {
  //Functions Updating the choice
  const handleDelete = (i: number) =>
    setChoices(choices.filter((_, index) => index !== i));
  const handleUpdateImage = (choiceObject: ChoiceType) => {
    setChoices((prevChoices) =>
      prevChoices.map((choice) =>
        choice.choiceName === choiceObject.choiceName ? choiceObject : choice
      )
    );
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
