import React from "react";
import Carousel from "react-bootstrap/Carousel";

const About = () => {
  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item className="w-full ">
            <img
              className="flex justify-center items-center mx-auto my_bg"
              src="https://dummyimage.com/1800x600/000/fff"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="flex justify-center items-center mx-auto my_bg"
              src="https://dummyimage.com/1800x600/000/fff"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="flex justify-center items-center mx-auto my_bg"
              src="https://dummyimage.com/1800x600/000/fff"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="History bg-gray-200">
        <h1 className="text-center md:text-5xl text-3xl text-blue-400 py-8 font-myFont">
          History
        </h1>

        <div className="max-w-screen-xl p-4  mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
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
                        <img class="rounded-lg shadow-lg w-32 md:w-56" width="200" src="https://dummyimage.com/600x400/000/fff" alt="1"/>
                        <img class="rounded-lg shadow-lg w-40 md:w-64" width="260" src="https://dummyimage.com/600x400/000/fff" alt="2"/>
                    </div>
                    <div class="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                        <img class="rounded-lg shadow-lg w-24 md:w-40" width="170" src="https://dummyimage.com/600x400/000/fff" alt="3"/>
                        <img class="rounded-lg shadow-lg w-32 md:w-56" width="200" src="https://dummyimage.com/600x400/000/fff" alt="4"/>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <div className="mb-8 mx-4">
          <div className="bg-white py-4 my-8">
            <p className="text-center md:text-5xl text-3xl text-blue-400 my-8 py-12 font-myFont">
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
                    <p className="text-2xl text-black">
                      Adv. Ajit Ashokrao Gaikwad
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
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
                    <p className="text-2xl text-black">
                      Chandrasekhar Jaysingrao Gaikwad
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Vice Chairman
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Cards in a row */}

              <div className="row mb-10 md:px-14 px-2">
                <div
                  className="col-lg-4 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member3.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-2xl text-black">
                      C.A. Laxman Kakasaheb Gaikwad
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Director
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member4.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-2xl text-black">
                      Adv. Prasad Shriram Waikar
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      {" "}
                      Director
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member5.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-2xl text-black">
                      Ramkumar Kishan Gaikwad
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Director
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Cards in a row */}

              <div className="row mb-10 md:px-14 px-2">
                <div
                  className="col-lg-4 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member6.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-2xl text-black">
                      Ramchandra Krishna Pawar
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Director
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member7.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-2xl text-black">
                      Siddheshwar Basvneppa Sangh
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Director
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member8.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-2xl text-black">
                      Shivaji Keshav Shitole
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Director
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mb-10 md:px-20 px-2">
                <div
                  className="col-lg-4 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member9.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-2xl text-black">
                      Pramod Keshav Dharmadhikari
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Director
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member10.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-2xl text-black">
                      Dattatraya Baburao Tarlekar
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Director
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member11.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-2xl text-black">
                      Jyotiram Ramchandra Hogley
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Director
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mb-10">
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
                    <p className="text-2xl text-black">Vilas Sopan Khilare</p>
                    <p className="text-xl text-blue-500 font-myFont">
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
                    src="/Images/member13.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-2xl text-black">
                      Sangeeta Bapuso Gauraje
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">Hostess</p>
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
                    <p className="text-2xl text-black">
                      Rajshri Shankar Gaikwad
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">Hostess</p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/Images/member15.jpg"
                    alt=""
                    className="mx-auto object-cover rounded-lg h-48 w-40 "
                  />
                  <div className="text-center">
                    <p className="text-2xl text-black">
                      Suresh Raghunath Pawar
                    </p>
                    <p className="text-xl text-blue-500 font-myFont">
                      Chief manager
                    </p>
                  </div>
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
