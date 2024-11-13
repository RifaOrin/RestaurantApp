import React, { useRef } from "react";
import { FoodItems } from "../mockData/FoodItems";
import bellPepper from "../images/capsicum.png";
import TitleSubtitle from "./TitleSubtitle.jsx";
import LeftRightArrowButton from "./LeftRightArrowButton.jsx";

function PopularFood() {
  const scrollRef = useRef(null);
  const cardWidth = 280;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo =
        direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="relative py-10 lg:py-16 bg-pink">
      <div className="container flex justify-between items-center mb-6">
        <TitleSubtitle
          subtitle={"Crispy, Every Bite Taste"}
          title={"Popular food items"}
        />

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

      <div className="container">
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-scroll md:overflow-x-auto scrollbar-hide"
        >
          {FoodItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-sm flex-shrink-0 w-[260px] p-4 text-center mb-3"
            >
              <div className="h-30 flex justify-center items-center">
                <img
                  src={item.foodImage}
                  alt={item.title}
                  className="w-30 h-25 object-cover m-3"
                />
              </div>
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

      <img
        src={bellPepper}
        alt="Decorative bell pepper"
        className="absolute hidden lg:block left-[-1px] bottom-[10rem] w-[6rem] h-[10rem]"
      />
    </div>
  );
}

export default PopularFood;
