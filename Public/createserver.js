var http=require('http');

var server=http.createServer(function(req,res){
    console.log("port url"+req.url);
    res.writeHead(200,{'Content-Type':'text/plan'});
    res.end('hello nodejs');
});


server.listen(3000,'127.0.0.1');
console.log("hello guys port is ready");