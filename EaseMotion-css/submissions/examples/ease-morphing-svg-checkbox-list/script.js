const checkboxes = document.querySelectorAll(".task input");

const progressBar = document.getElementById("progressBar");

const progressText = document.getElementById("progressText");

const message = document.getElementById("message");

function updateProgress(){

const total = checkboxes.length;

const completed = [...checkboxes].filter(box=>box.checked).length;

const percentage = completed/total*100;

progressBar.style.width = percentage+"%";

progressText.textContent=`${completed} of ${total} Tasks Completed`;

if(completed===total){

message.textContent="🎉 All Tasks Completed!";

}else{

message.textContent="";

}

}

checkboxes.forEach(box=>{

box.addEventListener("change",updateProgress);

});

updateProgress();