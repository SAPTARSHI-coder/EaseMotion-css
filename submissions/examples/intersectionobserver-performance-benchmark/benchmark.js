const container=document.getElementById("container");

for(let i=0;i<300;i++){

const card=document.createElement("div");
card.className="card";
container.appendChild(card);

}

const cards=document.querySelectorAll(".card");

const report=document.getElementById("report");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

cards.forEach(card=>observer.observe(card));

document.getElementById("runBtn").addEventListener("click",runBenchmark);

async function runBenchmark(){

const start=performance.now();

let frames=0;

let running=true;

function frame(){

frames++;

if(running){

requestAnimationFrame(frame);

}

}

requestAnimationFrame(frame);

window.scrollTo({
top:document.body.scrollHeight,
behavior:"smooth"
});

await new Promise(resolve=>setTimeout(resolve,3000));

running=false;

const end=performance.now();

const duration=end-start;

const fps=Math.round(frames/(duration/1000));

const bundleSize=new Blob([document.documentElement.outerHTML]).size;

report.innerHTML=`

<h2>Benchmark Report</h2>

<p><strong>Observed Elements:</strong> ${cards.length}</p>

<p><strong>Execution Time:</strong> ${duration.toFixed(2)} ms</p>

<p><strong>Approx FPS:</strong> ${fps}</p>

<p><strong>Approx Bundle Size:</strong> ${bundleSize} bytes</p>

<p><strong>Status:</strong>
${fps>=55 && duration<=3500 ? "✅ PASS":"❌ FAIL"}
</p>

`;

}