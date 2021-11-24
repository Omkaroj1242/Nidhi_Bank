import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const CarouselComp = () => {
  return (
    <div>
    <Carousel>
  <Carousel.Item className="w-full">
    <img
      className="flex justify-center items-center mx-auto my_bg"
      src="https://dummyimage.com/1800x600/000/fff"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="flex justify-center items-center mx-auto my_bg"
      src="https://dummyimage.com/1800x600/000/fff"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="flex justify-center items-center mx-auto my_bg"
      src="https://dummyimage.com/1800x600/000/fff"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default CarouselComp;
