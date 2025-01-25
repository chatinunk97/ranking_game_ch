import { ChoicePropsType } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "./card";
import { useState, useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const MyChoiceComponent = ({
  choice,
  handleUpdateImage,
  i,
  handleDelete,
  setActiveCard,
}: ChoicePropsType & {
  activeCard: number | null;
  setActiveCard: (cardIndex: number | null) => void;
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isCardClicked, setIsCardClicked] = useState(false);
  const [loadStatus, setLoadStatus] = useState("");
  const cardRef = useRef<HTMLLIElement>(null);

  const triggerFileInput = () => {
    fileInputRef.current?.click(); // Trigger the hidden file input on button click
  };
  const handleDeleteClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    handleDelete(i);
    setActiveCard(null);
    setIsCardClicked(false);
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
          console.log("Updated choice with image:", updatedChoice);
          // Optionally, update the parent state here if needed
          handleUpdateImage(updatedChoice);
        }
      };
      reader.readAsDataURL(file); // Read the file as a data URL (Base64)
    }
  };

  const handleCardClick = () => setIsCardClicked((prev) => !prev);

  const handleLoadStatusUpdate = (status: string): void => {
    console.log(status);
    setLoadStatus(status);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setIsCardClicked(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li
      ref={cardRef}
      className="h-full flex items-center"
      onClick={handleCardClick}
    >
      <div className="h-full flex flex-1 transition-transform duration-300 ">
        <Card className="overflow-hidden flex w-full h-full flex-col">
          <CardHeader className="overflow-hidden">
            <CardTitle className="py-1 font-spaceGrotesk truncate overflow-hidden text-ellipsis max-w-full whitespace-nowrap">
              {choice.choiceName.length < 25
                ? choice.choiceName
                : `${choice.choiceName.slice(0, 13)}...`}
            </CardTitle>
          </CardHeader>
          <CardContent
            onClick={triggerFileInput}
            className="flex flex-1 justify-center p-0 items-center w-full"
          >
            <Avatar className="flex items-center">
              <AvatarImage
                src={choice.img}
                onLoadingStatusChange={(status) => {
                  handleLoadStatusUpdate(status);
                }}
              />
              <AvatarFallback
                className={`${
                  loadStatus === "loading" ? "hidden " : " "
                } p-0 text-2xl w-full h-1/3`}
              >{`${choice.choiceName
                .slice(0, 2)
                .toUpperCase()} sss`}</AvatarFallback>
            </Avatar>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileSelect}
            />
          </CardContent>
        </Card>
      </div>
      <button
        className={`flex justify-center items-center rounded-full text-sm text-white bg-red-300 transition-opacity duration-300 ${
          isCardClicked
            ? "opacity-100 h-7 w-7"
            : "opacity-0 pointer-events-none w-0 h-0"
        }`}
        onClick={handleDeleteClick}
        onTouchStart={handleDeleteClick}
      >
        <div className="item-center w-full h-full flex justify-center pt-[2px]">
          x
        </div>
      </button>
    </li>
  );
};

export default MyChoiceComponent;
