import React, { Component } from 'react';
import './App.css';
import Name from './Components/Name'
import Stats from './Components/Stats'
import {HashRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Name />
          <Stats />
        </div>
      </HashRouter>
    );
  }
}

export default App;
