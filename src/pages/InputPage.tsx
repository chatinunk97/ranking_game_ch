import { useState } from "react";
import { ChoiceType } from "../lib/types";
import { Input } from "../components/ui/input";
import MyChoiceComponent from "../components/ui/mycomponent/MyChoiceComponent";
import { liellaChoice } from "../defaultChoices/defaultChoice";
import { toast } from "react-toastify";
import { Play, ListRestart, Sparkles } from "lucide-react";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <div className="h-screen">
      <div className="relative flex flex-col items-center justify-between gap-3  w-full py-5  h-5/6 overflow-hidden">
        <form className=" w-full px-6" onSubmit={handleSubmit}>
          <Input
            className="bg-white font-dynapuff"
            value={userInput}
            onChange={handleUserInput}
            placeholder="Add choices !"
          />
        </form>
        <ul
          onClick={() => setActiveCard(null)}
          className=" h-full gap-1 grid grid-cols-2 max-w-96 overflow-y-auto p-6 pb-28 w-full rounded-3xl  no-scrollbar"
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
      </div>
      <div className="sticky bottom-0 h-1/6 flex justify-between px-5  gap-7 items-center">
        <div
          onClick={() => {
            toast("Template Liella! 1st gen Applied", {
              autoClose: 1500,
              className: "w-1/2",
            });
            setChoices(liellaChoice);
          }}
          className="border-[#714D8B] border-2 p-2 rounded-full"
        >
          <Sparkles color="#714D8B " size={60} strokeWidth={1} />
        </div>
        <div
          onClick={handleStart}
          className="border-[#714D8B] border-2 p-2 rounded-full"
        >
          <Play color="#714D8B " size={60} strokeWidth={1} />
        </div>
        <div
          onClick={() => setChoices([])}
          className="border-[#714D8B] border-2 p-2 rounded-full"
        >
          <ListRestart color="#714D8B " size={60} strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};

export default InputPage;
