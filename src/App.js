import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render() { //function 생략가능 최신기능
    return ( //하나의 최상위 태그만 써야됨
    <header> 
      <h1>WEB</h1>
      world wide web!
  </header>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Subject></Subject>
    </div>
  );
}

export default App;
