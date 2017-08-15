const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const app = express()

const PORT = process.env.PORT || 9090
const config = require('./config')

config.Moltin.Authenticate().then((response) => {
  console.log('authenticated', response);
});

require('./connection')
require('./utils/passport');

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
 app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
     res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
     next();
 });
app.use('/api', require('./routes/routes'))

app.use(express.static('public'))

app.route('/*')
    .get((request, response) => {
        response.sendFile(__dirname + '/public/index.html')
    });

const server = app.listen(PORT, (request, response) => {
    const host = server.address().host;
    const port = server.address().port
    console.log(`app is listening at ${port}`)
})

module.exports = app