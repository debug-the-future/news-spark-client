import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import * as BS from 'react-bootstrap';

import Form from './components/form'
import View from './components/view'
import SitePreview from './components/SitePreview';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      node: 'landing',
      success: false,
      data: null      
    }
  }

  updateLanding = () => {
    this.state = {
      node: 'submission'
    }
  }

  handleSubmit = async (values) => {
    console.log('here', values)

    try {
      this.setState({ loading: true });
      const response = await fetch('http://06deff9c.ngrok.io/api/site', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      });
      const { data } = await response.json();
      console.log('data', data);
      this.setState({ success: true, loading: false, data: data });
    } catch (err) {
      console.warn(err);
      this.setState({ success: false, loading: false });
    }
  }

  render() {
    const isLanding = this.state.node === 'landing';
    const success = this.state.success;
    const formData = this.props.data;
    return (
      <BS.Row className={`app-container ${isLanding ? 'is-landing' : ''}`}>
        <BS.Col
          className={"form-container"}
          lg={4}
          lgOffset={isLanding ? 4 : 0}
          md={4}
          mdOffset={isLanding ? 4 : 0}
          sm={6}
          smOffset={isLanding ? 3 : 0}
          xs={12}
        >
          
          {
            success ? <View id={this.state.data._id} /> : <Form updateLanding={this.updateLanding} onSubmit={this.handleSubmit}/>  
          }
          
           
        </BS.Col>
        <BS.Col
          className={"preview-container"}
          lg={8}
          md={8}
          sm={6}
          xsHidden
        >
          <SitePreview data={formData} />
        </BS.Col>
      </BS.Row>
    );
  }
}

const mapStateToProps = (state) => {
  const formSelector = formValueSelector('form');
  const formFields = ['headline', 'what', 'asset', 'details', 'help', 'contact', 'hashtag'];
  const formValues = formSelector(state, ...formFields);
  return {
    data: formValues
  }
}

export default connect(mapStateToProps)(App);