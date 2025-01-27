import { ChoiceType } from "@/lib/types";
import ChoiceContext from "./ChoiceContext";
import { ReactNode, useState } from "react";

const ChoiceContextProvider = ({ children }: { children: ReactNode }) => {
  const [choices, setChoices] = useState<ChoiceType[] | []>([]);
  return (
    <ChoiceContext.Provider value={{ choices, setChoices }}>
      {children}
    </ChoiceContext.Provider>
  );
};

export default ChoiceContextProvider;
