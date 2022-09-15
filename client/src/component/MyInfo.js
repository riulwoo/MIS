/* 마이페이지 화면 */
function MyInfo() {
  return (
    <div className="myInfo">
      <div className="myInfo-container">
        <div className="user-container">
          <span id="Nick">닉네임</span>
          <button>정보수정</button>
        </div>
        <div className="favorites">
          <span>즐겨찾기 목록</span>
          <div className="favorites-list"></div>
        </div>
        <div className="recent-record">
          <span>최근 기록</span>
          <div className="recent-record-list"></div>
        </div>
      </div>
    </div>
  );
}

export default MyInfo;
