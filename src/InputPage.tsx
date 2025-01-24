import { useState } from "react";
import { ChoiceType } from "./types";
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
      <div className="bg-red-950 max-w-sm m-auto min-h-screen">
        <button onClick={handleStartGame}>START</button>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            value={userInput}
            onChange={(e) => {
              handleUserInput(e);
            }}
            className="bg-amber-100 text-black"
            type="text"
            placeholder="input your choice"
          ></input>
          <button className="bg-green-400 cursor-pointer" type="submit">
            Add
          </button>
        </form>

        <ul>
          {choices.map((choice, i: number) => (
            <li key={i}>
              {choice.choiceName}
              <button
                onClick={() => {
                  handleDelete(i);
                }}
                className="bg-red-600 cursor-pointer"
              >
                Remove
              </button>
            </li>
          ))}{" "}
        </ul>
      </div>
    </>
  );
};

export default InputPage;
