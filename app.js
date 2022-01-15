// console.log('hello')
const express = require('express') // 모듈 , 패키지 . npm  
const app = express()
const port = 3000
app.use(express.static('public')); // 정적 파일 제공 

// 라우트, 라우터  
// app.get('/', (req, res) => {
//     // http://localhost:3000/ == / 
//   res.send('Hello World!')
// })

// app.get('/todo', (req, res) => {
//     // res.send("todo list")
//     console.log(__dirname)
//     res.sendFile(__dirname +'/public/index.html') 
// })

// app.get('/test', (req, res) => {
//     res.sendFile(`${__dirname}/public/test.html`)
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
