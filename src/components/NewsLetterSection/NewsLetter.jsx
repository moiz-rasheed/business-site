import React from "react";
import { Container } from "../index";

function NewsLetter() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?cs=srgb&dl=pexels-fauxels-3184360.jpg&fm=jpg&w=1280&h=853"
          alt="Image"
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="relative z-10 bg-gray-800 bg-opacity-50">
        <Container>
          <div className="flex justify-center lg:justify-start py-14 lg:py-20">
            <div className="bg-white max-w-lg rounded-lg flex flex-col items-center px-8 py-10 sm:py-14">
              <p className="text-2xl font-medium text-blue-950 text-center mb-4">
                Sign up to our newsletter
              </p>
              <p className="text-gray-500 text-xs leading-loose text-center mb-6">
                Sign up to receive news and updates. Each week we'll send you a
                summary of the latest articles. Keep an eye on your inbox!
              </p>
              <form className="w-full sm:w-[80%] flex">
                <input
                  className="text-xs border focus:border-[#2ed47e] duration-500 rounded w-full p-4 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-[#2ed47e] hover:bg-[#27be70] duration-200 text-white text-2xl ml-2 px-3 pt-2 rounded">
                  <ion-icon name="send-sharp"></ion-icon>
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default NewsLetter;
