import React from "react";
import { Container, Button } from "../index";
import CountUp from "react-countup";

function Innovations() {
  return (
    <div className="py-14 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/*text on left side starts here*/}
          <div className="flex flex-col justify-center gap-4 text-center md:text-start mb-4 md:mb-0">
            <p className="text-[#1291ee]">Innovation</p>
            <div>
              <h4 className="text-2xl font-medium leading-normal mb-2 mx-6 md:mx-0 text-blue-950">
                Enhancing startup success
              </h4>
              <p className="text-gray-500 text-xs leading-loose mx-6 md:mx-0">
                Which ecosystems should you care about? Where to invest next? In
                a technology-fueled global economy, our mission is to support
                forward- looking regions to catalyze their own startup
                ecosystems.
              </p>
            </div>
            <div className="mx-auto md:mx-0">
              <ul className="mt-1 mb-3 text-start list-disc list-inside text-gray-500 text-xs leading-loose mx-6 md:mx-0">
                <li>Create and manage any process for your business needs.</li>
                <li>Track your reports with our StartFlow audit trail.</li>
                <li>Full functionality without needed to install software.</li>
              </ul>
            </div>
            <div>
              <Button
                name="Learn More"
                bgColor="bg-[#2ed47e]"
                bgColorHover="hover:bg-[#27be70]"
              />
            </div>
          </div>
          {/*text on left side ends here*/}

          {/*circular shapes start here*/}
          <div className="max-w-sm min-w-[21rem] sm:min-w-[24rem] aspect-square justify-self-center md:justify-self-end">
            <div className="bg-[#e7f4fd] aspect-square h-full w-full rounded-full relative flex justify-center items-center">
              <div className="bg-[#a7d6f8] aspect-square h-[65%] w-[65%] rounded-full relative flex justify-center items-center">
                <div className="bg-[#1291ee] aspect-square h-[50%] w-[50%] rounded-full relative">
                  <div className="h-14 w-14 overflow-hidden rounded-full absolute top-[-0.3rem] left-[-0.3rem]">
                    <img
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg&w=640&h=960"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="h-14 w-14 overflow-hidden rounded-full absolute bottom-4 left-4">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/social-media-circle-6/1024/tinder-circle-512.png"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-14 w-14 overflow-hidden rounded-full absolute right-[-1.5rem]">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/web-design-development-ui-vol-4-3/96/Color_gradient_scale_shade_shading-512.png"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="h-14 w-14 overflow-hidden rounded-full absolute top-[-0.2rem] left-16">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/gradient-circle-blue/36/5049-512.png"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-14 w-14 overflow-hidden rounded-full absolute bottom-10 right-5">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/seo-development-2-2/48/83-512.png"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          {/*circular shapes end here*/}
        </div>

        {/*growth data starts here*/}
        <div className="flex flex-col sm:flex-row justify-center mt-14 lg:mt-20">
          <div className="flex flex-col items-center">
            <div className="text-3xl text-[#1291ee]">
              <ion-icon name="cube-outline"></ion-icon>
            </div>
            <p className="text-blue-950 font-medium text-5xl mt-2 mb-1">
              <CountUp end={410} duration={2} />
            </p>
            <p className="text-sm font-semibold uppercase text-blue-950">
              STARTUPS
            </p>
          </div>
          <div className="flex flex-col items-center my-8 sm:my-0 sm:mx-28">
            <div className="text-3xl text-[#1291ee]">
              <ion-icon name="chatbox-outline"></ion-icon>
            </div>
            <p className="text-blue-950 font-medium text-5xl mt-2 mb-1">
              <CountUp end={130} duration={2} />+
            </p>
            <p className="text-sm font-semibold uppercase text-blue-950">
              MEMBERS
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl text-[#1291ee]">
              <ion-icon name="analytics-outline"></ion-icon>
            </div>
            <p className="text-blue-950 font-medium text-5xl mt-2 mb-1">
              $<CountUp end={410} duration={2} />M
            </p>
            <p className="text-sm font-semibold uppercase text-blue-950">
              REVENUE
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Innovations;
