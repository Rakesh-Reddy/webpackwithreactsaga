import React, { Component } from 'react';
import './App.css';
import Task from './app/containers/Task/Task';

class App extends Component {
  
  render() { 
     return (
        <div className="App">
          <Task /> 
        </div>
    )
  }
}

export default App;