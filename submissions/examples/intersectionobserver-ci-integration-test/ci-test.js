const container=document.getElementById("container");

for(let i=0;i<300;i++){
const card=document.createElement("div");
card.className="card";
container.appendChild(card);
}

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("visible");
}
});
});

cards.forEach(card=>observer.observe(card));

document.getElementById("runTest").onclick=async()=>{

const start=performance.now();

let frames=0;
let running=true;

function tick(){
frames++;
if(running){
requestAnimationFrame(tick);
}
}

requestAnimationFrame(tick);

window.scrollTo({
top:document.body.scrollHeight,
behavior:"smooth"
});

await new Promise(r=>setTimeout(r,3000));

running=false;

const end=performance.now();

const duration=end-start;

const fps=Math.round(frames/(duration/1000));

const bundle=new Blob([
document.documentElement.outerHTML
]).size;

const pass=
fps>=55 &&
duration<=3500 &&
bundle<=25000;

document.getElementById("results").innerHTML=`

<h2>CI Performance Report</h2>

<p>Observed Elements : ${cards.length}</p>

<p>FPS : ${fps}</p>

<p>Execution Time : ${duration.toFixed(2)} ms</p>

<p>Bundle Size : ${bundle} bytes</p>

<p>Status : ${pass ? "✅ PASS" : "❌ FAIL"}</p>

`;

console.table({
FPS:fps,
ExecutionMs:duration.toFixed(2),
BundleBytes:bundle,
Status:pass?"PASS":"FAIL"
});

};