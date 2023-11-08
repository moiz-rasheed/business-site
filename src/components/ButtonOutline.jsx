import React from "react";

function ButtonOutline({ name = "View All Works" }) {
  return (
    <button className="bg-white hover:bg-[#1291ee] border-2 border-[#1291ee] min-w-[8rem] duration-200 px-6 py-3 rounded-sm text-sm text-[#1291ee] hover:text-white">
      {name}
    </button>
  );
}

export default ButtonOutline;
