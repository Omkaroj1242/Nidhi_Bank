import React from 'react'
import PersonalBanking from "../PersonalBanking/PersonalBanking"

const KycNorms = () => {
    return (
        <div>
            <section style={{ paddingTop: "53px" }}>
                <img
                    className="flex justify-center items-center mx-auto pt-5 my_bg img-fluid"
                    src="/Images/poster5.jpeg"
                    style={{ height: "350px", width: "100%" }}
                    alt="First slide"
                />
            </section>

            <div class="container-fluid">
                <div class="row  pt-4">
                    <div class="col-sm-3 col-md-3 col-lg-3">

                        <PersonalBanking />

                    </div>
                    <div class="col-sm-9 col-md-6 col-lg-8">
                        {/* <h2 className='pt-3'>KYC Norms</h2> */}
                        <img
                            className="flex justify-center items-center mx-auto my_bg img-fluid"
                            src="/Images/kyc1.jpg"
                            alt="First slide"

                            style={{ height: "1200px"}}
                        />

                        <img
                            className="flex justify-center items-center mx-auto py-3 my_bg img-fluid"
                            src="/Images/kyc2.jpg"
                            alt="First slide"
                        />
                        <img
                            className="flex justify-center items-center mx-auto py-3 my_bg img-fluid"
                            src="/Images/kyc4.jpg"
                            alt="First slide"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default KycNorms
