const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
});

function animateCursor(){

    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();

document.querySelectorAll("button,.card").forEach(item=>{

    item.addEventListener("mouseenter",()=>{
        ring.classList.add("active");
        dot.classList.add("active");
    });

    item.addEventListener("mouseleave",()=>{
        ring.classList.remove("active");
        dot.classList.remove("active");
    });

});