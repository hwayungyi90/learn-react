// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './compoments/Header';
import Main from './compoments/Main';
import Footer from './compoments/Footer';


// function Header() {
//   return (
//     <header>
//       <h1>LOGO</h1>
//     </header>
//   )
// }

// function Footer() {
//   return (
//     <footer>
//       <p>Copyright 2025. All rights reserved.</p>
//     </footer>
//   )
// }

// function Main() {
//   return (
//     <main>
//       <Btn />
//     </main>
//   )
// }

// 컴포넌트 생성 방법 
//Counter라는 함수를 정의하고, html을 리턴하면 컴포넌트 정의 끝!
// function Btn() {
//   return (
//     <button>Button</button>
//   )
// }

// *함수 만들 때 주의사항*
// 함수명을 꼭 대문자로 시작해야 함. 소문자로 시작하면 컴포넌트로 인식하지 않음.

// 그리고 위처럼 함수를 한페이지내에서 정의하게 되면 보기 힘들기때문에 compoment폴더 내에 컴포넌트를 정의해줌. 그리고 그 폴더에 있는 컴포넌트를 불러오는 방법은 import 문법을 사용하면 됨.
// 예시: import { Header } from './components/Header.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h2>리액트 시작!!</h2>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
