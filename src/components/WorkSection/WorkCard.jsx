import React from "react";

function WorkCard({ URL, title }) {
  return (
    <div className="aspect-[5/4] max-w-xs relative group cursor-pointer">
      <img
        src={URL}
        alt="Image"
        className="h-full w-full aspect-[5/4] rounded object-cover object-center"
      />
      <div className="absolute inset-0 rounded duration-200 group-hover:bg-primary group-hover:bg-opacity-90 text-white flex justify-center items-center flex-col">
        <p className="hidden group-hover:block">{title}</p>
        <div className="hidden group-hover:block mt-1 w-10 h-[0.11rem] bg-white"></div>
      </div>
    </div>
  );
}

export default WorkCard;
