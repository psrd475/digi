import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Ai from '../../components/Ai/Ai';
import Website from '../Website/Website';
import Event from '../../components/Event/Event';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route exact path="/ai" component={Ai} />
          <Route path="/" component={Website} />
          <Route path="/event" component={Event} />
        </Router>
      </Fragment>
    );
  }
}

export default App;