import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function LeftRightArrowButton({
  onClick,
  direction,
  className = "",
  size = 24,
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-200 p-2 ${className}`}
    >
      {direction === "left" ? (
        <FiChevronLeft size={size} />
      ) : (
        <FiChevronRight size={size} />
      )}
    </button>
  );
}

export default LeftRightArrowButton;
