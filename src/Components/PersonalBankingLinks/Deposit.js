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
                                                <td width="97%" class="tblifsc"><div align="left">Transaction alerts by SMS</div></td>
                                            </tr>
                                            <tr>
                                                <td width="3%" class="tblifsc px-1"><i class="fas fa-arrow-circle-right"></i></td>
                                                <td width="97%" class="tblifsc"><div align="left">Minimum Balance to be maintainted with Cheque book is Rs.1000/- and without Cheque book is Rs.300/-</div></td>
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
                                                <td width="97%" class="tblifsc"><div align="left">Minimum Balance to be maintainted with Cheque book is Rs.1000/- and without Cheque book is Rs.300/-</div></td>
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
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="3" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">MANMANDIR DEPOSIT SCHEME</Accordion.Header>
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
                                <Accordion.Header className="font-myFont">DAMDUPPAT DEPOSIT</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Period of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">9 Years 8 Months 5 Days</div></td>
                                            </tr>
                                            <tr>
                                                <td width="60%" class="tblifsc pl-2 font-bold">Minimum Amount of Deposit</td>
                                                <td width="40%" class="tblifsc pl-2"><div align="left">Rs.100/-</div></td>
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
                                <Accordion.Header className="font-myFont">MANMANDIR RECURRING DEPOSIT SCHEME(Lakhpati Yojana) changes not complted</Accordion.Header>
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

                        <Accordion defaultActiveKey="8" className="mx-auto pt-4 pb-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">RECURRING DEPOSIT</Accordion.Header>
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

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Deposit
