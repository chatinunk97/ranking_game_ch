export type ChoiceType = {
  choiceName: string;
  url: string;
};

export type ResultType = {
  key: string;
  wins: number;
}[];

export type ChoicePropsType = {
  choice: string;
  i: number;
  handleDelete: ( i: number) => void;
};

export type ChoiceComparePropsType = {
  choice: string;
  onClick: () => void;
  url: string;
};
