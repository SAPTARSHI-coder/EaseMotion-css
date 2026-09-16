const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

const scroll=window.pageYOffset;

cards.forEach(card=>{

const speed=card.dataset.speed;

card.style.transform=
`translateY(${scroll*speed}px)`;

});

});

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/20;
const rotateX=(rect.height/2-y)/20;

card.style.transform=
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(${window.pageYOffset*card.dataset.speed}px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
`translateY(${window.pageYOffset*card.dataset.speed}px)`;

});

});