const express = require("express")

const app = express()

app.set('secret', 'sdDjkSXf;89e')

app.use(require('cors')())
app.use(express.json())

app.use('/admin', express.static(__dirname + '/admin'))

require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(3000, () => {
  console.log('http://localhost:3000');
});