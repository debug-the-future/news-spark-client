import React, { Component } from 'react';
import Submission from './components/submission'
import './App.css';


class App extends Component {
  submit = (values) => {
    console.log(values)
  }

  render() {    
    return (
      <div>
        <Submission onSubmit={this.submit}/>
      </div>
    );
  }
}

export default App;
