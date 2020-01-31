module.exports = {
  recordtime: (req, res, next) => {
    console.time('time')
    console.log(new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }) + ' | ' + req.method + ' from ' + req.url)
    console.timeEnd('time')
    return next()
  }
}