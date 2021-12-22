import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const CarouselComp = () => {
  return (
    <div>
    <Carousel className="carousel">
  <Carousel.Item className="w-full">
    <img
      className="flex justify-center items-center mx-auto my_bg img-fluid"
      src="/Images/poster1.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="flex justify-center items-center mx-auto my_bg  img-fluid"
      src="/Images/poster2.jpg"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="flex justify-center items-center mx-auto my_bg  img-fluid"
      src="/Images/poster3.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="flex justify-center items-center mx-auto my_bg  img-fluid"
      src="/Images/poster4.jpg"
      alt="Fourth slide"
    />
  </Carousel.Item>
   <Carousel.Item> 
    <img
      className="flex justify-center items-center mx-auto my_bg  img-fluid"
      src="/Images/poster5.jpg"
      alt="Fifth slide"
    />

  </Carousel.Item> 
  <Carousel.Item> 
    <img
      className="flex justify-center items-center mx-auto my_bg  img-fluid"
      src="/Images/poster6.jpg"
      alt="Sixth slide"
    />

  </Carousel.Item> 
</Carousel>
    </div>
  )
}

export default CarouselComp;
