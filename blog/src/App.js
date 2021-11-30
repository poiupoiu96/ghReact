import './App.css';
import React, { useState } from 'react';

function App() {
  let textColor = {color: 'blue', fontSize: '40px'}
  let [ title1, titleUpdate1 ] = useState([{area:'인천', date: '1993-03-01'}, 
                                            {area:'서울', date: '1994-02-20'},
                                            {area:'여수', date: '2021-10-01'}]);
  let [likeNum, likeNumUpdate] = useState(0)         
  let [flag, flagUpdate] = useState(false)                                
  
  // state를 사용해서 내용 바꿔보기
  // let [chngeWord, chngeWordUpdate] = useState(['강릉', '부산', '목포'])

  // function changeWord () {
  //   let tempList = [...title1]
  //   tempList[0].area = chngeWord[0]
  //   tempList[1].area = chngeWord[1]
  //   tempList[2].area = chngeWord[2]
  //   titleUpdate1(tempList)
  // }

  return (
    <div className="App">
      <div className="black-nav" style={textColor}>
        <div>REACT BLOG</div>
      </div>
      {/* <button onClick={ changeWord }> 글씨 바꾸기 Btn</button> */}
      <div className="list" onClick={ () => { flagUpdate(!flag) } }>
        <h3 > { title1[0].area } <span onClick={ () => { likeNumUpdate(likeNum + 1) }}>👍</span> { likeNum } </h3> 
        <p> { title1[0].date } </p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title1[1].area } </h3>
        <p> { title1[1].date } </p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title1[2].area } </h3>
        <p> { title1[2].date } </p>
        <hr/>
      </div>

      {/* 컴포넌트로 만들기 */}
      {/* <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
        </div> */}

      {
        flag === true ? <Modal></Modal> : null
      }
    </div>
  );
}

function Modal () {
  return (
    // git
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
  </div>
  )
}

export default App;