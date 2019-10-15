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
#### 17.2 컴포넌트 이벤트 만들기2+3 ####
1. 반복문에서 필터 사용법이라는게 있음
2. break 반복문을 강제로 종료
3. Number함수 강제로 숫자로바꿈
#### 18 베이스 캠프 ####
1. 홈페이지가 새로고침 되지않고 동적으로 내용이 바뀜
2. Tip) 햇갈릴때 이미지 검색으로 
3. Component 안에서 props를 바꾸는건 안됨. => props밖에서 바꾸는건 괜찮습니다.
4. 상위컴포넌트가 하위에게 명령할때 props를 / 하위가 상위에게 데이트를 전달할때 props를 변경할수없기에 event를 사용한다.
※REDUX 
#### 19.1 Create 구현 : 소개 ####
1. Create Read Update Delete
#### 19.2 Create 구현 : mode 변경기능 ####
1. 현재상태의 따라서 Mode를 변경할수있게함
#### 19.3 Create 구현 : mode 전환기능 ####
#### 19.4 Create 구현 : Form ####
1. form 원래는 action값에 어디에 전송할지 정해줌
2. (몰라두됨)post방식으로 전달해야 url이 보이지않음
3. onSubmit html의 기능 중요!
#### 19.5 Create 구현 : onSubmit 이벤트 ####
1. debugger 에서 e 에 값과 위치를 확인할수있음
#### 19.6 Create 구현 : contents 변경 ####
1. max_content_id => state로 하지않고 객체로 한이유는 ui에 영향을 주지 않기에 
   할경우 불피요한 랜더링이라고 할수있음
2. this.state.content.push = x => setState 사용해야됨
3. 배열에 추가하는법 .push 는 원본을바꿈/ .concat 은 원본은 바꾸지않음 
4. 주석과 다른방식은 원본을 건들지 않고
5. 주석의 방법을 쓰면 퍼포먼스에 영향을 끼치기에 수정이 어려움 
#### 19.7 Create 구현 : shouldComponentUpdate 변경 ####
## 19.6의 문제점 ##
1. var b = a.concat(n); 설명
2. TOC가 매번 실행되기에 부분적으로 실행가능
3. shouldComponentUpdate 그아래 render함수가 실행되지않음
4. newProps에서 만약에 원소가 추가됬다면 추가된 것으로 보여줌
5. this.props.data 에서 현재값을 알 수 있다.
정리
1. render이전에 shouldComponentUpdate가 실행된다
2. shouldComponentUpdate가 return 값이 트루면 render가 호출되고 / false면 render가 호출 되지 않도록 약속되어있다.
3. shouldComponentUpdate 새롭게 바뀐값과 이전값에 접근할수있다 
4. 종합하면 ===> TOC 로 들어오는 data라 하는것을 
#### 19.8 Create 구현 : immutable ####
1. 원본을 변형하지 않는다.
2. Array.from(a) = b 하면 내용은 같지만 새로운 배열이 만들어짐
3. a ==/ b
4. 복사된 새로운 객체를 만들고싶을때
    var b = Object.assign({},a);
    a ==/ b
5. Immutable 원본을 언제든 유지할수있음!
#### 20.1/2/3 Update 구현 ####
1. 업데이트는 Create와 Read기능을 포함하고 있다고 볼 수 도있음
2. react 에서 html로 보이지만 실제 html은 아님
3. 새로운 js의 기능 []
4. this.inputFormHandler = this.inputFormHandler.bind(this)로 줄임가능 