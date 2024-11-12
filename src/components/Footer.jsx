import React from "react";
import restaurant from "../images/restaurant.jpg";
import clock from "../images/clock.png";
import phone from "../images/phone.png";
import message from "../images/message.png";
import location from "../images/location.png";
import FooterInfo from "./FooterInfo.jsx";

function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${restaurant})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-pureBlack opacity-80"></div>

      {/* Footer Content */}
      <div className="container py-7 sm:py-10 lg:py-16 relative z-10 flex items-center justify-center h-full text-white">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-[400] font-bebas text-white tracking-wide">
            we ready to have you the best dining experiences
          </h2>
          <div className="mt-7 lg:mt-12 flex flex-col lg:flex-row gap-6 lg:gap-12">
            <FooterInfo
              image={clock}
              title={"opening hours"}
              info1={"monday - sunday"}
              info2={"9:00 AM to 11:30 AM"}
            />
            <FooterInfo
              image={phone}
              title={"let's talk"}
              info1={"Phone: 1-800-222-4545"}
              info2={"Fax: 1-800-222-4545"}
            />
            <FooterInfo
              image={message}
              title={"book a table"}
              info1={"Email: demo@website.com"}
              info2={"Support: support@website.com"}
            />
            <FooterInfo
              image={location}
              title={"our address"}
              info1={"123 Stree New York City,"}
              info2={"United States Of America."}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
