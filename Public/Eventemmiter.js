var events=require('events');
 var util=require('util');

 var Person=function(name){
     this.name=name;
 };

 util.inherits(Person,events.EventEmitter);

 var james=new Person('James');
  var mary=new Person('mary');
  var People=['james','mary'];

  People.forEach(function(person){
      person.on('speak',function(msg){
          console.log(person.name+'said'+msg);
      });
  });

  james.emit('speak','hi dude');
