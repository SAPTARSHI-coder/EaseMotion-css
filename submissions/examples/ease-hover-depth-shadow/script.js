const cards = document.querySelectorAll(".depth-card");

cards.forEach((card) => {

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const centerX = rect.width / 2;

const centerY = rect.height / 2;

const offsetX = ((x-centerX)/centerX)*18;

const offsetY = ((y-centerY)/centerY)*18;

card.style.boxShadow=
`${-offsetX}px ${-offsetY}px var(--ease-shadow-intensity) rgba(0,0,0,.28)`;

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow=
"0 15px 30px rgba(0,0,0,.12)";

});

});