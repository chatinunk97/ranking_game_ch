import { TemplateChoices } from "@/defaultChoices/defaultChoice";
import Graph from "@/GraphClass/Graph";

export type ChoicesContextType = {
  choices: ChoiceType[];
  dispatch: React.Dispatch<ChoiceAction>;
};

export type ChoiceType = {
  choiceName: string;
  img?: string;
};

export type ResultType = {
  key: string;
  wins: number;
}[];

export type ChoicePropsType = {
  choice: ChoiceType;
  handleUpdateImage: (choiceObject: ChoiceType) => void;
  index: number;
  handleDelete: (i: number) => void;
};

export type ChoiceComparePropsType = {
  choice: string;
  img: string;
  id?: string;
  ranking?: number;
  onClick?: () => void;
};

export type MatchDisplayerPropsType = {
  graphObject: Graph;
  choiceA: string;
  choiceB: string;
  getImgFromName: (choiceName: string) => string;
};

export type MatchPageFooterPropsType = {
  setIsRankingOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTrackerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isContinue: boolean;
  setIsContinue: React.Dispatch<React.SetStateAction<boolean>>;
  setResult: React.Dispatch<React.SetStateAction<[] | ResultType>>;
  setIsStart: React.Dispatch<React.SetStateAction<boolean>>;
  graphObject: Graph;
};
export type ChoiceAction =
  | { type: "ADD"; payload: ChoiceType }
  | { type: "REMOVE"; payload: number }
  | { type: "UPDATE"; payload: ChoiceType }
  | { type: "RESET" }
  | { type: "APPLY_TEMPLATE"; payload: TemplateChoices };

export enum CounterActionType {
  ADD = "ADD",
  REMOVE = "REMOVE",
  UPDATE = "UPDATE",
  RESET = "RESET",
  APPLY_TEMPLATE = "APPLY_TEMPLATE",
}
