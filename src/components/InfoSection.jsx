import React, { useState } from "react";
import About from "./About";
import burger from "../images/burgerImage.png";

function InfoSection() {
  const [activeTab, setActiveTab] = useState("About");
  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-8 py-10 lg:py-16 relative">
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
  );
}
export default InfoSection;
