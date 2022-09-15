import React, { Component } from "react";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Main from "./component/Main";
import Genre from "./component/Genre";
import Details from "./component/Details";
import MyInfo from "./component/MyInfo";
import Notice from "./component/Notice";
import FreeBoard from "./component/FreeBoard";
import Join from "./component/Join";
import Login from "./component/Login";
import UpdateMyInfo from "./component/UpdateMyInfo";
import "./App.css";
/* 위의 import 요소들을 태그로 사용할 수 있음. 
Header와 Sidebar는 Join, Login, UpdateMyInfo 말고는 다른 컴포넌트들과 같이 사용 
무조건 하나의 <div>태그안에 넣어야 정상 작동함. */

function App() {
  return (
    <div className="index">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
