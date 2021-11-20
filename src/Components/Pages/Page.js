import React  from 'react'
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero"
import Footer from '../Footer/Footer';
import Features from '../Features/Features';
import Team from '../Team/Team';
import Blog from '../Blog/Blog';
import Testimonials from '../Testimonials/Testimonials';
import Carousel from '../Carousel/Carousel';
import About_us from '../About_Us/About_us';
import CarouselComp from '../Carousel/Carousel';

const Page = () => {
    return (
        <div>
           <Navbar /> 
           <Hero />
           <About_us />
           <CarouselComp />
           <Features />
           <Testimonials />
           <Blog />
          <Team/>
           <Footer />
        </div>
    )
}

export default Page;
