import React from "react";

const Contact = () => {
  return (
    <section id="contact" class="contact">
      <div className="mx-12">
        <div class="section-title text-center">
          <h2 className="md:text-5xl text-3xl text-blue-400 my-8 font-myFont">Contact Us</h2>
        </div>

        <div>
          <iframe
            style={{ border: "0", width: "100%", height: "300px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1346.9995955583647!2d74.53999062677075!3d17.272546578494346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc16636127248b1%3A0x79c5ecb6be525364!2sThe%20Manmandir%20Co-operative%20Bank%20Limited!5e0!3m2!1sen!2sin!4v1639460754786!5m2!1sen!2sin"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        <div class="row mt-5 bg-gray-200">
          <div class="col-lg-4">
            <div class="info mt-5">
              <div class="address flex mb-4">
                <i className="fas fa-map-marker-alt mx-4" style={{"font-size":"36px" }}></i>
                <div>
                <h4>Location:</h4>
                <p>In front of ST stand, Vita - 415 311, Taluka Khanapur,
                District Sangli.</p>
                </div>
              </div>

              <div class="email flex mb-4">
                <i class="fas fa-envelope mx-4" style={{"font-size":"36px"}}></i>
                <div>
                <h4>Email:</h4>
                <p>manmandirbankvita@yahoo.com</p>
                </div>
              </div>

              <div class="phone flex mb-4">
                <i class="fas fa-phone-alt mx-4" style={{"font-size":"36px"}}></i>
                <div>
                <h4>Call:</h4>
                <p>8974562241</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-8 mt-5 mt-lg-0 bg-gray-200">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              class="php-email-form"
            >
              <div class="row">
              <h1 className="text-3xl text-black font-myFont py-3">Appointment Form</h1>
                <div class="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div class="form-group mt-3">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <textarea
                  class="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div class="text-center">
                <button type="submit" className="btn btn-primary my-4">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
