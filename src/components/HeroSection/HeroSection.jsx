import React from "react";
import { Container } from "../index";

function HeroSection() {
  return (
    <div
      id="hero"
      className="h-screen w-full flex items-center justify-center relative"
    >
      <div className="h-screen absolute inset-0">
        {/* Background image here */}
        <img
          src="https://unsplash.com/photos/dcL8ESbsGis/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk5NjU0NjA4fA&force=true&w=1920"
          alt="Landing Page Image"
          className="w-full h-full object-cover object-center brightness-50"
        />
      </div>
      <div className="text-white absolute inset-0 flex items-center justify-center">
        <Container>
          <p className="pr-20 mb-1 md:mb-2">
            We build products that helps businesses manage
          </p>
          <p className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
            Empowering startups and freelancers
          </p>

          {/* Button starts */}
          <div className="bg-primary hover:bg-primaryDark duration-200 inline-block p-3 md:p-4 rounded-full mt-2 md:mt-4 cursor-pointer">
            <div className="px-[0.4rem] md:px-2 pt-1 md:pt-2 mt-[0.08rem] md:mt-0 text-xl md:text-2xl">
              <ion-icon name="play-sharp"></ion-icon>
            </div>
          </div>
          {/* Button ends */}
        </Container>
      </div>
      <div className="text-white text-xl absolute bottom-6 animate-bounce">
        <ion-icon name="arrow-down-circle-outline"></ion-icon>
      </div>
    </div>
  );
}

export default HeroSection;
