const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
});

function animateCursor() {

    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();

/* Morph on Hover */

const interactiveElements = document.querySelectorAll(
    "button, a, .card"
);

interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {
        ring.classList.add("active");
        dot.classList.add("active");
    });

    element.addEventListener("mouseleave", () => {
        ring.classList.remove("active");
        dot.classList.remove("active");
    });

});

/* Ripple Trail */

document.addEventListener("click", (e) => {

    const ripple = document.createElement("span");

    ripple.className = "cursor-ripple";

    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";

    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 700);

});