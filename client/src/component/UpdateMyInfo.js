/* 정보수정 화면 */
function UpdateMyInfo() {
  return (
    <div className="updateMyInfo-container">
      <form id="updateMyInfo-form" className="updateMyInfo-form">
        <a href="index.html">
          <img className="logo" src="../img/logo.jpg" />
        </a>
        <div className="input-container">
          <div className="updateMyInfo-area">
            <input
              id="ID"
              className="id"
              type="text"
              placeholder="아이디"
              minlength="5"
              maxlength="10"
              disabled="true"
            />
          </div>
          <div className="updateMyInfo-area">
            <input
              id="PassWord"
              type="password"
              placeholder="비밀번호"
              minlength="8"
              maxlength="16"
            />
          </div>
          <div className="updateMyInfo-area">
            <input
              className="re-pw"
              type="password"
              placeholder="비밀번호 확인"
            />
          </div>
          <div className="updateMyInfo-area">
            <input id="Nick" type="text" placeholder="닉네임" disabled="true" />
          </div>
          <div className="updateMyInfo-area">
            <input
              id="Email"
              className="email"
              type="email"
              placeholder="이메일 주소"
            />
            <button className="auth">인증하기</button>
          </div>
          <div className="hidden">
            <input
              className="authNo"
              type="text"
              placeholder="인증번호를 입력하세요."
            />
          </div>
          <div className="updateMyInfo-area">
            <button className="updateMyInfo">정보수정</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateMyInfo;
