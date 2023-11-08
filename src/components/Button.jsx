import React from "react";

function Button({ name = "Get Started" }) {
  return (
    <button className="bg-[#1291ee] hover:bg-[#0f83d7] min-w-[8rem] duration-200 px-6 py-3 rounded-sm text-sm text-white">
      {name}
    </button>
  );
}

export default Button;
