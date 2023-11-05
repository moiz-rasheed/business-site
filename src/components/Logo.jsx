import React from "react";
import LogoSvg from "../assets/Logo.svg";

function Logo() {
  return (
    <div className="flex items-center text-white cursor-pointer">
      <img src={LogoSvg} alt="Logo" className="w-6" />
      <p className="ml-1 text-lg font-extralight">
        Your<span className="font-medium">Logo.</span>
      </p>
    </div>
  );
}

export default Logo;
