import { ChoicePropsType } from "@/lib/types";
import { Card, CardContent } from "../card";
import { useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import PopoverSubmenu from "./PopoverSubmenu";

const ChoiceComponent = ({
  choice,
  handleUpdateImage,
  index,
  handleDelete,
}: ChoicePropsType) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loadStatus, setLoadStatus] = useState("");

  const triggerFileInput = () => {
    fileInputRef.current?.click(); // Trigger the hidden file input on button click
  };
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        alert("Please upload a JPG or PNG image.");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          // Update the choice object with the new image source
          const updatedChoice = {
            ...choice,
            img: reader.result as string, // Base64 string of the image
          };
          // Optionally, update the parent state here if needed
          handleUpdateImage(updatedChoice);
        }
      };
      reader.readAsDataURL(file); // Read the file as a data URL (Base64)
    }
  };

  const handleLoadStatusUpdate = (status: string): void => {
    setLoadStatus(status);
  };

  return (
    <li className=" min-h-44 h-full flex items-cente p-1 bg-gradient-to-b from-yellow-100 via-blue-100 to-blue-200 rounded-2xl">
      <div className="overflow-hidden h-full flex flex-1 transition-transform duration-300 ">
        <Card className="relative text-white rounded-xl overflow-hidden border-none flex w-full h-full flex-col">
          <div className="absolute right-3 top-2 z-10">
            <PopoverSubmenu
              handleDelete={handleDelete}
              triggerFileInput={triggerFileInput}
              index={index}
            />
          </div>
          <CardContent className="flex flex-1 justify-center p-0 items-center w-full">
            <Avatar className="flex flex-1 items-center justify-center">
              {loadStatus === "loading" && <div className="spinner" />}
              <AvatarImage
                src={choice.img}
                style={{ display: loadStatus === "loading" ? "none" : "block" }}
                onLoadingStatusChange={(status) => {
                  handleLoadStatusUpdate(status);
                }}
              />
              <AvatarFallback
                className={`${
                  loadStatus === "loading" ? "hidden" : ""
                } p-0 text-2xl w-full h-full rounded-none`}
              >
                {choice.choiceName.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileSelect}
            />
          </CardContent>
          <div className="font-dynapuff absolute bottom-0 w-full text-white px-2 py-1 flex items-center justify-center">
            <div className="flex absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50"></div>
            <div className="relative z-10">
              {choice.choiceName.length < 25
                ? choice.choiceName
                : `${choice.choiceName.slice(0, 13)}...`}
            </div>
          </div>
        </Card>
      </div>
    </li>
  );
};

export default ChoiceComponent;
