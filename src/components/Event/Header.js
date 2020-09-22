import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        {
          /* ======= Header ======= */
        }
        <header id="header">
          <div className="container">
            <div id="logo" className="pull-left">
              {/* Uncomment below if you prefer to use a text logo */}
              {/* <h1><a href="#intro">The<span>Event</span></a></h1>*/}
              <a href="index.html" className="scrollto">
                <img src="assets/img/logo.png" alt="" title />
              </a>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#speakers">Speakers</a>
                </li>
                <li>
                  <a href="#schedule">Schedule</a>
                </li>
                <li>
                  <a href="#venue">Venue</a>
                </li>
                <li>
                  <a href="#hotels">Hotels</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#supporters">Sponsors</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li className="buy-tickets">
                  <a href="#buy-tickets">Buy Tickets</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {
          /* ======= Header End======= */
        }

      </div>
    );
  }
}

export default Header;