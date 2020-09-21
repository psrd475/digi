import React, { Component } from 'react';

import { Alert } from 'react-bootstrap';

class AlertBox extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      toggle: true
    }
  }
  render() {
    const { show } = this.state
    return (
      <div>
        {show ?
          <Alert variant="primary" onClose={() => this.setState({ show: false })} dismissible>
            <Alert.Heading>COVID-19 Lockdown Offer - Upto <strong style={{ color: "#303956" }}>20% </strong>Off &nbsp; | &nbsp;  <a href="#!" style={{ color: "#303956" }}>GRAB NOW</a></Alert.Heading>
          </Alert>
          : ''
        }

      </div>
    );
  }
}

export default AlertBox;