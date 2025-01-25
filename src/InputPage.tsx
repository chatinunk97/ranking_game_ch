import { useState } from "react";
import { ChoiceType } from "./types";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import MyChoiceComponent from "./components/ui/MyChoiceComponent";
const InputPage = ({
  setIsStart,
  choices,
  setChoices,
}: {
  setIsStart: React.Dispatch<React.SetStateAction<boolean>>;
  choices: ChoiceType[];
  setChoices: React.Dispatch<React.SetStateAction<ChoiceType[]>>;
}) => {
  const [userInput, setUserInput] = useState("");

  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleClickOutside = () => {
    setActiveCard(null); // Reset active card when clicking elsewhere
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setUserInput("");
    for (let index = 0; index < choices.length; index++) {
      if (choices[index].choiceName === userInput) {
        alert(`You've already inout " ${userInput} "`);
        return;
      }
    }
    if (userInput.trim() != "" && choices.length < 11) {
      setChoices((c) => [{ choiceName: userInput, url: "" }, ...c]);
    }
  };
  const handleDelete = (
    i: number
  ) => {
    const updatedElement = choices.filter((_, index) => index !== i);
    setChoices(updatedElement);
  };

  const handleStartGame = () => {
    setIsStart(true);
    console.log(choices);
  };
  return (
    <>
      <div className="bg-gradient-to-b from-white via-purple-100 to-red-100 min-w-min max-w-sm m-auto min-h-screen flex flex-col gap-4 items-center py-5 px-2">
        <form
          className=" w-full"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="flex gap-2 ">
            <Input
              className="bg-white"
              value={userInput}
              onChange={(e) => {
                handleUserInput(e);
              }}
              placeholder="input your choice"
            ></Input>
            <Button type="submit">Add</Button>
          </div>
        </form>
        <ul
          onClick={handleClickOutside}
          key="choiceList"
          className="flex flex-col gap-4 overflow-y-auto max-w-96 h-72 no-scrollbar px-2 py-4 w-full  rounded-xl shadow-xl bg-gradient-to-br from-white via-gray-50 to-gray-50"
        >
          {choices.map((choice, i: number) => (
            <MyChoiceComponent
              choice={choice.choiceName}
              key={i}
              handleDelete={handleDelete}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
              i={i}
            />
          ))}{" "}
        </ul>
        <Button className="w-full" onClick={handleStartGame}>
          START
        </Button>
      </div>
    </>
  );
};

export default InputPage;
