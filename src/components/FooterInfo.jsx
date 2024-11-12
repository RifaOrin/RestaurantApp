import React from "react";

function FooterInfo(props) {
  const { image, title, info1, info2 } = props;
  return (
    <div className="flex flex-col gap-3 items-center text-center mt-5">
      <img src={image} alt="iconImage" className="w-5 h-5" />
      <h2 className="font-bebas font-[300] text-lg lg:text-xl text-white tracking-wide">
        {title}
      </h2>
      <div>
        <p className="text-duskyWhite text-xs xl:text-sm capitalize">{info1}</p>
        <p className="text-duskyWhite text-xs xl:text-sm ">{info2}</p>
      </div>
    </div>
  );
}
export default FooterInfo;
