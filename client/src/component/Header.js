/* 헤더 */
function Header() {
  return (
    <div className="header">
      <div className="header-item">
        <svg
          /* onClick={hiddenSidebar} */
          className="bars"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
        <a href="index.html">
          <img className="logo" src="../img/logo.jpg" />
        </a>
      </div>
      <div className="header-item">
        <div>
          <input
            className="search"
            type="text"
            placeholder="영화명 or 배우명 검색"
          />
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
          </svg>
        </div>
      </div>
      <div className="header-item">
        <div className="login-item">
          <a className="login-link" href="login.html">
            로그인
          </a>
        </div>
        <div className="logout-item hidden">
          <a className="logout-link" href="index.html">
            로그아웃
          </a>
          <button>마이페이지</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
