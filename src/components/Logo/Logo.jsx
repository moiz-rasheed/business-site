import React from "react";
import LogoSVG from "./LogoSVG";

function Logo({ textColor = "text-white" }) {
  return (
    <div className={`flex items-center cursor-pointer ${textColor}`}>
      <LogoSVG />
      <p className="ml-1 text-lg font-light">
        Your<span className="font-medium">Logo.</span>
      </p>
    </div>
  );
}

export default Logo;
