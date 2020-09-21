import React, { Component, Fragment } from 'react';

const feedback = [
  {
    view: 'One of the best Artificial intelligence Course. In this course I learn everything like data science, python, NLP, machine learning, deep learning. I thing it is best  Artificial intelligence Course in Delhi,Best Data science Institute in Delhi,Data Science Institute in Delhi',
    name: ' DEVENDRA SINGH CHUNDAWAT',
  },
  {
    view: 'A very good institute. The instructor are very good. A best institute for artificial intelligence course in delhi . It includes a briefed course for data science course in delhi .  In my opinion every student should approach this institue for artifical intelligence course and data science course .',
    name: 'Kuldeep'
  },
  {
    view: 'Business analytics Course in Delhi, business analytics Institute in Delhi, Data Science Course in Delhi, Data Science Institute in Delhi this is a best institute in delhi.',
    name: 'Vishesh Khandelwal'
  },
  {
    view: 'Best data science institute in Delhi..😊 You will learn everything form scratch. Mathematics behind algorithm.Time &amp; space taken by algorithm After this course I have confidence I can crack an interview.',
    name: 'Hitesh Gehlot'
  }
]
class Feedback extends Component {
  render() {
    const fb = feedback.map((item, index) => {
      return (
        <div className="col-12 col-md-6" key={index}>
          <div className="card card-feedback card-body">
            <blockquote className="blockquote mb-0">
              <p className="text-70 small mb-0">
                {item.view}
              </p>
            </blockquote>
          </div>
          <div className="media ml-12pt">
            <div className="media-left mr-12pt">
              <a
                href="fixed-student-profile.html"
                className="avatar avatar-sm"
              >
                {/* <img src="assets/images/people/110/guy-.jpg" width="40" alt="avatar" class="rounded-circle"> */}
                <span className="avatar-title rounded-circle">India</span>
              </a>
            </div>
            <div className="media-body media-middle">
              <a href="fixed-student-profile.html" className="card-title">
                {item.name}
              </a>
              <div className="rating mt-4pt">
                <span className="rating__item">
                  <span className="material-icons">star</span>
                </span>
                <span className="rating__item">
                  <span className="material-icons">star</span>
                </span>
                <span className="rating__item">
                  <span className="material-icons">star</span>
                </span>
                <span className="rating__item">
                  <span className="material-icons">star</span>
                </span>
                <span className="rating__item">
                  <span className="material-icons">star_border</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <Fragment>
        <div className="position-relative carousel-card col-lg-8 p-0 mx-auto">
          <div className="row d-block js-mdk-carousel" id="carousel-feedback">
            <a
              className="carousel-control-next js-mdk-carousel-control mt-n24pt"
              href="#carousel-feedback"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-icon material-icons"
                aria-hidden="true"
              >
                keyboard_arrow_right
                      </span>
              <span className="sr-only">Next</span>
            </a>
            <div className="mdk-carousel__content">
              {fb}
            </div>
          </div >
        </div >

      </Fragment>
    );
  }
}

export default Feedback;