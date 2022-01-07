import React from 'react'
import PersonalBanking from '../PersonalBanking/PersonalBanking'
import Accordion from "react-bootstrap/Accordion";

const Deposit = () => {
    return (
        <div>
            <section style={{ paddingTop: "53px"}}>
                <img
                    className="flex justify-center items-center mx-auto pt-5 my_bg img-fluid"
                    src="/Images/poster1.jpg"
                    style={{ height: "300px", width: "100%" }}
                    alt="First slide"
                />
            </section>

            <div class="container-fluid">
                <div class="row  pt-4">
                    <div class="col-sm-3 col-md-3 col-lg-3">

                        <PersonalBanking />
                        {/* <QuickLinks /> */}

                    </div>
                    <div class="col-sm-9 col-md-6 col-lg-8">
                        <h2 className='pt-3'>Deposits</h2>

                        <Accordion defaultActiveKey="1" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">SAVINGS ACCOUNT</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td colspan="2" className='font-bold'>A Savings Account
                                                    may be opened by Individuals, HUFs and Trust.</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" className='font-bold'>Features:</td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left"> Any Branch Banking (ABB).</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">ATM facility / Debit cum ATM card</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Demand Draft (Local and Outstation)</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">RTGS/NEFT</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Nomination facility available</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">DICGC Insurance facility</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Personalized cheque books as per CTS standards</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left"></div>Basic Saving account (No Frills account)</td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Students Saving account</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Saving accounts for Minor</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Transaction alerts by SMS</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="2" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">CURRENT ACCOUNT</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td colspan="2" className='font-bold'>Current A/cs may be opened by Businessmen/Proprietorship/Partnership Firms/Public or
                                                    Private Companies.</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" className='font-bold'>Features:</td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Customer can deposit or withdraw the amount as many times required</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Minimum Balance to be maintained is Rs.2000/- for Individuals</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Minimum Balance to be maintained is Rs.5000/- for Firms,Companies.</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Account will be operated by Authorized Signatories</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Any Branch Banking (ABB).</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Demand Draft (Local and Outstation).</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">RTGS/NEFT</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left"></div>DICGC Insurance facility</td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Personalized cheque books as per CTS standards</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left"> RERA Account Facility for Builders/Contractors</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="3" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">SAMRUDDHI THEV*</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Period of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">1 year to 10 years</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Minimum Amount of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Rs.100/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Additional Interest Rate for Senior Citizen</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">0.50%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Benefits</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Compounding Interest</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Interest Payment</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Quarterly Compounding,Interest payable on maturity</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Pledging of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Premature Withdrawal</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Auto-renewal Facility</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Available</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="4" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">AMRUT MAHOTSAVI DAMDUPPAT THEV*</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Period of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">9 Years 7 Months 25 Days</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Minimum Amount of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Rs.5000/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Additional Interest Rate for Senior Citizen</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">0.50%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Benefits</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Compounding Interest</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Interest Payment</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Quarterly Compounding,Interest payable on maturity</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Pledging of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Premature Withdrawal</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="5" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">AMRUT MAHOTSAVI LAKSHADHISH THEV*</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Period of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">5 Years</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Minimum Amount of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Rs.69900/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Maturity Value</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Rs.100115/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Additional Interest Rate for Senior Citizen</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">0.50%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Benefits</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Compounding Interest</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Interest Payment</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Quarterly Compounding,Interest payable on maturity</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Pledging of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Premature Withdrawal</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="6" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">80 C DEPOSIT</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Period of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Minimum 5 Years and Maximum 10 years</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Minimum Amount of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Rs.100/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Maximum Amount of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Rs.150000/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Rate Of Interest</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">7.50%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Benefits</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left"><p>1. Tax Benefit u/s 80 C of Income Tax act</p><p>2. Monthly Interest Payout OR Compounding Interest Facility</p></div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Pledging of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Not Allowed</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Premature Withdrawal</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Not Allowed</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="7" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">UNFIXED DEPOSIT THEV*</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Period of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">15 days to 1 Years</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Minimum Amount of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Rs.1500000/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Maximum Amount Of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Rs.30000000/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Rate Of Interest</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">5.00%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Benefits</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">No penalty if broken before maturity after 15 Days</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Interest Payment</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Simple Interest</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Pledging of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Premature Withdrawal</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="8" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">RECURRING THEV*</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Period of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">1 Years to 10 Years</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Monthly Installment</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Deposit in Multiple of Rs.100/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Additional Interest Rate for Senior Citizen</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">0.50%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Benefits</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Compounding Interest</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Interest Payment</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Quarterly Compounding,Interest payable on maturity</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Pledging of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Premature Withdrawal</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="9" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">MONTHLY INTEREST DEPOSIT*</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Period of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">1 Year to 10 Years</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Minimum Amount of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Rs.5000/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Additional Interest Rate for Senior Citizen</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">0.50%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Benefits</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Monthly Interest</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Interest Payment</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Simple Interest</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Pledging of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Premature Withdrawal</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Auto-renewal Policy</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Available</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="10" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">BACHAT NIDHI (PIGMY) DEPOSIT*</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Period of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">1 Year</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Minimum Amount of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Rs.25/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Interest Payment</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Simple Interest</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Pledging of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Premature Withdrawal</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Allowed</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="11" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">SUKANYA SAMRUDHI THEV YOJANA*</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Period of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Upto 20th Age of Girl child of 3 months to 10 years age</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Minimum Amount of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Based on the age</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Maturity Amount</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Rs. 100000/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Rate of Interest</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">8.00%</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="12" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">AMRUT MAHOTSAVI LAKSHADHISH THEV*</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Minimum Amount of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Rs.200000/-</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Rate of Interest</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">5%</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <div className='py-4'>
                            <table width="100%" class="table-bordered ">
                                <tbody>
                                    <tr>
                                        <td width="3%" class="tblifsc px-1 "><i class="fas fa-arrow-circle-right"></i></td>
                                        <td width="97%" class="tblifsc"><div align="left"> 1. Get additional 0.25% interest for the Period one year and above on one time deposit between Rs. 25 lakhs or more. (Applicable only for Individuals)</div></td>
                                    </tr>
                                    <tr>
                                        <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                        <td width="97%" class="tblifsc"><div align="left">2.Get additional 0.50% interest for the Period one year and above on one time deposit above Rs. 25 lakhs (Not applicable for Co-operative Societies/Banks)</div></td>
                                    </tr>
                                    <tr>
                                        <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                        <td width="97%" class="tblifsc"><div align="left">3. Flexible Interest rate for Co-operative Societies/Patsanshta</div></td>
                                    </tr>
                                    <tr>    
                                    <td colspan="2" className='font-bold text-danger'>
                                        <p>* Maturity amount is subject to Tax and its impact on interest</p><p>* Conditions apply</p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Deposit
