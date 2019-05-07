import React, { Component } from 'react';
import './App.css';
import Name from './Components/Name/Name'
import Stats from './Components/Stats'
import Header from './Components/Header/Header'
import {HashRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Name />
          <Stats />
        </div>
      </HashRouter>
    );
  }
}

export default App;
