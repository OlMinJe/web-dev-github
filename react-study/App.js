import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return(
      <>
        <header>
          <p>이것은 헤더입니다.</p>
        </header>
        <div className='App'>
          Hello React
        </div>
      </>
    );
  }
}

export default App;
