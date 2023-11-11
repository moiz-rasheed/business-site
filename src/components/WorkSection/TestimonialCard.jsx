import React from "react";

function TestimonialCard({ photo, name, about, review }) {
  return (
    <div className="bg-white hover:bg-gray-800 group duration-200 max-w-xl rounded-lg border hover:border-gray-800 p-6 flex flex-col items-center cursor-pointer">
      <div className="flex items-center w-full my-4">
        <div className="h-16 w-16 overflow-hidden rounded-full">
          {/* Profile image below */}
          <img
            src={photo}
            alt="Image"
            className="h-full w-full scale-125 object-cover object-top rounded-full"
          />
        </div>
        <div className="ml-3 text-sm">
          {/* Name starts */}
          <p className="font-semibold text-blue-950 group-hover:text-white">
            {name}
          </p>
          {/* Name ends */}

          {/* Designation starts */}
          <p className="font-light text-gray-500 group-hover:text-white">
            {about}
          </p>
          {/* Designation ends */}
        </div>
      </div>

      {/* Reviews/Message starts */}
      <p className="font-light italic text-gray-500 group-hover:text-white leading-normal my-4">
        {review}
      </p>
      {/* Reviews/Message ends */}

      {/* Bottom icon starts */}
      <div className="text-gray-200 group-hover:text-white text-5xl">
        <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
      </div>
      {/* Bottom icon ends */}
    </div>
  );
}

export default TestimonialCard;
