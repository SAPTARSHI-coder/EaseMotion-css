const badge=document.querySelector(".badge");

badge.addEventListener("mousemove",(e)=>{

const rect=badge.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/20;
const rotateX=(rect.height/2-y)/20;

badge.style.transform=
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

badge.addEventListener("mouseleave",()=>{

badge.style.transform="rotate(-7deg)";

});