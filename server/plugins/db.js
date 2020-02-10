module.exports = app => {
  const mongoose = require("mongoose")
  mongoose.set('useCreateIndex', true)
  mongoose.connect('mongodb://127.0.0.1:27017/we-help', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  // require('require-all')(__dirname + '/../models')
}