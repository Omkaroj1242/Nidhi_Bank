import React from "react";
import Carousel from "react-bootstrap/Carousel";

const About_us = () => {
  return (
    <div>
      <div className="">
        <Carousel className="mb-12">
          <Carousel.Item className="w-full ">
            <img
              className="flex justify-center items-center mx-auto my_bg"
              src="https://dummyimage.com/1800x600/000/fff"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="flex justify-center items-center mx-auto my_bg"
              src="https://dummyimage.com/1800x600/000/fff"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="flex justify-center items-center mx-auto my_bg"
              src="https://dummyimage.com/1800x600/000/fff"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="History ">
        <h1 className="text-center text-6xl text-blue-400 pt-10">History</h1>

        <div class="max-w-screen-xl p-4  mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
          <div class="relative">
            <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div class="lg:col-start-2 lg:max-w-2xl ml-auto">
                <p class="text-base leading-6 font-semibold uppercase">
                  Interactive
                </p>
                <h4 class="mt-2 text-2xl leading-8 font-myFont text-blue-600 sm:text-3xl sm:leading-9">
                  Interactivity between team members is the key of the success.
                </h4>
                <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                  Build a simply and powered collaborative space for all your
                  team. Track, share, measure, you have a fully control,
                  it&#x27;s never be simply and efficient.
                </p>
                <ul class="mt-8 md:grid md:grid-cols-2 gap-6">
                  <li class="mt-6 lg:mt-0">
                    <div class="flex">
                      <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full text-blue-700">
                        <svg
                          class="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span class="ml-4 text-base leading-6 font-medium text-blue-700">
                        Live modifications
                      </span>
                    </div>
                  </li>
                  <li class="mt-6 lg:mt-0">
                    <div class="flex">
                      <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full text-blue-700">
                        <svg
                          class="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span class="ml-4 text-base leading-6 font-medium text-blue-700">
                        Data tracker
                      </span>
                    </div>
                  </li>
                  <li class="mt-6 lg:mt-0">
                    <div class="flex">
                      <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full text-blue-700">
                        <svg
                          class="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span class="ml-4 text-base leading-6 font-medium text-blue-700">
                        24/24 support
                      </span>
                    </div>
                  </li>
                  <li class="mt-6 lg:mt-0">
                    <div class="flex">
                      <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full text-blue-700">
                        <svg
                          class="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span class="ml-4 text-base leading-6 font-medium text-blue-700">
                        Free tips to improve work time
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                <div class="relative space-y-4">
                  <div class="flex items-end justify-center lg:justify-start space-x-4">
                    <img
                      class="rounded-lg shadow-lg w-32 md:w-56"
                      width="200"
                      src="https://dummyimage.com/500x400/000/fff"
                      alt="1"
                    />
                    <img
                      class="rounded-lg shadow-lg w-40 md:w-64"
                      width="260"
                      src="https://dummyimage.com/500x400/000/fff"
                      alt="2"
                    />
                  </div>
                  <div class="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                    <img
                      class="rounded-lg shadow-lg w-24 md:w-40"
                      width="170"
                      src="https://dummyimage.com/500x400/000/fff"
                      alt="3"
                    />
                    <img
                      class="rounded-lg shadow-lg w-32 md:w-56"
                      width="200"
                      src="https://dummyimage.com/500x400/000/fff"
                      alt="4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-blue-800 shadow py-4 my-8 ">
          <p class="text-center text-3xl font-bold text-blue-600 py-6">
            Founding Member
          </p>
          <div class="flex flex-col md:flex-row justify-evenly">
            <div class="bg-white p-5 shadow text-blue-300 rounded-lg mb-4 mx-4">
              <div class="text-center mb-4 opacity-90">
                <a href="#" class="block relative">
                  <img
                    alt="profile"
                    src="https://picsum.photos/200"
                    class="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div class="text-center">
                <p class="text-2xl text-black">Patrick Sebastien</p>
                <p class="text-xl text-blue-500 font-myFont">
                  Managing
                  <br />
                  Director
                </p>
              </div>
            </div>
            <div class="bg-white p-5 shadow text-blue-300 rounded-lg mb-4 mx-4">
              <div class="text-center mb-4 opacity-90">
                <a href="#" class="block relative">
                  <img
                    alt="profile"
                    src="https://picsum.photos/200"
                    class="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div class="text-center">
                <p class="text-2xl text-black">Jean Castux</p>
                <p class="text-xl text-blue-500 font-myFont">CEO</p>
              </div>
            </div>
            <div class="bg-white p-5 shadow text-blue-300 rounded-lg mb-4 mx-4">
              <div class="text-center mb-4 opacity-90">
                <a href="#" class="block relative">
                  <img
                    alt="profile"
                    src="https://picsum.photos/200"
                    class="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div class="text-center">
                <p class="text-2xl text-black">Thierry Halliday</p>
                <p class="text-xl text-blue-500 font-myFont">Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_us;
