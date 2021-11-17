import React from "react";

const About_us = () => {
  return (
    <>
      <div className="container mx-auto my-10">
        <div className="text-center">
          <h1 className="text-6xl font-myFont py-8 text-blue-600">About Us</h1>
        </div>
        <div className="flex items-center md:flex-row flex-col">
          <div className="w-1/2 mb-6">
              <a href="#" class="block">
                <div class="shadow-lg rounded-xl md:w-1/2 mx-auto p-4 overflow-hidden">
                  <p class="text-2xl text-blue-400 text-center font-light py-4">
                    Bank Progress
                  </p>
                  <hr className="opacity-10 mb-4" />
                  <div class="flex items-center justify-between text-gray-400 text-sm">
                    <p>Loan Service</p>
                    <p>5/5</p>
                  </div>
                  <div class="w-full h-2 bg-green-100 rounded-full mb-4">
                    <div class="w-1/3 h-full text-center text-xs text-white bg-green-400 rounded-full"></div>
                  </div>
                  <div class="flex items-center justify-between text-gray-400 text-sm">
                    <p>Consultants</p>
                    <p>4/5</p>
                  </div>
                  <div class="w-full h-2 bg-indigo-100 rounded-full mb-4">
                    <div class="w-2/3 h-full text-center text-xs text-white bg-indigo-400 rounded-full"></div>
                  </div>
                  <div class="flex items-center justify-between text-gray-400 text-sm">
                    <p>Customer Service</p>
                    <p>20</p>
                  </div>
                  <div class="w-full h-2 bg-blue-100 rounded-full mb-4">
                    <div class=" h-full text-center text-xs text-white rounded-full"></div>
                  </div>
                  <div class="flex items-center justify-between text-gray-400 text-sm">
                    <p>Awards Won</p>
                    <p>20</p>
                  </div>
                  <div class="w-full h-2 bg-pink-100 rounded-full">
                    <div class="w-full h-full text-center text-xs text-white bg-pink-400 rounded-full"></div>
                  </div>
                </div>
              </a>
          </div>
          <div className="md:w-1/2">
          <h1 className="text-4xl mb-4 font-myFont px-4 text-blue-400">Doing the right thing, at the right time.</h1>
            <p className="text-light text-sm font-myFont px-4">
              Welcome to the leading company on the market! Our success is
              driven by the highest quality customer service. We can meet the
              requirements even of the whimsical clients; there are no complex
              tasks for us! Thanks for your choice! Our company can boast the
              reputation of the trusted partner known worldwide. We are proud of
              the uncompromising quality of services
            </p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default About_us;
