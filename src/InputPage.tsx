import { useState } from "react";
import { ChoiceType } from "./types";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import MyChoiceComponent from "./components/ui/MyChoiceComponent";
import { liellaChoice } from "./defaultChoices/defaultChoice";
import liellaLogo from "./assets/liellaLogo.png";

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

  const handleStart = () => {
    if (choices.length < 2) {
      return;
    }
    setIsStart(true);
  };

  const handleDelete = (i: number) =>
    setChoices(choices.filter((_, index) => index !== i));

  return (
    <div className="h-screen pb-5 ">
      <div className="flex flex-col gap-3 bg-gradient-to-b from-yellow-400 to-yellow-500 w-full py-5 px-2 rounded-b-[50px] h-5/6 overflow-hidden">
        <form className=" w-full px-2" onSubmit={handleSubmit}>
          <Input
            className="bg-white font-spaceGrotesk"
            value={userInput}
            onChange={handleUserInput}
            placeholder="Add choices !"
          />
        </form>
        <ul
          onClick={() => setActiveCard(null)}
          className="h-full grid gap-3 grid-cols-2 max-w-96 overflow-y-auto px-2 py-4 w-full rounded-3xl  no-scrollbar"
          style={{
            maskImage:
              "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 6%)",
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
          onClick={() => setChoices(liellaChoice)}
          className="p-0 h-14 w-14 rounded-xl bg-gray-50 text-black border "
        >
          <img className="w-full h-full rounded-xl" src={liellaLogo}></img>
        </Button>
        <Button
          className="font-spaceGrotesk h-28 w-28 rounded-3xl bg-white text-black border-gray-200 border-4 border-b-6 border-r-6 transition-all duration-500  hover:border-none hover:text-white "
          onClick={handleStart}
        >
          PLAY
        </Button>
        <Button
          onClick={() => setChoices([])}
          className="font-spaceGrotesk h-14 w-14 rounded-xl bg-gray-50 text-black border  hover:border-none hover:text-white "
        >
          RESET
        </Button>
      </div>
    </div>
  );
};

export default InputPage;
