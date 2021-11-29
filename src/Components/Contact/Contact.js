import React from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-5xl font-myFont text-blue-400 uppercase py-10">
        Contact Us
      </h1>
      <div className="flex flex-col lg:flex-row mx-auto w-full border-2 border-blue-300 shadow mb-8 text-justify">
        <div className="lg:w-1/2 w-full mt-10 mb-8">
          <iframe
            className="my_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785100243837!2d55.27218771546111!3d25.197201837882503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sin!4v1637432266429!5m2!1sen!2sin"
          ></iframe>
        </div>
        <div className="lg:w-6/12 w-full">
          <h1 className="text-center text-blue-400 font-myFont mb-8 uppercase">
            Get In Touch
          </h1>
          <div className="flex w-full md:flex-row flex-col">
            <div className="md:w-1/2 w-full">
              <div className="lg:p-4 md:p-2 shadow contact_wrapper2 text-blue-300 rounded-lg mb-8 mx-auto">
                <div className="text-center py-2">
                  <img
                    src="https://img.icons8.com/wired/64/000000/address.png"
                    className="mx-auto py-2"
                    alt=""
                  />
                  <p className="text-2xl text-black py-2">Address</p>
                  <p className="text-xl text-blue-500 font-myFont">
                    Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>
              <div className="p-4 shadow contact_wrapper2 text-blue-300 rounded-lg mb-8 mx-auto">
                <div className="text-center py-2">
                  <img
                    src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-email-business-kiranshastry-lineal-kiranshastry.png"
                    className="mx-auto py-2" 
                    alt=""
                  />
                  <p className="text-2xl text-black py-2">Email</p>
                  <h4 className="text-lg lg:text-xl text-blue-500 font-myFont">
                    manmandirbank<br />@yahoo.com
                  </h4>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="p-4 shadow contact_wrapper2 text-blue-300 rounded-lg mb-8 mx-auto">
                <div className="text-center py-2">
                  <img
                    src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/000000/external-time-business-method-inipagistudio-mixed-inipagistudio.png"
                    className="mx-auto py-2"
                    alt=""
                  />
                  <p className="text-2xl text-black py-2">Time</p>
                  <p className="text-xl text-blue-500 font-myFont">
                    Mon-Fri : - 10:00 Am To 5:00 Pm
                  </p>
                </div>
              </div>
              <div className="p-4 shadow contact_wrapper2 text-blue-300 rounded-lg mb-8 mx-auto">
                <div className="text-center py-2">
                  <img
                    src="https://img.icons8.com/dotty/64/000000/phone.png"
                    className="mx-auto py-2"
                    alt=""
                  />
                  <p className="text-2xl text-black py-2">Phone No:-</p>
                  <p className="text-xl text-blue-500 font-myFont">
                    <h1 className="my_h1 px-2 py-2 font-myFont">
                      <a href="tel:+918275913992">8275913992</a>
                    </h1>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full container mx-auto">
        <h1 className="text-blue-400 font-myFont uppercase">Write To Us...</h1>
        <div>
          <Form>
            <Form>
              <Row className="mb-4">
                <Col>
                  <Form.Control type="text" placeholder="Full name" />
                </Col>
                <Col>
                  <Form.Control type="number" placeholder="Phone No." />
                </Col>
              </Row>
            </Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                placeholder="Message . . ."
                rows={3}
              />
            </Form.Group>
            <div className="flex items-center justify-end pb-20">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
