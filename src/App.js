import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render() { //function 생략가능 최신기능
    return ( //하나의 최상위 태그만 써야됨
    <header> 
      <h1>{this.props.title}</h1>
      {this.props.sub}
  </header>
    );
  }
}

class Toc extends Component{
  render(){
    return (
      <nav>
          <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
          </ul>
      </nav>
    )
  }
}

class Content extends Component {
  render(){
    return (
       <article>
         <h2>{this.props.title}</h2>
         {this.props.desc}
        </article>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Subject title="WEB" sub="world wide Web!"></Subject>
      <Subject title="React" sub="For UI"></Subject>
      <Toc></Toc>
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
  );
}

export default App;
