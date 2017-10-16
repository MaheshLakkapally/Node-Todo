var express=require('express');

var app=express();

app.get('/',function(req,res){
    res.send('Hello homepage');
});
app.get('/index.html',function(req,res){
    res.send('Hello indexpage');
});

app.listen(3000);