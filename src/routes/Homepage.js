import React from "react";
import {
  Collections,
  Features,
  Footer,
  Hero,
  News,
  Services,
  Sponsors,
  Story,
  Team,
  Testimonies,
} from "../components";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Sponsors />
      <Services />
      <Features />
      <Team />
      <Story />
      <News />
      <Collections />
      <Testimonies />
      <Footer />
    </>
  );
};

export default Homepage;
