import { useState } from "react";

function BoardList() {

    // 예제 
    //좋아요 버튼
    const [like, setLike] = useState(0); // 좋아요 숫자 상자
    function LikeClick() {
        setLike(like + 1);
    }

    return (
      <li className="board-list">
        <img className="board-img" src="../src/assets/info_img02.jpg" alt="" />
        <div className="board-txt">
          <h3 className="board-title">게시판 제목영역입니다. 
            </h3>
          <p className="board-desc">게시판 설명 영역입니다.</p>
          <button onClick={LikeClick}>좋아요❤️</button>
              <span>{like}</span>
         
        </div>
      </li>
    )
  }

  export default BoardList;