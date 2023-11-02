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
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <Work />
      <Blogs />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
