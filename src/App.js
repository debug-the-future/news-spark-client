import React, { Component } from 'react';
<<<<<<< HEAD
import Landing from './components/landing'
import Submission from './components/submission'

import './App.css';
=======
>>>>>>> e9ca0f2a1e5c84f570dfa4361b86306478ac2335

import Submission from './components/submission';
import SitePreview from './components/SitePreview';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      node: 'landing'
    }
}
  submit = (values) => {
    console.log(values)
  }
  handleClick = (e) => {
    e.preventDefault()
    this.setState({
      node: 'submission'
    })
  }

  render() {
    return (
      <div>
        <Landing onClick={this.handleClick}/>
        {this.state === 'submission' ? <Submission onSubmit={this.submit}/> : null }        
        <Submission onSubmit={this.submit} />
        <SitePreview />
      </div>
    );
  }
}

export default App;
