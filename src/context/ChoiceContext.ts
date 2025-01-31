import { ChoicesContextType } from "@/lib/types";
import { createContext } from "react";

const ChoiceContext = createContext<ChoicesContextType>({
  choices: [],
  dispatch: () => {},
});

export default ChoiceContext;
