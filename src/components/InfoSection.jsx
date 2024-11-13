import React, { useState } from "react";
import About from "./About";
import burger from "../images/burgerImage.png";
import bellPepper from "../images/bellPepper.png";
import { IconData } from "../mockData/IconData";

function InfoSection() {
  const [activeTab, setActiveTab] = useState("About");
  return (
    <div className="container py-10 lg:py-16 relative">
      <div className="flex flex-col lg:flex-row gap-8 pt-8 pb-10 lg:pb-16">
        {/* Left side: Food Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src={burger}
            alt="Delicious food"
            className="w-full max-w-full h-auto rounded-sm object-cover"
          />
        </div>
        {/* Right Side: Tab Component */}
        <div className="w-full lg:w-1/2 ">
          {/* Tabs */}
          <div className="flex mb-6 border-b-2 border-red">
            {["About", "Experience", "Contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 text-sm xl:text-base 2xl:text-lg font-semibold ${
                  activeTab === tab
                    ? "bg-red text-white"
                    : "text-black hover:bg-gray-200"
                } transition duration-200`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Tab Content */}
          <div>{activeTab === "About" && <About />}</div>
        </div>
      </div>
      <div className="flex flex-col items-start lg:items-center lg:flex-row lg:justify-between mt-8 w-full gap-6">
        {IconData.map((item, itemIndex) => {
          return (
            <div
              key={itemIndex}
              className="flex items-center space-x-4 sm:space-x-3 mb-4 sm:mb-0"
            >
              <div className="bg-white shadow-lg rounded-full p-2 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="w-6 h-6"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="font-[500] text-black font-bebas text-xl lg:text-2xl 2xl:text-3xl">
                  {item.title}
                </p>
                <p className="text-black font-inter text-xs lg:text-sm 2xl:text-base">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <img
        src={bellPepper}
        alt="Decorative bell pepper"
        className="absolute hidden lg:block right-[-28px] bottom-[8rem] w-[6rem] h-[10rem]"
      />
    </div>
  );
}
export default InfoSection;
