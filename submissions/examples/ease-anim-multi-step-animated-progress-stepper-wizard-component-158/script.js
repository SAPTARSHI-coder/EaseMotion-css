const steps=document.querySelectorAll(".step");
const progress=document.getElementById("progressFill");
const next=document.getElementById("nextBtn");
const prev=document.getElementById("prevBtn");

let current=0;

function updateStepper(){

steps.forEach((step,index)=>{

step.classList.remove("active","completed");

if(index<current){
step.classList.add("completed");
}

if(index===current){
step.classList.add("active");
}

});

progress.style.width=((current)/(steps.length-1))*100+"%";

}

next.addEventListener("click",()=>{

if(current<steps.length-1){
current++;
updateStepper();
}

});

prev.addEventListener("click",()=>{

if(current>0){
current--;
updateStepper();
}

});

updateStepper();