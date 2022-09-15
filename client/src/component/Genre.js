/* 장르별 영화 화면 */
function Genre() {
  return (
    <div className="genre">
      <div className="genre-container">
        <div className="genre-item">
          <span>액션/SF</span>
        </div>
        <div className="genre-item">
          <span>판타지</span>
        </div>
        <div className="genre-item">
          <span>어드벤처</span>
        </div>
        <div className="genre-item">
          <span>멜로/로맨스</span>
        </div>
        <div className="genre-item">
          <span>전쟁</span>
        </div>
        <div className="genre-item">
          <span>공포/스릴러</span>
        </div>
        <div className="genre-item">
          <span>범죄</span>
        </div>
        <div className="genre-item">
          <span>미스터리</span>
        </div>
        <div className="genre-item">
          <span>가족</span>
        </div>
        <div className="genre-item">
          <span>코미디</span>
        </div>
        <div className="genre-item">
          <span>사극</span>
        </div>
        <div className="genre-item">
          <span>다큐멘터리</span>
        </div>
        <div className="genre-item">
          <span>뮤지컬</span>
        </div>
        <div className="genre-item">
          <span>애니메이션</span>
        </div>
      </div>
      <div className="genre-sort">
        <select>
          <option value="1">인기순</option>
          <option value="2">최신순</option>
          <option value="3">오래된순</option>
        </select>
      </div>
      <div className="genre-movie">
        <div className="movie-item">
          <img src=""></img>
        </div>
        <div className="movie-item"></div>
        <div className="movie-item"></div>
        <div className="movie-item"></div>
        <div className="movie-item"></div>
        <div className="movie-item"></div>
        <div className="movie-item"></div>
        <div className="movie-item"></div>
        <div className="movie-item"></div>
      </div>
    </div>
  );
}

export default Genre;
