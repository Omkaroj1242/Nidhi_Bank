import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto flex lg:justify-center md:items-center lg:flex-row flex-col mb-16">
        <div className="lg:w-1/2">
          <div className="pt-6">
            <h1 className="md:text-4xl px-2 text-xl font-myFont text-blue-500 mb-4">
              Simple. Transparent. Secure
            </h1>
            <h1 className="md:text-6xl text-4xl px-2 font-myFont mb-4 text-blue-400">
              Banking Solutions
            </h1>
            <p className="text-blue-700  md:text-2xl px-2 text-base lg:w-2/3 mb-4">
              Products and services designed to help you reach your financial
              goals.
            </p>
          </div>
          <div className="pt-10">
            <a
              href="#"
              className="py-4 md:px-6 px-4 md:mx-4 mx-2 bg-blue-500 rounded-full font-myFont text-blue-300 hover:bg-blue-300 hover:text-blue-700 hover:border-black border transition-all"
            >
              Open Account
            </a>
            <a
              href="#"
              className="py-4 md:px-6 px-4 mx-2 bg-white border border-black rounded-full font-myFont text-blue-700 hover:bg-blue-500 hover:text-blue-300 hover:border-white transition"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="md:w-1/2 md:pt-16 pt-10">
          <img src="/Svg/bank1.svg" alt="bank" />
        </div>
      </div>
    </>
  );
};

export default Hero;