/* 메인 화면 */
function Main() {
  return (
    <div className="main-container">
      <div className="boxOffice">
        <div className="popular-movie">
          <span>박스오피스(인기 순위)</span>
        </div>
        <div className="boxOffice-item"></div>
      </div>
      <div className="boxOffice">
        <div className="popular-actor">
          <span>박스오피스(인기 배우)</span>
        </div>
        <div className="boxOffice-item"></div>
      </div>
      <div className="boxOffice">
        <div className="season-movie">
          <span>박스오피스(계절 영화)</span>
        </div>
        <div className="boxOffice-item"></div>
      </div>
    </div>
  );
}
export default Main;
