import { useState } from "react";
import { ChoiceType } from "./types";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import MyChoiceComponent from "./components/ui/myChoiceComponent";
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
      setChoices((c) => [...c, { choiceName: userInput, url: "" }]);
    }
  };
  const handleDelete = (i: number) => {
    const updatedElement = choices.filter((_, index) => index !== i);
    setChoices(updatedElement);
  };

  const handleStartGame = () => {
    setIsStart(true);
    console.log(choices);
  };
  return (
    <>
      <div className="bg-gradient-to-b from-white via-purple-200 to-red-200 min-w-min max-w-sm m-auto min-h-screen flex flex-col gap-2">
        <Button
          className="w-full bg-yellow-300 text-black"
          onClick={handleStartGame}
        >
          START
        </Button>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="flex">
            <Input
              value={userInput}
              onChange={(e) => {
                handleUserInput(e);
              }}
              placeholder="input your choice"
            ></Input>
            <Button className="bg-green-500" type="submit">
              Add
            </Button>
          </div>
        </form>
        <ul key="choiceList" className="flex flex-col gap-4">
          {choices.map((choice, i: number) => (
            <MyChoiceComponent
              choice={choice.choiceName}
              key={i}
              handleDelete={handleDelete}
              i={i}
            />
          ))}{" "}
        </ul>
      </div>
    </>
  );
};

export default InputPage;
