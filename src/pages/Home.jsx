import React from "react";
import {
  Header,
  HeroSection,
  AboutUs,
  Services,
  Work,
  Blogs,
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
      <Blogs />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
