

import { useState } from 'react';
import './App.css'


// 괄호 안의 props는 부모가 보낸 모든 정보가 담긴 상자 같은 것이다.
function Hello(props) {
    return (
        <>
        <h2>안녕, {props.name}!</h2>
        </>
    )
  }

//   여러개의 props 전달하기 예시 
// Profile 컴포넌트는 '이름', '나이', '취미'를 받아요.
// function Profile(props) {
//     return (
//       <p>
//         안녕하세요! 저는 {props.age}살 {props.name}이고,
//         취미는 {props.hobby}예요! 😊
//       </p>
//     );
//   }
// 구조분해할당 버전
function Profile({ name, age, hobby }) {
    return (
      <p>
        안녕하세요! 저는 {age}살 {name}이고,
        취미는 {hobby}예요! 
      </p>
    );
  }


//   예시2: 버튼 컴포넌트 스타일 만들기
// function Button(props) {
//     return (
//       <button
//         style={{
//           backgroundColor: props.color, // 버튼 색깔
//           margin: "5px",

//         }}
//       >
//         {props.text}
//       </button>
//     );
//   }

  // 구조분해할당 버전
  function Button({ color, text }) {
    return (
      <button
        style={{
          backgroundColor: color, 
          margin: "5px",
        }}
      >
        {text}
      </button>
    );
  }


  // 2. 조건문 렌더링 예시 
  // 로그인 상태 체크 함수
  function LoginCheck({ isLoggedIn = true }) {
    if(isLoggedIn) {
      return <p>로그인 되었습니다.</p>
    } else {
      return <p>로그인 전입니다.</p>
      // 만약 로그인 전에는 아무것도 안보이게 하고싶다면, return null을 추가하면 됨.
      // return null;
    }
  }

  // 위 조건문의 삼항연산자 버전
  // function LoginCheck({ isLoggedIn = true }) {
  //   return isLoggedIn ? <p>로그인 되었습니다.</p> : <p>로그인 전입니다.</p>;
  // }



  // 3. 리스트 렌더링 예시 
  const fruits = ['사과', '바나나', '포도', '딸기', '망고'];
  function FruitList() {
    return (
      <ul>
        {fruits.map((fruit, index) => (
          //  우선 key={index} 제외하고 보여주기. 개발자 모드에서 에러 확인
          // <li>{index + 1} : {fruit}</li>
          
          // map() 내부에는 반드시 key를 추가해주어야 함.
          // 이유는 렌더링 될 때 각 아이템을 구분하기 위해서 사용하기 때문임.
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    )
  }

  
  
  
  
  
  
  // props와 useState 함께 사용할 예시 예제
  
  function LikeButton({ name, bgColor, children }) {
    // 좋아요 개수를 저장할 useState
    const [likes, setLikes] = useState(0);
    
    // 버튼을 누를 때마다 좋아요 개수 1 증가
    function addLike() {
      setLikes(likes + 1);
    }
    
    
    
    // 4. 댓글 리스트 예시 (배열)
    // const comments = [
    //   "정말 공감돼요!",
    //   "좋은 하루 보내세요 😄",
    //   "리액트 재밌죠?",
    // ];
    

    // 5. 인풋에 입력하면 댓글목록에 추가하게 하기 
    // 인풋에 글자 입력하여 useState에 저장 
    const [NewComment, setNewComment] = useState("");

    const [comments, setComments] = useState(
      [
        "정말 공감돼요!",
        "좋은 하루 보내세요 😄",
        "리액트 재밌죠?",
      ]
    )


    // 추가 버튼 이벤트 함수
    function addComment() {
      // 아무 것도 안 썼으면 추가 안 함(조건이 참이면 바로 함수 종료). 즉 입력창이 비어있거나 빈칸만 있을 때는 추가하지 말자는 뜻
      // 사용자가 아무 글도 안 쓰고 [추가] 버튼을 눌렀을 때, 그냥 빈 댓글이 추가되면 이상하니 그런 걸 막는 코드임
      // trim(): 앞뒤의 빈칸 다 없애줌 
      // if(newComment.trim() === "") {
      //   return;
      // }
      if (NewComment.trim() === "") return;  //간단하게 쓰면 이렇게 써도 됨

      // 새로운 댓글을 기존 댓글 목록에 더하기
    setComments([...comments, NewComment]);

    setNewComment(""); // 입력창 비우기

    }


    // input onchange 함수 
    function InputChange(event) {
      setNewComment(event.target.value);
    }


  
    return (
      <div
        style={{
          border: "2px solid #ddd",
          borderRadius: "10px",
          padding: "16px",
          margin: "10px 0",
          width: "250px",
          textAlign: "center",
        }}
      >
        <h3>{name}의 게시물</h3>
        <>
          {children}
        </>
        <p>❤️ {likes}개</p>
        <button
          onClick={addLike}
          style={{
            backgroundColor: bgColor,
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "8px 12px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          좋아요 👍
        </button>

        {/* 좋아요 개수가 5개 이상이면 "많은 사랑 받고있어요!" 출력, 아니면 "아쉽네요." 출력 */}
        {likes >= 5 ? <p>많은 사랑 받고있어요!</p> : <p>아쉽네요. 좋아요 버튼을 눌러주세요.</p>}


        <hr style={{ margin: "15px 0" }} />

        <h4>💬 댓글 목록</h4>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>

      {/* 리스트에 조건부 렌더링: 댓글이 하나도 없을 때 "아직 댓글이 없어요" 문구 보여주기  */}
      {/* if(comments.length > 0) {
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          )) }
        </ul>
      }else {
        <p>아직 댓글이 없어요</p>
      } */}

      {/* 삼항연산자 버전  */}
      {/* {comments.length > 0 ? (
        <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        )) }
      </ul>
      ) : (
        <p>아직 댓글이 없어요</p>
      )} */}


      {/* 인풋에 입력하면 댓글 목록에 추가하게 하기  */}
      <hr style={{ margin: "15px 0" }} />

        <div style={{display: 'flex'}}>
          <input
            type="text"
            value={NewComment}
            // onchange : 입력창의 내용이 바뀔 때마다 실행되는 명령(이벤트). 
            // 하여 아래 내용은 입력창에 무언가 변화(change)가 생기면(on), 그때 함수를 실행하라는 뜻
            onChange={InputChange}
            // onChange={(e) => setNewComment(e.target.value)}  //한줄로 쓴 함수
            placeholder="댓글을 입력하세요"
            style={{
              padding: "8px",
              width: "180px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={addComment}
            style={{
              marginLeft: "5px",
              width: "60px",
              padding: "8px 0",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            추가
          </button>
        </div>

      </div>
    );
  }


function Props() {
  return (
    <>
    {/* 부모가 name을 "민수"라고 보냄 */}
    {/* <Hello name="민수" />
    <Hello name="지연" />
    <Hello name="하준" /> */}

    <br /> <br /> 
    {/* 여러개의 props 전달하기 예시 */}
    {/* <Profile name="민수" age={20} hobby="코딩" />
    <Profile name="지연" age={21} hobby="독서" />
    <Profile name="하준" age={22} hobby="운동" /> */}

    <br /> <br /> 
    {/* 버튼 컴포넌트 스타일 만들기 예시 */}
    {/* <Button color="skyblue" text="파랑 버튼" />
    <Button color="yellow" text="노랑 버튼" />
    <Button color="hotpink" text="핑크 버튼" /> */}

    <br /> <br /> 

    {/* 조건문 랜더링 예시  */}
    <LoginCheck isLoggedIn={false} />
    <br /> <br /> 

    {/* 리스트 렌더링 예시  */}
    <FruitList />

    {/* 좋아요 버튼 예시 예제 */}
    <LikeButton name="민수" bgColor="#ff4081">
      {/* children은 자체 컴포넌트에서 콘텐츠를 추가하고싶을 때 사용 */}
      {/* children 으로 전달할 내용  */}
      <img src="./src/assets/info_img02.jpg" alt="" style={{width: "100%"}} />
      <p>오늘은 바람이 많이 부네요.</p> 
    </LikeButton>
    {/* <LikeButton name="지연" bgColor="#00ff00">
      <p>오늘도 행복한 하루 되세요.</p>
    </LikeButton> */}
    {/* <LikeButton name="하준" bgColor="blue">
      <p>오늘 아침에 커피를 마셨어요.</p>
    </LikeButton> */}



    </>


  )
}


// 주의: props는 데이터 전달만 가능하고 변경은 불가함.
// 즉, props는 읽기 전용이다.

export default Props



// 20251110 
// 1. children 예제 추가 (자체 컴포넌트에서 콘텐츠를 추가하고싶을 때 사용)
// 이미지 추가하게 하기 


// 2. 조건부 렌더링 (조건에 따라 다른 콘텐츠를 보여줄 때 사용)
// if문, 삼항연산자(조건 ? 참 : 거짓), && (논리연산자) 등 사용 가능.
// 예시: 로그인 상태 체크 함수 예제
// 문제: 좋아요 개수가 5개 이상이면 "대박!" 출력, 아니면 "아쉽네요." 출력


// 3. 리스트 렌더링 (여러개의 데이터를 배열로 전달하고, 각 데이터를 컴포넌트로 렌더링할 때 사용. 즉 여러개의 데이터를 화면에 반복해서 보여줄 때 사용)
//map() 함수 사용.
// {배열.map((아이템, 인덱스) => (
//   <p key={인덱스}>{아이템}</p>
// ))}


// 4. 조건부 + 리스트 예제 
// 댓글이 하나도 없을 때 "아직 댓글이 없어요" 문구 보여주기 (164번째 줄 )


// 5. 댓글 인풋에 입력하면 댓글목록에 추가하기 




