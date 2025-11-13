
import BoardList from './BoardList'


function BoardCard() {


  return (
    <>
    <div className="board-card">
        <h2 className="title">게시판</h2>
        <ul className="board">
        <BoardList />
        <BoardList />
        <BoardList />
        </ul>
    </div>

    </>
  )
}

export default BoardCard
