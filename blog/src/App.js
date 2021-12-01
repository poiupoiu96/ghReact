import './App.css';
import React, { useState } from 'react';

function App() {
  let textColor = {color: 'blue', fontSize: '40px'}
  let [ title1, titleUpdate1 ] = useState([{area:'인천', date: '1993-03-01', num: 0}, 
                                            {area:'서울', date: '1994-02-20', num: 0},
                                            {area:'여수', date: '2021-10-01', num: 0}])
  let [likeNum, likeNumUpdate] = useState( [0] )     
  let [flag, flagUpdate] = useState(false)                                
  let [detail, detailUpdate] = useState( [{title: '인천맛집', date: '2021-08-07', text:'인천어디어디어디'},
                                          {title: '서울맛집', date: '2021-06-11', text:'서울어디어디어디'},
                                          {title: '여수맛집', date: '2021-02-07', text:'여수어디어디어디'}])

  let [clickNum, clickNumUpdate] = useState(0) 
  
  let [inpData, inpDataUpdate] = useState('')
  // state를 사용해서 내용 바꿔보기
  // let [chngeWord, chngeWordUpdate] = useState(['강릉', '부산', '목포'])

  // function changeWord () {
  //   let tempList = [...title1]
  //   tempList[0].area = chngeWord[0]
  //   tempList[1].area = chngeWord[1]
  //   tempList[2].area = chngeWord[2]
  //   titleUpdate1(tempList)
  // }
 
  function publishSub (dd) {
    console.log('title1',dd)
    let tempInpData = {}
    tempInpData.area = dd
    tempInpData.date = '1993-03-01'
    tempInpData.num = 0

    let tempPub = [...title1]
    tempPub.unshift(tempInpData) 
    console.log('tempPub',tempPub)
    titleUpdate1(tempPub)
  }

  return (
    <div className="App">
      <div className="black-nav" style={textColor}>
        <div>REACT BLOG</div>
      </div>
      {/* <button onClick={ changeWord }> 글씨 바꾸기 Btn</button> */}
      {/* <div className="list" onClick={ () => { flagUpdate(!flag) } }>
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
      </div> */}

      {/* 반복문 연습 map */}
      {
        title1.map((item, idx) => {
          return (
            <div onClick={ () => { clickNumUpdate(idx) }}>
              <div className="list" onClick={ () => { flagUpdate(!flag) }} key={idx}>
                <h3> { item.area } <span onClick={ () => { likeNumUpdate(likeNum + 1) }}>👍</span> { likeNum[idx] } </h3> 
                <p> { item.date } </p>
                <hr/>
              </div>
            </div>
          )
        })
      }

      {/* 컴포넌트로 만들기 */}
      {/* <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
        </div> */}
      {
        flag === true ? <Modal detail = {detail} clickNum = {clickNum}></Modal> : null
      }

      {/* props로 하위 컴포넌트에 전달방법  */}
      {/* <Modal 작명 = { 전송할 state }></Modal> */}
      

      {/* inpData */}
      <input onChange={ (e) => { inpDataUpdate(e.target.value) } }/>
      <button onClick={ () => {console.log(inpData)}}>input 저장 값</button>
      <hr/>

      <div className="publish">
        <input  onChange={ (e) => { inpDataUpdate(e.target.value) } }/>
        <button onClick={  () => {publishSub(inpData)} }>저장</button>
      </div>

      {/* 구 컴포넌트 테스트 */}
      <Profile></Profile>
    </div>
  );
}

// 신 component 만들기
function Modal (param) {
  return (
    <div className="modal">
      <h2>제목  { param.detail[param.clickNum].title }</h2>
      <p>날짜 { param.detail[param.clickNum].date }</p>
      <p>상세내용 { param.detail[param.clickNum].text }</p>
  </div>
  )
}

// 구 component 만들기
class Profile extends React.Component {
  constructor () {
    super()
    this.state = { name: 'Han', age: 29}
  }

  // 함수 만드는 곳
  changeNm = () => {
    this.setState( {name: 'Kim'} )
  }

  render () {
    return (
      <div>
        <h3>프로필</h3>
        <p>내 이름은 { this.state.name } 입니다. </p>
        {/* <button onClick={ () => { this.setState( {name: 'Kim'} ) } }>name 바꾸기</button> */}
        {/* this.changeNm.bind(this) ===> .bind(this)는 위에 바로 바인딩 안해주면 설정해야함  */}
        <button onClick={ this.changeNm }>name 바꾸기</button>
      </div>
    )
  }
}

export default App;