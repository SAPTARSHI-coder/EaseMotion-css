const glitch=document.querySelector(".glitch");

setInterval(()=>{

glitch.classList.add("active");

setTimeout(()=>{

glitch.classList.remove("active");

},250);

},3000);