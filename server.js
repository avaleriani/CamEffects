var https = require('https');
var fs = require('fs');
var express = require('express');
var app = express();
var options = {
  key: fs.readFileSync('./privatekey.pem'),
  cert: fs.readFileSync('./server.crt')
};
app.use('/', express.static(__dirname + '/'));
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
httpServer.listen(8080);
httpsServer.listen(8443);
