/* 자유게시판 화면 // 공지사항 화면과 UI 같음 */
function FreeBoard() {
  return (
    <div className="freeBoard">
      <div className="freeBoard-container">
        <h1>자유게시판</h1>
        <div className="freeBoard-content">
          <ul>
            <li className="freeBoard-item">
              <span>9/8(목) 버그악용/불법프로그램 신고 보상 지급 안내</span>
              <span>22.09.15</span>
            </li>
            <li className="freeBoard-item">
              <span>넥슨플레이 '9월은 추석이라9!' 이벤트 진행 안내</span>
              <span>22.09.14</span>
            </li>
            <li className="freeBoard-item">
              <span>위치기반서비스 이용약관 개정 안내</span>
              <span>22.09.13</span>
            </li>
            <li className="freeBoard-item">
              <span>
                [패치완료] 9/8(목) ver1.2.368 마이너버전(4) 패치(7:30~9:00)
              </span>
              <span>22.09.12</span>
            </li>
            <li className="freeBoard-item">
              <span>공지사항1</span>
              <span>22.09.11</span>
            </li>
          </ul>
        </div>
        <div className="freeBoard-page">
          <ul>
            <li>[1]</li>
            <li>[2]</li>
            <li>[3]</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FreeBoard;
