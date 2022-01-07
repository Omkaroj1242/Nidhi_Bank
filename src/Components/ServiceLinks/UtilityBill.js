import React from 'react'
import Service from "../Service/Service";

const UtilityBill = () => {
    return (
        <div>
            <section style={{ paddingTop: "53px"}}>
                <img
                    className="flex justify-center items-center mx-auto pt-5 my_bg img-fluid"
                    src="/Images/poster2.jpg"
                    style={{ height: "300px", width: "100%" }}
                    alt="First slide"
                />
            </section>

            <div class="container-fluid">
                <div class="row  pt-4">
                    <div class="col-sm-3 col-md-3 col-lg-3">
                        
                        <Service />

                    </div>
                    <div class="col-sm-9 col-md-6 col-lg-8">
                        <h2 className='pt-3'>Utility Bill Payments</h2>
                        <p>Bank has a tie-up with Pay Point India for Utility Bill Payments.</p>
                        <p>Our Bank Customers can pay Utility Bills (E.g. Electricity Bill, Telephone Bill, Mobile Recharge, DTH Recharge, Railway ticker booking, Bus Booking etc.) through our branches.</p>

                    </div>
                </div>
             </div>
        </div>
    )
}

export default UtilityBill
