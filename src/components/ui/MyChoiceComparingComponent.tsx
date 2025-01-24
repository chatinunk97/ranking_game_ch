import { ChoiceComparePropsType } from "@/types";
import { Card, CardDescription, CardHeader, CardTitle } from "./card";
const MyChoiceComparingComponent = ({
  choice,
  onClick,
  url,
}: ChoiceComparePropsType) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <Card>
        <CardHeader>
          <CardTitle>{choice}</CardTitle>
          <CardDescription>{url}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default MyChoiceComparingComponent;
