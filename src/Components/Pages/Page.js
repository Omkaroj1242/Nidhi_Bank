import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Blog from "../Blog/Blog";
import About from "../About/About";
import Faq from "../Faq/Faq";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer"
import Plan from "../Plan/Plan";

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
          <Route path="/plan" element={<Plan />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Page;
