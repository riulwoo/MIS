/* 로그인 화면 */

function Login() {
  return (
    <div className="login-container">
      <form id="login-form" className="login-form">
        <a href="index.html">
          <img className="logo" src="../img/logo.jpg" />
        </a>
        <div className="input-container">
          <input id="ID" type="text" placeholder="아이디" />
          <input id="Password" type="password" placeholder="비밀번호" />
        </div>
        <div className="link">
          <a className="find-link" href="#">
            아이디 찾기
          </a>
          <a className="find-link" href="#">
            비밀번호 찾기
          </a>
          <a className="join-link" href="join.html">
            회원가입
          </a>
        </div>
        <button className="login">로그인</button>
      </form>
    </div>
  );
}

export default Login;
