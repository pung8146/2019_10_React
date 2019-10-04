import React, { Component } from 'react';

class Subject extends Component {
  render() { //function 생략가능 최신기능
    return ( //하나의 최상위 태그만 써야됨
    <header> 
      <h1><a href="/" onClick={function(e){
        e.preventDefault();
        this.props.onChangePage();  // 함수임
      }.bind(this)}>{this.props.title}</a></h1>
      {this.props.sub}
  </header>
    );
  }
}

export default Subject;