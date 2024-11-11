import React from "react";
function TitleSubtitle(props) {
  const { title, subtitle } = props;
  return (
    <div>
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-red"></div>
        <p className="text-xs lg:text-sm text-red flex items-center justify-center font-bold">
          {subtitle}
        </p>
      </div>
      <h1 className="font-bebas uppercase text-2xl sm:text-3xl lg:text-4xl mt-3 mb-5 text-black">
        {title}
      </h1>
    </div>
  );
}
export default TitleSubtitle;
