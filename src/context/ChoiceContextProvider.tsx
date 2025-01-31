import { ChoiceAction, ChoiceType, CounterActionType } from "@/lib/types";
import ChoiceContext from "./ChoiceContext";
import { ReactNode, useMemo, useReducer } from "react";
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
  const value = useMemo(() => ({ choices, dispatch }), [choices]);
  return (
    <ChoiceContext.Provider value={{ ...value }}>
      {children}
    </ChoiceContext.Provider>
  );
};

export default ChoiceContextProvider;
