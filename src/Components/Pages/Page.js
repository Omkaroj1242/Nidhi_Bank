import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Blog from "../Blog/Blog";
import About from "../About/About";
import Faq from "../Faq/Faq";
import Contact from "../Contact/Contact";

const Page = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />

          <Route exact path="/about" element={<About />} />

          <Route path="/service" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </Router>
    </div>
  );
};

export default Page;
