import React from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-5xl my-2 text-blue-600">Contact Us</h1>
      <div className="container flex flex-col md:flex-row mx-auto p-5 w-full border-2 border-blue-300 shadow mb-8">
        <div className="md:w-1/2 w-full mb-8">
          <iframe
            className="my_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785100243837!2d55.27218771546111!3d25.197201837882503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sin!4v1637432266429!5m2!1sen!2sin"
          ></iframe>
        </div>
        <div className="md:w-1/2 w-full">
          <h1 className="text-center font-myFont mb-8">Get In Touch</h1>
          <p className="mx-4 text-blue-200">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium voluptas nihil libero quo consequatur dolores fuga
            suscipit, tempore odit dignissimos!
          </p>
          <p className="mx-4 text-blue-200">
            742 Evergreen Terrace,
            <br />
            Spingfield, Mumbai -12345.
          </p>
          <p className="mx-4 text-blue-200">
            Mon To Fri,
            <br />
            10Am - 5Pm.
          </p>
          <p className="mx-4 text-blue-200">+92158563314</p>
          <p className="mx-4 text-blue-200">support@123gmail.com</p>
        </div>
      </div>
      <div className="w-full container mx-auto">
        <h1 className="text-blue-600 font-myFont">Write To Us...</h1>
        <div>
          <Form>
            <Form>
              <Row className="mb-4">
                <Col>
                  <Form.Control type="text" placeholder="First name" />
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
            <div className="flex items-center justify-center pb-20">
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
