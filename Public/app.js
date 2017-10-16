var counter=function(arr){
    return 'there are'+arr.length+'elements in the array';
};

var adder=function(a,b){

    return 'the sum of 2 numbers $(a+b)' ;
};
var pi=3.142;

module.exports={
    counter:counter,
    adder:adder,
    pi:pi
};