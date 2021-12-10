import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="relative bg-gray-100 pt-8 pb-6 bg-blue-500">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap text-left lg:text-left">
            <div class="w-full lg:w-6/12 px-4">
              <h3 className="text-3xl text-black font-myFont py-1">
                Manmandir Bank
              </h3>
              <h4 class="text-3xl  text-blue-400 font-myFont py-1">
                Let's keep in touch!
              </h4>
              <h5 class="text-lg mt-0 mb-2 text-blue-700 font-myFont py-1">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="flex flex-wrap items-top mb-6">
                <div class="w-1/2 lg:w-4/12 px-4 ml-auto">
                  <span class="block uppercase text-blue-400 text-sm font-semibold pb-6">
                    Useful Links
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        class="text-blue-700 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="."
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blue-700 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blue-700 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="w-1/2 lg:w-4/12 px-4">
                  <span class="block uppercase text-blue-400 text-sm font-semibold pb-6">
                    Other Resources
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        class="text-blue-700 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blue-700 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blue-700 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="w-1/2 lg:w-4/12 px-4">
                  <span class="block uppercase text-blue-400 text-sm font-semibold pb-6">
                   Social Media 
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        class="text-blue-700 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        <i className="fab fa-facebook-f"></i> Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blue-700 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        <i className="fab fa-twitter"></i> Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blue-700 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        <i className="fab fa-instagram"></i> Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blue-700 hover:text-blue-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        <i className="fab fa-youtube"></i>YouTube
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 mx-auto text-center">
              <div class="text-sm text-blue-700 font-semibold py-10 ">
                Copyright © <span id="get-current-year">2021</span>
                <a
                  href="/"
                  class="text-blue-500 hover:text-gray-800"
                  target="_blank"
                />{" "}
                5TechG by
                <a
                  href="https://www.creative-tim.com?ref=njs-profile"
                  class="text-blue-700 hover:text-blue-800"
                >
                  {" "}
                  Creative Teams
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
