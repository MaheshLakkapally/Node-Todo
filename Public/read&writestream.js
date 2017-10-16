var http=require('http');
var fs=require('fs');

var readStream=fs.createReadStream(__dirname+'/read.txt','utf8');
var writeStrream=fs.createWriteStream(__dirname+'/write.txt');
readStream.on('data',function(chunk){
    console.log('chucnk recieved');
    writeStrream.write(chunk);
});