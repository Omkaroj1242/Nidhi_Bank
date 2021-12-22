import React from "react";
import Carousel from "react-bootstrap/Carousel";

const About = () => {
  return (
    <>
      <div>
        <Carousel className="carousel">
          <Carousel.Item className="w-full">
            <img
              className="flex justify-center items-center mx-auto my_bg img-fluid"
              src="/Images/poster1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="flex justify-center items-center mx-auto my_bg img-fluid"
              src="/Images/poster2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="flex justify-center items-center mx-auto my_bg img-fluid"
              src="/Images/poster3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="flex justify-center items-center mx-auto my_bg img-fluid"
              src="/Images/poster4.jpg"
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="flex justify-center items-center mx-auto my_bg img-fluid"
              src="/Images/poster5.jpg"
              alt="Fifth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="flex justify-center items-center mx-auto my_bg img-fluid"
              src="/Images/poster6.jpg"
              alt="Sixth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="History bg-gray-200">
        <h1 className="text-center md:text-5xl text-3xl text-blue-900 hover:text-blue-400 py-8 font-myFont">
          History
        </h1>
        
        <div className="max-w-screen-xl p-2  mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
          <div className="relative">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
                <p className="leading-6 md:text-3xl text-2xl font-myFont uppercase">
                  Interactive
                </p>
                <h4 className="mt-2 text-2xl leading-8 font-myFont text-gray-700 sm:text-xl sm:leading-9">
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
                      <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-lg text-blue-700">
                        <svg
                          className="h-10 w-10"
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
                      <span className="ml-4 text-lg leading-6 font-myFont text-blue-700">
                        Live modifications
                      </span>
                    </div>
                  </li>
                  <li className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-lg text-blue-700">
                        <svg
                          className="h-10 w-10"
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
                      <span className="ml-4 text-lg leading-6 font-myFont text-blue-700">
                        Data tracker
                      </span>
                    </div>
                  </li>
                  <li className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-lg text-blue-700">
                        <svg
                          className="h-10 w-10"
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
                      <span className="ml-4 text-lg leading-6 font-myFont text-blue-700">
                        24/24 support
                      </span>
                    </div>
                  </li>
                  <li className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-lg text-blue-700">
                        <svg
                          className="h-10 w-10"
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
                      <span className="ml-4 text-lg leading-6 font-myFont text-blue-700">
                        Free tips to improve work time
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                <div class="relative space-y-4">
                    <div class="flex items-end justify-center lg:justify-start space-x-4">
                        <img class="rounded-lg shadow-lg w-32 md:w-56" width="200" src="/Images/trail2.jpg" alt="1"/>
                        <img class="rounded-lg shadow-lg w-40 md:w-64" width="260" src="/Images/trail.jpg" alt="2"/>
                    </div>
                    <div class="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                        <img class="rounded-lg shadow-lg w-24 md:w-40" width="170" src="/Images/trail.jpg" alt="3"/>
                        <img class="rounded-lg shadow-lg w-32 md:w-56" width="200" src="/Images/map.jpg" alt="4"/>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <div className="mb-8 mx-4">
          <div className="bg-gray-200 py-2 my-8">
            <p className="text-center md:text-5xl text-3xl text-blue-900 my-8 py-2 font-myFont">
              Existing Board Of Directors
            </p>
            {/* 2 Cards In A Row */}
            <section id="pricing" className="pricing section-bg">
              <div className="row mb-10">
                <div
                  className="col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member1.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-xl text-black font-bold">
                      Adv. Ajit Ashokrao Gaikwad
                    </p>
                    <p className="text-xl text-blue-900 font-myFont">
                      Chairman
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member2.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-xl text-black font-bold">
                      Chandrasekhar Jaysingrao Gaikwad
                    </p>
                    <p className="text-xl text-blue-900 font-myFont">
                      Vice Chairman
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Cards in a row */}

              <div className="row mb-10 md:px-14 px-2">
                <div
                  className="col-lg-3 col-md-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member3.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-xl text-black font-bold">
                      C.A. Laxman Kakasaheb Gaikwad
                    </p>
                    <p className="text-xl text-blue-900 font-myFont">
                      Director
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member4.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-xl text-black font-bold">
                      Adv. Prasad Shriram Waikar
                    </p>
                    <p className="text-xl text-blue-900 font-myFont">
                      {" "}
                      Director
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member5.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-xl text-black font-bold">
                      Ramkumar Kishan Gaikwad
                    </p>
                    <p className="text-xl text-blue-900 font-myFont">
                      Director
                    </p>
                  </div>
                </div>
                
                <div
                  className="col-lg-3 col-md-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member6.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-xl text-black font-bold">
                      Ramchandra Krishna Pawar
                    </p>
                    <p className="text-xl text-blue-900 font-myFont">
                      Director
                    </p>
                  </div>
                </div>
              
              </div>

              {/* 4 Cards in a row */}
              <div className="row mb-10 md:px-14 px-2">
                <div
                  className="col-lg-3 col-md-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member7.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-xl text-black font-bold">
                      Siddheshwar Basvneppa Sangh
                    </p>
                    <p className="text-xl text-blue-900 font-myFont">
                      Director
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member8.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-xl text-black font-bold">
                      Shivaji Keshav Shitole
                    </p>
                    <p className="text-xl text-blue-900 font-myFont">
                      Director
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member9.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-xl text-black font-bold">
                      Pramod Keshav Dharmadhikari
                    </p>
                    <p className="text-xl text-blue-900 font-myFont">
                      Director
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member10.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-xl text-black font-bold">
                      Dattatraya Baburao Tarlekar
                    </p>
                    <p className="text-xl text-blue-900 font-myFont">
                      Director
                    </p>
                  </div>
                </div>

              </div>
              {/* 5 cards in row */}
              <div className="row mb-10 md:px-20 px-2">
                
                <div
                  className="col-lg-2 col-md-2"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member11.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-xl text-black font-bold">
                      Jyotiram Ramchandra Hogley
                    </p>
                    <p className="text-xl text-blue-900 font-myFont">
                      Director
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member12.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-xl text-black font-bold">Vilas Sopan Khilare</p>
                    <p className="text-xl text-blue-900 font-myFont">
                      Director
                    </p>
                  </div>
                </div>
                
                <div
                  className="col-lg-2 col-md-2"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member13.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-xl text-black font-bold">
                      Sangeeta Bapuso Gauraje
                    </p>
                    <p className="text-xl text-blue-900 font-myFont">Hostess</p>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member14.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-xl text-black font-bold">
                      Rajshri Shankar Gaikwad
                    </p>
                    <p className="text-xl text-blue-900 font-myFont">Hostess</p>
                  </div>
                </div>
                <div
                  className="col-lg-2 col-md-2"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member15.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-xl text-black font-bold">
                      Suresh Raghunath Pawar
                    </p>
                    <p className="text-xl text-blue-900 font-myFont">
                      Chief manager
                    </p>
                  </div>
                </div>
                <div className="row mb-10">
              </div>
              
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
