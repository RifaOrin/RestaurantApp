import React from "react";

function Button(props) {
  const { text } = props;
  return (
    <button className="bg-yellow uppercase font-semibold border-yellow hover:text-white text-black text-xs lg:text-sm px-4 py-2 rounded-sm duration-200 hidden md:block">
      {text}
    </button>
  );
}

export default Button;
