const progressCircle=document.getElementById("progressCircle");
const counter=document.getElementById("counter");
const startBtn=document.getElementById("startBtn");

const radius=90;
const circumference=2*Math.PI*radius;

progressCircle.style.strokeDasharray=circumference;
progressCircle.style.strokeDashoffset=circumference;

startBtn.addEventListener("click",()=>{

let value=0;
const target=85;

const timer=setInterval(()=>{

value++;

counter.textContent=value+"%";

const offset=circumference-(value/100)*circumference;
progressCircle.style.strokeDashoffset=offset;

if(value>=target){
clearInterval(timer);
}

},20);

});