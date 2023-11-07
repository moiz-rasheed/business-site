import React from "react";
import { AboutUsCard, Button, Container } from "../index";
import Image1 from "../../assets/Image1.jpg";
import Image2 from "../../assets/Image2.jpg";

function AboutUs() {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 lg:py-20">
          <div className="relative mx-10 sm:mx-24 md:mx-0">
            <img
              src={Image1}
              alt="Image"
              className="h-[80%] aspect-[4/3] object-cover rounded"
            />
            <img
              src={Image2}
              alt="Image"
              className="h-[75%] aspect-[1/1] object-cover absolute bottom-0 right-0 rounded"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 text-center md:text-start">
            <p className="text-[#1291ee]">About Us</p>
            <div>
              <h4 className="text-2xl font-medium mb-2 text-blue-950">
                Entrepreneur solutions
              </h4>
              <p className="text-gray-500 text-xs leading-loose mx-6 md:mx-0 lg:max-w-[90%]">
                We are a boutique consulting firm owned and operated by MBA
                candidates at CU Boulder. Whether your business is a growing
                startup or an established firm, our customized solutions and
                contemporary skills deliver results.
              </p>
            </div>
            <div>
              <Button />
            </div>
          </div>
        </div>
      </Container>
      <AboutUsCard />
    </div>
  );
}

export default AboutUs;
