import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Service from "../Service/Service";
import About from "../About/About";
import Faq from "../Faq/Faq";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Plan from "../Plan/Plan";
import Notice from "../Notice/Notice";
import Branch from "../Branch/Branch";

const Page = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/branch" element={<Branch />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Page;
