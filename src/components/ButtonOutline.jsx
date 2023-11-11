import React from "react";

function ButtonOutline({ name = "View All Works" }) {
  return (
    <button className="bg-white hover:bg-primary border-2 border-primary min-w-[8rem] duration-200 px-6 py-3 rounded-sm text-sm text-primary hover:text-white">
      {name}
    </button>
  );
}

export default ButtonOutline;
