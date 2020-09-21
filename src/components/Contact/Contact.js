import React, { Component, Fragment } from 'react';
import PageSeperator from '../Home/PageSeperator';
import ContactBounce from './ContactBounce';

class Contact extends Component {

  render() {
    return (
      <Fragment>
        <div className='banner text-center'>
          <ContactBounce />
        </div>
        <div className="page-section container page__container">
          <PageSeperator name="Get in touch" />
          <div className="row">

            <div className="col-12 col-md-8">
              <div className="col-12 col-md-12 py-3">
                <form id="contactForm" >
                  {/* <input
                    type="hidden"
                    name="csrfmiddlewaretoken"
                    defaultValue=""
                  /> */}
                  <div className="form-group">
                    <div className="col-12 col-md-12">
                      <div className="row">
                        <input
                          className="col-12 col-md-5 form-control shadow-sm mb-2"
                          id="username"
                          placeholder="Name*"
                          name="name"
                          type="username"
                          required
                        />
                        <div className="col-12 col-md-2" />
                        <input
                          className="col-12 col-md-5 form-control shadow-sm mb-2"
                          id="email"
                          placeholder="Email-Id*"
                          name="email"
                          type="email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      className="col-12 col-md-12 form-control shadow-sm"
                      id="subject"
                      placeholder="Subject*"
                      name="subject"
                      type="text"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="col-12 col-md-12 form-control"
                      id="message"
                      name="message"
                      placeholder="Message*"
                      required
                      defaultValue=""
                    />
                  </div>
                  <div className="col-12 col-md-12 pl-0">
                    <button
                      type="submit"
                      className="button"
                      style={{ width: 200, height: 50 }}
                    >
                      SUBMIT
            </button>
                  </div>
                  <div className="col-12 col-md-12 pl-0">
                    <span className style={{ color: "green" }} />
                  </div>
                </form>
              </div>
            </div>
            {/* Devloped by Akash Pathak(9792929996) */}
            <div className="col-12 col-md-4" >
              <div className="col-12 col-md-12 py-3">
                <div className="row pb-5">
                  <div className="col-12 col-md-12 p-0">
                    <i
                      className="fa fa-phone-alt"
                      aria-hidden="true"
                      style={{ fontSize: '18', color: '#303956' }}
                    />
                    <span className="pl-2">
                      Phone
                    </span>
                    <ul className="p-0" style={{ listStyle: "none", color: "#7C848A" }}>
                      <li className="col-12 col-md-12 pt-1 pb-1 pl-4 pr-0">
                        <img
                          src="/images/path/whatsapp.jpeg"
                          style={{ height: 20, width: 20 }}
                          alt=""
                        />
                        <a
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Contact us on WhatsApp"
                          href="https://api.whatsapp.com/send?phone=9934699512"
                          style={{ color: "#7C848A", fontSize: 14 }}
                        >

                          +91 9934-699-512
                </a>
                        <br />
                        <img
                          src="/images/path/whatsapp.jpeg"
                          style={{ height: 20, width: 20 }}
                          alt=""
                        />
                        <a
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Contact us on WhatsApp"
                          href="https://api.whatsapp.com/send?phone=917023653566"
                          style={{ color: "#7C848A", fontSize: 14 }}
                        >
                          +91 7023-653-566
                </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-12 p-0">
                    <i
                      className="fa fa-envelope"
                      aria-hidden="true"
                      style={{ fontSize: 18 }}
                    />
                    <span className="pl-2">
                      <b>Email</b>
                    </span>
                    <ul className="p-0" style={{ listStyle: "none", color: "#7C848A" }}>
                      <li className="col-12 col-md-12 pt-1 pb-1 pl-4 pr-0">
                        <a
                          href="mailto:info@digitechvidya.com"
                          style={{ color: "#7C848A", fontSize: 14 }}
                        >
                          info@digitechvidya.com
                </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-12 p-0">
                    <i
                      className="fa fa-map-marker"
                      aria-hidden="true"
                      style={{ fontSize: 18 }}
                    />
                    <span className="pl-2">
                      <b>Address</b>
                    </span>
                    <ul className="p-0" style={{ listStyle: "none", color: "#7C848A" }}>
                      <li
                        className="col-12 col-md-12 pt-1 pb-1 pl-4 pr-0"
                        style={{ color: "#7C848A", fontSize: 14 }}
                      >
                        E4, Mohan Estate, <br /> New Delhi 110044
              </li>
                      <li
                        className="col-12 col-md-12 pt-1 pb-1 pl-4 pr-0"
                        style={{ color: "#7C848A", fontSize: 14 }}
                      >
                        207, Maharana Pratap Nagar, <br /> Jaipur, Rajasthan 302012
              </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Fragment >
    );
  }
}

export default Contact;