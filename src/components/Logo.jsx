import React from "react";
import LogoSvg from "../assets/Logo.svg";

function Logo({ textColor = "text-white" }) {
  return (
    <div className={`flex items-center cursor-pointer ${textColor}`}>
      <img src={LogoSvg} alt="Logo" className="w-6" />
      <p className="ml-1 text-lg font-light">
        Your<span className="font-medium">Logo.</span>
      </p>
    </div>
  );
}

export default Logo;
