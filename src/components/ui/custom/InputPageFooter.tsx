import { toast } from "react-toastify";
import { Play, ListRestart, GalleryHorizontalEnd } from "lucide-react";
import { liellaChoice, stardewChoice } from "@/defaultChoices/defaultChoice";
import { ChoiceType } from "@/lib/types";
import {
  PopoverContent,
  Popover,
  PopoverTrigger,
  PopoverPrimitive,
} from "../popover";
const InputPageFooter = ({
  setChoices,
  handleStart,
}: {
  setChoices: React.Dispatch<React.SetStateAction<ChoiceType[]>>;
  handleStart: () => void;
}) => {
  return (
    <div className="sticky bottom-0 flex justify-between p-3 gap-7 items-center">
      <Popover>
        <PopoverTrigger className="border-[white] border-2 p-2 rounded-full">
          <GalleryHorizontalEnd color="white " size={40} strokeWidth={1} />
        </PopoverTrigger>
        <PopoverContent className="flex flex-col  justify-center gap-2 px-1 py-2 font-dynapuff">
          <span className="items-start">Choose a template</span>
          <div>
            <div className="flex  flex-col gap-2 ">
              <PopoverPrimitive.Close>
                <div
                  onClick={() => {
                    setChoices(liellaChoice);
                    toast("Liella 1st gen template applied !", { autoClose: 1500 });
                  }}
                  className="p-1 bg-black rounded-full bg-gradient-to-b from-purple-300 via-blue-300 to-blue-400"
                >
                  <div className="px-1 overflow-hidden flex justify-center items-center bg-white rounded-full w-full text-center">
                    Liella 1st Gen
                  </div>
                </div>
              </PopoverPrimitive.Close>
              <PopoverPrimitive.Close>
                <div
                  onClick={() => {
                    setChoices(stardewChoice);
                    toast("Stardew Valley template applied !", { autoClose: 1500 });
                  }}
                  className="p-1 bg-black rounded-full bg-gradient-to-b from-purple-300 via-blue-300 to-blue-400"
                >
                  <div className="px-1 overflow-hidden flex justify-center items-center bg-white rounded-full w-full text-center">
                    Stardew Valley
                  </div>
                </div>
              </PopoverPrimitive.Close>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <div
        onClick={handleStart}
        className="border-[white] border-2 p-2 rounded-full"
      >
        <Play color="white " size={40} strokeWidth={1} />
      </div>
      <div
        onClick={() => setChoices([])}
        className="border-[white] border-2 p-2 rounded-full"
      >
        <ListRestart color="white " size={40} strokeWidth={1} />
      </div>
    </div>
  );
};

export default InputPageFooter;
