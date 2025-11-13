
// import { useState } from 'react'
import './App.css'
import BoardCard from './compoments/BoardCard'


function App() {

  return (
    <>
    <main>
      <div className="container">
        <BoardCard />
        <BoardCard />
        <BoardCard />
      </div>
    </main>

    </>
  )
}

export default App



{/* <li>{person.name + '는 ' + person.job + '이고 올해 ' + person.age + '살 입니다.'}</li> */}
