import { ChoicePropsType } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "./card";
import { useEffect, useState } from "react";
import Draggable, { DraggableData } from "react-draggable";

const MyChoiceComponent = ({
  choice,
  i,
  handleDelete,
  activeCard,
  setActiveCard,
}: ChoicePropsType & {
  activeCard: number | null;
  setActiveCard: (cardIndex: number | null) => void;
}) => {
  const isActive = activeCard === i;

  // Initialize the drag position to {x: 0, y: 0} when card is not active.
  const [dragPosition, setDragPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // If this card is not the active card, reset its position
    if (!isActive) {
      setDragPosition({ x: 0, y: 0 });
    }
  }, [isActive]);

  const handleDragStop = (data: DraggableData) => {
    if (data.x < -20) {
      setActiveCard(i); // Mark this card as active
      setDragPosition({ x: -5, y: 0 }); // Fix position after dragging
    } else {
      setActiveCard(null); // Reset active card
      setDragPosition({ x: 0, y: 0 }); // Reset position
    }
  };

  const handleDeleteClick = (e: React.MouseEvent | React.TouchEvent) => {
    // Prevent dragging when the delete button is clicked or touched
    e.stopPropagation();
    handleDelete(i); // Delete the card
    setActiveCard(null); // Reset active card if a card is deleted
    setDragPosition({ x: 0, y: 0 }); // Reset the drag position
  };

  return (
    <li className="relative flex items-center">
      <Draggable
        axis="x"
        position={dragPosition}
        onStop={(_, data) => {
          handleDragStop(data);
        }}
        onStart={(e) => {
          // Prevent drag operation if the delete button is clicked
          if (e.target instanceof HTMLElement && e.target.closest("button")) {
            return false;
          }
        }}
      >
        {/* Main Card */}
        <div className={`flex flex-1 transition-transform duration-300`}>
          <Card className="w-full px-2 bg-red-500 flex">
            <CardHeader className="bg-blue-800 flex-1">
              <CardTitle>{choice}</CardTitle>
            </CardHeader>
            <CardContent className="flex bg-green-500 p-0 items-center">
              <p>Card Content</p>
            </CardContent>
          </Card>
        </div>
      </Draggable>
      <button
        className={`rounded-full text-sm text-white bg-red-500 transition-opacity duration-300 ${
          isActive
            ? "opacity-100 h-7 w-7 "
            : "opacity-0 pointer-events-none w-0 h-0"
        }`}
        onClick={handleDeleteClick} // Delete card on click
        onTouchStart={handleDeleteClick} // Handle touch on mobile
      >
        X
      </button>
    </li>
  );
};

export default MyChoiceComponent;
