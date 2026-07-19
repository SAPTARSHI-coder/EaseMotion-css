const liquid = document.getElementById("liquid");
const bubbles = document.getElementById("bubbles");
const steam = document.getElementById("steam");
const sparkles = document.getElementById("sparkles");
const cork = document.getElementById("cork");

const brewBtn = document.getElementById("brewBtn");
const colorBtn = document.getElementById("colorBtn");
const resetBtn = document.getElementById("resetBtn");

const speedSlider = document.getElementById("speed");
const speedValue = document.getElementById("speedValue");
const colorName = document.getElementById("colorName");

const colors = [
{ name:"Purple", color:"#9333ea" },
{ name:"Blue", color:"#2563eb" },
{ name:"Green", color:"#16a34a" },
{ name:"Red", color:"#dc2626" },
{ name:"Gold", color:"#f59e0b" },
{ name:"Pink", color:"#ec4899" },
{ name:"Cyan", color:"#06b6d4" },
{ name:"Orange", color:"#f97316" }
];

let current = 0;
let speed = 1;

/* ---------- BUBBLES ---------- */

function createBubble(){

const bubble = document.createElement("div");

bubble.className = "bubble";

const size = Math.random()*14+6;

bubble.style.width=size+"px";
bubble.style.height=size+"px";

bubble.style.left=Math.random()*150+"px";

bubble.style.animationDuration=(2+Math.random()*3)/speed+"s";

bubbles.appendChild(bubble);

setTimeout(()=>{
bubble.remove();
},5000);

}

setInterval(createBubble,220);

/* ---------- STEAM ---------- */

for(let i=0;i<8;i++){

const s=document.createElement("span");

s.style.left=(10+i*12)+"px";

s.style.animationDelay=(i*.3)+"s";

s.style.animationDuration=(2+Math.random()*2)/speed+"s";

steam.appendChild(s);

}

/* ---------- SPARKLES ---------- */

function createSparkles(){

sparkles.innerHTML="";

for(let i=0;i<10;i++){

const star=document.createElement("div");

star.className="sparkle";

star.style.left=Math.random()*260+"px";
star.style.top=Math.random()*420+"px";

star.style.animationDelay=(Math.random()*2)+"s";

sparkles.appendChild(star);

}

}

createSparkles();

/* ---------- CHANGE COLOR ---------- */

function updateColor(){

liquid.style.background=colors[current].color;

document.querySelector(".glow").style.background=colors[current].color;

colorName.textContent=colors[current].name;

colorName.style.color=colors[current].color;

createSparkles();

}

colorBtn.onclick=()=>{

current++;

if(current>=colors.length)
current=0;

updateColor();

};

/* ---------- BREW ---------- */

brewBtn.onclick=()=>{

cork.style.transform="translateX(-50%) translateY(-35px) rotate(-12deg)";

liquid.style.height="82%";

setTimeout(()=>{

liquid.style.height="72%";

cork.style.transform="translateX(-50%)";

},900);

for(let i=0;i<15;i++){

setTimeout(createBubble,i*80);

}

createSparkles();

};

/* ---------- SPEED ---------- */

speedSlider.oninput=()=>{

speed=parseFloat(speedSlider.value);

speedValue.textContent=speed+"x";

document.querySelectorAll(".bubble").forEach(b=>{

b.style.animationDuration=(3/speed)+"s";

});

};

/* ---------- RESET ---------- */

resetBtn.onclick=()=>{

current=0;

updateColor();

speed=1;

speedSlider.value=1;

speedValue.textContent="1x";

liquid.style.height="72%";

cork.style.transform="translateX(-50%)";

};

/* ---------- INITIAL ---------- */

updateColor();
