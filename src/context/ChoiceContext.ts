import { ChoicesContextType } from "@/lib/types";
import { createContext } from "react";

const ChoiceContext = createContext<ChoicesContextType>({
  choices: [],
  setChoices: () => {},
});

export default ChoiceContext;
