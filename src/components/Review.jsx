import React, { useRef } from "react";
import TitleSubtitle from "./TitleSubtitle.jsx";
import LeftRightArrowButton from "./LeftRightArrowButton.jsx";
import video from "../images/Video.png";
import profile from "../images/ProfileImage.png";
import parsley from "../images/parsley.png";
import tomato from "../images/tomato.png";
function Review() {
  const scrollRef = useRef(null);
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
    <div className="relative bg-white py-7 sm:py-10 lg:py-16">
      <div className="container py-3 lg:py-6 flex items-center justify-between">
        <TitleSubtitle
          title={"what some of my customers say"}
          subtitle={"Crispy, Every Bite Taste"}
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
      <div className="container flex flex-col lg:flex-row lg:flex-nowrap">
        <div className="w-full lg:w-2/5 bg-yellow flex flex-col items-center justify-center p-14 order-last lg:order-first">
          <p className="text-left text-sm xl:text-base 2xl:text-lg font-medium text-black font-serif">
            <span className="text-4xl text-black font-bold leading-none">
              {"\u201C"}
            </span>
            You can't go wrong with Chicken Mandi, I had it twice. The chicken
            was cooked perfectly, juicy & soft (usually mandi chicken is a bit
            dry). I would definitely recommend it.
          </p>

          <div className="mt-10 lg:mt-20 flex items-center justify-between w-full border-b border-black pb-3">
            <div>
              <h2 className="uppercase font-bebas text-black text-base xl:text-lg">
                Khalid Al Dawsry
              </h2>
              <p className="capitalize text-xs xl:text-sm text-black font-[400]">
                Jeddah, Saudi
              </p>
            </div>
            <div className="relative">
              <img
                src={profile}
                alt="profile"
                className="w-8 h-8 xl:w-10 xl:h-10 rounded-full ml-4"
              />
              <div className="absolute left-[15px] bottom-[-16px] w-8 h-0.5 bg-red"></div>
            </div>
          </div>
        </div>

        <div
          className="w-full lg:w-3/5 bg-cover bg-center order-first lg:order-last"
          style={{
            backgroundImage: `url(${video})`,
            minHeight: "24rem",
          }}
        ></div>
      </div>
      <img
        src={parsley}
        alt="parsley"
        className="absolute hidden lg:block right-[-1px] bottom-[1rem] w-[8rem] h-[19rem]"
      />
      <img
        src={tomato}
        alt="tomato"
        className="absolute hidden lg:block left-[-1px] top-[10rem] w-[5rem] h-[9rem]"
      />
    </div>
  );
}

export default Review;
