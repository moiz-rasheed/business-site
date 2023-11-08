import React from "react";
import { ButtonOutline, Container, WorkCard } from "../index";

function Work() {
  const WorkCardData = [
    {
      URL: "https://images.pexels.com/photos/11953866/pexels-photo-11953866.jpeg?cs=srgb&dl=pexels-dlxmediahu-11953866.jpg&fm=jpg&w=640&h=427",
      title: "Photography",
    },
    {
      URL: "https://framerusercontent.com/images/gAVTFIwqgZ2psWWsW6YX8pmZDbw.webp",
      title: "UI Design",
    },
    {
      URL: "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?cs=srgb&dl=pexels-vlada-karpovich-4050291.jpg&fm=jpg&w=640&h=427",
      title: "Software Development",
    },
    {
      URL: "https://images.pexels.com/photos/3747266/pexels-photo-3747266.jpeg?cs=srgb&dl=pexels-polina-zimmerman-3747266.jpg&fm=jpg&w=640&h=960",
      title: "Graphic Design",
    },
    {
      URL: "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?cs=srgb&dl=pexels-anna-nekrashevich-6802049.jpg&fm=jpg&w=640&h=1138",
      title: "Marketing",
    },
    {
      URL: "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?cs=srgb&dl=pexels-edmond-dant%C3%A8s-4342352.jpg&fm=jpg&w=640&h=960",
      title: "Management",
    },
  ];
  return (
    <div className="py-14 lg:py-20 flex flex-col items-center bg-[#f9faff]">
      <Container>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-medium text-center text-blue-950 max-w-xl px-4 sm:px-0">
            Our work — digital marketing case studies
          </p>
          <p className="text-gray-500 text-xs leading-loose text-center max-w-lg pt-3 px-4 sm:px-0 mb-14">
            We work with forward-looking organizations who understand that
            joining the global startup economy is key to drive innovation and
            spur economic growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WorkCardData.map((w) => (
              <div key={w.title}>
                <WorkCard URL={w.URL} title={w.title} />
              </div>
            ))}
          </div>
          <div className="mt-14">
            <ButtonOutline />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Work;
