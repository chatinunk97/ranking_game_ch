import { ChoicesContextType } from "../lib/types";

import useChoices from "@/hooks/global/useChoices";
import ChoiceListComponent from "@/components/ui/custom/ChoiceListComponent";
import InputPageFooter from "@/components/ui/custom/InputPageFooter";
import AddChoiceForm from "@/components/ui/custom/AddChoiceForm";
import { toast } from "react-toastify";

const InputPage = ({
  setIsStart,
}: {
  setIsStart: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { choices, dispatch }: ChoicesContextType = useChoices();

  const handleStart = () => {
    if (choices.length < 2) {
      toast("Please input 2 or more choices", { autoClose: 1000 });
      return;
    }
    setIsStart(true);
  };

  return (
    <div className="relative h-full flex flex-col">
      <div className="flex flex-col items-center justify-between gap-3 w-full py-5 flex-grow overflow-hidden">
        <AddChoiceForm choices={choices} dispatch={dispatch} />
        <ChoiceListComponent choices={choices} dispatch={dispatch} />
      </div>
      <InputPageFooter
        handleStart={handleStart}
        dispatch={dispatch}
      ></InputPageFooter>
    </div>
  );
};

export default InputPage;
