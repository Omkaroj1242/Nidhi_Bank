import React from 'react'
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero"
import Footer from '../Footer/Footer';
import Features from '../Features/Features';
import Team from '../Team/Team';
import Blog from '../Blog/Blog';
import Testimonials from '../Testimonials/Testimonials';

const Page = () => {
    return (
        <div>
           <Navbar /> 
           <Hero />
           <Features />
           <Testimonials />
           <Blog />
          <Team/>
           <Footer />
        </div>
    )
}

export default Page;
