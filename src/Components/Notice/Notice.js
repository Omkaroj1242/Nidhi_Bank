import React from "react";
import { Link } from "react-router-dom";

const Notice = () => {
  return (
    <>
      <div className="bg-blue-400">
        <div>
          <ul className="py-2">
            <Link to="/">
              <li className="text-right text-white pr-4 font-myFont hidden md:block">
                www.manmandirbank.com
              </li>
            </Link>
            <Link to="/">
              <li className="text-right text-white pr-4 font-myFont hidden md:block">
                manmandirbankvita@yahoo.com
              </li>
            </Link>
            <p className="text-center md:text-3xl text-xl text-white font-myFont">
              "Leading the way to the common good"
            </p>
          </ul>
        </div>
        <div className="container mx-auto flex justify-center items-center pb-4">
          <img src="/Images/bank1.jpeg" alt="" />
          <h1 className="text-center text-2xl md:text-4xl text-white font-myFont">
            The Manmandir Co-Operative Bank Limited Vita.
          </h1>
        </div>
        <hr className="bg-gray-100" />
        <div className="mb-10">
          <p className="text-white text-center text-lg pb-4 px-4">
            Head office: In front of ST stand, Vita - 415 311, Taluka Khanapur,
            District Sangli, Phone: 02347 - 276438,273271.
          </p>
        </div>
      </div>
      <div>
        <div className="text-center">
          <h1 className="font-myFont lg:text-5xl md:text-3xl text-2xl py-4">
            Cyber ​​Security - IT Department
          </h1>
          <h1 className="font-myFont lg:text-5xl md:text-3xl text-2xl py-4">
            Notice To Account Holder Customers
          </h1>
        </div>
        {/* Instruction Div */}
        <div className="container mx-auto">
          <ul style={{ listStyle: "disc" }}>
            <li className="text-red-600 md:text-3xl text-2xl"> Be careful<hr className="custom_hr -mt-0" /></li>
            
          </ul>
          <p className="max-w-4xl text-left py-2 ml-10">
            Checkbook, passbook, ATM card, PIN and other banking reference
            information, you must follow the instructions given below. This will
            help keep your bank account safe and secure from fraud.
          </p>
          <ul style={{ listStyle: "disc" }}>
            <li className="text-red-600 md:text-3xl text-2xl">Don't do this<hr className="custom_hr1 -mt-0" /></li>
          </ul>
          <ol style={{ listStyle: "number"}}>
            <li className="max-w-4xl text-left py-2 mx-4">
              Keep checkbook and ATM card together.
            </li>
            <li className="max-w-4xl text-left py-2 mx-4">
              Signing blank check in check book.
            </li>
            <li className="max-w-4xl text-left py-2 mx-4">
              To use your PIN password card or other banking related
              confidential information for another person.
            </li>
            <li className="max-w-4xl text-left py-2 mx-4">
              Keep your own password / PIN or confidential information in
              writing in diary, table or other place.
            </li>
          </ol>
          <ul style={{ listStyle: "disc" }}>
            <li className="text-red-600 md:text-3xl text-2xl">Do this<hr className="custom_hr2 -mt-0" /></li>
          </ul>
          <ol style={{ listStyle: "number" }}>
            <li className="max-w-4xl text-left py-2 mx-4">
              Write the name of the person making the payment clearly and
              completely on the check.
            </li>
            <li className="max-w-4xl text-left py-2 mx-4">
              If you are sending by check post, use carbon paper as protection
              against fraud Be done Changes should not be made using chemicals.
            </li>
            <li className="max-w-4xl text-left py-2 mx-4">
              Remember PIN / Password and if it is in written form then delete
              it Account / ATM security information will remain secure.
            </li>
            <li className="max-w-4xl text-left py-2 mx-4">
              Never give out CVV number of your bank account number / card
              information to anyone by phone / e-mail.
            </li>
            <li className="max-w-4xl text-left py-2 mx-4">
              If anyone says that we have come to you on behalf of the bank, If
              you are coming, make sure to call the branch or head office bricks
              immediately.
            </li>
            <li className="max-w-4xl text-left py-2 mx-4">
              You need an e-mail / s. M. Have you received an S / Phone call,
              have you won the lottery or are you now offered a cheaper fund for
              your business or you will receive a lot of money from abroad and
              it will be given to you after giving your bank account and ATM
              card information cvv number. Believing this is a lie no matter how
              attractive it may be. Also for verification of account, complete
              information of your account, information on AT card, cvv number o.
              T. P. No such phone call is ever made by Dinmandirko Ban Vita to
              any branch or head office Vita. E-mail / s showing the lure of
              money. M. Don't be fooled by l / calls.
            </li>
          </ol>
        </div>
        <div className="bg-blue-400 py-10 my-10">
          <h1 className="container md:text-4xl text-base text-left text-white font-myFont">
            Note: Free advice and information on how to keep your bank account
            safe is provided at all our offices. Contact for more information : -
          </h1>
        </div>

        {/* Contact Div */}

        <div className="flex items-center flex-col md:flex-row justify-evenly py-8 ">
          <div className="p-4 shadow card_wrapper2 text-blue-300 rounded-lg mb-8">
            <div className="text-center">
              <p className="text-2xl text-black max-w-xs">
                Head Office
              </p>
              <p className="text-xl text-blue-700 font-myFont h-14 ">Phone No.</p>
              <h1 className="my_h1 px-2">
                <a href="tel:02347-276438" className="text-lg" >02347-276438</a>
              </h1>
            </div>
          </div>
          <div className="p-4 shadow card_wrapper2 text-blue-300 rounded-lg mb-8">
          <div className="text-center">
          <p className="text-2xl text-black max-w-xs">
          Nilesh Barsingh
          </p>
          <p className="text-xl text-blue-700 font-myFont h-14">(Cyber ​​Security Officer)</p>
          <h1 className="my_h1 px-2">
            <a href="tel:+917021638815" className="text-lg">7021638815</a>
          </h1>
        </div>
          </div>
          <div className="p-4 shadow card_wrapper2 text-blue-300 rounded-lg mb-8">
            <div className="text-center">
            <p className="text-2xl text-black max-w-xs">
            Vikram Nikam
            </p>
            <p className="text-xl text-blue-700 font-myFont h-14">(Chief Information and Technology Officer)</p>
            <h1 className="my_h1 px-2">
              <a href="tel:+918275913992" className="text-lg">8275913992</a>
            </h1>
          </div>
          </div>
          <div className="p-4 shadow card_wrapper2 text-blue-300 rounded-lg mb-8">
          <div className="text-center">
          <p className="text-2xl text-black max-w-xs">
          Ganesh Patil
          </p>
          <p className="text-xl text-blue-700 font-myFont h-14">
          (Head of Information and Technology Liaison)</p>
          <h1 className="my_h1 px-2">
            <a href="tel:+919175522752"className="text-lg">9175522752</a>
          </h1>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notice;
