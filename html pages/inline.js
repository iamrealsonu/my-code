var i=76587441;
switch(i%2){
    case 0:
        console.log('even');
        break;
    case 1:
        console.log('odd');
        break;
    
}
var x='password05';
if(x=='password05'){
    console.log('correct password');
}else{
    console.log('wrong password');
}
var a = 1, b = 1, f;
for(var i = 3; i <= 15; i++) {
    f = a + b;
    a = b;
    b = f;
}
console.log(f);

var i=0;
while(i<3){
    console.log("While loop");
    i++;
}
var i=0;
do{
    console.log("Do loop");
    i++
}while(i<3);

var i=0;
for(i;i<3;i++){
    console.log("For loop");
}

try{
    console.log(y);
}catch(error){
    console.log(error.message);
}

try{
    var q='hello';
    if(q=='hello'){
        console.log("If block");
    }else{
        console.log("wrong statement");
    }
}catch(error){
    console.log(error.message);
}
var h='you';
var example=h=='you'?"you are right":"you are wrong"
console.log(example);
