var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var app = express()

var homeDir = path.join(__dirname, '../')

app.use(favicon('favicon.ico'))
app.use(express.static(homeDir));

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: homeDir })
})

// process.env.PORT for Production deployment
app.listen(process.env.PORT || 3000)