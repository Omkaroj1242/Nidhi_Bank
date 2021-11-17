import React from 'react'
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero"
import Footer from '../Footer/Footer';
import Features from '../Features/Features';
import Team from '../Team/Team';
import Blog from '../Blog/Blog';
import Testimonials from '../Testimonials/Testimonials';
import Carousel from '../Carousel/Carousel';
import { CarouselData } from '../Carousel/CarouselData';
import About_us from '../About_Us/About_us';

const Page = () => {
    return (
        <div>
           <Navbar /> 
           <Hero />
           <About_us />
           <Carousel  slides={CarouselData}/>
           <Features />
           <Testimonials />
           <Blog />
          <Team/>
           <Footer />
        </div>
    )
}

export default Page;
