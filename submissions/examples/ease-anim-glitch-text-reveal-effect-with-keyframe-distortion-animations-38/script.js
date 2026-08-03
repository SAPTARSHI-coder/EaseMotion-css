const glitch=document.querySelector(".glitch");

clearInterval(window.__interval); window.__interval = setInterval(()=>{

glitch.classList.add("active");

setTimeout(()=>{

glitch.classList.remove("active");

},250);

},3000);