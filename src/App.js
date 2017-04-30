import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import * as BS from 'react-bootstrap';

import Form from './components/form'
import SitePreview from './components/SitePreview';
import Loading from './components/loading'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      node: 'landing',
      loading: false,
      success: false
      // node: 'submission'
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
      await fetch('ngrokURL', { type: 'POST', body: values });
      this.setState({ success: true, loading: false });
    } catch (err) {
      console.warn(err);
      this.setState({ success: false, loading: false });
    }
  }

  render() {
    const isLanding = this.state.node === 'landing';
    const isLoading = this.state.loading;
    const isSuccessful = this.state.success;
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
          <Form
            updateLanding={this.updateLanding}
            onSubmit={this.handleSubmit}
          />
          {
            isLoading ? <Loading /> : null
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