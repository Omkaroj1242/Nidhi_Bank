import React, { useState } from "react";
import { CarouselData } from "./CarouselData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  console.log(nextSlide);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
      <>
    <section className="Carousel">
      {CarouselData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="Images" className="img_Slide" />
            )}
          </div>
        );
      })}
      <div className="icons flex">
        <div>
          <FaArrowAltCircleLeft className="left_Arrow" onClick={prevSlide} />
        </div>
        <div>
          <FaArrowAltCircleRight className="right_Arrow" onClick={nextSlide} />
        </div>
      </div>   
    </section>
    <hr /> 
    </>
  );
};

export default Carousel;
