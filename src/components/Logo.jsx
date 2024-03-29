import React from "react";

function Logo({ textColor = "text-white" }) {
  function LogoSVG() {
    return (
      <svg
        height="28"
        width="28"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-primary"
      >
        <title />
        <path d="M440.9,136.3a4,4,0,0,0,0-6.91L288.16,40.65a64.14,64.14,0,0,0-64.33,0L71.12,129.39a4,4,0,0,0,0,6.91L254,243.88a4,4,0,0,0,4.06,0Z" />
        <path d="M54,163.51A4,4,0,0,0,48,167V340.89a48,48,0,0,0,23.84,41.39L234,479.51a4,4,0,0,0,6-3.46V274.3a4,4,0,0,0-2-3.46Z" />
        <path d="M272,275v201a4,4,0,0,0,6,3.46l162.15-97.23A48,48,0,0,0,464,340.89V167a4,4,0,0,0-6-3.45l-184,108A4,4,0,0,0,272,275Z" />
      </svg>
    );
  }
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
