import React from 'react'

const Footer = () => {
    return (
        <div>
        <footer class="relative bg-gray-100 pt-8 pb-6">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap text-left lg:text-left">
              <div class="w-full lg:w-6/12 px-4">
                <h4 class="text-3xl fonat-semibold text-blue-400">Let's keep in touch!</h4>
                <h5 class="text-lg mt-0 mb-2 text-blue-700">
                  Find us on any of these platforms, we respond 1-2 business days.
                </h5>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="flex flex-wrap items-top mb-6">
                  <div class="w-full lg:w-4/12 px-4 ml-auto">
                    <span class="block uppercase text-blue-400 text-sm font-semibold mb-2">Useful Links</span>
                    <ul class="list-unstyled">
                      <li>
                        <a class="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                      </li>
                      <li>
                        <a class="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                      </li>
                      <li>
                        <a class="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
                      </li>
                    </ul>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <span class="block uppercase text-blue-400 text-sm font-semibold mb-2">Other Resources</span>
                    <ul class="list-unstyled">
                      <li>
                        <a class="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a class="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                      </li>
                      <li>
                        <a class="text-blue-600 hover:text-blue-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap items-center md:justify-between justify-center">
              <div class="w-full md:w-4/12 mx-auto text-center">
                <div class="text-sm text-blue-500 font-semibold mb-10">
                  Copyright © <span id="get-current-year">2021</span><a href="https://www.creative-tim.com/product/notus-js" class="text-blue-500 hover:text-gray-800" target="_blank" /> 5TechG by
                  <a href="https://www.creative-tim.com?ref=njs-profile" class="text-blue-500 hover:text-blue-800"> Creative Teams</a>.
                </div>
              </div>
            </div>
          </div>
        </footer> 
        </div>
    )
}

export default Footer;
