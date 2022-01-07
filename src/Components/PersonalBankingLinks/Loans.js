import React from 'react'
import PersonalBanking from '../PersonalBanking/PersonalBanking'
import Accordion from "react-bootstrap/Accordion";

const Loans = () => {
    return (
        <div>
            <section style={{ paddingTop: "53px"}}>
                <img
                    className="flex justify-center items-center mx-auto pt-5 my_bg img-fluid "
                    src="/Images/poster3.jpg"
                    style={{ height: "300px", width: "100%" }}
                    alt="First slide"
                />
            </section>

            <div class="container-fluid">
                <div class="row  pt-4">
                    <div class="col-sm-3 col-md-3 col-lg-3">

                        <PersonalBanking />

                    </div>
                    <div class="col-sm-9 col-md-6 col-lg-8">
                        <h2 className='pt-3'>Deposits</h2>

                        <Accordion defaultActiveKey="1" className="mx-auto pt-3">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">VYAPARI UTKARSHA LOAN*</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered table-striped">
                                        <tbody>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Purpose</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Working Capital</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Eligibility</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Small Traders</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Loan Amount</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Upto Rs. 5 lakhs</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Margin</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">25%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Repayment</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">1 Year</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Special Feature</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Cash Credit loan</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Security</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Stock in Hand + 100% collateral security</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Guarantee / Surety</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">2 Guarantors</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Minimum Documents / Requirements</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">KYC, Business Licenses, Income Tax Returns, Financial Statements, Stock Statements etc</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rate of Interest</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">11.50%</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="2" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">DHANWANTARI LOAN*</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                        <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Purpose</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Construction and Machinery Purpose</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Eligibility</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Doctors (Excluding General Practitioners)</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Loan Amount</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">As per requirement</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Margin</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">25%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Repayment</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">99 Months</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Special Feature</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Term loan for Hospital Construction and Machinery</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Security</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Hospital Building and Machinery + Collateral N.A. Property 100% of the loan Amount Immovable property etc.</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Guarantee / Surety</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">2 Guarantors</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Minimum Documents / Requirements</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">KYC, Business Licenses, Income Tax Returns,Financial Statements etc</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rate of Interest</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">9.99%</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="3" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">VEHICLE LOAN</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                        <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Purpose</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">New 2 Wheeler / 4 Wheeler for personal use</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Eligibility</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Individuals</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Loan Amount</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">90% of (Quotation + RTO Tax + Insurance)</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Margin</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">	10% of (Quotation + RTO Tax + Insurance)</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Repayment</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Upto 5 Years</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Special Feature</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Lowest Interest Rate, Term Loan</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Security</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Vehicle</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Guarantee / Surety</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">1 or 2 Guarantors</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Minimum Documents / Requirements</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">KYC, Income Tax Returns, Financial Statements/ Salary Certificate, Quotation etc.</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rate of Interest</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">For Two Wheeler 10%, For 4 Wheeler upto 3years 9%, Above 3 years 9.50%</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="4" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">GOLD LOAN</Accordion.Header>
                                <Accordion.Body>
                                    <h6 className='text-primary text-center pt-1'>BULLET REPAYMENT</h6>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                        <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Purpose</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Any</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Eligibility</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Individuals</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Loan Amount</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Upto Rs. 2 Lakhs</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Margin</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Rs. 37000/- will be sanctioned per 10gms of Pure Gold in ornaments</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Repayment</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">On Due Date (1 Year)</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Security</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Gold Ornaments</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Guarantee / Surety</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Not required</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Minimum Documents / Requirements</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Saving account with Branch</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rate of Interest</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">9.50%</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <h6 className='text-primary text-center pt-2'>NON-BULLET REPAYMENT</h6>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                        <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Purpose</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Any</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Eligibility</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Individuals</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Loan Amount</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">More than 2 lakhs</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Repayment</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left"><b>1.</b>Upto 3 lakh - 3 years, <b>2.</b> Upto 4 lakh - 4 years, <b>2.</b> Upto 5 lakh - 5 years <b>4.</b> Above 5 Lakh - 5Years</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Special Feature</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Repayment on EMI Basis</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Security</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Gold Ornaments</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Guarantee / Surety</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Not required</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rate of Interest</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">9.50%</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="5" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">HOUSING LOAN</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                        <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Purpose</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Construction / Purchase of residential house</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Eligibility</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Individuals</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Loan Amount</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Upto Rs. 70 lakhs &amp; Above</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Margin</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">	Upto 35%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Repayment</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Upto 240 Months</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Special Feature</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Pradhan Mantri Awas Yojana Benefit available</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Security</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">House / Flat for which loan has been taken</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Guarantee / Surety</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">2 Guarantors</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Minimum Documents / Requirements</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">KYC, Income Certificate, Property related documents etc.</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rate of Interest</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Upto 70 Lakh 8.65%. Above 70 Lakh(Loan Against Property) 8.75%</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="6" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">LOAN AGAINST FIXED DEPOSITS</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                        <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Purpose</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Any</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Eligibility</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Individuals</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Loan Amount</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Upto 90% of (Fixed Deposit Principal
                                                + Accrued Interest)</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Margin</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">	10%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Repayment</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Term Loan - Earliest of 2 Years or FD Maturity date 
                                                Cash Credit - Upto FD Maturity date</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Special Feature</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Loan against third party bank deposit</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Security</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Fixed Deposit Receipt</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Guarantee / Surety</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Not Applicable</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Minimum Documents / Requirements</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Not Applicable</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rate of Interest</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Upto 9,99,999/- FD Interest + Additional 2% From 10 Lakh to 3 Crore -FD Interest + Additional 0.50% Above 3 Crore - FD Interest + Additional 0.25% Third Party Deposit - FD Interest + Additional 2%</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="7" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">LOAN AGAINST NSC/KVP/LIC</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                        <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Purpose</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Any</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Eligibility</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Individuals</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Loan Amount</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">As per requirement</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Margin</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Upto	25%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Repayment</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Till Maturity date of Security</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Special Feature</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Loan against NSC is granted for securities purchased before 12 months.
Loan against KVP is generally granted for securities purchased before 54 months,
Loan against LIC Policy is granted upto 75% of surrender value</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Security</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">NSC/KVP/LIC on which loan has been taken</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Guarantee / Surety</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Not Applicable</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Minimum Documents / Requirements</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">KYC, Saving account with Bank etc.</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rate of Interest</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">10.00%</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="8" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">PROJECT LOAN</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                        <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Purpose</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Project (Industrial,Construction etc.)</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Eligibility</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Individuals, Partnership Firm, Companies etc.</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Loan Amount</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">As per requirement</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Margin</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">	25%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Repayment</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Upto 7 years</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Special Feature</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Moratorium Period</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Security</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">	Immovable property, Machinery etc.</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Guarantee / Surety</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">2 Guarantors</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Minimum Documents / Requirements</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">KYC, Income Statements, Financial Documents,
                                                Immovable property, Project report etc.</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rate of Interest</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">NON MSME - 11% 
                                                MSME - Upo 1 Crore - 9% 
                                                Above 1 Crore - 10.50%</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="9" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">CASH CREDIT LOAN</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                        <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Purpose</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Working Capital</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Eligibility</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Individuals, Partnership Firm, Companies etc.</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Loan Amount</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">As per requirement</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Margin</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">	25%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Repayment</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">1 year</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Special Feature</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Not Applicable</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Security</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Stock + Receivables</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Guarantee / Surety</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">2 Guarantors</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Minimum Documents / Requirements</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">KYC, Income Statements, Financial Documents, Stock Statement, Debtors etc.</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rate of Interest</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">NON MSME - Upto 1 Crore - 11.50% - Above 1 Crore - 11% MSME - Upto 1 Crore - 9% Above 1 Crore - 10.50%</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="10" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">CASH CREDIT</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                        <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Purpose</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Working Capital</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Eligibility</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">	Business / Professionals</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Loan Amount</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">	Upto 25 Lakh</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Repayment</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">1 year</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Security</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Gold Ornaments</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Guarantee / Surety</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Not Required</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rate of Interest</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">9.50%</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="11" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">PLEDGE LOAN (TURMERIC, GRAINS, COTTON ETC.)</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                        <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Purpose</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Turnover</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Eligibility</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Individuals, Partnership Firm, Companies etc.</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Loan Amount</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">As per requirement</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Margin</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">	30%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Repayment</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">1 year</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Special Feature</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Managed through Collateral Management Services- NCMSL, NBHS</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Security</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Warehouse / Cold Storage / Godawoon /Pev Receipts</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Guarantee / Surety</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Not Applicable</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Minimum Documents / Requirements</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">KYC, Financial Statements, Income Statements, Licences, Warehouse/Cold Storage/Godawoon/ Pev receipts etc.</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rate of Interest</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Share Linking Complete - 10%, Share Linking Incomplete - 10.5%</div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion defaultActiveKey="12" className="mx-auto pt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="font-myFont">SHIKSHAN SANVARDHINI LOAN</Accordion.Header>
                                <Accordion.Body>
                                    <table width="100%" class="features-table table-bordered">
                                        <tbody>
                                        <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Purpose</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Education fees for Engineering, Medical &amp; Professional Courses</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Eligibility</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Individuals</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Loan Amount</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Education in India Rs. 10.00 lakhs &amp; Education Outside India Rs. 20.00 lakhs</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Margin</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">	10%</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Repayment</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">As per rule</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Special Feature</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Lowest Interest Rate </div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Security</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">Immovable property</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Guarantee / Surety</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">2 Guarantors</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Minimum Documents / Requirements</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">KYC, Income Tax Returns, Financial Statements, Salary Certificate, Admission Confirmation letter, Education fee estimate etc.</div></td>
                                            </tr>
                                            <tr>
                                                <td width="50%" class="tblifsc pl-2 font-bold">Rate of Interest</td>
                                                <td width="50%" class="tblifsc pl-2"><div align="left">10%</div></td>
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
                                        <td colspan="2" className='font-bold text-danger'>
                                            <p>* Conditions apply</p></td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" className='font-bold text-danger'>
                                            <p>* Flexible Interest Rate for Cash Credit facility as per Credit Rating</p></td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" className='font-bold text-danger'>
                                            <p>* Lower Interest Rate for Women Entrepreneurs</p></td>
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

export default Loans
