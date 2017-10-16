var express=require('express');

var app=express();
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index');
});
app.get('/contact',function(req,res){
    res.render('contact',{qs:req.query});
});
app.get('/profile/:name',function(req,res){
    var data={age:29,name:'mahesh',hobbies:['chess','cricket','football']};
    res.render('profile',{person:req.params.name,data:data});
});

app.listen(3000);