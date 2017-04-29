import React, { Component } from 'react';
import * as BS from 'react-bootstrap';

import Landing from './components/landing'
import Submission from './components/submission'
import SitePreview from './components/SitePreview';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      node: 'landing'
    }
  }

  handleSubmit = (values) => {
    console.log(values)
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState({
      node: 'submission'
    })
  }

  render() {
    const isLanding = this.state.node === 'landing';

    return (
      <div className="container-fluid">
        <BS.Row>
          <BS.Col
            lg={isLanding ? 12 : 3}
            md={isLanding ? 12 : 4}
            sm={isLanding ? 12 : 6}
            xs={12}
          >
            {
              isLanding
              ? (<Landing onClick={this.handleClick} />)
              : (<Submission onSubmit={this.handleSubmit} />)
            }
          </BS.Col>
          <BS.Col
            lg={9}
            md={8}
            sm={6}
            lgHidden={isLanding}
            mdHidden={isLanding}
            smHidden={isLanding}
            xsHidden
          >
            <SitePreview />
          </BS.Col>
        </BS.Row>
      </div>
    );
  }
}

export default App;
