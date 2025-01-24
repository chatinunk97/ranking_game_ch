import { Button } from "./button";
import { Card, CardDescription, CardHeader, CardTitle } from "./card";
const MyChoiceComponent = ({ choice, i, handleDelete }) => {
  return (
    <li className="flex items-cente">
      <div className="flex-1">
        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription>{choice}</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div>
        <Button
          onClick={() => {
            handleDelete(i);
          }}
          className="h-full cursor-pointer"
        >
          Remove
        </Button>
      </div>
    </li>
  );
};

export default MyChoiceComponent;
