### React ###
1. NPM 은 Node 기반의 (페이스북제공)프로그램 => 개발을 도와줌
2. npx는 그안의 일부기능 ex)npx start ...
3. NPM (run 생략가능) start 하면 서버가 켜짐
4.   Local:            http://localhost:3000/ :자기만 접속       
     On Your Network:  http://192.168.219.188:3000/  :타인이 접속가능

5. public                     src
   index.html 이 들어가있음    대부분의 파일들이 있음 진입파일은 index.js
6. jsx = JavaScrpit 를 react문법에 맞게 바꿔줌 
7. react의 장점은 홈페이지를 매번 리로드 안해두됨
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
2. 사용자 UI = props / 개발자 state 중심
3. props = 태그에 속하며 component를 더 자유롭게
4. state값을 초기화해서 기본값을 정해줌
5. render값을 먼저 읽기전에 construct를 실행
5. index.js 에 <App /> 태그처럼 내부적으로 숨기는게 좋은코드이다!
#### React Key ####
1. index.js:1375 Warning: Each child in a list should have a unique "key" prop. 에러는
   key={data[i].id 키를 지정해주면 에러는 안사라짐 
#### 16.1 이벤트 state props ####
1. React 에서는 props 나 state값 이 바뀌면 해당되는 render함수가 호출되도록 설정되어있다.
    = 즉 다시 그려짐
#### 16.2 이벤트 설치 ####
1. js에서는 onclick =/ react에서는 onClick
2. debugger; 는 개발자 소스창에서 까지 그아래 기능이 실행되는걸 정지
3. preventDefault(); 이벤트 실행을 막음
#### 16.3 이벤트에서 state 변경하기 ####
1. this.state.mode = 'welcome';
2. 변경방법1: setState / 변경방법2:bind로 (this를 찾아줌)
#### 16.4 이벤트 함수 bind 이해하기 ####
1. bind 묶어준다
2. ex)bindTest.bind(변수);
3. 16-3 에서보면 bind를 app이라고하는 컴포넌트 자체를 가리키는 객체를 이 함수안으로 주입
#### 16.5 이벤트 setState 함수 이해하기 ####
1. setState 에서 객체 형태로 변경시켜야 된다!
2. this.state.변경 = "변경" 은 리액트가 인식을 못함
3. state 에서 변경된다면 setState로 알려줘야함!
4. constructor에서는 편하게 사용해도 괜찮음
#### 17.1 컴포넌트 이벤트 만들기 ####
1. Subject 에 onChangePage={fucntion(){}}
