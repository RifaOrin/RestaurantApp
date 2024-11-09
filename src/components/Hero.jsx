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
    <div className="relative overflow-x-hidden bg-red min-h-screen">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-10"
      />

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="container flex flex-col md:flex-row items-center justify-between relative z-20 py-10 md:py-16">
        {/* Left Section: Title, Subtitle, and Button */}
        <div className="relative w-full md:w-1/2 text-white text-center md:text-left mb-8 md:mb-0">
          {/* Title with Gradient Background */}
          <div className="relative w-full md:w-[500px] md:h-[150px] xl:w-[648px] xl:h-[205px] 2xl:w-[822px] 2xl:h-[228px] mx-auto md:mx-0">
            <img
              src={gradientBg}
              alt="gradient background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <h1 className="relative z-10 text-3xl sm:text-5xl md:text-6xl  xl:text-[5.7rem] 2xl:text-[6.7rem] font-[400] leading-tight sm:leading-none md:leading-none px-4 pt-6 pb-2 md:py-4 font-bebas">
              Taste the Authentic Saudi Cuisine
            </h1>
          </div>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base xl:text-xl px-4 xl:px-6 mb-4 md:mb-5">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>

          {/* Button */}
          <div className="mb-6 md:mb-0 px-4">
            <Button text={"Explore menu"} />
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          {/* Main Image */}
          <img
            src={foodImage}
            alt="right section image"
            className="w-[300px] h-[250px] sm:w-[536px] sm:h-[400px] lg:w-[580px] lg:h-[430px] object-cover"
          />

          {/* Slightly Larger Yellow Circle Background */}
          <div
            className="absolute bottom-[-14px] right-[-14px] w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-yellow rounded-full"
            aria-hidden="true" // Decorative for accessibility
          ></div>

          {/* Red-Bordered Circle Image Positioned on Top */}
          <img
            src={circleImage} // Path to the circle image with a red border
            alt="decorative circle"
            className="absolute bottom-[-10px] right-[-10px] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover"
          />

          {/* Flower Image at Top Right */}
          <img
            src={flowerImage} // Path to the flower image
            alt="decorative flower"
            className="absolute top-[-10px] right-[-10px] w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
