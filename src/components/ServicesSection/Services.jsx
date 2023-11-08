import React from "react";
import { Button, Container } from "../index";
import Image3 from "../../assets/Image3.jpg";
import Image4 from "../../assets/Image4.jpg";

function Services() {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 lg:py-20">
          <div className="flex flex-col justify-center gap-4 text-center md:text-start">
            <p className="text-[#1291ee]">Explore Our Services</p>
            <div>
              <h4 className="text-2xl font-medium leading-normal mb-2 mx-6 md:mx-0 text-blue-950">
                We offer a wide range of crucial business and strategic
                development
              </h4>
              <p className="text-gray-500 text-xs leading-loose mx-6 md:mx-0">
                Our process begins with a collaborative and holistic assessment
                to gain a robust understand of you, your business and key
                stakeholders. We will explore your business problems and needs
                co-creatively.
              </p>
            </div>
            <div>
              <Button name="Discover" />
            </div>
          </div>
          <div className="relative flex items-end justify-end mx-10 sm:mx-24 md:mx-0">
            <img
              src={Image3}
              alt="Image"
              className="h-[75%] aspect-[1/1] object-cover absolute top-0 left-0 rounded"
            />
            <img
              src={Image4}
              alt="Image"
              className="h-[80%] aspect-[4/3] object-cover rounded"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Services;
