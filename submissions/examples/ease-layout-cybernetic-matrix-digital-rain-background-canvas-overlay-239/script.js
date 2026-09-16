const canvas=document.getElementById("matrixCanvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const chars="01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize=16;
const columns=Math.floor(canvas.width/fontSize);
const drops=Array(columns).fill(1);

function draw(){

ctx.fillStyle="rgba(0,0,0,0.08)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00ff66";
ctx.font=fontSize+"px monospace";

drops.forEach((y,index)=>{

const text=chars[Math.floor(Math.random()*chars.length)];
const x=index*fontSize;

ctx.fillText(text,x,y*fontSize);

if(y*fontSize>canvas.height&&Math.random()>0.975){
drops[index]=0;
}

drops[index]++;

});

}

setInterval(draw,40);

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});