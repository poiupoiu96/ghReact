/* eslint-disable */
import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  // let msg = 'story'
  // let reactStyle= {color: 'blue', fontSize: '30px'}
  // function test () {
  //   return 100
  // }
  let [title, titleUpdate] = useState(['인천 논현동에서', '인천 간석동에서', '서울에서']);
  let [numState, numUpdate] = useState(0); 

  function tiUpdt () {
    // titleUpdate(['논현', '간석', '서울'])
    let test = [...title]
    test[0] = '으하하하'
    test = test.sort()
    titleUpdate(test)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div> 
      </div> 
      {/* <h4> {test()} </h4> 
      <div style={ reactStyle }> react에서의 style!</div> */}
      <button onClick={ () => { titleUpdate(['논현', '간석', '서울']) }}>titleUpdate Button!!11111</button><br/>
      <button onClick={ tiUpdt }>titleUpdate Button!!2222</button>
      <div className="list">
        <h3>{ title[0] } <span onClick={ () =>{ numUpdate(numState++)}}>👍</span>{ numState }</h3>
        <p>2021년 1월 1일</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[1] } </h3>
        <p>2021년 1월 1일</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[2] } </h3>
        <p>2021년 1월 1일</p>
        <hr/>
      </div>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>

      <Modal />
    </div>
  );
}

function Modal () {
  return (
    <div className="modal">
        <h2>제목1</h2>
        <p>날짜1</p>
        <p>상세내용1</p>
    </div>
  )
}


export default App;
