import React from "react";
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Service from "../Service/Service";
import About from "../About/About";
import Faq from "../Faq/Faq";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Plan from "../Plan/Plan";
import Notice from "../Notice/Notice";

const Page = () => {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Hero />} />

          <Route exact path="/about" element={<About />} />

          <Route path="/service" element={<Service />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>

        <Footer />
      </HashRouter>
    </div>
  );
};

export default Page;
