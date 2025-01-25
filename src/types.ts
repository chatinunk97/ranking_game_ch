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
  i: number;
  handleDelete: (i: number) => void;
};

export type ChoiceComparePropsType = {
  choice: string;
  img: string;
  onClick: () => void;
};
