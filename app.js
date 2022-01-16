// console.log('hello')
const express = require('express'); // 모듈 , 패키지 . npm
const app = express();
const port = 3000;

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'a12281@3277',
  port: 3306,
  database: 'study',
});
connection.connect();

app.use(express.static('public')); // 정적 파일 제공
app.use(express.json()); // body 설정

// 라우트, 라우터
app.get('/todo', (req, res) => {
  // http://localhost:3000/ == /

  connection.query('SELECT * FROM todo;', function (err, rows, fields) {
    // err = null;
    if (err != null) throw err;
    //console.log('The solution is: ', rows[0]);
    res.send(rows);
  });
});

// REST API : api 만드는 규칙이 정해져있음
// 추가, 수정, 가져오기, 삭제 -> 행동은 HTTP 메서드로 구분 (get, post: 추가, patch: 수정, delete)
// api 이름은 명사로만 작성
app.post('/todo', (req, res) => {
  // http://localhost:3000/ == /
  // const text = 'elly\'s'  // elly's
  // const test2 = `elly\`s`
  const title = req.body.title
  connection.query(
    "INSERT INTO `study`.`todo` (`title`) VALUES (?);", [title],
    function (err, rows, fields) {
      // err = null;
      if (err != null) throw err;
      //console.log('The solution is: ', rows[0]);
      res.send(rows);
    },
  );
});
app.patch('/todo', (req, res) => {});
// app.get('/todo', (req, res) => {
//     // res.send("todo list")
//     console.log(__dirname)
//     res.sendFile(__dirname +'/public/index.html')
// })

// app.get('/test', (req, res) => {
//     res.sendFile(`${__dirname}/public/test.html`)
// })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// 숙제: 프리티어 설정, eslint 설치, 리눅스 서버, putty 푸티, xShell
