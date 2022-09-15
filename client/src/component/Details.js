/* 영화/영화인 상세정보 화면 */
function Details() {
  return (
    <div className="details">
      <div className="details-container">
        <div className="content">
          <div className="poster">영화 / 영화인 포스터</div>
          <div className="info">영화 정보 / 평균 별점</div>
          <div className="ref">관련 영화 정보</div>
        </div>
        <div className="star">
          <div className="star-rating">별점 평가</div>
          <div className="star-content">한줄 평 작성란</div>
        </div>
        <div className="other-review">다른 유저 리뷰 평 목록</div>
      </div>
    </div>
  );
}

export default Details;
