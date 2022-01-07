import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto my-10 mb-10"  style={{ paddingTop: "35px"}}>
      <h1 className="text-center py-10 md:text-5xl text-3xl font-bold text-blue-900 font-myFont">Frequently Asked Questions...?</h1>
        <Accordion defaultActiveKey="0" className="w-11/12 mx-auto">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="font-myFont">How to change/update the mobile number?</Accordion.Header>
            <Accordion.Body>
                Kindly place a request at the branch for changing the Mobile number.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="font-myFont">How to change/update the mailing address?</Accordion.Header>
            <Accordion.Body>
                Kindly place a request at the nearest branch for changing the Mailing address .
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="font-myFont">How long will it take to update a change of address?</Accordion.Header>
            <Accordion.Body>
            It takes 7 Working days for bank to process the request from the time complete request is given.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="font-myFont">What are the annual charges of debit card?</Accordion.Header>
            <Accordion.Body>
            Refer the schedule of charges.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header className="font-myFont">How can I upgrade my account type?</Accordion.Header>
            <Accordion.Body>
            Kindly place a request at the nearest branch .
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header className="font-myFont">How to place a request for a new cheque book?</Accordion.Header>
            <Accordion.Body>
            You may place the reqeust through branch ,ATM , IVR,Netbanking, Mobile Banking.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header className="font-myFont">Is there any charges applicable for personalized debit card?</Accordion.Header>
            <Accordion.Body>
            Refer Schedule of charges.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header className="font-myFont">How can I place a request for account statement?</Accordion.Header>
            <Accordion.Body>
            You may place the request by calling at contact center or by visiting the branch.
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
