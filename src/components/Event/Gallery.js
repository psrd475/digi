import React, { Component, Fragment } from 'react';

// import {
//   Carousel
// } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel2';

class Gallery extends Component {

  render() {
    const options = {
      items: 6,
      nav: true,
      rewind: true,
      // autoplay: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false
    };


    return (
      <Fragment>
        {
          /* ======= Gallery Section ======= */
        }
        <section id="gallery">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Gallery</h2>
              <p>Check our gallery from the recent events</p>
            </div>
          </div>
          <OwlCarousel options={options} >
            <a
              href="assets/img/gallery/1.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            ><img src="assets/img/gallery/1.jpg" alt="" />
            </a>
            <a
              href="assets/img/gallery/2.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            ><img src="assets/img/gallery/2.jpg" alt="" />
            </a>
            <a
              href="assets/img/gallery/3.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            ><img src="assets/img/gallery/3.jpg" alt="" />
            </a>
            <a
              href="assets/img/gallery/4.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            ><img src="assets/img/gallery/4.jpg" alt="" />
            </a>
            <a
              href="assets/img/gallery/5.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            ><img src="assets/img/gallery/5.jpg" alt="" />
            </a>
            <a
              href="assets/img/gallery/6.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            ><img src="assets/img/gallery/6.jpg" alt="" />
            </a>
            <a
              href="assets/img/gallery/7.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            ><img src="assets/img/gallery/7.jpg" alt="" />
            </a>
            <a
              href="assets/img/gallery/8.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            ><img src="assets/img/gallery/8.jpg" alt="" />
            </a>
          </OwlCarousel>

        </section>

      </Fragment>
    );
  }
}

export default Gallery;