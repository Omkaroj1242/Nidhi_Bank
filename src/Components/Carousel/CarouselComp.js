import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselComp = () => {
    return (
        <div>
            <Carousel className="carousel">
                <Carousel.Item className="w-full">
                    <img
                        className="flex justify-center items-center img-fluid"
                        src="Images/1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="flex justify-center items-center img-fluid"
                        src="Images/2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="flex justify-center items-center img-fluid"
                        src="Images/3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="flex justify-center items-center img-fluid"
                        src="Images/4.jpg"
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="flex justify-center items-center img-fluid"
                        src="Images/5.jpg"
                        alt="Fifth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="flex justify-center items-center img-fluid"
                        src="Images/6.jpg"
                        alt="Sixth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselComp;
