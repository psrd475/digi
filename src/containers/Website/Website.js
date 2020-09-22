import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// import Header from '../../components/Header/Header';
import Home from '../Home/Home';
import Contact from '../../components/Contact/Contact';
// import AlertBox from '../../components/Home/AlertBox';
// import Footer from '../../components/Footer/Footer';

class Website extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          {/* <AlertBox />
          <Header /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />

          {/* <Footer /> */}
        </Router>
      </Fragment>
    );
  }
}

export default Website;