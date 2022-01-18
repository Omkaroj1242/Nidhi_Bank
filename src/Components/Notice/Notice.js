import React from "react";
import { Link } from "react-router-dom";

const Notice = () => {
    return (
        <>
            <div class="padding">
                <div
                    className="container"
                    style={{ paddingTop: "35px" }}
                >
                    <div>
                        
                        <div className="container mx-auto flex justify-center items-center pt-4">
                            <p className="text-center sm:xl md:text-3xl text-xl text-black font-myFont">
                                "Leading the way to the common good"
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto flex justify-center items-center">
                        {/* <img src="/Images/bank1.jpeg" alt="" style={{ height: "55px", width: "70px" }}/> */}
                        <h1 className="text-center text-2xl sm:xl md:text-4xl text-black font-myFont">
                            The Manmandir Co-Operative Bank Limited Vita.
                        </h1>
                    </div>
                    <hr className="bg-black" />
                    <div className="">
                        <p className="text-black text-center text-lg pb-4 px-4">
                            Head office: In front of ST stand, Vita - 415 311,
                            Taluka Khanapur, District Sangli, Phone: 02347 -
                            276438,273271.
                        </p>
                    </div>
                    <ul className="mx-auto">
                            <Link to="/">
                                <li className="link text-right text-blue-700 hover:text-blue-400 pr-4 font-myFont md:block" style={{ display: "inline", paddingRight: "160px"}}>
                                    www.manmandirbank.com
                                </li>
                            </Link>
                            <Link to="/">
                                <li className="link text-right text-blue-700 hover:text-blue-400 font-myFont md:block" style={{ display: "inline", paddingRight: "160px"}}>
                                    manmandirbankvita@yahoo.com
                                </li>
                            </Link>
                            <Link to="/">
                                <li className="link text-right text-blue-700 hover:text-blue-400 pr-4 font-myFont md:block" style={{ display: "inline"}}>
                                    mmcv@manmandirbank.com
                                </li>
                            </Link>
                        </ul>
                </div>
            </div>
            <div>
                <div className="text-center  bg-gray-100">
                    <h1 className="md:text-4xl text-3xl text-blue-900 font-myFont text-center pt-4 font-bold">
                        Cyber ​​Security - IT Department
                    </h1>
                    {/* <hr className="bg-blue-900" /> */}
                    <h1 className="font-myFont text-grey-200 hover:text-blue-400 text-3xl text-left py-4" style={{ paddingLeft: "60px"}}>
                        Notice To Account Holder Customers
                    </h1>
                </div>
                {/* Instruction Div */}
                <div className="container mx-auto bg-gray-100">
                    <ul style={{ listStyle: "disc" }}>
                        <li className="text-red-600 text-xl font-bold">
                            {" "}
                            Be careful
                            <hr className="custom_hr -mt-0" />
                        </li>
                    </ul>
                    <p className="max-w-4xl text-left py-2 ml-10">
                        Checkbook, passbook, ATM card, PIN and other banking
                        reference information, you must follow the instructions
                        given below. This will help keep your bank account safe
                        and secure from fraud.
                    </p>
                    <ul style={{ listStyle: "disc" }}>
                        <li className="text-red-600 text-xl font-bold">
                            Don't do this
                            <hr className="custom_hr1 -mt-0" />
                        </li>
                    </ul>
                    <ol style={{ listStyle: "number" }}>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            Keep checkbook and ATM card together.
                        </li>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            Signing blank check in check book.
                        </li>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            To use your PIN password card or other banking
                            related confidential information for another person.
                        </li>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            Keep your own password / PIN or confidential
                            information in writing in diary, table or other
                            place.
                        </li>
                    </ol>
                    <ul style={{ listStyle: "disc" }}>
                        <li className="text-red-600 text-xl font-bold">
                            Do this
                            <hr className="custom_hr2 -mt-0" />
                        </li>
                    </ul>
                    <ol style={{ listStyle: "number" }}>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            Write the name of the person making the payment
                            clearly and completely on the check.
                        </li>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            If you are sending by check post, use carbon paper
                            as protection against fraud Be done Changes should
                            not be made using chemicals.
                        </li>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            Remember PIN / Password and if it is in written form
                            then delete it Account / ATM security information
                            will remain secure.
                        </li>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            Never give out CVV number of your bank account
                            number / card information to anyone by phone /
                            e-mail.
                        </li>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            If anyone says that we have come to you on behalf of
                            the bank, If you are coming, make sure to call the
                            branch or head office bricks immediately.
                        </li>
                        <li className="max-w-4xl text-left py-2 mx-4">
                            You need an e-mail / s. M. Have you received an S /
                            Phone call, have you won the lottery or are you now
                            offered a cheaper fund for your business or you will
                            receive a lot of money from abroad and it will be
                            given to you after giving your bank account and ATM
                            card information cvv number. Believing this is a lie
                            no matter how attractive it may be. Also for
                            verification of account, complete information of
                            your account, information on AT card, cvv number o.
                            T. P. No such phone call is ever made by Dinmandirko
                            Ban Vita to any branch or head office Vita. E-mail /
                            s showing the lure of money. M. Don't be fooled by l
                            / calls.
                        </li>
                    </ol>
                </div>
                <div className="py-10 my-10">
                    <h1 className="container text-xl text-left text-danger font-myFont">
                        Note: Free advice and information on how to keep your
                        bank account safe is provided at all our offices.
                    </h1>
                </div>

                {/* Contact Div */}

                <section id="contact" class="contact section-bg mx-4">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 pb-3">
                            <div class="info-box space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                <h3>Head Office</h3>
                                <p className="text-xl font-myFont">
                                    Phone No.
                                </p>
                                <h1 className="my_h1 px-2">
                                    
                                    <a
                                        href="tel:02347-276438"
                                        className="p-1 pl-5 pr-5 text-lg bg-transparent border-1 border-blue-700 rounded-lg"
                                    >
                                        02347-276438
                                    </a>
                                </h1>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="info-box space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                <h3>Nilesh Barsingh</h3>
                                <p className="text-xl font-myFont">
                                    (Cyber ​​Security Officer)
                                </p>
                                <h1 className="my_h1 px-2">
                                    
                                    <a
                                        href="tel:+917021638815"
                                        className="ml-2 p-1 pl-5 pr-5 text-lg bg-transparent border-1 border-blue-700 rounded-lg"
                                    >
                                        7021638815
                                    </a>
                                </h1>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="info-box space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                <h3>Vikram Nikam</h3>
                                <p className="text-xl font-myFont">
                                    (Chief IT Officer)
                                </p>
                                <h1 className="my_h1 px-2">
                                    
                                    <a
                                        href="tel:+918275913992"
                                        className="ml-2 p-1 pl-5 pr-5 text-lg bg-transparent border-1 border-blue-700 rounded-lg"
                                    >
                                        8275913992
                                    </a>
                                </h1>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="info-box space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                <h3> Ganesh Patil</h3>
                                <p className="text-xl font-myFont">
                                    (Head of IT Liaison)
                                </p>
                                <h1 className="my_h1 px-2">
                                    {" "}
                                    <a
                                        href="tel:+919175522752"
                                        className="ml-2 p-1 pl-5 pr-5 text-lg bg-transparent border-1 border-blue-700 rounded-lg"
                                    >
                                        9175522752
                                    </a>
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Notice;
