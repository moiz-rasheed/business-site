import React from "react";
import { AboutUsCard, Button, Container } from "../index";

function AboutUs() {
  //Card data starts
  const cardData = [
    {
      icon: "laptop-outline",
      title: "Work with us",
      description:
        "Let us know how we can help! Get in touch, and we'll give you a fresh and valuable perspective on your business.",
    },
    {
      icon: "lock-closed-outline",
      title: "Our process",
      description:
        "After a collaborative assessment we'll explore your business problems and needs co-creatively.",
    },
    {
      icon: "help-buoy-outline",
      title: "How we help",
      description:
        "We provide business development, marketing, planning, operations and financial services.",
    },
  ];
  //Card data ends

  return (
    <div id="about">
      {/* Entrepreneur solutions starts*/}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 lg:py-20">
          <div className="relative mx-10 sm:mx-24 md:mx-0">
            {/* Left image here*/}
            <img
              src="https://images.pexels.com/photos/6140676/pexels-photo-6140676.jpeg?cs=srgb&dl=pexels-william-fortunato-6140676.jpg&fm=jpg&w=1280&h=853"
              alt="Image"
              className="h-[80%] aspect-[4/3] object-cover rounded"
            />

            {/* Right image here */}
            <img
              src="https://images.pexels.com/photos/7605201/pexels-photo-7605201.jpeg?cs=srgb&dl=pexels-mart-production-7605201.jpg&fm=jpg&w=640&h=427"
              alt="Image"
              className="h-[75%] aspect-[1/1] object-cover absolute bottom-0 right-0 rounded"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 text-center md:text-start">
            <p className="text-primary">About Us</p>
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
      {/* Entrepreneur solutions ends */}

      {/* About us cards usage starts */}
      <div className="py-14 lg:py-20 bg-[#f9faff]">
        <Container>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-medium text-center leading-normal text-blue-950 max-w-xl px-4 sm:px-0">
              We match your unique business needs with our deep understanding of
              freelancer behaviour
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cardData.map((c) => (
                <div key={c.title}>
                  <AboutUsCard
                    icon={c.icon}
                    title={c.title}
                    description={c.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      {/* About us cards usage ends */}
    </div>
  );
}

export default AboutUs;
