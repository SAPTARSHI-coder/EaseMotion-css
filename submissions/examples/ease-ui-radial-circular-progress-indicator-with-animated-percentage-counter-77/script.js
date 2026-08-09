const progress=75;

const circle=document.querySelector(".bar");

const count=document.getElementById("count");

const radius=90;

const circumference=2*Math.PI*radius;

circle.style.strokeDasharray=circumference;

circle.style.strokeDashoffset=circumference;

let current=0;

const timer=setInterval(()=>{

current++;

count.textContent=current+"%";

circle.style.strokeDashoffset=
circumference-(current/100)*circumference;

if(current>=progress){

clearInterval(timer);

}

},20);