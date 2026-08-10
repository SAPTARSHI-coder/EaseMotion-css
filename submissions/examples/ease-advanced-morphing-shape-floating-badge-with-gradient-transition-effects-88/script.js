const badge=document.getElementById("badge");

badge.addEventListener("mouseenter",()=>{

badge.style.animationDuration="2s,3s,2s";

});

badge.addEventListener("mouseleave",()=>{

badge.style.animationDuration="6s,5s,4s";

});

badge.addEventListener("click",()=>{

badge.classList.add("pulse");

setTimeout(()=>{

badge.classList.remove("pulse");

},600);

});