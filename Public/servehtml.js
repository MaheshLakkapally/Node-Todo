var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
    console.log('request made'+req.url);
    res.writeHead(200,{'Content-Type':'application/json'});
    var readStream=fs.createReadStream(__dirname,'./index.html','utf8');
    readStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('port strated');