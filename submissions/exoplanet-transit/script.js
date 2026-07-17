const planet=document.getElementById("planet");
const speed=document.getElementById("speed");
const size=document.getElementById("size");
const pause=document.getElementById("pauseBtn");
const reset=document.getElementById("resetBtn");
const bar=document.getElementById("brightnessFill");
const curve=document.getElementById("curvePath");
const stars=document.getElementById("stars");

for(let i=0;i<40;i++){
    const s=document.createElement("div");
    s.className="star-dot";
    s.style.left=Math.random()*100+"vw";
    s.style.top=Math.random()*100+"vh";
    s.style.animationDelay=Math.random()*2+"s";
    stars.appendChild(s);
}

let angle=0;
let running=true;

function animate(){
    if(running){
        angle+=0.01*speed.value;

        const r=170;
        const x=250+r*Math.cos(angle);
        const y=250+r*Math.sin(angle);

        planet.style.left=x-15+"px";
        planet.style.top=y-15+"px";

        if(Math.cos(angle)<-0.95){
            bar.style.width="88%";
            curve.setAttribute("d","M0 30 L180 30 Q250 55 320 30 L500 30");
        }else{
            bar.style.width="100%";
            curve.setAttribute("d","M0 30 L500 30");
        }
    }

    requestAnimationFrame(animate);
}

size.oninput=()=>planet.style.width=planet.style.height=size.value+"px";

pause.onclick=()=>{
    running=!running;
    pause.textContent=running?"Pause":"Resume";
};

reset.onclick=()=>{
    angle=0;
    running=true;
    pause.textContent="Pause";
    bar.style.width="100%";
    curve.setAttribute("d","M0 30 L500 30");
};

animate();