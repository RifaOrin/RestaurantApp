import React, { useState } from "react";
import { NavbarMenu } from "../mockData/Data";
import logo from "../images/Frame.png";
import restaurantText from "../images/Restaurant.png";
import MenuIcon from "@mui/icons-material/Menu";
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
          <div className="flex items-center gap-2 lg:gap-6 2xl:gap-8">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="logo"
                className="h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-8"
              />
              <img
                src={restaurantText}
                alt="restaurant-text"
                className="h-4 xl:h-5"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <ul className="flex items-center text-white xl:gap-3">
                {NavbarMenu.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-2 lg:px-3 hover:text-yellow font-medium capitalize text-xs lg:text-sm xl:text-base 2xl:text-lg transition duration-200 font-raleway"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hidden md:block">
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
