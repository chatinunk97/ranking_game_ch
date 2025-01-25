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

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserInput(e.currentTarget.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInput.trim() || choices.length >= 11) return;
    if (choices.some((choice) => choice.choiceName === userInput)) {
      alert(`You've already entered "${userInput}"`);
      return;
    }
    setChoices((prev) => [{ choiceName: userInput, img: "" }, ...prev]);
    setUserInput("");
  };

  const handleUpdateImage = (choiceObject: ChoiceType) => {
    setChoices((prevChoices) =>
      prevChoices.map((choice) =>
        choice.choiceName === choiceObject.choiceName ? choiceObject : choice
      )
    );
  };

  const handleDelete = (i: number) =>
    setChoices(choices.filter((_, index) => index !== i));

  return (
    <div className="h-screen flex flex-col gap-2 justify-between overflow-hidden">
      <div className="relative bg-gradient-to-b from-yellow-400 to-orange-300 w-full grid grid-cols-1 gap-2 py-5 px-2 rounded-b-[50px] h-5/6 overflow-hidden">
        <form className="flex items-end w-full h-full" onSubmit={handleSubmit}>
          <Input
            className="bg-white"
            value={userInput}
            onChange={handleUserInput}
            placeholder="Add choices !"
          />
        </form>
        <ul
          onClick={() => setActiveCard(null)}
          className="grid grid-cols-2 gap-4 max-w-96 overflow-y-auto px-2 py-4 w-full rounded-3xl  no-scrollbar"
          style={{
            maskImage:
              "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 10%)",
          }}
        >
          {choices.map((choice, i) => (
            <MyChoiceComponent
              key={i}
              choice={choice}
              handleUpdateImage={handleUpdateImage}
              i={i}
              handleDelete={handleDelete}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          ))}
        </ul>
        {/* <div className="custom-shape-divider-bottom-1737802743">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
              className="shape-fill"
            ></path>
          </svg>
        </div> */}
      </div>
      <div className=" h-1/5 flex justify-center  gap-10 items-center">
        <Button
          className="h-14 w-14 rounded-xl bg-white text-black border border-b-ring border-r-ring "
          onClick={() => setIsStart(true)}
        ></Button>
        <Button
          className="h-20 w-20 rounded-3xl bg-white text-black border border-b-ring border-r-ring "
          onClick={() => setIsStart(true)}
        >
          PLAY
        </Button>
        <Button
          className="h-14 w-14 rounded-xl bg-white text-black border border-b-ring border-r-ring "
          onClick={() => setIsStart(true)}
        ></Button>
      </div>
    </div>
  );
};

export default InputPage;
