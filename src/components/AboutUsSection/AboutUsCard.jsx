import React from "react";

function AboutUsCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center max-w-xs p-10 rounded-lg drop-shadow-lg bg-white hover:bg-gray-800 duration-200 cursor-pointer group">
      <div className="text-primary text-4xl mb-1 group-hover:text-white">
        <ion-icon name={`${icon}`}></ion-icon>
      </div>
      <p className="text-blue-950 group-hover:text-white font-semibold mb-3">
        {title}
      </p>
      <p className="text-gray-500 group-hover:text-white text-sm text-center leading-normal mb-8">
        {description}
      </p>
      <div className="text-sm font-semibold text-primary group-hover:text-white flex">
        <p>Learn more</p>
        <p className="mt-[-2px] pl-1 text-base">{">"}</p>
      </div>
    </div>
  );
}

export default AboutUsCard;
