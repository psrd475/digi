import React, { Component, Fragment } from 'react';
import Intro from './Intro';

import {
  Link,
  Element,
  Events,
  scroller
} from "react-scroll";
import About from './About';
import Speaker from './Speaker';
import Schedule from './Schedule';
import Venue from './Venue';
import Hotels from './Hotels';
import Gallery from './Gallery';
import Sponsors from './Sponsors';
import Faq from './Faq';
import Subscribe from './Subscribe';
import BuyTicket from './BuyTicket'
import Contact from './Contact';
import Footer from './Footer';

class Event extends Component {


  componentDidMount() {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });
  }
  scrollTo(offset) {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: offset
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
        offset: 50
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    return (
      <Fragment>
        {
          /* ======= Header ======= */
        }
        <header id="header">
          <div className="container">
            <div id="logo" className="pull-left">
              {/* Uncomment below if you prefer to use a text logo */}
              {/* <h1><a href="#intro">The<span>Event</span></a></h1>*/}
              <a href="index.html" className="scrollto">
                <img src="assets/img/logo.png" alt="" title="logo" />
              </a>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active">
                  <Link
                    activeClass="active"
                    className="home"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={50}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="about"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-55}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="speaker"
                    to="speaker"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Speaker
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="schedule"
                    to="schedule"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="venue"
                    to="venue"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Venue
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="hotels"
                    to="hotels"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Hotels
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="gallery"
                    to="gallery"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="sponsors"
                    to="sponsors"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Sponsors
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="contact"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
                <li className="buy-tickets">
                  <Link
                    activeClass="active"
                    className="buy-tickets"
                    to="buy-tickets"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Buy Tickets
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {
          /* ======= Header End======= */
        }
        <div>
          <Element name="home" className="element" >
            <Intro />
          </Element>
        </div>
        <main id="main">
          <Element name="about" className="element">
            <About />
          </Element>
          <Element name="speaker" className="element">
            <Speaker />
          </Element>
          <Element name="schedule" className="element">
            <Schedule />
          </Element>
          <Element name="venue" className="element">
            <Venue />
          </Element>
          <Element name="hotels" className="element">
            <Hotels />
          </Element>
          <Element name="gallery" className="element">
            <Gallery />
          </Element>
          <Element name="sponsors" className="element">
            <Sponsors />
          </Element>
          <Faq />
          <Subscribe />
          <BuyTicket />
          <Element name="contact" className="element">
            <Contact />
          </Element>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Event;