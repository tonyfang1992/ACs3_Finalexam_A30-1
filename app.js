const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const { recordtime } = require('./function/record.js')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(recordtime)
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')



// 列出全部 Todo
app.get('/', (req, res) => {
  res.render('index')
})


app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})


app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})


app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})