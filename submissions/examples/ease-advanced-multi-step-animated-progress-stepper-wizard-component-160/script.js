const steps=document.querySelectorAll(".step");
const progress=document.getElementById("progress");
const next=document.getElementById("next");
const prev=document.getElementById("prev");
const title=document.getElementById("title");
const description=document.getElementById("description");

const data=[
["Create Your Account","Start by creating your account to continue with the onboarding process."],
["Complete Profile","Fill in your profile information for a personalized experience."],
["Payment Details","Securely add your preferred payment information."],
["Setup Complete","Everything is ready. Welcome aboard!"]
];

let current=0;

function update(){

steps.forEach((step,index)=>{

step.classList.toggle("active",index===current);
step.classList.toggle("completed",index<current);

});

progress.style.width=((current+1)/steps.length)*100+"%";

title.textContent=data[current][0];
description.textContent=data[current][1];

prev.disabled=current===0;

next.textContent=current===steps.length-1?"Finish":"Next";

}

next.addEventListener("click",()=>{

if(current<steps.length-1){
current++;
update();
}

});

prev.addEventListener("click",()=>{

if(current>0){
current--;
update();
}

});

update();