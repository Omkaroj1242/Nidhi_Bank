import React from "react";
import Carousel from "react-bootstrap/Carousel";

const About = () => {
  return (
    <div>
      <div>
        <Carousel >
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

      <div className="History bg-gray-200">
        <h1 className="text-center md:text-6xl text-4xl font-myFont text-blue-400 pt-10">History</h1>

        <div className="max-w-screen-xl p-4  mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
          <div className="relative">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
                <p className="text-base leading-6 font-semibold uppercase">
                  Interactive
                </p>
                <h4 className="mt-2 text-2xl leading-8 font-myFont text-blue-600 sm:text-3xl sm:leading-9">
                  Interactivity between team members is the key of the success.
                </h4>
                <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                  Build a simply and powered collaborative space for all your
                  team. Track, share, measure, you have a fully control,
                  it&#x27;s never be simply and efficient.
                </p>
                <ul className="mt-8 md:grid md:grid-cols-2 gap-6">
                  <li className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full text-blue-700">
                        <svg
                          className="h-4 w-4"
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
                      <span className="ml-4 text-base leading-6 font-medium text-blue-700">
                        Live modifications
                      </span>
                    </div>
                  </li>
                  <li className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full text-blue-700">
                        <svg
                          className="h-4 w-4"
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
                      <span className="ml-4 text-base leading-6 font-medium text-blue-700">
                        Data tracker
                      </span>
                    </div>
                  </li>
                  <li className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full text-blue-700">
                        <svg
                          className="h-4 w-4"
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
                      <span className="ml-4 text-base leading-6 font-medium text-blue-700">
                        24/24 support
                      </span>
                    </div>
                  </li>
                  <li className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full text-blue-700">
                        <svg
                          className="h-4 w-4"
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
                      <span className="ml-4 text-base leading-6 font-medium text-blue-700">
                        Free tips to improve work time
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                <div className="relative space-y-4">
                  <div className="flex items-end justify-center lg:justify-start space-x-4">
                    <img
                      className="rounded-lg shadow-lg w-32 md:w-56"
                      width="200"
                      src="https://dummyimage.com/500x400/000/fff"
                      alt="1"
                    />
                    <img
                      className="rounded-lg shadow-lg w-40 md:w-64"
                      width="260"
                      src="https://dummyimage.com/500x400/000/fff"
                      alt="2"
                    />
                  </div>
                  <div className="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                    <img
                      className="rounded-lg shadow-lg w-24 md:w-40"
                      width="170"
                      src="https://dummyimage.com/500x400/000/fff"
                      alt="3"
                    />
                    <img
                      className="rounded-lg shadow-lg w-32 md:w-56"
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
        {/*  <div className="bg-blue-800 shadow py-4 my-8 ">
          <p className="text-center text-3xl font-bold text-blue-600 py-6">
            Founding Member
          </p>
          <div className="flex flex-col md:flex-row justify-evenly">
            <div className="bg-white p-5 shadow text-blue-300 rounded-lg mb-4 mx-4">
              <div className="text-center mb-4 opacity-90">
                <a href="#" className="block relative">
                  <img
                    alt="profile"
                    src="https://picsum.photos/200"
                    className="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div className="text-center">
                <p className="text-2xl text-black">Patrick Sebastien</p>
                <p className="text-xl text-blue-500 font-myFont">
                  Managing
                  <br />
                  Director
                </p>
              </div>
            </div>
            <div className="bg-white p-5 shadow text-blue-300 rounded-lg mb-4 mx-4">
              <div className="text-center mb-4 opacity-90">
                <a href="#" className="block relative">
                  <img
                    alt="profile"
                    src="https://picsum.photos/200"
                    className="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div className="text-center">
                <p className="text-2xl text-black">Jean Castux</p>
                <p className="text-xl text-blue-500 font-myFont">CEO</p>
              </div>
            </div>
            <div className="bg-white p-5 shadow text-blue-300 rounded-lg mb-4 mx-4">
              <div className="text-center mb-4 opacity-90">
                <a href="#" className="block relative">
                  <img
                    alt="profile"
                    src="https://picsum.photos/200"
                    className="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div className="text-center">
                <p className="text-2xl text-black">Thierry Halliday</p>
                <p className="text-xl text-blue-500 font-myFont">Manager</p>
              </div>
            </div>
          </div>
  </div> */}
        <div>
          <div classNameName="mb-8">
            <div className="bg-white shadow py-4 my-8">
              <p className="text-center md:text-6xl text-4xl font-bold text-blue-400 py-12 font-myFont">
                Existing Board Of Directors
              </p>
              {/* 2 Cards In A Row */}
              <div className="flex items-center flex-col md:flex-row justify-evenly my-8">
                <div className="p-4 shadow card_wrapper1 text-blue-300 rounded-lg mb-4">
                  <div className="text-center mb-4 opacity-90">
                    <a href="#" className="block relative">
                      <img
                        alt="profile"
                        src="https://dummyimage.com/300x200/000/fff"
                        className="mx-auto object-cover rounded-full h-40 w-40 "
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-black max-w-xs">
                      Adv. Ajit Ashokrao Gaikwad
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Chairman
                    </p>
                  </div>
                </div>
                <div className="p-4 shadow card_wrapper1 text-blue-300 rounded-lg mb-4">
                  <div className="text-center mb-4 opacity-90">
                    <a href="#" className="block relative">
                      <img
                        alt="profile"
                        src="https://dummyimage.com/300x200/000/fff"
                        className="mx-auto object-cover rounded-full h-40 w-40 "
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-black max-w-xs">
                      Chandrasekhar Jaysingrao Gaikwad
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Vice Chairman
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Cards In A Row */}

              <div className="flex items-center flex-col md:flex-row justify-evenly py-8">
                <div className="p-4 shadow card_wrapper1 text-blue-300 rounded-lg mb-4">
                  <div className="text-center mb-4 opacity-90">
                    <a href="#" className="block relative">
                      <img
                        alt="profile"
                        src="https://dummyimage.com/300x200/000/fff"
                        className="mx-auto object-cover rounded-full h-40 w-40 "
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-black max-w-xs">
                      C.A. Laxman Kakasaheb Gaikwad
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Director
                    </p>
                  </div>
                </div>
                <div className="p-4 shadow card_wrapper1 text-blue-300 rounded-lg mb-4">
                  <div className="text-center mb-4 opacity-90">
                    <a href="#" className="block relative">
                      <img
                        alt="profile"
                        src="https://dummyimage.com/300x200/000/fff"
                        className="mx-auto object-cover rounded-full h-40 w-40 "
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-black max-w-xs">
                      Adv. Prasad Shriram Waikar
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">CEO</p>
                    Director
                  </div>
                </div>
                <div className="p-4 shadow card_wrapper1 text-blue-300 rounded-lg mb-4">
                  <div className="text-center mb-4 opacity-90">
                    <a href="#" className="block relative">
                      <img
                        alt="profile"
                        src="https://dummyimage.com/300x200/000/fff"
                        className="mx-auto object-cover rounded-full h-40 w-40 "
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-black max-w-xs">
                      Ramkumar Kisan Gaikwad
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Director
                    </p>
                  </div>
                </div>
                <div className="p-4 shadow card_wrapper1 text-blue-300 rounded-lg mb-4">
                  <div className="text-center mb-4 opacity-90">
                    <a href="#" className="block relative">
                      <img
                        alt="profile"
                        src="https://dummyimage.com/300x200/000/fff"
                        className="mx-auto object-cover rounded-full h-40 w-40 "
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-black max-w-xs">
                      Ramkumar Kisan Gaikwad
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Director
                    </p>
                  </div>
                </div>
              </div>

              {/* 5 Cards In A Row */}

              <div className="flex mx-3 items-center flex-col md:flex-row justify-evenly py-8">
                <div className="p-2 shadow card_wrapper1 text-blue-300 rounded-lg mb-4">
                  <div className="text-center mb-4 opacity-90">
                    <a href="#" className="block relative">
                      <img
                        alt="profile"
                        src="https://dummyimage.com/300x200/000/fff"
                        className="mx-auto object-cover rounded-full h-40 w-40 "
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-black max-w-xs">
                      Siddheshwar Basvneppa Sangh
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Director
                    </p>
                  </div>
                </div>
                <div className="p-2 shadow card_wrapper1 text-blue-300 rounded-lg mb-4">
                  <div className="text-center mb-4 opacity-90">
                    <a href="#" className="block relative">
                      <img
                        alt="profile"
                        src="https://dummyimage.com/300x200/000/fff"
                        className="mx-auto object-cover rounded-full h-40 w-40 "
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-black max-w-xs">
                      Shivaji Keshav Shitole
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Director
                    </p>
                  </div>
                </div>
                <div className="p-2 shadow card_wrapper1 text-blue-300 rounded-lg mb-4">
                  <div className="text-center mb-4 opacity-90">
                    <a href="#" className="block relative">
                      <img
                        alt="profile"
                        src="https://dummyimage.com/300x200/000/fff"
                        className="mx-auto object-cover rounded-full h-40 w-40 "
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-black max-w-xs">
                      Pramod Keshav Dharmadhikari
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Director
                    </p>
                  </div>
                </div>
                <div className="p-2 shadow card_wrapper1 text-blue-300 rounded-lg mb-4">
                  <div className="text-center mb-4 opacity-90">
                    <a href="#" className="block relative">
                      <img
                        alt="profile"
                        src="https://dummyimage.com/300x200/000/fff"
                        className="mx-auto object-cover rounded-full h-40 w-40 "
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-black max-w-xs">
                      Dattatraya Baburao Tarlekar
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Director
                    </p>
                  </div>
                </div>
                <div className="p-2 shadow card_wrapper1 text-blue-300 rounded-lg mb-4">
                  <div className="text-center mb-4 opacity-90">
                    <a href="#" className="block relative">
                      <img
                        alt="profile"
                        src="https://dummyimage.com/300x200/000/fff"
                        className="mx-auto object-cover rounded-full h-40 w-40 "
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-black max-w-xs">
                      Jyotiram Ramchandra Hogley
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Director
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Cards In A Row */}

              <div className="flex items-center flex-col md:flex-row justify-evenly py-8">
                <div className="p-4 shadow card_wrapper1 text-blue-300 rounded-lg mb-4">
                  <div className="text-center mb-4 opacity-90">
                    <a href="#" className="block relative">
                      <img
                        alt="profile"
                        src="https://dummyimage.com/300x200/000/fff"
                        className="mx-auto object-cover rounded-full h-40 w-40 "
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-black max-w-xs">
                    Vilas Sopan Khilare
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                    Director
                    </p>
                  </div>
                </div>
                <div className="p-4 shadow card_wrapper1 text-blue-300 rounded-lg mb-4">
                  <div className="text-center mb-4 opacity-90">
                    <a href="#" className="block relative">
                      <img
                        alt="profile"
                        src="https://dummyimage.com/300x200/000/fff"
                        className="mx-auto object-cover rounded-full h-40 w-40 "
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-black max-w-xs">
                    Sangeeta Bapuso Gauraje
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                    Hostess
                    </p>
                  </div>
                </div>
                <div className="p-4 shadow card_wrapper1 text-blue-300 rounded-lg mb-4">
                  <div className="text-center mb-4 opacity-90">
                    <a href="#" className="block relative">
                      <img
                        alt="profile"
                        src="https://dummyimage.com/300x200/000/fff"
                        className="mx-auto object-cover rounded-full h-40 w-40 "
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-black max-w-xs">
                    Rajshri Shankar Gaikwad
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">Hostess</p>
                  </div>
                </div>
                <div className="p-4 shadow card_wrapper1 text-blue-300 rounded-lg mb-4">
                  <div className="text-center mb-4 opacity-90">
                    <a href="#" className="block relative">
                      <img
                        alt="profile"
                        src="https://dummyimage.com/300x200/000/fff"
                        className="mx-auto object-cover rounded-full h-40 w-40 "
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-black max-w-xs">
                    Suresh Raghunath Pawar
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">Chief manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;