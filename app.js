// console.log('hello')
const express = require('express') // 모듈 , 패키지 . npm  
const app = express()
const port = 3000

// 라우트  
app.get('/', (req, res) => {
    // http://localhost:3000/ == / 
  res.send('Hello World!')
})

app.get('/todo', (req, res) => {
    // res.send("todo list")
    
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
