import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import * as BS from 'react-bootstrap';

import Form from './components/form'
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
    debugger
    return { type: 'Submit' }
  }

  render() {
    const isLanding = this.state.node === 'landing';
    const formData = this.props.data; 
    return (
      <div className="container-fluid">
        <BS.Row>
          <BS.Col
            lg={isLanding ? 12 : 3}
            md={isLanding ? 12 : 4}
            sm={isLanding ? 12 : 6}
            xs={12}
          >
            <Form onSubmit={this.handleSubmit}/>
            
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
            <SitePreview data={formData} />
          </BS.Col>
        </BS.Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const formSelector = formValueSelector('submit');
  const formFields = ['headline', 'what', 'asset'];
  const formValues = formSelector(state, ...formFields);

  return {
    data: formValues
  }
}

export default connect(mapStateToProps)(App);