const report=document.getElementById("report");

document
.getElementById("runTest")
.addEventListener("click",runBenchmark);

async function runBenchmark(){

let frames=0;

const start=performance.now();

let running=true;

function loop(){

frames++;

if(running){
requestAnimationFrame(loop);
}

}

requestAnimationFrame(loop);

await new Promise(resolve=>setTimeout(resolve,5000));

running=false;

const end=performance.now();

const duration=end-start;

const fps=frames/(duration/1000);

const target60=fps>=58;
const target120=fps>=115;

const bundleSize=document.documentElement.outerHTML.length;

report.innerHTML=`

<h2>Performance Report</h2>

<p><strong>Average FPS:</strong> ${fps.toFixed(2)}</p>

<p><strong>Execution Time:</strong> ${duration.toFixed(2)} ms</p>

<p><strong>Bundle Size:</strong> ${bundleSize} bytes</p>

<hr>

<p>60 FPS Target:
${target60?"✅ PASS":"❌ FAIL"}
</p>

<p>120 FPS Target:
${target120?"✅ PASS":"⚠ Not achieved"}
</p>

<p><strong>Overall:</strong>
${target60?"Smooth animation":"Needs optimization"}
</p>

`;

}