import React from "react";

const Features = () => {
  const bankFeatures = [
    {
      id: 1,
      feature: "Deposit Insurance Cover",
      desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
    },
    {
      id: 2,
      feature: " Core Banking Facility",
      desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
    },
    {
      id: 3,
      feature: "RTGF And NEFT Facility",
      desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
    },
    {
        id: 4,
        feature: "SMS Facility",
        desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
      },
      {
        id: 5,
        feature: "CTS Clearing",
        desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
      },
      {
        id: 6,
        feature: "Bank's Own Data Center DR Site",
        desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
      },
      {
        id: 7,
        feature: "APBS & DBTL Service ATM Card Facility",
        desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
      },
      {
        id: 8,
        feature: "0.50% extra interest rate on Senior Citizen Deposits",
        desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
      },
      {
        id: 9,
        feature: "Facility to pay monthly quarterly interest on the deposit",
        desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
      },
      {
        id: 10,
        feature: "Attractive interest rates on deposit loans",
        desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
      },
      {
        id: 10,
        feature: "Locker facility in all branches",
        desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
      },
  ];

  return (
    <div className="my-8">
      <h1 className="text-blue-600 text-center text-6xl">Features</h1>
      <div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
        {bankFeatures.map((data, id) => {
          return (
            <div
              key={id}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800"
            >
              <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                {data.feature}
              </h3>
              <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
                {data.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
