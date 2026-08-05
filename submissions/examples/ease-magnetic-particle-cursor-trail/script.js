const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursor-ring");

if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {

    cursor.style.display = "none";
    ring.style.display = "none";
    document.body.style.cursor = "auto";

} else {

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    document.addEventListener("mousemove", e => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";

        createParticle(mouseX, mouseY);

    });

    function animate() {

        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;

        ring.style.left = ringX + "px";
        ring.style.top = ringY + "px";

        requestAnimationFrame(animate);
    }

    animate();

    function createParticle(x, y) {

        const p = document.createElement("div");
        p.className = "particle";

        document.body.appendChild(p);

        const size = Math.random() * 6 + 4;

        p.style.width = size + "px";
        p.style.height = size + "px";

        p.style.left = x + "px";
        p.style.top = y + "px";

        let dx = (Math.random() - 0.5) * 60;
        let dy = (Math.random() - 0.5) * 60;

        p.animate(
            [
                {
                    transform: "translate(0,0) scale(1)",
                    opacity: 1
                },
                {
                    transform: `translate(${dx}px,${dy}px) scale(0)`,
                    opacity: 0
                }
            ],
            {
                duration: 500,
                easing: "ease-out"
            }
        );

        setTimeout(() => p.remove(), 500);
    }

    document.querySelectorAll("button,a").forEach(el => {

        el.addEventListener("mouseenter", () => {
            ring.classList.add("hover");
        });

        el.addEventListener("mouseleave", () => {
            ring.classList.remove("hover");
        });

    });

    document.addEventListener("mousedown", () => {

        cursor.animate(
            [
                { transform: "translate(-50%,-50%) scale(1)" },
                { transform: "translate(-50%,-50%) scale(.55)" },
                { transform: "translate(-50%,-50%) scale(1)" }
            ],
            {
                duration: 220
            }
        );

    });

}