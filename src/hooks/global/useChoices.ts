import ChoiceContext from "@/context/ChoiceContext";
import { useContext } from "react";

const useChoices = () => {
  return useContext(ChoiceContext);
};

export default useChoices;
