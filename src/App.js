import React, { Component } from 'react';
import * as BS from 'react-bootstrap';

import Submission from './components/submission';
import SitePreview from './components/SitePreview';
import './App.css';

class App extends Component {
  submit = (values) => {
    console.log(values)
  }

  render() {
    return (
      <div className="container-fluid">
        <BS.Row>
          <BS.Col lg={3} md={4} sm={6} xs={12}>
            <Submission onSubmit={this.submit} />
          </BS.Col>
          <BS.Col lg={9} md={8} sm={6} xsHidden>
            <SitePreview />
          </BS.Col>
        </BS.Row>
      </div>
    );
  }
}

export default App;
