import React, { useState } from "react";
import cutlery from "../images/Golden-cutlery.jpg";
import Button from "./Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Reservation() {
  const [startDate, setStartDate] = useState(null);
  return (
    <div
      className="min-h-screen bg-cover"
      style={{ backgroundImage: `url(${cutlery})` }}
    >
      <div className="container py-5 sm:py-10 lg:py-16 flex flex-col lg:flex-row items-start justify-start">
        <div className="w-full lg:w-1/2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red"></div>
            <p className="text-sm text-red flex items-center justify-center font-semibold">
              Book Now
            </p>
          </div>
          <h1 className="font-bebas uppercase text-2xl sm:text-3xl lg:text-4xl mt-3 mb-5 text-white">
            Book your table
          </h1>
          <p className="text-xs lg:text-sm text-white">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>

          <form className="mt-5 mb-3 w-full">
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="border focus:border-red focus:ring-0 rounded-sm bg-transparent px-5 py-2 border-white placeholder:text-white focus:outline-none text-left text-white text-sm 2xl:text-base"
              ></input>
              <input
                type="email"
                placeholder="Your Email"
                className="border focus:border-red focus:ring-0 rounded-sm bg-transparent px-5 py-2 border-white placeholder:text-white focus:outline-none text-left text-white text-sm 2xl:text-base"
              ></input>
            </div>
            <div className="mt-5 flex flex-col lg:flex-row gap-4">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Reservation Date"
                className="border w-full focus:border-red focus:ring-0 rounded-sm bg-transparent px-5 py-2 border-white placeholder:text-white focus:outline-none text-white text-sm 2xl:text-base"
              />

              <input
                type="number"
                placeholder="Total People"
                className="border rounded-sm bg-transparent px-5 py-2 border-white placeholder:text-white focus:outline-none text-left text-white text-sm 2xl:text-base focus:border-red focus:ring-0"
              ></input>
            </div>
            <textarea
              placeholder="Message"
              className="mt-5 w-full h-32 resize-none border rounded-sm bg-transparent px-5 py-2 border-white placeholder:text-white focus:outline-none focus:border-red focus:ring-0 text-left text-white text-sm 2xl:text-base"
            />
          </form>
          <Button text={"Book Now"} />
        </div>
      </div>
      <div className="w-full lg:w-1/2"></div>
    </div>
  );
}

export default Reservation;
