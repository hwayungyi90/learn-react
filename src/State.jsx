

import { useState } from 'react';
import './App.css'


function State() {

    // 일반적으로 사용하는 방법
    // let counter = 1;

    // // 카운터 버튼 클릭 시 1씩 증가시키는 함수
    // function handleClick() {
    //     counter++; //카운터 증가시켰지만 UI에는 반영되지 않음
    //     console.log(counter); //콘솔에는 반영됨
    // }
    // return (
    //     <button onClick={handleClick}>카운터 : {counter}</button>
    // )


    // 그리하여 리액트에서는 useState를 사용하여 상태를 관리함.
    // useState(0) 은 0을 초기값으로 설정한다는 의미임.
    // Count는 상태값, setCount는 상태값을 변경하는 함수임.

      //카운트 버튼
      const [Count, setCount] = useState(0);
    //   function handleClick() {
    //     // 직접 숫자 또는 문자 입력 가능함 
    //     // setCount(5);  //직접 숫자 입력
    //     // setCount('Hello');  //직접 문자 입력
    //       setCount(Count + 1);
    //   }

    

      // 문자 useState 
      const [name, setName] = useState(""); // 처음엔 아무 글자도 없음

    //   삼항연산자 
    //   예제 1: 나이가 18세 이상이면 '성인', 아니면 '미성년자'
            // let age = 20;
            // let status = age >= 18 ? "성인" : "미성년자";
            // console.log(status); // 출력: 성인


    // useState 예제1: 버튼 누를 때마다 "안녕하세요" 라는 문장이 하나씩 더 생기게 하기(처음엔 아무것도 없음)
    const [message, setMessage] = useState("");
    function HelloBtn() {
        setMessage(message + "안녕하세요");
    }


  return (
    <>
    <p>현재 숫자: {Count}</p>
      {/* <button onClick={handleClick}>증가 {Count}</button> */}
      <button onClick={() => setCount(Count + 1)}>+1 올리기</button>  
      {/* 이렇게 하면 버튼 클릭 시 1씩 증가 */}

      <button onClick={()=>setCount(Count - 1)}>-1 내리기</button>
      <button onClick={()=>setCount(0)}>0 초기화</button>


          
      {/* 문자 useState 예제 */}
      <div className='input-box'>
          <input
        value={name}
        onChange={(e) => setName(e.target.value)} // 입력할 때마다 name 바꾸기
        placeholder="이름을 입력해 보세요"
      />

        <p>안녕하세요, {name ? name : "아직 이름이 없네요"}!</p> 
        {/* name 있으면 name 보여주고, 없으면 기본 문장 보여줘. */}
      </div>



{/* useState 예제1: 버튼 누를 때마다 "안녕하세요" 라는 문장이 하나씩 더 생기게 하기 */}
    <button onClick={HelloBtn}>안녕버튼</button>
    <p>{message}</p>
    </>
  )
}

export default State
