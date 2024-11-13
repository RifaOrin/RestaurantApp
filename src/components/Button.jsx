import React from "react";

function Button(props) {
  const { text } = props;
  return (
    <button className="bg-yellow uppercase font-bold border-yellow hover:text-white text-black text-xs lg:text-sm 2xl:text-base px-4 py-2 rounded-sm duration-200 ">
      {text}
    </button>
  );
}

export default Button;
