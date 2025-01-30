import Graph from "@/GraphClass/Graph";
import { Dispatch, SetStateAction } from "react";

export type ChoicesContextType = {
  choices: ChoiceType[];
  setChoices: Dispatch<SetStateAction<ChoiceType[]>>;
};

export type ChoiceType = {
  choiceName: string;
  img: string;
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
