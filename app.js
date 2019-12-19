const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


// 列出全部 Todo
app.get('/', (req, res) => {
  console.time('time')
  console.log(new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }) + ' | ' + req.method + ' from ' + req.originalUrl)
  res.render('index')
  console.timeEnd('time')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  console.time('time')
  console.log(new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }) + ' | ' + req.method + ' from ' + req.originalUrl)
  res.send('新增 Todo 頁面')
  console.timeEnd('time')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  console.time('time')
  console.log(new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }) + ' | ' + req.method + ' from ' + req.originalUrl)
  res.send('顯示一筆 Todo')
  console.timeEnd('time')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  console.time('time')
  console.log(new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }) + ' | ' + req.method + ' from ' + req.originalUrl)
  res.send('新增一筆  Todo')
  console.timeEnd('time')
})

app.delete('/:id/delete', (req, res) => {
  console.time('time')
  console.log(new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }) + ' | ' + req.method + ' from ' + req.originalUrl)
  res.send('刪除 Todo')
  console.timeEnd('time')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)

})