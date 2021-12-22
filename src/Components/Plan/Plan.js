import React from "react";

const Plan = () => {
    return (
        <div className="py-10 min-h-screen bg-gray-200">
            <h1 className="text-center md:text-5xl text-3xl text-blue-400 py-10 font-myFont font-bold">
                Various Deposit Schemes Of The Bank
            </h1>
            <div className="container mb-16 text-center">
                <h1 className="text-center text-blue-900 text-3xl py-6 font-myFont">
                    Attractive interest rates on deposits
                </h1>
                <table class="table table-striped table-bordered container mx-auto border-2 rounded-lg border-black">
                    <thead>
                        <tr>
                            <th scope="col">Duration</th>
                            <th scope="col">Interest Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">46 Days to 90 Days</th>
                            <td>6.00 %</td>
                        </tr>
                        <tr>
                            <th scope="row">91 Days to 180 Days</th>
                            <td>6.50 %</td>
                        </tr>
                        <tr>
                            <th scope="row">181 Days to 15 Months</th>
                            <td>6.75 %</td>
                        </tr>
                        <tr>
                            <th scope="row">15 Months 1 Days to 25 Months </th>
                            <td>7.50 %</td>
                        </tr>
                        <tr>
                            <th scope="row">25 Months Later</th>
                            <td>7.25 %</td>
                        </tr>
                        <tr>
                            <th scope="row">Double the deposit</th>
                            <td>9 Years 8 Months and 5 Days</td>
                        </tr>
                        <tr>
                            <th scope="row">Senior citizen</th>
                            <td>0.50% More on over term deposit</td>
                        </tr>
                        <tr>
                            <th scope="row">91 Days to 180 Days</th>
                            <td>6.50 %</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container w-full  flex md:flex-row flex-col">
                <div className="md:w-1/2 md:mx-4 w-full text-center mb-10">
                    <h1 className="text-3xl text-center text-blue-900 py-10 font-myFont">
                        Manmandir Deposit Scheme <br /> (Term 5 Years)
                    </h1>
                    <table class="table table-striped table-bordered border-2 rounded-lg border-black">
                        <thead>
                            <tr>
                                <th scope="col">Investment amount</th>
                                <th scope="col">
                                    Amount received after maturity
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">₹ 6,982/-</th>
                                <td>₹ 10,000/-</td>
                            </tr>
                            <tr>
                                <th scope="row">₹ 10,473/-</th>
                                <td>₹ 15,000/-</td>
                            </tr>
                            <tr>
                                <th scope="row">₹ 13,964/-</th>
                                <td>₹ 20,000/-</td>
                            </tr>
                            <tr>
                                <th scope="row">₹ 17,455/-</th>
                                <td>₹ 25,000/-</td>
                            </tr>
                            <tr>
                                <th scope="row">₹ 34,910/-</th>
                                <td>₹ 50,000/-</td>
                            </tr>
                            <tr>
                                <th scope="row">₹ 52,365/-</th>
                                <td>₹ 75,000/-</td>
                            </tr>
                            <tr>
                                <th scope="row">₹ 69,820/-</th>
                                <td>₹ 1,00,000/-</td>
                            </tr>
                            <tr>
                                <th scope="row">₹ 1,39,640/-</th>
                                <td>₹ 2,00,001/-</td>
                            </tr>
                            <tr>
                                <th scope="row">₹ 3,49,099/-</th>
                                <td>₹ 5,00,001/-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="md:w-1/2 w-full md:mx-4 text-center mb-10">
                    <h1 className="text-3xl text-center text-blue-900 font-myFont py-10">
                        Manmandir Recurring Deposit Scheme <br />
                        <span className="text-2xl">
                            Lakhpati Yojana (Term 5 Years)
                        </span>
                    </h1>
                    <table class="table table-striped table-bordered container mx-auto border-2 rounded-lg border-black">
                        <thead>
                            <tr>
                                <th scope="col">Amount invested per month</th>
                                <th scope="col">
                                    Amount received after maturity
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">₹ 691/-</th>
                                <td>₹ 50,036/-</td>
                            </tr>
                            <tr>
                                <th scope="row">₹ 1,382/-</th>
                                <td>₹ 1,00,072/-</td>
                            </tr>
                            <tr>
                                <th scope="row">₹ 2,073/-</th>
                                <td>₹ 1,50,108/-</td>
                            </tr>
                            <tr>
                                <th scope="row">₹ 2,764/-</th>
                                <td>₹ 2,00,144/-</td>
                            </tr>
                            <tr>
                                <th scope="row">₹ 4,146/-</th>
                                <td>₹ 3,00,216/-</td>
                            </tr>
                            <tr>
                                <th scope="row">₹ 5,528/-</th>
                                <td>₹ 4,00,289/-</td>
                            </tr>
                            <tr>
                                <th scope="row">₹ 6,910/-</th>
                                <td>₹ 5,00,361/-</td>
                            </tr>
                            <tr>
                                <th scope="row">₹ 13,820/-</th>
                                <td>₹ 10,00,721/-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Plan;
