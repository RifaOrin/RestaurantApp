import React, { useState } from "react";
import About from "./About";
import burger from "../images/burgerImage.png";
import bellPepper from "../images/bellPepper.png";
import { IconData } from "../mockData/IconData";

function InfoSection() {
  const [activeTab, setActiveTab] = useState("About");
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row gap-8 py-10 lg:py-16 relative">
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
                className={`py-2 px-4 text-sm xl:text-base font-semibold ${
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
              {/* Icon with Circular Background and Shadow */}
              <div className="bg-white shadow-lg rounded-full p-2 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="w-8 h-8 lg:w-6 lg:h-6"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col gap-1">
                <p className="font-[500] text-black font-bebas text-2xl">
                  {item.title}
                </p>
                <p className="text-gray-600 text-sm">{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bell Pepper Image */}
      <img
        src={bellPepper}
        alt="Decorative bell pepper"
        className="absolute hidden lg:block right-[0px] bottom-[-40rem] w-[6rem] h-[10rem]"
      />
    </div>
  );
}
export default InfoSection;
