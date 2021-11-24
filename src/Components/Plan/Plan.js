import React from 'react'

const Plan = () => {
    return (
        <div className="py-10">
        <h1 className="text-5xl font-myFont text-center text-blue-400 mb-8">Various Deposit Schemes Of The Bank</h1>
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
    )
}

export default Plan
