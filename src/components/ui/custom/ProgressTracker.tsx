import { useState } from "react";
const ProgressTracker = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Button to toggle the sliding div */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-12 right-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isOpen ? "Close" : "Open"}
      </button>

      {/* Sliding div */}
      <div
        className={`fixed bottom-0 w-full bg-red-500 transition-all duration-300 ease-in-out ${
          isOpen ? "h-40" : "h-0"
        } overflow-hidden`}
      >
        <div className="p-4 text-white">This is the sliding content.</div>
      </div>
    </div>
  );
};

export default ProgressTracker;
