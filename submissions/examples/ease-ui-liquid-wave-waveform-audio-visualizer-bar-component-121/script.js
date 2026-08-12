const visualizer=document.getElementById("visualizer");
const toggleBtn=document.getElementById("toggleBtn");

let playing=true;

toggleBtn.addEventListener("click",()=>{

playing=!playing;

visualizer.classList.toggle("paused");

toggleBtn.textContent=playing
? "Pause Animation"
: "Play Animation";

});