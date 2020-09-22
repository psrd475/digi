import React, { Component, Fragment } from 'react';

class Subscribe extends Component {
  render() {
    return (
      <Fragment>
        {
          /* ======= Subscribe Section ======= */
        }
        <section id="subscribe">
          <div className="container" data-aos="zoom-in">
            <div className="section-header">
              <h2>Newsletter</h2>
              <p>Rerum numquam illum recusandae quia mollitia consequatur.</p>
            </div>
            <form method="POST" action="#">
              <div className="form-row justify-content-center">
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="col-auto">
                  <button type="submit">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </section>

      </Fragment>
    );
  }
}

export default Subscribe;