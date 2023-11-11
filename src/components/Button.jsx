import React from "react";

function Button({
  name = "Get Started",
  bgColor = "bg-primary",
  bgColorHover = "hover:bg-primaryDark",
}) {
  return (
    <button
      className={`${bgColor} ${bgColorHover} min-w-[8rem] duration-200 px-6 py-3 rounded-sm text-sm text-white`}
    >
      {name}
    </button>
  );
}

export default Button;
