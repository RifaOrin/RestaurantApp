import React from "react";
import Navbar from "./Navbar";
import bgImage from "../images/image2.png";
import foodImage from "../images/image1.png";
import gradientBg from "../images/gradientImage.png";
import flowerImage from "../images/Vector.png";
import circleImage from "../images/offer2.png";
import Button from "./Button";

function Hero() {
  return (
    <div className="relative overflow-x-hidden bg-red">
      <img
        src={bgImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-10"
      />

      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="container flex flex-col md:flex-row items-center justify-between relative z-20 py-7 md:py-10 lg:py-16">
        {/* Left Section: Title, Subtitle, and Button */}
        <div className="relative w-full md:w-1/2 text-white text-center md:text-left mb-8 md:mb-0">
          <div className="relative w-full md:w-[429px] lg:w-[500px] md:h-[150px] xl:w-[648px] xl:h-[205px] 2xl:w-[822px] 2xl:h-[228px] mx-auto md:mx-0">
            <img
              src={gradientBg}
              alt="gradient background"
              className="absolute inset-0 w-full h-full object-cover z-10"
            />
            <h1 className="relative z-10 text-3xl sm:text-5xl md:text-6xl lg:text-[4.3rem] xl:text-[5.7rem] 2xl:text-[6.7rem] font-[400] leading-tight sm:leading-none md:leading-none px-4 pt-6 pb-2 md:py-4 font-bebas">
              Taste the Authentic Saudi Cuisine
            </h1>
          </div>

          <p className="mt-4 text-sm sm:text-base xl:text-xl px-4 xl:px-6 mb-4 md:mb-5">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>

          <div className="mb-6 md:mb-0 px-4">
            <Button text={"Explore menu"} />
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <img
            src={foodImage}
            alt="right section image"
            className="w-full h-full sm:w-[536px] sm:h-[400px] lg:w-[580px] lg:h-[430px] object-cover"
          />

          <div
            className="absolute bottom-[-14px] right-[-14px] w-14 h-14  bg-yellow rounded-full"
            aria-hidden="true"
          ></div>

          <img
            src={circleImage}
            alt="decorative circle"
            className="absolute bottom-[-10px] right-[-10px] w-12 h-12  object-cover"
          />

          <img
            src={flowerImage}
            alt="decorative flower"
            className="absolute top-[-10px] right-[-10px] w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
