import { ChoiceAction, ChoiceType, CounterActionType } from "@/lib/types";
import ChoiceContext from "./ChoiceContext";
import { ReactNode, useReducer } from "react";
import defaultChoice from "@/defaultChoices/defaultChoice";
const ChoiceContextProvider = ({ children }: { children: ReactNode }) => {
  const initialState: ChoiceType[] | [] = [];

  const choiceReducer = (state: ChoiceType[] | [], action: ChoiceAction) => {
    switch (action.type) {
      case CounterActionType.ADD:
        return [action.payload, ...state];
      case CounterActionType.REMOVE:
        return state.filter((_, index) => index != action.payload);
      case CounterActionType.UPDATE:
        return state.map((choice) =>
          choice.choiceName === action.payload.choiceName
            ? action.payload
            : choice
        );
      case CounterActionType.APPLY_TEMPLATE:
        return defaultChoice[action.payload];
      case CounterActionType.RESET:
        return [];

      default:
        return state;
    }
  };

  const [choices, dispatch] = useReducer(choiceReducer, initialState);

  return (
    <ChoiceContext.Provider value={{ choices, dispatch }}>
      {children}
    </ChoiceContext.Provider>
  );
};

export default ChoiceContextProvider;
