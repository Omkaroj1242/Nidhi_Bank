import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer class="relative bg-gray-100 pt-8 pb-6 bg-gray-700">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap text-left lg:text-left">
                        <div class="w-full lg:w-6/12 px-4">
                            <h3
                                className="text-3xl text-blue-600 font-myFont font-bold py-1"
                                style={{ color: "#ffcc80" }}
                            >
                                Manmandir Bank
                            </h3>
                            <h4 class="text-3xl  text-white font-myFont py-1">
                                Let's keep in touch!
                            </h4>
                            <h5 class="text-lg mt-0 mb-2 text-white font-myFont py-1">
                                Find us on any of these platforms, we respond
                                1-2 business days.
                            </h5>
                        </div>
                        <div class="w-full lg:w-6/12 px-4">
                            <div class="flex flex-wrap items-top mb-6">
                                <div class="w-1/2 lg:w-4/12 px-4 ml-auto">
                                    <span class="block uppercase text-white text-sm font-semibold pb-6">
                                        Services
                                    </span>
                                    <ul class="list-unstyled">
                                        <li>
                                        <NavLink
                                        to="/service"
                                        className="text-blue-100 hover:text-blue-600 font-semibold block pb-2 text-sm"
                                        
                                        href="#services"
                                    >
                                         RTGS/NEFT
                                    </NavLink>
                                        </li>
                                        <li>
                                        <NavLink
                                        to="/locker"
                                        className="text-blue-100 hover:text-blue-600 font-semibold block pb-2 text-sm"
                                        
                                        href="#services"
                                    >
                                         Locker
                                    </NavLink>
                                        </li>
                                        <li>
                                        <NavLink
                                        to="/sms"
                                        className="text-blue-100 hover:text-blue-600 font-semibold block pb-2 text-sm"
                                        
                                        href="#services"
                                    >
                                         SMS Banking
                                    </NavLink>
                                        </li>
                                        <li>
                                        <NavLink
                                        to="/abps"
                                        className="text-blue-100 hover:text-blue-600 font-semibold block pb-2 text-sm"
                                        
                                        href="#services"
                                    >
                                         ABPS
                                    </NavLink>
                                        </li>
                                        <li>
                                        <NavLink
                                        to="/anybranch"
                                        className="text-blue-100 hover:text-blue-600 font-semibold block pb-2 text-sm"
                                        
                                        href="#services"
                                    >
                                         Any Branch Banking
                                    </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div class="w-1/2 lg:w-4/12 px-4">
                                    <span class="block uppercase text-white text-sm font-semibold pb-6">
                                        Quick Links
                                    </span>
                                    <ul class="list-unstyled">
                                    <li>
                                        <NavLink
                                        to="/ifsccode"
                                        className="text-blue-100 hover:text-blue-600 font-semibold block pb-2 text-sm"
                                        
                                        href="#quicklinks"
                                    >
                                         IFSC Code
                                    </NavLink>
                                        </li>
                                        <li>
                                        <NavLink
                                        to="/rateofinterest"
                                        className="text-blue-100 hover:text-blue-600 font-semibold block pb-2 text-sm"
                                        
                                        href="#quicklinks"
                                    >
                                         Rate Of Interest
                                    </NavLink>
                                        </li><li>
                                        <NavLink
                                        to="/bankholidays"
                                        className="text-blue-100 hover:text-blue-600 font-semibold block pb-2 text-sm"
                                        
                                        href="#quicklinks"
                                    >
                                         Bank Holidays
                                    </NavLink>
                                        </li><li>
                                        <NavLink
                                        to="/kycnorms"
                                        className="text-blue-100 hover:text-blue-600 font-semibold block pb-2 text-sm"
                                        
                                        href="#quicklinks"
                                    >
                                         KYC Norms
                                    </NavLink>
                                        </li><li>
                                        <NavLink
                                        to="/complaint"
                                        className="text-blue-100 hover:text-blue-600 font-semibold block pb-2 text-sm"
                                        
                                        href="#quicklinks"
                                    >
                                         Complaint Regarding to Transaction
                                    </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div class="w-1/2 lg:w-4/12 px-4">
                                    <span class="block uppercase text-white text-sm font-semibold pb-6">
                                        Social Media
                                    </span>
                                    <ul class="list-unstyled">
                                        <li>
                                            <a
                                                class="text-blue-100 hover:text-blue-600 font-semibold block pb-2 text-sm"
                                                href="/"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                <i className="fab fa-facebook-f"></i>{" "}
                                                Facebook
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                class="text-blue-100 hover:text-blue-600 font-semibold block pb-2 text-sm"
                                                href="/"
                                            >
                                                <i className="fab fa-twitter"></i>{" "}
                                                Twitter
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                class="text-blue-100 hover:text-blue-600 font-semibold block pb-2 text-sm"
                                                href="/"
                                            >
                                                <i className="fab fa-instagram"></i>{" "}
                                                Instagram
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                class="text-blue-100 hover:text-blue-600 font-semibold block pb-2 text-sm"
                                                href="https://www.youtube.com"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                <i className="fab fa-youtube"></i>{" "}
                                                YouTube
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-gray-100" />
                    <div class="flex flex-wrap items-center md:justify-between justify-center">
                        <div class="w-full md:w-4/12 mx-auto text-center">
                            <div class="text-sm text-blue-100 hover:text-blue-400 font-semibold py-10 ">
                                © <span id="get-current-year">2021 </span>
                                Manmandir Co-op Bank Ltd. | Designed & developed
                                by{" "}
                                <a href="http://5techg.com" target="_blank">
                                    5TechG Lab
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
