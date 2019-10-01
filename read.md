### React ###
1. NPM 은 Node 기반의 (페이스북제공)프로그램 => 개발을 도와줌
2. npx는 그안의 일부기능 ex)npx start ...
3. NPM (run 생략가능) start 하면 서버가 켜짐
4.   Local:            http://localhost:3000/ :자기만 접속       
     On Your Network:  http://192.168.219.188:3000/  :타인이 접속가능

5. public                     src
   index.html 이 들어가있음    대부분의 파일들이 있음 진입파일은 index.js
6. jsx = JavaScrpit 를 react문법에 맞게 바꿔줌 
### Function / Class Type ###
import React from 'react';
import './App.css;
function App() {
  return(
    <div className="App">
    </div>
  )
}
export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">

      </div>
    );
  }
}
export default App;
1. function 생략가능 최신기능
2. 하나의 최상위 태그만 써야됨
------------------
#### 배포하는법 ####
6. 실제 사용되는 index 파일에 불필요한 여백제거
  실제로 서비스할땐 build 안에 파일 사용 
7. 웹상에 실제 최상 디렉토리에는 build내 파일 사용하면된다.

8. npm -g serve {어디서든 사용할수있는 전역 서버}
   npx(한번만) serve -s(build 안에 있는걸 사용하겠다) build=>(용량이 더적어진다) 

########################

#### React Component ####
1. public은 npm run start 했을때 파일을 찾는장소
2. Component 의 render라는 메소드를 가지고있음

#### Props ####
1. {this.props.변수} 변수명을 써주면 속성태그를 사용하면 가능
#### React State ####
1. props 랑 같이 보고 이해해야됨
2. 공책참고
3. index.js 에 <App /> 태그처럼 내부적으로 숨기는게 좋은코드이다!