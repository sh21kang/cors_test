var fs = require('fs');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    console.log('addr: '+add);
  })

// your express configuration here
app.get('/',(req,res)=>{
    
    res.send({
        hello:"hi"
    })
})

var httpsServer = https.createServer(credentials, app);

httpsServer.listen(3000,()=>{
    console.log('listen')
});
