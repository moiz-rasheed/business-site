import React from "react";

function TestimonialCard({ photo, name, about, review }) {
  return (
    <div className="bg-white hover:bg-gray-800 group duration-200 max-w-xl rounded-lg border hover:border-gray-800 p-6 flex flex-col items-center">
      <div className="flex items-center w-full my-4">
        <div className="h-16 w-16 overflow-hidden rounded-full">
          <img
            src={photo}
            alt="Image"
            className="h-full w-full scale-125 object-cover object-top rounded-full"
          />
        </div>
        <div className="ml-3 text-sm">
          <p className="font-semibold text-blue-950 group-hover:text-white">
            {name}
          </p>
          <p className="font-light text-gray-500 group-hover:text-white">
            {about}
          </p>
        </div>
      </div>
      <p className="font-light italic text-gray-500 group-hover:text-white leading-normal my-4">
        {review}
      </p>
      <div className="text-gray-200 group-hover:text-white text-5xl">
        <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
      </div>
    </div>
  );
}

export default TestimonialCard;
