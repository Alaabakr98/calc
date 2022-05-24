var age=document.getElementById("age");
var type=document.getElementById("type");
var aster=document.getElementById("asterisk");
var yearInput=document.getElementById("year")

function calcAge(){
   var year =yearInput.value;
   var date= new Date;
var currentAge=date.getFullYear()-year;
age.innerHTML="your age is <span>"+currentAge +"</span>";
if(currentAge<18){
    type.innerHTML="You Are Kid"
}
else(type.innerHTML="You Are Young")
  var cartonaa=""
for(var i=0 ; i<currentAge ;i++){
cartonaa+="*"
}
aster.innerHTML=cartonaa;
}