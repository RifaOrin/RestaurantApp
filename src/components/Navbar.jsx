import React, { useState } from "react";
import { NavbarMenu } from "../mockData/Data";
import logo from "../images/Frame.png";
import restaurantText from "../images/Restaurant.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ResponsiveMenu from "./ResponsiveMenu";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-6">
          {/* Logo and Menu Section */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="logo"
                className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
              />
              <img
                src={restaurantText}
                alt="restaurant-text"
                className="h-4 sm:h-5 pr-5"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <ul className="flex items-center text-white gap-1 lg:gap-3">
                {NavbarMenu.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-yellow font-medium capitalize text-sm md:text-base transition duration-200"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Button Section */}
          <div className="flex items-center hidden md:block">
            <Button text={"Book a table"} />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden" onClick={toggleMenu}>
            <MenuIcon className="text-4xl text-white" />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <ResponsiveMenu open={isOpen} />
    </>
  );
}

export default Navbar;
