import {
  CustomPopover,
  CustomPopoverTrigger,
  CustomPopoverContent,
  CustomPopoverPrimitive,
} from "@/components/ui/customPopover";
import { AlignJustify, CircleX, ImagePlus } from "lucide-react";
const CustomPopoverSubmenu = ({
  triggerFileInput,
  handleDelete,
  index,
}: {
  triggerFileInput: () => void;
  handleDelete: (i: number) => void;
  index: number;
}) => {
  const handleDeleteClick = () => {
    handleDelete(index);
  };
  return (
    <CustomPopover>
      <CustomPopoverTrigger>
        <div className="z-30">
          <AlignJustify color="black" size={20} />
        </div>
        <div className="z-20 top-0 absolute">
          <AlignJustify color="#ffffff" size={19} />
        </div>
      </CustomPopoverTrigger>
      <CustomPopoverContent>
        <div className="flex gap-1">
          <CustomPopoverPrimitive.Close>
            <div className="pt-3 pl-px-5 ">
              <div
                onClick={triggerFileInput}
                className="p-2 bg-white/85  rounded-full"
              >
                <ImagePlus color="#17B169" size={30} />
              </div>
            </div>
          </CustomPopoverPrimitive.Close>
          <CustomPopoverPrimitive.Close>
            <div className="pt-6 ">
              <div
                onClick={handleDeleteClick}
                className="p-2 bg-white/85 shadow-md rounded-full"
              >
                <CircleX color="#bc4141" size={30} />
              </div>
            </div>
          </CustomPopoverPrimitive.Close>
        </div>
      </CustomPopoverContent>
    </CustomPopover>
  );
};

export default CustomPopoverSubmenu;
