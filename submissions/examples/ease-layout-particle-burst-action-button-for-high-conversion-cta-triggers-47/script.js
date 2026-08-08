const btn=document.getElementById("burstBtn");
const particles=document.querySelectorAll(".particles i");

particles.forEach(p=>{

p.style.setProperty("--x",(Math.random()*2-1).toFixed(2));
p.style.setProperty("--y",(Math.random()*2-1).toFixed(2));

});

btn.addEventListener("click",()=>{

btn.classList.remove("active");

void btn.offsetWidth;

btn.classList.add("active");

});