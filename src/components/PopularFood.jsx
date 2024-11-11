import React, { useRef } from "react";
import { FoodItems } from "../mockData/FoodItems";
import bellPepper from "../images/capsicum.png";
import TitleSubtitle from "./TitleSubtitle.jsx";
import LeftRightArrowButton from "./LeftRightArrowButton.jsx";

function PopularFood() {
  const scrollRef = useRef(null);

  // Function to scroll the carousel left or right
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen py-10 lg:py-16 bg-pink relative">
      {/* Container for title and navigation arrows on desktop */}
      <div className="container flex justify-between items-center mb-6">
        {/* Left Section: Title and Subtitle */}
        <TitleSubtitle
          subtitle={"Crispy, Every Bite Taste"}
          title={"Popular food items"}
        />
        {/* Right Section: Navigation Arrows on desktop */}
        <div className="hidden md:flex space-x-4">
          <LeftRightArrowButton
            onClick={() => scroll("left")}
            direction="left"
            className="text-black"
          />
          <LeftRightArrowButton
            onClick={() => scroll("right")}
            direction="right"
            className="text-red"
          />
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="container flex space-x-4 overflow-x-scroll md:overflow-x-auto scrollbar-hide"
      >
        {FoodItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-sm flex-shrink-0 w-60 p-4 text-center mb-3"
          >
            <img
              src={item.foodImage}
              alt={item.title}
              className="w-full h-[11rem] object-cover p-7"
            />
            <div className="my-2 w-12 h-0.5 bg-red mx-auto"></div>
            <h3 className="text-lg font-[500] text-black font-bebas">
              {item.title}
            </h3>
            <p className="text-xs text-black font-inter mb-3">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom navigation buttons for mobile */}
      <div className="flex justify-center space-x-4 mt-4 md:hidden">
        <LeftRightArrowButton
          onClick={() => scroll("left")}
          direction="left"
          className="text-black"
        />
        <LeftRightArrowButton
          onClick={() => scroll("right")}
          direction="right"
          className="text-red"
        />
      </div>
      {/* Bell Pepper Image */}
      <img
        src={bellPepper}
        alt="Decorative bell pepper"
        className="absolute hidden lg:block left-[-1px] bottom-[10rem] w-[6rem] h-[10rem]"
      />
    </div>
  );
}

export default PopularFood;
