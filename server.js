var https = require('https');
var fs = require('fs');
var express = require('express');
var app = express();
var credentials = {
  key: fs.readFileSync('./privatekey.pem'),
  cert: fs.readFileSync('./server.crt')
};
app.use('/', express.static(__dirname + '/'));
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(443);
