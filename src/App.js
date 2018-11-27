import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import Home from './home/home';
import Resume from './resume/resume'
import 'bulma/css/bulma.css';
import './index.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;

// React router-dom