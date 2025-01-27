import React, { useState } from "react";
import { Input } from "../input";
import { ChoiceType } from "@/lib/types";
import { toast } from "react-toastify";

const AddChoiceForm = ({
  choices,
  setChoices,
}: {
  choices: ChoiceType[];
  setChoices: React.Dispatch<React.SetStateAction<ChoiceType[]>>;
}) => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserInput(e.currentTarget.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userInput.trim() || choices.length >= 11) return;
    if (choices.some((choice) => choice.choiceName === userInput)) {
      toast(`You've already entered "${userInput}"`, {
        autoClose: 1000,
        className: "w-full",
        position: "top-center",
      });
      return;
    }
    setChoices((prev) => [{ choiceName: userInput, img: "" }, ...prev]);
    setUserInput("");
  };

  return (
    <form className="w-full px-6" onSubmit={handleSubmit}>
      <Input
        className="bg-white font-dynapuff"
        value={userInput}
        onChange={handleUserInput}
        placeholder="Add choices"
      />
    </form>
  );
};

export default AddChoiceForm;
