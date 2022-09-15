/* 회원가입 화면 */
function Join() {
  return (
    <div className="join-container">
      <form id="join-form" className="join-form">
        <a href="index.html">
          <img className="logo" src="../img/logo.jpg" />
        </a>
        <div className="input-container">
          <div className="join-area">
            <input
              id="ID"
              className="id"
              type="text"
              placeholder="아이디"
              minlength="5"
              maxlength="10"
            />
            <button className="dlb-chk">중복확인</button>
          </div>
          <div className="join-area">
            <input
              id="PassWord"
              type="password"
              placeholder="비밀번호"
              minlength="8"
              maxlength="16"
            />
          </div>
          <div className="join-area">
            <input
              className="re-pw"
              type="password"
              placeholder="비밀번호 확인"
            />
          </div>
          <div className="join-area">
            <input id="Nick" type="text" placeholder="닉네임" />
          </div>
          <div className="join-area">
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
          <div className="join-area">
            <button className="join">회원가입</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Join;
