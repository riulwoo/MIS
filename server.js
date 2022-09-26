const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');
const fs = require('fs');
const io = require('socket.io')(server);
const connection = require('./DB/dbconn');
const PORT = 4000;

// DB 사용법
// connection변수의 내장함수 query를 이용
// -- 예시 --
// sql = "INSERT INTO tb_member (mb_ID, mb_PW, mb_Nick, mb_Email) VALUES ('admin','admin123','관리자','admin@mis.kr')";
// connection.query(sql, (err, results, fields)=>{
//   if(err){
//     console.log(err);
//   }
//   console.log(results);
// })


// 연결한 DB에 사용할 SQL 변수
let sql = "";

// React 프로젝트 폴더 연결
app.use(express.static('client/build'));
app.get('/', (req, res)=>{
    fs.sendFile('client/build/index.html' ,(err, data)=>{
      if(err){
        res.send('에러');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        res.end()
      }
    });
})














app.listen(PORT, function() {
  console.log(`listening on ${PORT}`)
})