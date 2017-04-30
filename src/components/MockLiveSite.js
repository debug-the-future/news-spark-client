import * as React from 'react';
import PropTypes from 'prop-types';
import * as BS from 'react-bootstrap';
import * as _ from 'lodash';

import JadeIFrame from './JadeIFrame';

export default class MockLiveSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      userData: {},
    }
  }

  componentDidMount() {
    const userId = this.props.match.params.id;
    this.fetchUserData(userId);
  }

  fetchUserData = async (userId) => {
    try {
      this.setState({ loading: true });
      const response = await fetch(`http://06deff9c.ngrok.io/api/site/${userId}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        }
      });
      const { data } = await response.json();
      this.setState({ userData: data, loading: false });
    } catch (err) {
      console.warn(err);
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <JadeIFrame
        data={this.state.userData}
        style={{
          position: 'fixed',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
        }}
      />
    )
  }
}