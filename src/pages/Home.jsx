import React from "react";
import {
  Header,
  HeroSection,
  AboutUs,
  Services,
  Work,
  Innovations,
  NewsLetter,
  Footer,
} from "../components/index";

function Home() {
  return (
    <div className="font-poppins min-h-screen">
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <Work />
      <Innovations />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
