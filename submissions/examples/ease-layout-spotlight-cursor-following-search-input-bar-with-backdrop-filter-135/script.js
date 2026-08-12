const searchBox = document.getElementById("searchBox");
const spotlight = document.querySelector(".spotlight");

searchBox.addEventListener("mousemove",(event)=>{

const rect = searchBox.getBoundingClientRect();

const x = event.clientX - rect.left;
const y = event.clientY - rect.top;

spotlight.style.left = `${x}px`;
spotlight.style.top = `${y}px`;

});


searchBox.addEventListener("mouseleave",()=>{

spotlight.style.left = "50%";
spotlight.style.top = "50%";

});