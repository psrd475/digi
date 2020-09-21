import React, { Component, Fragment } from 'react';

import Banner from '../../components/Home/Banner';
import Review from '../../components/Home/Review';
import PageSeperator from '../../components/Home/PageSeperator';
import Card from '../../components/Home/Card';
import Path from '../../components/Home/Paths';
import CardGroup from '../../components/Home/CardGroup';
import Feedback from '../../components/Home/Feedback';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      toggle: true
    }
  }


  render() {

    return (
      <Fragment>
        <Banner />
        <Review />
        <div className="page-section border-bottom-2">
          <div className="container page__container">
            <PageSeperator name="TRENDING COURSES" />
            <Card />

            <div className="posts-cards border-bottom-2">
              <div className="card posts-card mb-0">
                <div className="posts-card__content d-flex align-items-center flex-wrap">
                  <img src="/images/path/access.png" className="avatar-img rounded" alt="Post" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-section border-bottom-2">
          <div className="container page__container">
            <div className="page-section ">
              <div className="container page__container">
                <PageSeperator name="UPCOMING COURSE" />
                <Path />
              </div>
            </div>
          </div>
        </div>

        <div className="page-section border-bottom-2">
          <div className="container page__container">
            <div className="page-section ">
              <div className="container page__container">
                <PageSeperator name="EVENT, NEWS & HACKATHON" />
                <CardGroup />
              </div>
            </div>
          </div>
        </div>

        <div className="page-section border-bottom-2">
          <div className="container page__container">
            <div className="page-section">
              <div className="container page__container">
                <div className="page-headline text-center">
                  <h2>Our students have been Hired by</h2>
                </div>
                <div className="card posts-card mb-0">
                  <div className="posts-card__content d-flex align-items-center flex-wrap">
                    <img src="/images/path/hiring.png" className="avatar-img rounded" alt="Post" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div >


        <div className="page-section border-bottom-2">
          <div className="container page__container">
            <div className="page-section">
              <div className="container page__container">
                <div className="page-headline text-center">
                  <h2>Feedback</h2>
                  <p className="lead measure-lead mx-auto text-black-70">
                    What other students turned professionals have to say about us after
                    learning with us and reaching their goals.
                  </p>
                </div>
                <Feedback />
              </div>
            </div>
          </div>
        </div >

        <div>
          {
            this.state.toggle ? <div className="form-popup" >
              <form className="form-container">
                <span className="open-button1">Drop us a Query</span>

                <input type="text" placeholder="Contact Number" name="contact_no" required />
                <input type="password" placeholder="Email" name="email" required />
                <input type="text" placeholder="Query" name="query" required />
                <button type="submit" className="btn">
                  Submit Query
                </button>
                <span className="close" onClick={() => { this.setState({ toggle: !this.state.toggle }) }}>
                  &times;
                </span>
              </form>
            </div>
              : null
          }
          <button onClick={() => { this.setState({ toggle: !this.state.toggle }) }} className="open-button">Drop Us a Query</button>
        </div>
      </Fragment >
    );
  }
}

export default Home;