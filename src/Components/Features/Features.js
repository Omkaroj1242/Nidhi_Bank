import React from "react";

const Features = () => {
  const bankFeatures = [
    {
      id: 1,
      img: "https://img.icons8.com/external-itim2101-lineal-itim2101/64/000000/external-insurance-insurance-itim2101-lineal-itim2101-2.png",
      feature: "Deposit Insurance Cover",
      desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
    },
    {
      id: 2,
      img:"https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-bank-taxes-flatart-icons-solid-flatarticons.png",
      feature: "Core Banking Facility",
      desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
    },
    {
      id: 3,
      img:"https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-bull-market-stock-market-wanicon-lineal-wanicon.png",
      feature: "RTGF And NEFT Facility",
      desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
    },
    {
      id: 4,
      img:"https://img.icons8.com/dotty/80/000000/sms.png",
      feature: "SMS Facility",
      desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
    },
    {
      id: 5,
      img:"https://img.icons8.com/external-soft-fill-juicy-fish/80/000000/external-clearing-financial-services-soft-fill-soft-fill-juicy-fish.png",
      feature: "CTS Clearing",
      desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
    },
    {
      id: 6,
      img:"https://img.icons8.com/dotty/80/000000/data-protection.png",
      feature: "Bank's Own Data Center DR Site",
      desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
    },
    {
      id: 7,
      img:"https://img.icons8.com/external-itim2101-lineal-itim2101/100/000000/external-credit-card-finance-itim2101-lineal-itim2101.png",
      feature: "APBS & DBTL Service ATM Card Facility",
      desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
    },
    {
      id: 8,
      img:"https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-income-ecommerce-justicon-lineal-justicon.png",
      feature: ".5% extra interest rate on Senior Citizen Deposits",
      desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
    },
    {
      id: 9,
      img:"https://img.icons8.com/external-itim2101-lineal-itim2101/64/000000/external-deposit-money-and-economy-itim2101-lineal-itim2101.png",
      feature: "Facility to pay monthly quarterly interest on the deposit",
      desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
    },
    {
      id: 10,
      img:"https://img.icons8.com/ios/50/000000/discount--v1.png",
      feature: "Attractive interest rates on deposit loans",
      desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
    },
    {
      id: 11,
      img:"https://img.icons8.com/ios/50/000000/baggage-lockers.png",
      feature: "Locker facility in all branches",
      desc: "Encompassing today’s website design technology to integrated and build solutions relevant to your business.",
    },
  ];

  return (
    <div className="my-8 mb-10">
      <h1 className="text-blue-400 text-center text-6xl py-8">Features</h1>
      <div className="sm:flex flex-wrap justify-center items-center text-center mx-4 gap-8">
        {bankFeatures.map((data, id) => {
          return (
            <div
              key={id}
              className="w-full max-h-80  sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 border-border1 shadow-md rounded-lg dark:bg-gray-800"
            > 
              <img src={data.img} alt="" className="mx-auto" />
              <h3 className="text-2xl sm:text-xl text-blue-500 font-myFont py-3">
                {data.feature}
              </h3>
              <p className="text-md text-blue-700 font-normal py-4">
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
