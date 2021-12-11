import React from "react";
import CarouselComp from "../Carousel/CarouselComp";
import Features from "../Features/Features";
import Testimonials from "../Testimonials/Testimonials";

import Branch from "../Branch/Branch";


const Hero = () => {
  return (
    <>
      <CarouselComp />
      <Branch />
      <Features />
      <Testimonials />
   
    </>
  );
};

export default Hero;
