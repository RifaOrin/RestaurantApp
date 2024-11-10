import React from "react";
import Button from "./Button";
import phoneIcon from "../images/call.png";

function About() {
  return (
    <div className="space-y-4">
      {/* Title and Subtitle */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-[400] text-black font-bebas">
        Exceptional culinary experience and delicious food
      </h1>
      <p className="text-[#333333] text-sm xl:text-base text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed
        est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum
        viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit
        do eiusmod tempor incididunt ut labore et dolore magna minim veniam
        nostrud exercitation.
      </p>

      {/* Button and Phone Number */}
      <div className="flex items-center gap-4 mt-4">
        <Button text={"about more"} />
        {/* Phone Section with Icon */}
        <div className="flex items-center gap-2">
          <img src={phoneIcon} alt="phone icon" className="w-5 h-5" />
          <p className="text-sm xl:text-base text-justify font-semibold text-black flex items-center">
            +88 3426 739 485
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
