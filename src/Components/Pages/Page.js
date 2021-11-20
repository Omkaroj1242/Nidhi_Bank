import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Features from "../Features/Features";
import Team from "../Team/Team";
import Blog from "../Blog/Blog";
import Testimonials from "../Testimonials/Testimonials";
import About from "../About/About";
import CarouselComp from "../Carousel/Carousel";
import Faq from "../Faq/Faq";
import Contact from "../Contact/Contact";

const Page = () => {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/about">
    //       <About_us />
    //     </Route>
    //   </Switch>
    //   <Navbar />
    //   <Hero />
    //   <CarouselComp />
    //   <Features />
    //   <Testimonials />
    //   <Blog />
    //   <Team />
    //   <Footer />
    // </Router>
    // <>
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />

          <Route path="/about" element={<About />} />

          <Route path="/service" element={<Blog />} />
        </Routes>
      { /* <CarouselComp />
        <Testimonials />
        <Team />
      <Footer /> */}
      <Contact />
      </Router>
    </div>
  );
};

export default Page;
