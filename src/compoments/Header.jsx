
//함수 선언식
function Header() {

    //상태, 로직 
    return (
      <header>
        <h1>LOGO</h1>
      </header>
    )
  }

export default Header;


//상태가 없는 UI만 담당하는 컴포넌트
  // 함수 표현식으로도 쓸수 있음
//   let Header = ()=> {
//     return (
//       <header>
//         <h1>LOGO</h1>
//       </header>
//     )
//   }

// 그런데 두가지 차이점이 있음. 
// 함수 표현식은 앞에 export default를 붙일 수 없음. 붙이면 에러가 남. 함수 선언식은 앞에 export default를 붙일 수 있음.
// 예시(함수 선언식 방식): 
// export default function Header() {
//     return (
//       <header>
//         <h1>LOGO</h1>
//       </header>
//     )
//   }

// 함수 표현식은 앞에 export는 붙일 수 있음 
// 예시: 
// export let Header = ()=> (
//       <header>
//         <h1>LOGO</h1>
//       </header>
//     )

//이렇게 간략하게도 쓸 수 있음
