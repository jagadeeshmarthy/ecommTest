const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const app = express()

const PORT = process.env.PORT || 9090



// Moltin.Authenticate().then((response) => {
//   console.log('authenticated', response);
// });


app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', require('./routes/routes'))

const server = app.listen(PORT, (request, response) => {
  const host = server.address().host;
  const port = server.address().port
  console.log(`app is listening at ${port}`)
})

module.exports = app
